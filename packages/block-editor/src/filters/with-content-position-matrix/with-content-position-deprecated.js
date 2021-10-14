import {isUndefined} from "lodash";

const withContentPositionDeprecated = ( settings ) => {

  if ( ! settings?.supports?.novaBlocks?.contentPosition?.deprecated ) {
    return settings;
  }

  return Object.assign( {}, settings, {
    deprecated: [
      {
        attributes: {
          horizontalAlignment: {
            type: "string",
            default: "center"
          },
          verticalAlignment: {
            type: "string",
            default: "center"
          }
        },
        isEligible( attributes ) {
          return !isUndefined( attributes.horizontalAlignment ) && !isUndefined( attributes.verticalAlignment ) && isUndefined( attributes.contentPosition );
        },
        migrate( oldAttributes ) {
          const {horizontalAlignment, verticalAlignment, ...attributes} = oldAttributes;

          return {
            ...attributes,
            contentPosition: `${verticalAlignment} ${horizontalAlignment}`
          };
        },
        save: settings.save
      }
    ].concat( settings.deprecated ),
  } );
}

export default withContentPositionDeprecated;
