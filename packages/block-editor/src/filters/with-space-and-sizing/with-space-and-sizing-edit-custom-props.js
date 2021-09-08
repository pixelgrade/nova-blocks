import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../hooks";
import {getCardMediaPaddingTop, getSpacingCSSProps} from "@novablocks/utils";

const withSpaceAndSizingEditCustomProps = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const { attributes } = props;

    const {
      imagePadding,
      contentPadding,
      imageResizing,
      thumbnailAspectRatio,
      layoutGutter
    } = attributes;

    const style = props.style ? props.style : {};

    if ( !! supports?.novaBlocks?.spaceAndSizing ) {

      let spaceAndSizingProps = {
        ...getSpacingCSSProps( attributes ),
        '--card-media-padding': imagePadding,
        '--card-content-padding': contentPadding,
        '--card-media-padding-top': getCardMediaPaddingTop( thumbnailAspectRatio ),
        '--card-media-object-fit': imageResizing === 'cropped' ? 'cover' : 'scale-down',

        '--collection-card-layout-gutter': layoutGutter,

        // ???
        '--supernova-card-content-padding-multiplier': contentPadding / 100,
        '--supernova-card-image-padding-multiplier': imagePadding / 100
      }

      Object.assign( style, spaceAndSizingProps);
    }

    return (
      <OriginalComponent { ...props } style={ style } />
    )
  };
}, "withSpaceAndSizingEditCustomProps" );

export default withSpaceAndSizingEditCustomProps;
