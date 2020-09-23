import classnames from "classnames";

import { kebabCase } from "lodash";
import { useSpring, animated } from 'react-spring';

import Cube from "./cube";

import { getSectionsFromFills } from "./utils";

const ACCENT_COLORS = [ 'rgb(142,101,192)', 'rgb(0,202,182)', 'rgb(222,22,81)' ];

import { __ } from '@wordpress/i18n';

import {
	useEffect,
	useState,
	Fragment,
	Component,
	createRef,
 } from '@wordpress/element';

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
		goBack,
		updateHeight,
	} = props;

	if ( ! tabs.length ) {
		return null;
	}

	const [ activeTabLabel, setActiveTabLabel ] = useState( tabs[0].props.label );
	const activeTabIndex = tabs.findIndex( tab => tab.props.label === activeTabLabel );
	const activeTab = tabs[activeTabIndex];

	const { accentColor } = useSpring({
		accentColor: getTabAccentColor( activeTabLabel )
	} );

	useEffect( updateHeight, [activeTabLabel] );

	return (
		<animated.div className={ `novablocks-section__controls` } style={ { '--novablocks-section-controls-accent': accentColor } }>
			<div className="novablocks-sections__controls-header">
				<div className="novablocks-sections__controls-back" onClick={ goBack } key={ 'tabs-back-button' }></div>
				<div className="novablocks-sections__controls-title" key={ 'tabs-title' }>{ title }</div>
				<Cube />
			</div>
			{
				tabs.length > 1 &&
				<div className={'novablocks-sections__tabs'}>
					{
						tabs.map( ( tab, index ) => {
							const label = tab.props.label;
							const className = getTabClassName( label, activeTabLabel );
							const onClick = () => {
								setActiveTabLabel( label );
							};

							return (
								<div className={ className } onClick={ onClick } key={ index }>{ label }</div>
							);
						} )
					}
				</div>
			}
			<TabContent activeTab={ activeTab } { ...props } />
		</animated.div>
	)
}

class TabContent extends Component {

	constructor() {
		super( ...arguments );

		this.resizeObserver = null;
		this.resizeElement = createRef();
	}

	componentDidMount() {
		this.resizeObserver = new ResizeObserver( entries => {
			this.props.updateHeight();
		} );

		this.resizeObserver.observe( this.resizeElement.current );
	}

	componentWillUnmount() {
		if ( this.resizeObserver ) {
			this.resizeObserver.disconnect();
		}
	}

	render() {

		const { activeTab } = this.props;

		return (
			<div className={ 'novablocks-sections__tab-content' } ref={ this.resizeElement }>
				{ !! activeTab && activeTab.props.children }
			</div>
		)
	}
}

export { ActiveSectionTabs };
