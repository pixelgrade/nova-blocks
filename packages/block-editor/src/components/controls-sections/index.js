// internal dependencies
import { groupBy, orderBy } from 'lodash';
import { getSectionsFromFills } from './utils';
import { ControlsSectionsSlot, ControlsSectionsFill } from "./controls-sections-slot-fill";
import { DrawerContentSlot, DrawerContentFill } from "./drawer-content-slot-fill";

import Cube from './cube';
import { ActiveSectionTabs } from "./tabs";

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
 } from '@wordpress/element';

const ControlsSectionsComponent = ( props ) => {

	const { sections } = props;

	const advancedButton = document.querySelector( '.block-editor-block-inspector__advanced' );
	const advancedWrapper = !! advancedButton && advancedButton.parentNode;

	if ( !! advancedWrapper ) {
		advancedWrapper.style.setProperty( 'transition', 'height .3s ease-out' );
		advancedWrapper.style.setProperty( 'overflow', 'hidden' );
	}

	const onOpen = () => {
		if ( !! advancedWrapper?.style ) {
			advancedWrapper.style.setProperty( 'height', ` ${ advancedButton.offsetHeight }px`, );
			requestAnimationFrame( () => {
				advancedWrapper.style.setProperty( 'height', 0 );
			} );
		}
	};

	const onClose = () => {
		if ( !! advancedWrapper?.style ) {
			advancedWrapper.addEventListener( 'transitionend', () => {
				advancedWrapper.style.removeProperty( 'height' );
			}, { once: true } );
			advancedWrapper.style.setProperty( 'height', ` ${ advancedButton.offsetHeight }px` );
		}
	};

	const groups = groupBy( sections, section => {
		return !! section.props.group ? section.props.group : '';
	} );

	return (
		<div className="novablocks-sections">
			<Drawers onOpen={ onOpen } onClose={ onClose }>
				<DrawerListBefore>
					<div className="novablocks-sections__header">
						<div className="novablocks-sections__title">{ __( 'Design Customization' ) }</div>
						<Cube />
					</div>
				</DrawerListBefore>
				{
					Object.keys( groups ).map( key => {
						const sections = groups[ key ];

						return (
							<DrawerList title={ key } key={ key }>
								{ sections.map( ( section, index ) => {
									const { label, priority } = section.props;

									return (
										<Drawer
											key={ index }
											title={ label }
											priority={ priority }
										/>
									);
								} ) }
							</DrawerList>
						)
					} )
				}
				{
					Object.keys( groups ).map( key => {
						const sections = groups[ key ];

						return sections.map( ( section, index ) => {
							const { children, label } = section.props;
							const tabs = Children.toArray( children ).filter( child => child.type === ControlsTab );
							const orderedTabs = orderBy( tabs, tab => tab.props.priority || 0, ['desc'] );
							const groupedTabs = groupBy( orderedTabs, tab => {
								return tab.props.label;
							} );

							const compiledTabs = Object.keys( groupedTabs ).map( key => {
								const group = groupedTabs[key];

								return {
									props: {
										label: key,
										children: group.reduce( ( accumulator, tab ) => {
											return accumulator.concat( Children.toArray( tab.props.children ) );
										}, [] )
									}
								};
							} );

							return (
								<DrawerPanel key={ index }>
									<ActiveSectionTabs
										title={ section.props.label }
										tabs={ compiledTabs }
									/>
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
