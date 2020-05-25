import classnames from "classnames";

import { kebabCase } from "lodash";
import { useSpring, animated } from 'react-spring';

import Cube from "./cube";

import { getSectionsFromFills } from "./utils";
import { ControlsSlot, ControlsFill } from "./controls-slot-fill";

import { useEffectDebugger } from "../../utils";

const ACCENT_COLORS = [ 'rgb(142,101,192)', 'rgb(0,202,182)', 'rgb(222,22,81)' ];

const { __ } = wp.i18n;

const {
	useEffect,
	useState,
	Fragment
} = wp.element;

const getTabAccentColor = ( label ) => {

	if ( __( 'General' ) === label ) {
		return ACCENT_COLORS[0];
	}

	if ( __( 'Customize' ) === label ) {
		return ACCENT_COLORS[1];
	}

	return ACCENT_COLORS[2];
}

const getTabClassName = ( label, activeTabLabel ) => {
	return classnames(
		'novablocks-sections__tab',
		{
			'novablocks-sections__tab--active': activeTabLabel === label
		}
	)
}

const ActiveSectionTabs = ( props ) => {

	const {
		title,
		tabs,
		onBackButtonClick,
		onTabChange,
		lastTab,
	} = props;

	if ( ! tabs.length ) {
		return null;
	}

	const [ activeTabLabel, setActiveTabLabel ] = useState( lastTab || tabs[0].props.label );
	const activeTabIndex = tabs.findIndex( tab => tab.props.label === activeTabLabel );
	const activeTab = tabs[activeTabIndex];

	const { accentColor } = useSpring({
		accentColor: getTabAccentColor( activeTabLabel )
	} );

	useEffectDebugger( () => {
		if ( typeof onTabChange === "function" ) {
			onTabChange(activeTabLabel);
		}
	}, [activeTabLabel] )

	useEffectDebugger( () => {
		console.log( lastTab );

		if ( !! lastTab ) {
			if ( lastTab !== activeTabLabel ) {
				setActiveTabLabel( lastTab );
			} else if ( typeof onTabChange === "function" ) {
				onTabChange( activeTabLabel );
			}
		} else {
			if ( tabs[0].props.label !== activeTabLabel ) {
				setActiveTabLabel( tabs[0].props.label );
			} else if ( typeof onTabChange === "function" ) {
				onTabChange( activeTabLabel );
			}
		}
	}, [title] )

	return (
		<animated.div className={ `novablocks-section__controls` } style={ { '--novablocks-section-controls-accent': accentColor } }>
			<div className="novablocks-sections__controls-header">
				<div className="novablocks-sections__controls-back" onClick={ onBackButtonClick }></div>
				<div className="novablocks-sections__controls-title">{ title }</div>
				<Cube />
			</div>
			<div className={ 'novablocks-sections__tabs' }>
				{
					tabs.map( tab => {
						const label = tab.props.label;
						const className = getTabClassName( label, activeTabLabel );
						const onClick = () => {
							setActiveTabLabel( label );
						};

						return (
							<div className={ className } onClick={ onClick }>{ label }</div>
						);
					} )
				}
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
								title={ label }
								tabs={ tabs }
								onBackButtonClick={ goBack }
								lastTab={ lastTab }
								onTabChange={ ( tabLabel ) => {
									if ( lastTab !== tabLabel ) {
										setLastTab( tabLabel );
									}
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

export default ActiveSection;
