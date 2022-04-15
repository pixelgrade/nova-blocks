import { Children } from "@wordpress/element";

const ControlsGroup = ( props ) => {

  let className = 'novablocks-controls-group';
  const children = Children.toArray( props.children );

  if ( props.className ) {
    className = `${ className } ${ props.className }`;
  }

  if ( ! children.length ) {
    return null;
  }

	return (
		<div className={ className }>
			{ !! props.title && <div className={ `novablocks-controls-group__title` }>{ props.title }</div> }
			{ props.children }
		</div>
	)
};

export default ControlsGroup;
