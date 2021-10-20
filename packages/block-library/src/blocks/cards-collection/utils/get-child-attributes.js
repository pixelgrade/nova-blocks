const getChildAttributes = attributes => {

  const attributesBlacklist = [
    'useSourceColorAsReference',
    'colorSignal',
    'paletteVariation',
    'contentColorSignal',
    'contentPaletteVariation',
    'defaultsGenerated',
    'images',
    'title',
    'subtitle',
  ];

  const attributeKeys = Object.keys( attributes ).filter( key => ! attributesBlacklist.includes( key ) );
  const newAttributes = {};

  attributeKeys.forEach( key => {
    newAttributes[ key ] = attributes[ key ]
  } );

  return newAttributes;

}

export default getChildAttributes;
