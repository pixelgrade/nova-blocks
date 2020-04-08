const { Fragment } = wp.element;

const {
	PanelBody,
	ToggleControl,
} = wp.components;

const ToggleGroup = ( props ) => {
	const { toggles, onChange, label } = props;

	const enabledToggles = toggles.filter( toggle => !! toggle.value );
	const disabledToggles = toggles.filter( toggle => ! toggle.value );

	return (
		<PanelBody initialOpen={ true } title={ label }>
			<div className={ 'components-toggle-group' }>
				{ !! enabledToggles.length &&
				  <div className={ 'components-toggle-group__toggle-list  components-toggle-group__toggle-list--enabled' }>
					  { enabledToggles.map( ( toggle, idx ) => {
						  return (
							  <div key={ idx } className="components-toggle-group__toggle-list-item">
								  <ToggleControl
									  label={ toggle.label }
									  checked={ !! toggle.value }
									  onChange={ () => { onChange( toggle.attribute ) } }
								  />
							  </div>
						  );
					  } ) }
				  </div>
				}
				{ !! disabledToggles.length &&
				  <Fragment>
					  <label className={ 'components-toggle-group__toggle-list-label' }>Elements you aren't using</label>
					  <div className={ 'components-toggle-group__toggle-list  components-toggle-group__toggle-list--disabled' }>
						  { disabledToggles.map( ( toggle, idx ) => {
							  return (
								  <div key={ idx } className="components-toggle-group__toggle-list-item">
									  <ToggleControl
										  label={ toggle.label }
										  checked={ !! toggle.value }
										  onChange={ () => { onChange( toggle.attribute ) } }
									  />
								  </div>
							  );
						  } ) }
					  </div>
				  </Fragment>
				}
			</div>
		</PanelBody>
	);
};

export default ToggleGroup;
