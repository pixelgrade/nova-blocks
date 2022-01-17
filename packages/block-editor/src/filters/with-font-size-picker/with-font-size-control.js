import { Fragment } from "@wordpress/element";
import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorControls } from "@wordpress/block-editor";

import { FontSizePicker } from '../../components';

import { BLOCKS_WITH_FONT_SIZE_CONTROL, replaceActiveFontSize } from "./utils";

const { DEFAULT_FONT_SIZE, FONT_SIZE_OPTIONS } = FontSizePicker;

const withFontSizePicker = ( WrappedComponent ) => {

  return ( props ) => {

    const {
      attributes: {
        className,
        fontSize,
        level,
      },
      setAttributes,
    } = props;

    const selectValue = FONT_SIZE_OPTIONS.find( x => x.value === fontSize ) ? fontSize : DEFAULT_FONT_SIZE;

    return (
      <Fragment>
        <WrappedComponent { ...props } />
        <InspectorControls>
          <PanelBody title={ __( 'Text Settings', '__plugin_txtd' ) } className="blocks-custom-font-size">
            <FontSizePicker
              value={ selectValue }
              onChange={ nextFontSize => {
                setAttributes( {
                  fontSize: nextFontSize,
                  className: replaceActiveFontSize( className, fontSize, nextFontSize )
                } );
              }
              } />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    )
  }
}

export const withFontSizeControl = createHigherOrderComponent( OriginalComponent => {

  const BetterComponent = withFontSizePicker( OriginalComponent );

  return ( props ) => {

    if ( ! BLOCKS_WITH_FONT_SIZE_CONTROL.includes( props.name ) ) {
      return <OriginalComponent { ...props } />
    }

    return <BetterComponent { ...props } />;
  };

}, 'withFontSizeControl' );
