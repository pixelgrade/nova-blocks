export const normalizeAttributes = ( newAttributes, attributes ) => {

  const atts = {
    ...attributes,
    ...newAttributes
  };

  atts.featuresize = clamp( atts.featuresize, getMinFeatureSize( atts ), getMaxFeatureSize( atts ) );
  atts.featureposition = clamp( atts.featureposition, getMinFeaturePosition( atts ), getMaxFeaturePosition( atts ) );
  atts.fragmentation = clamp( atts.fragmentation, getMinColumnsFragmentation( atts ), getMaxColumnsFragmentation( atts ) );

  return atts;
};
