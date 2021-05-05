const ControlsGroup = ( props ) => {

  let className = 'novablocks-controls-group';

  if ( props.className ) {
    className = `${ className } ${ props.className }`;
  }

	return (
		<div className={ className }>
			{ !! props.title && <div className={ `novablocks-controls-group__title` }>{ props.title }</div> }
			{ props.children }
		</div>
	)
};

export default ControlsGroup;
