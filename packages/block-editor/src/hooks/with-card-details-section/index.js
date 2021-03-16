import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";

import {
  PanelRow,
  RadioControl,
  RangeControl,
  ToggleControl,
} from '@wordpress/components';

import {
  getControlsClasses,
  getAspectRatioAttributes,
  getLevelAttributes,
} from "@novablocks/utils";

import {
  ControlsGroup,
  ControlsSection,
  ControlsTab,
  HeadingToolbar
} from "../../components";

const ALLOWED_BLOCKS = [
  'novablocks/posts-collection',
  'novablocks/supernova'
];

const CardDetailsSection = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    level, // title starting level
    collectionTitleLevel,
    cardTitleLevel,

    metadataPosition,

    thumbnailAspectRatioString,
    thumbnailAspectRatio,

    imageResizing,
    imagePadding,
  } = attributes;

  return (
    <ControlsSection label={ __( 'Card Details' ) }>
      <ControlsTab label={ __( 'Customize' ) }>
        <ControlsGroup title={ __( 'Thumbnail Aspect Ratio' ) }>

          <div key={ 'thumbnail-aspect-ratio-customize-1' } className={ getControlsClasses( attributes, getAspectRatioAttributes ) }>
            <RadioControl
              key={ 'thumbnail-aspect-ratio' }
              selected={ thumbnailAspectRatioString }
              onChange={ thumbnailAspectRatioString => {
                let thumbnailAspectRatio = thumbnailAspectRatio;

                if ( thumbnailAspectRatioString === 'landscape' ) {
                  thumbnailAspectRatio = 45;
                }

                if ( thumbnailAspectRatioString === 'portrait' ) {
                  thumbnailAspectRatio = 65;
                }

                setAttributes( {
                  thumbnailAspectRatio,
                  thumbnailAspectRatioString
                } );
              } }
              options={ [
                { label: 'Landscape', value: 'landscape' },
                { label: 'Portrait', value: 'portrait' },
                { label: 'Auto', value: 'auto' },
              ] }
            />
          </div>

          <div key={ 'title-level-customize-1' } className={ getControlsClasses( attributes, getLevelAttributes ) }>
            <PanelRow>
              <span>{__( 'Title Starting Size', '__plugin_txtd' )}</span>
              <HeadingToolbar
                minLevel={ 2 }
                maxLevel={ 4 }
                selectedLevel={ level }
                onChange={ level => {
                  const newAttributes = getLevelAttributes( { ...attributes, level } );
                  setAttributes( newAttributes );
                } }
              />
            </PanelRow>
          </div>

        </ControlsGroup>
      </ControlsTab>
      <ControlsTab label={ __( 'Settings' ) }>
        <ControlsGroup title={ __( 'Thumbnail' ) }>
          <ToggleControl
            label={ __( 'Enable Image Container Editing' ) }
            checked={ thumbnailAspectRatioString !== 'auto' }
            onChange={ newValue => {
              let currentOrientation = thumbnailAspectRatio < 50 ? 'landscape' : 'portrait';
              let thumbnailAspectRatioString = ! newValue ? 'auto' : currentOrientation;
              setAttributes( { thumbnailAspectRatioString } );
            } }
          />
          {
            thumbnailAspectRatioString !== 'auto' &&
            <Fragment>
              <RangeControl
                key={ 'collection-image-container-height' }
                label={ __( 'Image container height', '__plugin_txtd' ) }
                value={ thumbnailAspectRatio }
                onChange={ thumbnailAspectRatio => {
                  setAttributes( {
                    thumbnailAspectRatio,
                    thumbnailAspectRatioString: thumbnailAspectRatio < 50 ? 'landscape' : 'portrait'
                  } )
                } }
                min={ 0 }
                max={ 100 }
                step={ 5 }
              />
              <RadioControl
                key={ 'collection-image-resizing' }
                label={ __( 'Image resizing' ) }
                selected={ imageResizing }
                onChange={ imageResizing => {
                  setAttributes( { imageResizing } )
                } }
                options={ [
                  { label: 'Stretch to fill the container', value: 'cropped' },
                  { label: 'Shrink to fit (no crop)', value: 'original' },
                ] }
              />
            </Fragment>
          }
          <RangeControl
            key={ 'collection-image-padding' }
            label={ __( 'Image padding', '__plugin_txtd' ) }
            value={ imagePadding }
            onChange={ imagePadding => {
              setAttributes( { imagePadding } )
            } }
            min={ 0 }
            max={ 100 }
            step={ 50 }
          />
        </ControlsGroup>
        <ControlsGroup title={ __( 'Content' ) }>
          <PanelRow>
            <span className={'components-base-control__label '}>{__( 'Collection Title Heading', '__plugin_txtd' )}</span>
            <HeadingToolbar
              minLevel={ 1 }
              maxLevel={ 5 }
              selectedLevel={ collectionTitleLevel }
              onChange={ collectionTitleLevel => {
                setAttributes( { collectionTitleLevel } );
              } }
            />
          </PanelRow>
          <PanelRow>
            <span className={'components-base-control__label '}>{__( 'Card Title Heading', '__plugin_txtd' )}</span>
            <HeadingToolbar
              minLevel={ 1 }
              maxLevel={ 5 }
              selectedLevel={ cardTitleLevel }
              onChange={ cardTitleLevel => {
                setAttributes( { cardTitleLevel } );
              } }
            />
          </PanelRow>
        </ControlsGroup>
        <ControlsGroup title={ __( 'Metadata Position' ) }>
          <RadioControl
            key={ 'collection-image-resizing' }
            selected={ metadataPosition }
            onChange={ metadataPosition => {
              setAttributes( { metadataPosition } )
            } }
            options={ [
              { label: 'Above Title', value: 'above-title' },
              { label: 'Below Title', value: 'below-title' },
              { label: 'Split (Above Title / Below Content)', value: 'split' },
            ] }
          />
        </ControlsGroup>
      </ControlsTab>
    </ControlsSection>
  )
}

const withCardDetailsControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    if ( ! ALLOWED_BLOCKS.includes( props.name ) ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <OriginalComponent { ...props } />
        <CardDetailsSection { ...props } />
      </Fragment>
    );
  };
} );

addFilter( 'editor.BlockEdit', 'novablocks/with-card-details', withCardDetailsControls );
