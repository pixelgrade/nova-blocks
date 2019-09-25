const { __ } = wp.i18n;

const {
	Component,
} = wp.element;

const {
	ServerSideRender,
} = wp.components;

export default class Edit extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			attributes: {
				slug
			}
		} = this.props;

		return [
			<ServerSideRender
					block="novablocks/navigation"
					attributes={ this.props.attributes }
				/>
		]
	}
}
