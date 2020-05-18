// external dependencies
import classnames from 'classnames';
import { kebabCase } from 'lodash';
import { useSpring, useTransition, interpolate, animated } from 'react-spring';

// internal dependencies
import { mergeChildrenProps, getSectionsFromFills } from './utils';
import { ControlsSlot, ControlsFill } from "./controls-slot-fill";
import { ControlsSectionsSlot, ControlsSectionsFill } from "./controls-sections-slot-fill";

import Cube from './cube';
import { SectionsList, SectionsListItem } from './sections-list';
import ActiveSection from "./tabs";

import { Drawer, Drawers, DrawerList, DrawerPanel } from "../drawer";

const { __ } = wp.i18n;
const { createSlotFill } = wp.components;
const { useBlockEditContext } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;

const {
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
	const [ activeSectionLabel, setActiveSectionLabel ] = useState( false );

	const activeSection = sections.find( section => section.props.label === activeSectionLabel );
	const notModules = sections.filter( section => ! section.props.module )
	const modules = sections.filter( section => !! section.props.module );

	return (
		<div className="novablocks-sections">
			<Drawers>
				<div className="novablocks-sections__header">
					<div className="novablocks-sections__title">{ __( 'Design Customization' ) }</div>
					<Cube />
				</div>
				<DrawerList>
					{ renderControlsSectionsList( notModules, setActiveSectionLabel ) }
				</DrawerList>
				<DrawerList title={ __( 'Modules' ) }>
					{ renderControlsSectionsList( modules, setActiveSectionLabel ) }
				</DrawerList>
				<DrawerPanel id={ 0 }>
					<ActiveSection section={ activeSection } />
				</DrawerPanel>
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
		<ControlsFill>
			<div label={ props.label }>{ props.children }</div>
		</ControlsFill>
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
