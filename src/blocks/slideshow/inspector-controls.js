/**
 * Internal dependencies
 */
import {
	LayoutPanel,
	GalleryPreview,
} from '../../components';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	FocalPointPicker,
	PanelBody,
	RadioControl,
} = wp.components;

const {
	InspectorControls,
} = wp.blockEditor;

const {
	Fragment,
} = wp.element;

const SlideshowInspectorControls = function( props ) {

	const {
		attributes: {
			galleryImages,
			minHeight,
			slideshowType,
		},
		selectedIndex,
		setIndex,
		setAttributes,
		settings: {
			slideshow: {
				minHeightOptions,
			},
		},
	} = props;

	const parallaxFocalPointImage = galleryImages[ selectedIndex ];
	const focalPoint = galleryImages[ selectedIndex ].focalPoint || { x: 0.5, y: 0.5 };

	return (
		<InspectorControls>

			{ !! galleryImages.length &&
				<PanelBody
					className={ 'nova-blocks-slideshow-type-panel' }
					title={ __( 'Slides', '__plugin_txtd' ) }>
					<GalleryPreview
						galleryImages={ galleryImages }
						onSelectImage={ setIndex }
						selected={ selectedIndex }
					/>
					{ parallaxFocalPointImage && <FocalPointPicker
						url={ parallaxFocalPointImage.url }
						dimensions={ {
							width: parallaxFocalPointImage.width,
							height: parallaxFocalPointImage.height,
						} }
						value={ focalPoint }
						onChange={ focalPoint => {
							const newGalleryImages = galleryImages;
							newGalleryImages[ selectedIndex ].focalPoint = focalPoint;
							setAttributes( { galleryImages: newGalleryImages } );
						} }
					/> }
				</PanelBody> }

			{ 'gallery' === slideshowType && <Fragment>

				<LayoutPanel { ...props } />

				<PanelBody title={ __( 'Height', '__plugin_txtd' ) } initialOpen={ false }>
					<RadioControl
						label={ __( 'Minimum Height', '__plugin_txtd' ) }
						selected={ minHeight }
						onChange={ ( nextMinHeight ) => {
							setAttributes( { minHeight: parseInt( nextMinHeight, 10 ) } );
						} }
						options={ minHeightOptions }
					/>
				</PanelBody>

			</Fragment> }

			{ 'gallery' !== slideshowType && <PanelBody>
				{ __( 'Coming Soon', '__plugin_txtd' ) }
			</PanelBody> }

		</InspectorControls>
	);
};

export default SlideshowInspectorControls;
