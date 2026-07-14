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
import { InspectorControls, useBlockEditContext } from '@wordpress/block-editor';

import {
  Children,
  Fragment,
  useCallback, useContext,
} from '@wordpress/element';

/**
 * Internal dependencies
 */
import { groupBy, orderBy } from 'lodash';
import { getSectionsFromFills, getControlsSectionsScopeKey, resolveControlsSectionPlacement } from './utils';
import { ControlsSectionsSlot, ControlsSectionsFill } from "./controls-sections-slot-fill";
import { DrawerContentSlot, DrawerContentFill } from "./drawer-content-slot-fill";

import Cube from './cube';
import { ActiveSectionTabs } from "./tabs";
import ControlsVisibilityContext from "../../filters/with-controls-visibility/context";
import ControlsSectionsScopeContext from "./scope-context";

const ControlsSectionsComponent = ( props ) => {

	const { sections, placement, blockName } = props;

  const visibilityContext = useContext( ControlsVisibilityContext );
  const scopeKey = getControlsSectionsScopeKey( { placement, blockName } );
  const scopeContextValue = { placement, blockName };

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
		<ControlsSectionsScopeContext.Provider value={ scopeContextValue }>
			<div className="novablocks-sections">
				<Drawers scopeKey={ scopeKey }>
					{ placement === 'styles' && (
						<DrawerListBefore>
							<div className="novablocks-sections__header">
								<div className="novablocks-sections__title">{ __( 'Design Customization', '__plugin_txtd' ) }</div>
								<Cube />
							</div>
						</DrawerListBefore>
					) }
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
												<ActiveSectionTabs id={ section.props.id } title={ section.props.label } tabs={ tabs } scopeKey={ scopeKey } />
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
		</ControlsSectionsScopeContext.Provider>
	);
};

const ControlsSections = ( props ) => {

	const { name: blockName } = props;

	return (
		<ControlsSectionsSlot>
			{ ( fills ) => {
				const sections = getSectionsFromFills( fills );

				if ( ! sections.length ) {
					return null;
				}

				const settingsSections = sections.filter( section => resolveControlsSectionPlacement( section.props ) === 'settings' );
				const stylesSections = sections.filter( section => resolveControlsSectionPlacement( section.props ) === 'styles' );

				return (
					<Fragment>
						{ !! settingsSections.length && (
							<InspectorControls>
								<ControlsSectionsComponent sections={ settingsSections } placement="settings" blockName={ blockName } />
							</InspectorControls>
						) }
						{ !! stylesSections.length && (
							<InspectorControls group="styles">
								<ControlsSectionsComponent sections={ stylesSections } placement="styles" blockName={ blockName } />
							</InspectorControls>
						) }
					</Fragment>
				);
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
	const placement = resolveControlsSectionPlacement( props );

	return (
		<ControlsSectionsFill>
			{ isSelected && <div { ...props } placement={ placement } /> }
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
