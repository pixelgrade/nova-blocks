const removeCoreColorStyles = ( style ) => {
  if ( ! style || 'object' !== typeof style || Array.isArray( style ) ) {
    return style;
  }

  const nextStyle = { ...style };
  delete nextStyle.color;

  if ( nextStyle.elements && 'object' === typeof nextStyle.elements ) {
    const nextElements = { ...nextStyle.elements };

    if ( nextElements.link && 'object' === typeof nextElements.link ) {
      const nextLink = { ...nextElements.link };
      delete nextLink.color;

      if ( Object.keys( nextLink ).length ) {
        nextElements.link = nextLink;
      } else {
        delete nextElements.link;
      }
    }

    if ( Object.keys( nextElements ).length ) {
      nextStyle.elements = nextElements;
    } else {
      delete nextStyle.elements;
    }
  }

  return Object.keys( nextStyle ).length ? nextStyle : undefined;
};

/**
 * Build the one-step attribute patch that transfers color ownership from
 * core's inline color tools to Color Signal.
 *
 * @param {Object} attributes Current full block attributes.
 * @param {Object|boolean} colorSignalSupport Block Color Signal support.
 * @returns {Object} Attributes to merge into the explicit user update.
 */
export const getColorSignalAdoptionAttributes = ( attributes = {}, colorSignalSupport = {} ) => {
  const activationAttribute = colorSignalSupport?.activationAttribute;
  const shouldClearCoreColors = true === colorSignalSupport?.clearCoreColorsOnChange;
  const patch = {};

  if ( activationAttribute ) {
    patch[ activationAttribute ] = true;
  }

  if ( ! shouldClearCoreColors ) {
    return patch;
  }

  Object.assign( patch, {
    backgroundColor: undefined,
    textColor: undefined,
    gradient: undefined,
  } );

  if ( Object.prototype.hasOwnProperty.call( attributes, 'style' ) ) {
    patch.style = removeCoreColorStyles( attributes.style );
  }

  return patch;
};
