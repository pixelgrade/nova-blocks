import {
	useTransition,
	animated,
} from 'react-spring';

import {
	Fragment,
	useState,
  useCallback,
} from '@wordpress/element';

import {
	ToggleControl,
} from '@wordpress/components';

const ToggleGroup = ( props ) => {
	const { toggles } = props;
  const onChange = typeof props.onChange === 'function' ? props.onChange : () => {};
	const [ refMap ] = useState( () => new WeakMap() );

	const enabledToggles = toggles.filter( toggle => !! toggle.value );
	const disabledToggles = toggles.filter( toggle => ! toggle.value );

	const config = {
		initial: { left: 0 },
    from: { opacity: 0, height: 0, left: 40 },
		enter: item => async next => {
			const ref = refMap.get( item );
		  await next( { opacity: 1, left: 0, height: ref.offsetHeight } );
		},
    leave: item => async (next, cancel) => {
		  await next( { opacity: 0, height: 0, left: 40 } );
    },
    keys: item => item.attribute
	};

	const enabledTransitions = useTransition( enabledToggles, config );
	const disabledTransitions = useTransition( disabledToggles, config );

  const getOnChangeCallback = useCallback( item => {
    return ( value ) => {

      if ( typeof item.onChange === 'function' ) {
        item.onChange( value );
      }

      onChange( { [item.attribute]: value } );
    }
  }, [] );

	return (
		<div className={ 'components-toggle-group__panel' } key={ 'toggle-group-controls' }>
			<div className={ 'components-toggle-group' }>
				{ !! enabledToggles.length &&
				  <div className={ 'components-toggle-group__toggle-list  components-toggle-group__toggle-list--enabled' }>
					  { enabledTransitions( ( props, item, { key } ) => {
						  return (
							  <animated.div key={ key } style={ props } className={ 'components-toggle-group__toggle-list-animated' }>
								  <div ref={ref => ref && refMap.set(item, ref)}>
									  <div className="components-toggle-group__toggle-list-item">
										  <ToggleControl
											  label={ item.label }
											  checked={ !! item.value }
                        onChange={ getOnChangeCallback( item ) }
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
						  { disabledTransitions( ( props, item, { key } ) => {
							  return (
								  <animated.div key={ key } style={ props } className={ 'components-toggle-group__toggle-list-animated' }>
									  <div ref={ref => ref && refMap.set(item, ref)}>
										  <div className="components-toggle-group__toggle-list-item">
											  <ToggleControl
												  label={ item.label }
												  checked={ !! item.value }
												  onChange={ getOnChangeCallback( item ) }
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
