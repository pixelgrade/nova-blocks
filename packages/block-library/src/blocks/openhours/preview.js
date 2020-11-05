const OpenHoursPreview = function( props ) {

	return (
		<wp.serverSideRender
			block="novablocks/openhours"
			attributes={ props.attributes }
		/>
	)
};

export default OpenHoursPreview;
