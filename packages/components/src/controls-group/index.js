const ControlsGroup = ( props ) => {

	return (
		<div className={ `novablocks-controls-group` }>
			{
				!! props.title &&
				<div className={ `novablocks-controls-group__title` }>{ props.title }</div>
			}
			{ props.children }
		</div>
	)
};

export default ControlsGroup;
