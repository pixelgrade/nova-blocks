const { Component, Fragment } = wp.element;

import Controls from './controls';
import Inspector from './inspector';
import MediaPreview from './preview';

export default class Edit extends Component {

	constructor() {
		super( ...arguments );
	}

	updateImages( media ) {
		this.props.setAttributes({
			images: media.map( ( image ) => JSON.stringify({ id: image.id, url: image.url, alt: image.alt }) )
		});
	}

	render() {

		return [
			<Fragment>
				<MediaPreview { ...this.props } updateImages={ this.updateImages.bind( this ) } />
				<Controls { ...this.props } updateImages={ this.updateImages.bind( this ) } />
				<Inspector { ...this.props } />
			</Fragment>
		]
	}
}
