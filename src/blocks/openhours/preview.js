/**
 * WordPress dependencies
 */

const {__} = wp.i18n;
const {Component} = wp.element;

class OpenHoursPreview extends Component {

	render() {
		const {
			attributes: {
				text,
				parsedText,
				timeFormat,
				openNote,
				closedNote,
				closedLabel,
				compressOpeningHours,
				HideClosedDays,
				UseShortName
			},
		} = this.props;


		return [
			<wp.serverSideRender
				block="novablocks/openhours"
				attributes={{
					text: text,
					parsedText: parsedText,
					timeFormat: timeFormat,
					openNote: openNote,
					closedNote: closedNote,
					closedLabel: closedLabel,
					compressOpeningHours: compressOpeningHours,
					HideClosedDays: HideClosedDays,
					UseShortName: UseShortName
				}}
			/>
		]
	}
}

export default OpenHoursPreview;
