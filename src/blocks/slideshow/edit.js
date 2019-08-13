import withSettings from "../../components/with-settings";
import * as icons from "../../icons";

const { __ } = wp.i18n;

import { shuffleArray } from "../../components/util";

import SlideshowPreview from './preview';
import InspectorControls from './inspector-controls';
import BlockControls from './block-controls';

const {
	Component,
	Fragment,
} = wp.element;

const defaultGalleryImages = [
	{
		"url": "https://source.unsplash.com/_nqApgG-QrY/1600x900",
		"id": - 1,
		"sizes": {
			"thumbnail": {
				"url": "https://source.unsplash.com/_nqApgG-QrY/150x150"
			},
			"large": {
				"url": "https://source.unsplash.com/_nqApgG-QrY/1600x900",
				"width": 1600,
				"height": 900
			}
		}
	}, {
		"url": "https://source.unsplash.com/Gt_4iMB7hY0/1600x900",
		"alt": "This is a catchy image title",
		"caption": "A brilliant caption to explain its catchiness",
		"id": - 2,
		"sizes": {
			"thumbnail": {
				"url": "https://source.unsplash.com/Gt_4iMB7hY0/150x150"
			},
			"large": {
				"url": "https://source.unsplash.com/Gt_4iMB7hY0/1600x900",
				"width": 1600,
				"height": 900
			}
		}
	}, {
		"url": "https://source.unsplash.com/1vKTnwLMdqs/1600x900",
		"id": - 3,
		"sizes": {
			"thumbnail": {
				"url": "https://source.unsplash.com/1vKTnwLMdqs/150x150"
			},
			"large": {
				"url": "https://source.unsplash.com/1vKTnwLMdqs/1600x900",
				"width": 1600,
				"height": 900
			}
		}
	}
];

const Edit = class extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			selectedIndex: 0
		};
	}

	componentDidMount() {
		const {
			attributes: {
				galleryImages
			},
			clientId
		} = this.props;

		if ( ! galleryImages.length ) {
			wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, {
				galleryImages: shuffleArray( defaultGalleryImages.slice(0) )
			} );
		}
	}

	onPrevArrowClick() {
		const { attributes: { galleryImages } } = this.props;
		const { selectedIndex } = this.state;
		const newIndex = ( selectedIndex + galleryImages.length - 1 ) % galleryImages.length;
		this.setState( { selectedIndex: newIndex } );
	}

	onNextArrowClick() {
		const { attributes: { galleryImages } } = this.props;
		const { selectedIndex } = this.state;
		const newIndex = ( selectedIndex + 1 ) % galleryImages.length;
		this.setState( { selectedIndex: newIndex } );
	}

	setIndex( selectedIndex ) {
		this.setState( { selectedIndex } );
	}

	render() {

		const {
			attributes: {
				galleryImages,
			},
		} = this.props;

		const setIndex = this.setIndex.bind( this );

		let { selectedIndex } = this.state;

		if ( selectedIndex >= galleryImages.length ) {
			selectedIndex = galleryImages.length - 1;
		}

		return (
			<Fragment>

				<SlideshowPreview
					{ ...this.props }
					previewImage={ galleryImages[ selectedIndex ] }
					onPrevArrowClick={ this.onPrevArrowClick.bind( this ) }
					onNextArrowClick={ this.onNextArrowClick.bind( this ) }
				/>

				<InspectorControls { ...{ ...this.props, setIndex, selectedIndex } } />
				<BlockControls { ...this.props } />

			</Fragment>
		)
	}
}

export default withSettings( Edit );