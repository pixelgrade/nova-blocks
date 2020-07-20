import {
	useTransition,
	animated,
} from 'react-spring';

const { __ } = wp.i18n;

const {
	Fragment,
	useState,
} = wp.element;

const {
	PanelBody,
	ToggleControl,
} = wp.components;

const ToggleGroup = ( props ) => {
	const { toggles, onChange } = props;
	const [ refMap ] = useState( () => new WeakMap() );

	const enabledToggles = toggles.filter( toggle => !! toggle.value );
	const disabledToggles = toggles.filter( toggle => ! toggle.value );

	const config = {
		initial: false,
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
		<div className={ 'components-toggle-group__panel' } key={ 'toggle-group-controls' }>
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
	);
};

export default ToggleGroup;
