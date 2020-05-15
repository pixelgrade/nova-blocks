import classnames from 'classnames';
import { kebabCase } from 'lodash';
import { useSpring, useTransition, interpolate, animated } from 'react-spring';

import {
	Drawer,
	Drawers,
	DrawerList,
	DrawerPanel
} from "../drawer";

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
		section,
		onBackButtonClick,
		onTabChange,
		lastTab,
	} = props;

	const {
		title,
		tabs
	} = section;

	if ( ! tabs.length ) {
		return null;
	}

	const [ activeTabLabel, setActiveTabLabel ] = useState( lastTab || tabs[0].props.label );
	const activeTabIndex = tabs.findIndex( tab => tab.props.label === activeTabLabel );
	const activeTab = tabs[activeTabIndex];

	const colors = [
		'rgb(142,101,192)',
		'rgb(0,202,182)',
		'rgb(222,22,81)',
	];

	let nextColor = colors[2];

	if ( __( 'Customize' ) === activeTabLabel ) {
		nextColor = colors[1];
	}

	if ( __( 'General' ) === activeTabLabel ) {
		nextColor = colors[0];
	}

	const { accentColor } = useSpring({
		accentColor: nextColor
	} );


	const getTabClassName = ( label ) => {
		return classnames(
			'novablocks-sections__tab',
			{
				'novablocks-sections__tab--active': activeTabLabel === label
			}
		)
	}

	useEffect( () => {
		if ( typeof onTabChange === "function" ) {
			onTabChange(activeTabLabel);
		}
	}, [activeTabLabel] )

	useEffect( () => {
		if ( !! lastTab ) {
			if ( lastTab !== activeTabLabel ) {
				setActiveTabLabel( lastTab );
			}
		} else {
			setActiveTabLabel( tabs[0].props.label );
		}
	}, [section] )

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
					return <div className={ getTabClassName( label, activeTabLabel ) } onClick={ () => {
						setActiveTabLabel( label );
					} }>{ label }</div>
				} ) }
			</div>
			<div className={ 'novablocks-sections__tab-content' }>
				{ !! activeTab && activeTab.props.children }
			</div>
		</animated.div>
	)
}

const ActiveSection = ( props ) => {

	const {
		section,
		goBack,
		updateHeight,
	} = props;

	const label = !! section ? section.props.label : '';
	const children = !! section ? section.props.children : [];

	const [ lastTabs, setLastTabs ] = useState( {} );
	const lastTab = lastTabs?.[ kebabCase( label ) ] || false;

	const setLastTab = ( lastTab ) => {
		setLastTabs( Object.assign( {}, lastTabs, { [ kebabCase( label ) ]: lastTab } ) );
	}

	return (
		<Fragment>
			{ children }
			<ControlsSlot>
				{
					( fills ) => {
						const tabs = getSectionsFromFills( fills );

						return (
							<ActiveSectionTabs
								section={{
									title: label,
									tabs: tabs,
								}}
								onBackButtonClick={ goBack }
								lastTab={ lastTab }
								onTabChange={ ( tabLabel ) => {
									setLastTab( tabLabel );
									updateHeight();
								} }
							/>
						)
					}
				}
			</ControlsSlot>
		</Fragment>
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

				const notModules = sections.filter( section => ! section.props.module )
				const modules = sections.filter( section => !! section.props.module );

				if ( ! sections.length ) {
					return null;
				}

				return (
					<div className="novablocks-sections">
						<Drawers>
							<div className="novablocks-sections__header">
								<div className="novablocks-sections__title">{ __( 'Design Customization' ) }</div>
								<Cube />
							</div>
							<DrawerList>
								{ notModules.map( section => {
									return <Drawer
										target={ 0 }
										title={ section.props.label }
										onOpen={ () => {
											setActiveSectionLabel( section.props.label )
										} }
									/>
								} ) }
							</DrawerList>
							{
								!! modules.length &&
								<DrawerList title={ __( 'Modules' ) }>
									{ modules.map( section => {
										return <Drawer
											target={ 0 }
											title={ section.props.label }
											onOpen={ () => {
												setActiveSectionLabel( section.props.label )
											} }
										/>
									} ) }
								</DrawerList>
							}
							<DrawerPanel id={ 0 }>
								<ActiveSection section={ activeSection } />
							</DrawerPanel>
						</Drawers>
					</div>
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
