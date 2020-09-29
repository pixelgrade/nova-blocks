const OpenHoursPreview = function( props ) {

	console.log( props.attributes );

	return (
		<wp.serverSideRender
			block="novablocks/openhours"
			attributes={ props.attributes }
		/>
	)
};

export default OpenHoursPreview;
