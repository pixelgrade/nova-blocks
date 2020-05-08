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
				<div className="novablocks-sections__title">{ __( 'Design Customization' ) }</div>
				<Cube />
			</div>
			<div className={ 'novablocks-sections__buttons' }>
				{ blockSections.map( ( section, index ) => <SectionListItem key={ index } label={ section.props.label } onClick={ onSectionClick } /> ) }
			</div>
			{
				!! modules.length &&
				<Fragment>
					<div className="novablocks-sections__title">{ __( 'Modules' ) }</div>
					<div className={ 'novablocks-sections__buttons' }>
						{ modules.map( ( section, index ) => <SectionListItem key={ index } label={ section.props.label } onClick={ onSectionClick } /> ) }
					</div>
				</Fragment>
			}
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

const ActiveSectionTabs = ( props ) => {

	const {
		title,
		tabs,
		onBackButtonClick,
	} = props;

	const [ activeTabLabel, setActiveTabLabel ] = useState( tabs[0].props.label );

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
	ControlsGroup,
	ControlsSections,
	ControlsSection,
};
