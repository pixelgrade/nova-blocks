import { STORE_NAME } from "../../store";

const {
	Component,
	Fragment
} = wp.element;

const {
	withSelect
} = wp.data;

import Controls from './controls';
import Inspector from './inspector';
import MediaPreview from './preview';

const Edit = class extends Component {

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

export default withSelect( ( select, ownProps ) => {
	const { getSettings } = select( STORE_NAME );

	return {
		settings: getSettings().media,
	};

} )( Edit );
