/**
 * WordPress dependencies
 */
import classnames from "classnames";
import {
  useEffect,
  useLayoutEffect,
  useMemo,
} from '@wordpress/element';
import { cleanForSlug } from '@wordpress/url';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useMemoryState } from '../../index';
import Cube from "./cube";
import { useResizeObserver } from "../../index";

const ACCENT_COLORS = [ 'rgb(142,101,192)', 'rgb(0,202,182)', 'rgb(222,22,81)' ];

const getTabAccentColor = ( label ) => {

	if ( __( 'Presets', '__plugin_txtd' ) === label ) {
		return ACCENT_COLORS[0];
	}

	if ( __( 'Customize', '__plugin_txtd' ) === label ) {
		return ACCENT_COLORS[1];
	}

	return ACCENT_COLORS[2];
};

const getTabClassName = ( label, activeTabLabel ) => {
	return classnames(
		'novablocks-sections__tab',
		{
			'novablocks-sections__tab--active': activeTabLabel === label
		}
	)
};

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

	const [ activeTabLabel, setActiveTabLabel ] = useMemoryState( 'activeTab', tabs[0].props.label );
	const existingTab = useMemo( () => tabs.some( tab => activeTabLabel === tab.props.label ), [ tabs, activeTabLabel ] );

  useEffect( () => {

    if ( ! existingTab ) {
      setActiveTabLabel( tabs[0].props.label );
    }

  }, [ existingTab ] );

	const activeTabIndex = tabs.findIndex( tab => tab.props.label === activeTabLabel );
	const activeTab = tabs[ activeTabIndex ];
	const accentColor = getTabAccentColor( activeTabLabel );

	useLayoutEffect( updateHeight, [ activeTabLabel ] );

	return (
		<div className={ `novablocks-section__controls` } style={ { '--nb-section-controls-accent': accentColor } }>
			<div className="novablocks-sections__controls-header">
				<div className="novablocks-sections__controls-back" onClick={ goBack } key={ 'tabs-back-button' } />
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
								<div className={ className } onClick={ onClick } key={ cleanForSlug(label) + '_section_tab_' + index }>{ label }</div>
							);
						} )
					}
				</div>
			}
			<TabContent activeTab={ activeTab } { ...props } />
		</div>
	)
};

const TabContent = ( props ) => {
  const { activeTab, updateHeight } = props;
  const [ ref, entry ] = useResizeObserver();

  useLayoutEffect( updateHeight, [ entry ] );

  return (
    <div className={ 'novablocks-sections__tab-content' } ref={ ref }>
      { !! activeTab && activeTab.props.children }
    </div>
  );
};

export { ActiveSectionTabs };
