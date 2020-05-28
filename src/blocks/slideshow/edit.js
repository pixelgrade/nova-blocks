/**
 * Internal dependencies
 */
import { shuffleArray } from '@novablocks/utils';

import SlideshowPreview from './preview';
import InspectorControls from './inspector-controls';
import BlockControls from './block-controls';

import { withSettings, withParallax } from '../../components';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	Component,
	Fragment,
} = wp.element;

const {
	compose,
	createHigherOrderComponent,
} = wp.compose;

class Edit extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			selectedIndex: 0,
		};
	}

	componentDidMount() {
		const {
			attributes: {
				galleryImages,
			},
			clientId,
			settings: {
				slideshow: {
					defaultImages,
				},
			},
		} = this.props;

		if ( ! galleryImages.length ) {
			wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, {
				galleryImages: shuffleArray( defaultImages.slice( 0 ) ),
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
		);
	}
}

export default createHigherOrderComponent(compose([
	withSettings,
	withParallax,
]))( Edit );
