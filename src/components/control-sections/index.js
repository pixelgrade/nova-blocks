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

const ControlsSlotFill = createSlotFill( 'Controls' );
const ControlsSlot = ControlsSlotFill.Slot;
const ControlsFill = ControlsSlotFill.Fill;

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

const SectionListItem = ( props ) => {
	const {
		label,
		onClick,
	} = props;

	return <div key={ kebabCase( label ) } className={ 'novablocks-sections__button' } onClick={ () => { onClick( label ) } }>{ label }</div>
}

const SectionsList = ( props ) => {

	const {
		activeSectionLabel,
		sections,
		onSectionClick
	} = props;

	const active = sections.find( section => section.props.label === activeSectionLabel );

	const blockSections = sections.filter( section => ! section.props.module );
	const modules = sections.filter( section => !! section.props.module );

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
				{ blockSections.map( ( section, index ) => <SectionListItem key={ index } label={ section.props.label } onClick={ onSectionClick } /> ) }
			</div>
			<div className="novablocks-sections__title">{ __( 'Modules' ) }</div>
			<div className={ 'novablocks-sections__buttons' }>
				{ modules.map( ( section, index ) => <SectionListItem key={ index } label={ section.props.label } onClick={ onSectionClick } /> ) }
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

	return (
		<div className={ `novablocks-section__controls novablocks-section__controls--${ kebabCase( activeLevel ) }` }>

			<div className="novablocks-sections__controls-header">
				<div className="novablocks-sections__controls-back" onClick={ onBackButtonClick }></div>
				<div className="novablocks-sections__controls-title">
					{ section.props.label }
				</div>
				<Cube />
			</div>

			<ControlsSlot>
				{
					( fills ) => {
						const sections = getSectionsFromFills( fills );

						return (
							<Fragment>
								<div className={ 'novablocks-sections__tabs' }>
									{ sections.map( section => {
										const label = section.props.label;
										return <div className={ getTabClassName( label ) } onClick={ () => { onTabClick( label ) } }>{ label }</div>
									} ) }
								</div>
								<div className={ 'novablocks-sections__tab-content' }>
									{ sections.filter( section => section.props.label === activeLevel ).map( section => section.props.children ) }
								</div>
							</Fragment>
						)
					}
				}
			</ControlsSlot>

		</div>
	)
}

const getTabsFromFills = ( fills ) => {
	const tabs = [];
}

const mergeChildrenProps = ( children1, children2 ) => {

	if ( typeof children1 === "undefined" ) {
		return children2;
	}

	if ( typeof children2 === "undefined" ) {
		return children1;
	}

	let children1Array = Array.isArray( children1 ) ? children1 : [ children1 ];
	let children2Array = Array.isArray( children2 ) ? children2 : [ children2 ];

	return children1Array.concat( children2Array );
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
			sections.splice(index, 1, {
				props: {
					...sections[index].props,
					children: mergeChildrenProps( sections[index].props.children, fill[0].props.children ),
				}
			});
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

const ControlsGroup = ( props ) => {
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
	GeneralControlsFill as GeneralControls,
	CustomizeControlsFill as CustomizeControls,
	SettingsControlsFill as SettingsControls,
}

export {
	ControlsGroup,
	ControlsSections,
	ControlsSection,
};
