/**
 * Internal dependencies
 */
import SlideshowPreview from './preview';
import InspectorControls from './inspector-controls';
import BlockControls from './block-controls';

import { withDoppler } from "@novablocks/doppler";
import {
	normalizeImages,
	withSettings
} from "@novablocks/block-editor";

/**
 * WordPress dependencies
 */
import {
	Component,
	Fragment,
 } from '@wordpress/element';

import {
	compose,
	createHigherOrderComponent,
 } from '@wordpress/compose';

class Edit extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			selectedIndex: 0,
		};
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
				/>

				<InspectorControls { ...{ ...newProps, setIndex, selectedIndex } } />
				<BlockControls { ...newProps } />

			</Fragment>
		);
	}
}

export default createHigherOrderComponent(compose([
	withSettings,
	withDoppler,
]))( Edit );
