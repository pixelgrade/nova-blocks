const ControlsGroup = ( props ) => {

  const { className } = props;

	return (
		<div className={ `novablocks-controls-group ${ className }` }>
			{ !! props.title && <div className={ `novablocks-controls-group__title` }>{ props.title }</div> }
			{ props.children }
		</div>
	)
};

export default ControlsGroup;
