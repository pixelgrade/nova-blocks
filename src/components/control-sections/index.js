import classnames from 'classnames';
import { kebabCase } from 'lodash';
import { useSpring, useTransition, interpolate, animated } from 'react-spring';

const { __ } = wp.i18n;
const { createSlotFill } = wp.components;
const { useBlockEditContext } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;

const {
	Component,
	Fragment,
	useEffect,
	useRef,
	useState,
} = wp.element;


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

const ActiveSectionTabs = ( props ) => {

	const {
		title,
		tabs,
		onBackButtonClick,
	} = props;

	if ( ! tabs.length ) {
		return null;
	}

	const [ activeTabLabel, setActiveTabLabel ] = useMemoryState( kebabCase( title ), tabs[0].props.label );
	const activeTabIndex = tabs.findIndex( tab => tab.props.label === activeTabLabel );
	const activeTab = tabs[activeTabIndex];

	const colors = [
		'rgb(142,101,192)',
		'rgb(0,202,182)',
		'rgb(222,22,81)',
	];
	const colorIndex = Math.max( 0, Math.min( activeTabIndex, colors.length ) );
	console.log( colors[0], activeTabIndex, colorIndex, colors[colorIndex] );

	const { accentColor } = useSpring({
		from: { accentColor: colors[0] },
		accentColor: colors[colorIndex]
	} );


	const getTabClassName = ( label ) => {
		return classnames(
			'novablocks-sections__tab',
			{
				'novablocks-sections__tab--active': activeTabLabel === label
			}
		)
	}

	return (
		<animated.div className={ `novablocks-section__controls` } style={ { '--novablocks-section-controls-accent': accentColor } }>
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
		</animated.div>
	)
}

const AnimatedActiveSection = ( ownProps ) => {

	const { section } = ownProps;

	const transitions = useTransition( !! section, null, {
		from: {progress: 0},
		enter: {progress: 1},
		leave: {progress: 0},
	} );

	return transitions.map( ( { item, key, props } ) => {
		const {progress} = props;

		return (
			<animated.div style={{
				transform: progress.interpolate( progress => `translateX(${100 - progress * 100}%)` )
			}}>
				<ActiveSection {...ownProps}>
					{ownProps.children}
				</ActiveSection>
			</animated.div>
		);
	} );
}

const ActiveSection = ( props ) => {

	const {
		section,
		onBackButtonClick,
	} = props;

	return (
		<Fragment>
			{ !! section && section.props.children }
			<ControlsSlot>
				{
					( fills ) => {
						const tabs = getSectionsFromFills( fills );

						return (
							<ActiveSectionTabs
								title={ !! section && section.props.label }
								tabs={ tabs }
								onBackButtonClick={ onBackButtonClick }
							/>
						)
					}
				}
			</ControlsSlot>
		</Fragment>
	)
}

const AnimatedSectionsList = ( ownProps ) => {

	const { activeSectionLabel } = ownProps;

	const transitions = useTransition( ! activeSectionLabel, null, {
		from: {progress: 1},
		enter: {progress: 1},
		leave: {progress: 0},
	} );

	return transitions.map( ( { item, key, props } ) => {

		const {progress} = props;

		return (
			<animated.div style={{
				transform: progress.interpolate( progress => `translateX(-${100 - progress * 100}%)` )
			}}>
				Panel
				<SectionsList { ...ownProps } />
			</animated.div>
		);
	} );
}

const ControlsSections = ( props ) => {

	const { isSelected } = props;
	const [ activeSectionLabel, setActiveSectionLabel ] = useState( false );

	return (
		<ControlsSectionsSlot>
			{ ( fills ) => {
				const sections = getSectionsFromFills( fills );
				const activeSection = sections.find( section => section.props.label === activeSectionLabel );

				return (
					<Fragment>
						<SectionsList
							sections={ sections }
							activeSectionLabel={ activeSectionLabel }
							onSectionClick={ setActiveSectionLabel }
						/>
						{ sections.map( section =>
							<ActiveSection
								section={ section }
								onBackButtonClick={ () => { setActiveSectionLabel( false ) } }
							/>
						) }
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
