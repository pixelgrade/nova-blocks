const {__} = wp.i18n;

const { Component, Fragment } = wp.element;

import Controls from './controls';
import Inspector from './inspector';
import MediaPreview from './preview';

export default class Edit extends Component {

	constructor() {
		super( {...arguments} );
	}

	render() {
		return [
			<Fragment>
				<MediaPreview { ...this.props } />
				<Controls { ...this.props } />
				<Inspector { ...this.props } />
			</Fragment>
		]
	}
}
