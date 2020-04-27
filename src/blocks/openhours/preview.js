const OpenHoursPreview = function(props) {

		const {
			attributes: {
				text,
				parsedText,
				openHoursStyle,
				timeFormat,
				openNote,
				closedNote,
				closedLabel,
				compressOpeningHours,
				hideClosedDays,
				useShortName
			},
		} = props;


		return (
			<wp.serverSideRender
				block="novablocks/openhours"
				attributes={ props.attributes }
			/>
		)
};

export default OpenHoursPreview;
