import {
	useTransition,
	animated
 } from 'react-spring';

import { ControlsSection, ControlsTab } from '../control-sections';

import { __ } from '@wordpress/i18n';

import {
	Fragment,
	useState
 } from '@wordpress/element';

import {
	PanelBody,
	ToggleControl
 } from '@wordpress/components';

const ToggleGroup = ( props ) => {
	const { toggles, onChange, label } = props;
	const [ refMap ] = useState( () => new WeakMap() );

	const enabledToggles = toggles.filter( toggle => !! toggle.value );
	const disabledToggles = toggles.filter( toggle => ! toggle.value );

	const config = {
		initial: false,
		from: {
			opacity: 0,
			height: 0,
			left: 40,
		},
		enter: item => async next => {
			const ref = refMap.get(item);

			if ( typeof ref === "undefined" ) {
				return;
			}

			setTimeout(() => {
				next( { height: ref.offsetHeight } );
			}, 100);

			setTimeout(() => {
				next( { opacity: 1, left: 0 } );
			}, 200);
		},
		leave: item => async next => {
			next( { opacity: 0, left: 40 } );

			setTimeout(() => {
				next( { height: 0 } );
			}, 100);
		},
	};

	const enabledTransitions = useTransition( enabledToggles, item => item.attribute, config );
	const disabledTransitions = useTransition( disabledToggles, item => item.attribute, config );

	return (
		<ControlsSection label={ label }>
			<ControlsTab label={ __( 'Settings' ) }>
				<div className={ 'components-toggle-group__panel' }>
					<div className={ 'components-toggle-group' }>
						{ !! enabledToggles.length &&
						  <div className={ 'components-toggle-group__toggle-list  components-toggle-group__toggle-list--enabled' }>
							  { enabledTransitions.map( ( { item, key, props } ) => {
								  return (
									  <animated.div key={ key } style={ props } className={ 'components-toggle-group__toggle-list-animated' }>
										  <div ref={ref => ref && refMap.set(item, ref)}>
											  <div className="components-toggle-group__toggle-list-item">
												  <ToggleControl
													  label={ item.label }
													  checked={ !! item.value }
													  onChange={ ( value ) => { onChange( { [item.attribute]: value } ) } }
												  />
											  </div>
										  </div>
									  </animated.div>
								  );
							  } ) }
						  </div>
						}
						{ !! disabledToggles.length &&
						  <Fragment>
							  <label className={ 'components-toggle-group__toggle-list-label' }>Elements you aren't using</label>
							  <div className={ 'components-toggle-group__toggle-list  components-toggle-group__toggle-list--disabled' }>
								  { disabledTransitions.map( ( { item, key, props } ) => {
									  return (
										  <animated.div key={ key } style={ props } className={ 'components-toggle-group__toggle-list-animated' }>
											  <div ref={ref => ref && refMap.set(item, ref)}>
												  <div className="components-toggle-group__toggle-list-item">
													  <ToggleControl
														  label={ item.label }
														  checked={ !! item.value }
														  onChange={ ( value ) => { onChange( { [item.attribute]: value } ) } }
													  />
												  </div>
											  </div>
										  </animated.div>
									  );
								  } ) }
							  </div>
						  </Fragment>
						}
					</div>
				</div>
			</ControlsTab>
		</ControlsSection>
	);
};

export default ToggleGroup;
