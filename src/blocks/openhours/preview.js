/**
 * WordPress dependencies
 */

const {__} = wp.i18n;
const {Component} = wp.element;

class OpenHoursPreview extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {
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
		} = this.props;


		return [
			<wp.serverSideRender
				block="novablocks/openhours"
				attributes={{
					text: text,
					parsedText: parsedText,
					openHoursStyle: openHoursStyle,
					timeFormat: timeFormat,
					openNote: openNote,
					closedNote: closedNote,
					closedLabel: closedLabel,
					compressOpeningHours: compressOpeningHours,
					hideClosedDays: hideClosedDays,
					useShortName: useShortName
				}}
			/>
		]
	}
}

export default OpenHoursPreview;
