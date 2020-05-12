import classnames from 'classnames';
import { kebabCase } from 'lodash';

const { createSlotFill } = wp.components;
const { Component, Fragment, useState } = wp.element;
const { __ } = wp.i18n;
const { useBlockEditContext } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;

const ControlsSectionsSlotFill = createSlotFill( 'ControlsSections' );
const ControlsSectionsSlot = ControlsSectionsSlotFill.Slot;
const ControlsSectionsFill = ControlsSectionsSlotFill.Fill;

const ControlsSlotFill = createSlotFill( 'Controls' );
const ControlsSlot = ControlsSlotFill.Slot;
const ControlsFill = ControlsSlotFill.Fill;

import { mergeChildrenProps, getSectionsFromFills } from './utils';

import Cube from './cube';
import { SectionsList, SectionsListItem } from './sections-list';
import useMemoryState from "../memory-state";

const SectionContent = ( props ) => {

	const { section } = props;

	if ( ! section || ! section.props.children ) {
		return null;
	}

	return section.props.children;
}

const ActiveSectionTabs = ( props ) => {

	const {
		title,
		tabs,
		onBackButtonClick,
	} = props;


	const [ activeTabLabel, setActiveTabLabel ] = useMemoryState( kebabCase( title ), tabs[0].props.label );

	const activeTab = tabs.find( tab => tab.props.label === activeTabLabel );

	const getTabClassName = ( label ) => {
		return classnames(
			'novablocks-sections__tab',
			{
				'novablocks-sections__tab--active': activeTabLabel === label
			}
		)
	}

	return (
		<div className={ `novablocks-section__controls novablocks-section__controls--${ kebabCase( activeTabLabel ) }` }>
			<div className="novablocks-sections__controls-header">
				<div className="novablocks-sections__controls-back" onClick={ onBackButtonClick }></div>
				<div className="novablocks-sections__controls-title">{ title }</div>
				<Cube />
			</div>
			<div className={ 'novablocks-sections__tabs' }>
				{ tabs.map( tab => {
					const label = tab.props.label;
					return <div className={ getTabClassName( label, activeTabLabel ) } onClick={ () => { setActiveTabLabel( label ) } }>{ label }</div>
				} ) }
			</div>
			<div className={ 'novablocks-sections__tab-content' }>
				{ !! activeTab && activeTab.props.children }
			</div>
		</div>
	)
}

const ActiveSection = ( props ) => {

	const {
		section,
		onBackButtonClick,
	} = props;

	if ( ! section ) {
		return null;
	}

	return (

		<ControlsSlot>
			{
				( fills ) => {
					const tabs = getSectionsFromFills( fills );

					if ( ! tabs.length ) {
						return null;
					}

					return (
						<ActiveSectionTabs
							title={ section.props.label }
							tabs={ tabs }
							onBackButtonClick={ onBackButtonClick }
						/>
					)
				}
			}
		</ControlsSlot>
	)
}

const ControlsSections = ( props ) => {

	const { isSelected } = props;
	const [ activeSectionLabel, setActiveSectionLabel ] = useState( false );

	return (
		<ControlsSectionsSlot>
			{ ( fills ) => {
				const sections = getSectionsFromFills( fills );
				const activeSection = sections.find( section => section.props.label === activeSectionLabel );

				return !! sections.length && isSelected && (
					<Fragment>
						<SectionsList
							sections={ sections }
							activeSectionLabel={ activeSectionLabel }
							onSectionClick={ setActiveSectionLabel }
						/>
						<ActiveSection
							section={ activeSection }
							onBackButtonClick={ () => { setActiveSectionLabel( false ) } }
						/>
						<SectionContent section={ activeSection } />
					</Fragment>
				);

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
