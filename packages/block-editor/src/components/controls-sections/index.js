/**
 * WordPress dependencies
 */
import {
  Drawer,
  Drawers,
  DrawerList,
  DrawerPanel,
  DrawerListBefore,
  DrawerListAfter
} from "../index";

import { __ } from '@wordpress/i18n';
import { useBlockEditContext } from '@wordpress/block-editor';

import {
  Children,
  useCallback, useContext,
  useMemo,
} from '@wordpress/element';

/**
 * Internal dependencies
 */
import { groupBy, orderBy } from 'lodash';
import { getSectionsFromFills } from './utils';
import { ControlsSectionsSlot, ControlsSectionsFill } from "./controls-sections-slot-fill";
import { DrawerContentSlot, DrawerContentFill } from "./drawer-content-slot-fill";

import Cube from './cube';
import { ActiveSectionTabs } from "./tabs";
import ControlsVisibilityContext from "../../filters/with-controls-visibility/context";

const ControlsSectionsComponent = ( props ) => {

	const { sections } = props;

	const advancedButton = useMemo( () => document.querySelector( '.block-editor-block-inspector__advanced' ), [] );
	const advancedWrapper = useMemo( () => !! advancedButton && advancedButton.parentNode );
  const visibilityContext = useContext( ControlsVisibilityContext );

	if ( !! advancedWrapper ) {
		advancedWrapper.style.setProperty( 'transition', 'opacity .3s ease-out' );
	}

	const onOpen = useCallback( () => {
		if ( !! advancedWrapper?.style ) {
			advancedWrapper.style.setProperty( 'opacity', 1, );
			requestAnimationFrame( () => {
				advancedWrapper.style.setProperty( 'opacity', 0 );
			} );
		}
	}, [ advancedWrapper ] );

	const onClose = useCallback( () => {
		if ( !! advancedWrapper?.style ) {
			advancedWrapper.addEventListener( 'transitionend', () => {
				advancedWrapper.style.removeProperty( 'height' );
			}, { once: true } );
			advancedWrapper.style.setProperty( 'opacity', 1 );
		}
	}, [ advancedWrapper ] );

	const groups = groupBy( sections, section => {
		return !! section.props.group ? section.props.group : '';
	} );

  const getCompiledTabs = useCallback( section => {
    const { children } = section.props;

    const tabs = Children.toArray( children ).filter( child => {
      const id = child?.props?.id;
      let show = true;

      if ( id && typeof visibilityContext[ id ] !== "undefined" ) {
        show = visibilityContext[ id ];
      }

      return child.type === ControlsTab && show;
    } );

    const orderedTabs = orderBy( tabs, tab => tab.props.priority || 0, [ 'desc' ] );
    const groupedTabs = groupBy( orderedTabs, tab => {
      return tab.props.label;
    } );

    return Object.keys( groupedTabs ).map( key => {
      const group = groupedTabs[ key ];

      return {
        props: {
          label: key,
          children: group.reduce( ( accumulator, tab ) => {
            return accumulator.concat( Children.toArray( tab.props.children ) );
          }, [] )
        }
      };
    } );
  }, [] );

	return (
		<div className="novablocks-sections">
			<Drawers onOpen={ onOpen } onClose={ onClose }>
				<DrawerListBefore>
					<div className="novablocks-sections__header">
						<div className="novablocks-sections__title">{ __( 'Design Customization', '__plugin_txtd' ) }</div>
						<Cube />
					</div>
				</DrawerListBefore>
				{
					Object.keys( groups ).sort().map( key => {
						const sections = groups[ key ];

						return (
							<DrawerList title={ key } key={ 'drawer_' + key }>
								{ sections.map( ( section, index ) => {
									const { id, label, order } = section.props;

									return (
										<Drawer
											key={ 'drawer_' + key + '_section_' + id }
                      id={ id }
											title={ label }
											order={ order }
										/>
									);
								} ) }
							</DrawerList>
						)
					} )
				}
				{
					Object.keys( groups ).sort().map( key => {
						const sections = groups[ key ];

						return sections.map( ( section, index ) => {
              const tabs = getCompiledTabs( section );

							return (
								<DrawerPanel key={ 'drawer_panel_' + key + '_' + index } id={ section.props.id }>
									<ActiveSectionTabs title={ section.props.label } tabs={ tabs } />
								</DrawerPanel>
							)
						} );
					} )
				}
				<DrawerListAfter>
					<DrawerContentSlot />
				</DrawerListAfter>
			</Drawers>
		</div>
	);
};

const ControlsSections = ( props ) => {

	return (
		<ControlsSectionsSlot>
			{ ( fills ) => {
				const sections = getSectionsFromFills( fills );

				if ( ! sections.length ) {
					return null;
				}

				return <ControlsSectionsComponent sections={ sections } />
			} }
		</ControlsSectionsSlot>
	);
};

const ControlsTab = ( props ) => {
	return (
		<div label={ props.label }>{ props.children }</div>
	)
};

const ControlsSection = ( props ) => {

	const { isSelected } = useBlockEditContext();

	return (
		<ControlsSectionsFill>
			{ isSelected && <div { ...props } /> }
		</ControlsSectionsFill>
	)
};

const ControlsDrawerContent = ( props ) => {

	const { isSelected } = useBlockEditContext();

	return (
		<DrawerContentFill>
			{ isSelected && <div { ...props } /> }
		</DrawerContentFill>
	)
};

export {
	ControlsTab,
	ControlsSections,
	ControlsSection,
	ControlsDrawerContent,
};
