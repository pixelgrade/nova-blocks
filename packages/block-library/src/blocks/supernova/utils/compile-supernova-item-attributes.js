const compileSupernovaItemAttributes = ( parentAttributes ) => {

  const {
    title,
    subtitle,
    contentColorSignal,
    contentPaletteVariation,
    contentType,
    ...innerBlocksAttributes
  } = parentAttributes;

  return Object.assign( {}, innerBlocksAttributes, {
    colorSignal: contentColorSignal,
    paletteVariation: contentPaletteVariation,
    useSourceColorAsReference: false,
  } );
}

export default compileSupernovaItemAttributes;
