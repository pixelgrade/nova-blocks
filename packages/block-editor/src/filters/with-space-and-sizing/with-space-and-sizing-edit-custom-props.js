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
        '--nb-card-media-padding': imagePadding,
        '--nb-card-content-padding': contentPadding,
        '--nb-card-media-padding-top': getCardMediaPaddingTop( thumbnailAspectRatio ),
        '--nb-card-media-object-fit': imageResizing === 'cropped' ? 'cover' : 'scale-down',

        '--nb-collection-gutter': layoutGutter,

        // ???
        '--nb-content-padding-multiplier': contentPadding / 100,
        '--nb-image-padding-multiplier': imagePadding / 100
      }

      Object.assign( style, spaceAndSizingProps);
    }

    return (
      <OriginalComponent { ...props } style={ style } />
    )
  };
}, "withSpaceAndSizingEditCustomProps" );

export default withSpaceAndSizingEditCustomProps;
