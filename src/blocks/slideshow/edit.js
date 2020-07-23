/**
 * Internal dependencies
 */
import { shuffleArray } from '../../utils';

import SlideshowPreview from './preview';
import InspectorControls from './inspector-controls';
import BlockControls from './block-controls';

import { withSettings, withParallax } from '../../components';
import {normalizeImages} from "../../utils/images";

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

	onSelectImages( images ) {

		const {
			setAttributes
		} = this.props;

		normalizeImages( images ).then( newImages => {
			setAttributes( { galleryImages: newImages } );
		} )
	};

	render() {

		const {
			attributes: {
				galleryImages,
			},
		} = this.props;

		const onSelectImages = this.onSelectImages.bind( this );
		const newProps = Object.assign( {}, this.props, { onSelectImages } );

		const setIndex = this.setIndex.bind( this );

		let { selectedIndex } = this.state;

		if ( selectedIndex >= galleryImages.length ) {
			selectedIndex = galleryImages.length - 1;
		}

		return (
			<Fragment>

				<SlideshowPreview
					{ ...newProps }
					previewImage={ galleryImages[ selectedIndex ] }
					onPrevArrowClick={ this.onPrevArrowClick.bind( this ) }
					onNextArrowClick={ this.onNextArrowClick.bind( this ) }
				/>

				<InspectorControls { ...{ ...newProps, setIndex, selectedIndex } } />
				<BlockControls { ...newProps } />

			</Fragment>
		);
	}
}

export default createHigherOrderComponent(compose([
	withSettings,
	withParallax,
]))( Edit );
