// internal dependencies
import { groupBy } from 'lodash';
import { getSectionsFromFills } from './utils';
import { ControlsSectionsSlot, ControlsSectionsFill } from "./controls-sections-slot-fill";
import { SectionsList, SectionsListItem } from './sections-list';

import Cube from './cube';
import { ActiveSectionTabs } from "./tabs";

import { Drawer, Drawers, DrawerList, DrawerPanel } from "../../components/drawer";
import {kebabCase} from "lodash";

const { __ } = wp.i18n;
const { useBlockEditContext } = wp.blockEditor;

const {
	Children,
	Component,
	Fragment,
	useState,
} = wp.element;

const renderControlsSectionsList = ( sections, onSectionClick ) => {

	return (
		sections.map( ( section, index ) => {
			const { label } = section.props;

			return (
				<Drawer
					key={ index }
					target={ 0 }
					title={ label }
					onOpen={ () => { onSectionClick( label ) } }
				/>
			);
		} )
	)
}

const ControlsSectionsComponent = ( props ) => {

	const { sections } = props;

	const notModules = sections.filter( section => ! section.props.module )
	const modules = sections.filter( section => !! section.props.module );

	const groups = groupBy( sections, section => {
		return !! section.props.group ? section.props.group : '';
	} );

	return (
		<div className="novablocks-sections">
			<Drawers>
				<div className="novablocks-sections__header">
					<div className="novablocks-sections__title">{ __( 'Design Customization' ) }</div>
					<Cube />
				</div>
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
							const groupedTabs = groupBy( tabs, tab => {
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
			</Drawers>
		</div>
	);
}

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
}

const ControlsTab = ( props ) => {
	return (
		<div label={ props.label }>{ props.children }</div>
	)
}

const ControlsSection = ( props ) => {

	const { isSelected } = useBlockEditContext();

	return (
		<ControlsSectionsFill>
			{ isSelected && <div { ...props } /> }
		</ControlsSectionsFill>
	)
}

export {
	ControlsTab,
	ControlsSections,
	ControlsSection,
};
