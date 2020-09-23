import { Component } from '@wordpress/element';

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
			<wp.serverSideRender
					block="novablocks/navigation"
					attributes={ this.props.attributes }
				/>
		]
	}
}
