/**
 * Internal dependencies
 */
import {
	getSnapClassname,
	maybeSnapFocalPoint
} from "@novablocks/utils";

import {
  LayoutControls,
  GalleryPreview,
  ControlsSection,
  ControlsTab, ControlsGroup, ToggleGroup, CardsManager
} from "@novablocks/block-editor";

const { toggles } = CardsManager;

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
  FocalPointPicker,
  RadioControl,
} from '@wordpress/components';

import {
	Fragment,
} from '@wordpress/element';

const SlideshowInspectorControls = function( props ) {

	const {
		attributes,
		selectedIndex,
		setIndex,
		setAttributes,
		settings: {
			slideshow: {
				minHeightOptions,
        sources
			},
		},
	} = props;

	const {
    galleryImages,
    minHeight,
    source,
  } = attributes;

	const selectedImage = galleryImages[ selectedIndex ];

	let focalPointPickerClassNames = [ 'novablocks-focal-point-picker' ];

	if ( selectedImage ) {
		let selectedImageFocalPoint = selectedImage.focalPoint || { x: 0.5, y: 0.5 };
		focalPointPickerClassNames.push( getSnapClassname( selectedImageFocalPoint ) )
	}

	focalPointPickerClassNames = focalPointPickerClassNames.join( ' ' );

	let thumbnail,
		width,
		height;

	if ( 'video' === selectedImage?.type ) {
		thumbnail = '//cloud.pixelgrade.com/wp-content/uploads/2020/01/Screenshot-2020-01-09-at-15.59.37.png';
		width = 218;
		height = 170;
	} else {
		thumbnail = selectedImage?.sizes?.novablocks_tiny?.url || selectedImage?.sizes?.novablocks_large?.url || selectedImage?.sizes?.novablocks_huge?.url
		width = selectedImage?.width;
		height = selectedImage?.height;
	}

	return (
		<Fragment>
      <ControlsSection label={ __( 'Source' ) }>
        <ControlsTab label={ __( 'Source' ) }>
          <RadioControl
            key={ 'slideshow-source-controls' }
            label={ __( 'Select source', '__plugin_txtd' ) }
            selected={ source }
            onChange={ ( nextsource ) => {
              setAttributes( { source: nextsource } );
            } }
            options={ sources }
          />
        </ControlsTab>
      </ControlsSection>
			{
				!! galleryImages.length && 'custom' === source &&
				<ControlsSection label={ __( 'Slides' ) }>
					<ControlsTab label={ __( 'General' ) }>
						<GalleryPreview
							key={ 'slideshow-gallery-preview' }
							galleryImages={ galleryImages }
							onSelectImage={ setIndex }
							selected={ selectedIndex }
						/>
						{
							selectedImage &&
							<FocalPointPicker
								key={ 'slideshow-focal-point-picker' }
								className={ focalPointPickerClassNames }
								url={ thumbnail }
								dimensions={ {
									width: selectedImage.width,
									height: selectedImage.height,
								} }
								value={ selectedImage.focalPoint || { x: 0.5, y: 0.5 } }
								onChange={ focalPoint => {
									const newGalleryImages = galleryImages;
									newGalleryImages[ selectedIndex ].focalPoint = maybeSnapFocalPoint( focalPoint );
									setAttributes( { galleryImages: newGalleryImages } );
								} }
							/>
						}
					</ControlsTab>
				</ControlsSection>
			}


      <Fragment>
        <LayoutControls { ...props } />
        <ControlsSection label={ __( 'Layout' ) }>
          <ControlsTab label={ __( 'Settings' ) }>
            <RadioControl
              key={ 'slideshow-minimum-height-controls' }
              label={ __( 'Minimum Height', '__plugin_txtd' ) }
              selected={ minHeight }
              onChange={ ( nextMinHeight ) => {
                setAttributes( { minHeight: parseInt( nextMinHeight, 10 ) } );
              } }
              options={ minHeightOptions }
            />
          </ControlsTab>
        </ControlsSection>
      </Fragment>

      {
        'custom' !== source &&
        <ControlsSection label={ __( 'Display' ) } group={ __( 'Block Modules' ) }>
          <ControlsTab label={ __( 'Settings' ) }>
            <ControlsGroup title={ __( 'Set up elements for this block', '__plugin_txtd' ) }>
              <ToggleGroup
                onChange={ setAttributes }
                toggles={ toggles.filter( toggle => {
                  return toggle.attribute !== 'showMedia' &&
                         toggle.attribute !== 'showSubtitle' &&
                         toggle.attribute !== 'showCollectionSubtitle' &&
                         toggle.attribute !== 'showCollectionTitle';
                } ).map( toggle => {
                  return {
                    ...toggle,
                    value: attributes[ toggle.attribute ]
                  }
                } ) }
              />
            </ControlsGroup>
          </ControlsTab>
        </ControlsSection>
      }
		</Fragment>
	);
};

export default SlideshowInspectorControls;
