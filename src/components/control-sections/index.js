import classnames from 'classnames';
import { kebabCase } from 'lodash';

const { createSlotFill } = wp.components;
const { Component, Fragment, useState } = wp.element;
const { __ } = wp.i18n;
const { useBlockEditContext } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;

import { Tab, Tabs } from '../../components';

const ControlsSectionsSlotFill = createSlotFill( 'ControlsSections' );
const ControlsSectionsSlot = ControlsSectionsSlotFill.Slot;
const ControlsSectionsFill = ControlsSectionsSlotFill.Fill;

const GeneralControlsSlotFill = createSlotFill( 'GeneralControls' );
const GeneralControlsSlot = GeneralControlsSlotFill.Slot;
const GeneralControlsFill = GeneralControlsSlotFill.Fill;

const CustomizeControlsSlotFill = createSlotFill( 'CustomizeControls' );
const CustomizeControlsSlot = CustomizeControlsSlotFill.Slot;
const CustomizeControlsFill = CustomizeControlsSlotFill.Fill;

const SettingsControlsSlotFill = createSlotFill( 'SettingsControls' );
const SettingsControlsSlot = SettingsControlsSlotFill.Slot;
const SettingsControlsFill = SettingsControlsSlotFill.Fill;

const Cube = ( props ) => {
	return (
		<div className="novablocks-sections__cube">
			<div className="novablocks-sections__cube-face novablocks-sections__cube-face--top"></div>
			<div className="novablocks-sections__cube-face novablocks-sections__cube-face--left"></div>
			<div className="novablocks-sections__cube-face novablocks-sections__cube-face--right"></div>
		</div>
	)
}

const SectionsList = ( props ) => {

	const {
		activeSectionLabel,
		sections,
		onSectionClick
	} = props;

	const active = sections.find( section => section.props.label === activeSectionLabel );

	if ( !! active ) {
		return false;
	}

	return (
		<div className="novablocks-sections">
			<div className="novablocks-sections__header">
				<div className="novablocks-sections__title">{ __( 'Select a section to customize' ) }</div>
				<Cube />
			</div>
			<div className={ 'novablocks-sections__buttons' }>
				{ sections.map( section => {
					const { label } = section.props;
					const isActive = label === activeSectionLabel;
					const className = classnames(
						'novablocks-sections__button',
						{
							'novablocks-sections__button--active': isActive
						}
					);

					return <div key={ kebabCase( label ) } className={ className } onClick={ () => { onSectionClick( label ) } }>{ label }</div>
				} ) }
			</div>
		</div>
	)
}

const SectionContent = ( props ) => {

	const { section } = props;

	if ( ! section || ! section.props.children ) {
		return null;
	}

	return section.props.children;
}

const SectionTab = ( props ) => {

	const {
		className,
		label,
		onClick,
	} = props;

	return (
		<div className={ className } onClick={ () => { onClick( label ) } }>{ label }</div>
	);
}

const ActiveSection = ( props ) => {

	const {
		activeLevel,
		section,
		onBackButtonClick,
		onTabClick,
	} = props;

	if ( ! section ) {
		return false;
	}

	const getTabClassName = ( label ) => {
		return classnames(
			'novablocks-sections__tab',
			{
				'novablocks-sections__tab--active': activeLevel === label
			}
		)
	}

	const getTab = ( label ) => {

		return ( fills ) => {

			return (
				<div className={ getTabClassName( label ) } onClick={ () => { onTabClick( label ) } }>{ label }</div>
			)
		}
	}

	return (
		<div className={ `novablocks-section__controls novablocks-section__controls--${ kebabCase( activeLevel ) }` }>
			<div className="novablocks-sections__controls-header">
				<div className="novablocks-sections__controls-back" onClick={ onBackButtonClick }></div>
				<div className="novablocks-sections__controls-title">
					{ section.props.label }
				</div>
				<Cube />
			</div>
			<div className={ 'novablocks-sections__tabs' }>
				<GeneralControlsSlot>{ getTab( __( 'General' ) ) }</GeneralControlsSlot>
				<CustomizeControlsSlot>{ getTab( __( 'Customize' ) ) }</CustomizeControlsSlot>
				<SettingsControlsSlot>{ getTab( __( 'Settings' ) ) }</SettingsControlsSlot>
			</div>
			<div className={ 'novablocks-sections__tab-content' }>
				{ activeLevel === __( 'General' ) && <GeneralControlsSlot /> }
				{ activeLevel === __( 'Customize' ) && <CustomizeControlsSlot /> }
				{ activeLevel === __( 'Settings' ) && <SettingsControlsSlot /> }
			</div>
		</div>
	)
}

const getSectionsFromFills = ( fills ) => {
	const sections = [];

	// Merge sections with the same label
	fills.forEach( fill => {
		const index = sections.findIndex( section => {
			return section.props.label === fill[0].props.label;
		} );

		if ( index === -1 ) {
			sections.push( {
				props: fill[0].props,
			} );
		} else {
			const oldChildren = sections[index].props.children;
			let oldChildrenArray;
			let newChildren = fill[0].props.children;

			if ( typeof newChildren !== "undefined" ) {

				if ( ! Array.isArray( newChildren ) ) {
					newChildren = [ newChildren ];
				}

				if ( typeof oldChildren !== "undefined" ) {

					if ( ! Array.isArray( oldChildren ) ) {
						oldChildrenArray = Array.isArray( oldChildren ) ? oldChildren : [ oldChildren ];
					}

					newChildren = oldChildrenArray.concat( newChildren );
				}

				sections.splice(index, 1, {
					props: {
						label: sections[index].props.label,
						children: newChildren,
					}
				});
			}
		}
	} );

	return sections;
}

const ControlsSections = ( props ) => {

	const { isSelected } = props;
	const [ activeSectionLabel, setActiveSectionLabel ] = useState( false );
	const [ activeLevel, setActiveLevel ] = useState( __( 'Settings' ) );

	return (
		<ControlsSectionsSlot>
			{ ( fills ) => {
				const sections = getSectionsFromFills( fills );
				const activeSection = sections.find( section => section.props.label === activeSectionLabel );

				return isSelected && (
					<Fragment>
						<SectionsList
							sections={ sections }
							activeSectionLabel={ activeSectionLabel }
							onSectionClick={ setActiveSectionLabel }
						/>
						<SectionContent
							section={ activeSection }
						/>
						<ActiveSection
							section={ activeSection }
							activeLevel={ activeLevel }
							onBackButtonClick={ () => { setActiveSectionLabel( false ) } }
							onTabClick={ setActiveLevel }
						/>
					</Fragment>
				);

			} }
		</ControlsSectionsSlot>
	);
}

const ControlsSection = ( props ) => {

	const { isSelected } = useBlockEditContext();

	return (
		<ControlsSectionsFill>
			{ isSelected && <div label={ props.label }>{ props.children }</div> }
		</ControlsSectionsFill>
	)
}

export {
	GeneralControlsFill as GeneralControls,
	CustomizeControlsFill as CustomizeControls,
	SettingsControlsFill as SettingsControls,
}

export {
	ControlsSections,
	ControlsSection,
};
