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
				attributes={ this.props.attributes }
			/>
		]
	}
}

export default OpenHoursPreview;
