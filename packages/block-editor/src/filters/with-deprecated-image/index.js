import classnames from "classnames";
import { Children, cloneElement, isValidElement } from "@wordpress/element";
import { addFilter } from "@wordpress/hooks";

const getLegacyImageClassName = ( id ) => {
  const numericId = Number( id );

  if ( Number.isNaN( numericId ) ) {
    return "";
  }

  return `wp-image-${ numericId }`;
};

const withLegacyImageClass = ( element, legacyClassName ) => {
  if ( ! isValidElement( element ) ) {
    return element;
  }

  const nextChildren = Children.map(
    element.props?.children,
    ( child ) => withLegacyImageClass( child, legacyClassName )
  );

  const nextProps = {};

  if ( typeof nextChildren !== "undefined" ) {
    nextProps.children = nextChildren;
  }

  if ( element.type === "img" ) {
    nextProps.className = classnames(
      element.props?.className,
      legacyClassName
    );
  }

  return cloneElement( element, nextProps );
};

const withLegacyImageAttributes = ( blockAttributes, blockType, innerHTML ) => {
  if ( blockType?.name !== "core/image" || typeof innerHTML !== "string" ) {
    return blockAttributes;
  }

  if ( ! Number.isNaN( Number( blockAttributes?.id ) ) ) {
    return blockAttributes;
  }

  const matches = innerHTML.match( /\bwp-image-(\d+)\b/ );

  if ( ! matches?.[1] ) {
    return blockAttributes;
  }

  return Object.assign( {}, blockAttributes, { id: Number( matches[1] ) } );
};

const addDeprecatedImage = ( settings, name ) => {
  if ( name !== "core/image" || typeof settings?.save !== "function" ) {
    return settings;
  }

  const deprecated = Array.isArray( settings.deprecated )
    ? settings.deprecated
    : [];

  return Object.assign( {}, settings, {
    deprecated: [
      {
        attributes: settings.attributes,
        isEligible: ( attributes ) => {
          return !! getLegacyImageClassName( attributes?.id );
        },
        save( props ) {
          const legacyClassName = getLegacyImageClassName( props?.attributes?.id );
          return withLegacyImageClass( settings.save( props ), legacyClassName );
        },
      },
    ].concat( deprecated ),
  } );
};

addFilter( "blocks.registerBlockType", "novablocks/deprecate-image", addDeprecatedImage );
addFilter(
  "blocks.getBlockAttributes",
  "novablocks/deprecate-image-attributes",
  withLegacyImageAttributes
);
