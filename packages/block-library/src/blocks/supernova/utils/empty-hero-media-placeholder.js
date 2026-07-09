export const shouldSuppressEmptyHeroMediaPlaceholder = ( attributes = {}, images = [], parentAttributes = {} ) => {
  const getReferenceAttribute = key => parentAttributes?.[ key ] ?? attributes?.[ key ];
  const referenceAttributes = {
    ...attributes,
    variation: getReferenceAttribute( 'variation' ),
    align: getReferenceAttribute( 'align' ),
    contentType: getReferenceAttribute( 'contentType' ),
    cardLayout: getReferenceAttribute( 'cardLayout' ),
    columns: getReferenceAttribute( 'columns' ),
  };
  const usesManualMedia = ! attributes.mediaSource || attributes.mediaSource === 'manual';

  return usesManualMedia &&
    referenceAttributes.variation === 'novablocks-card-hero' &&
    referenceAttributes.contentType === 'custom' &&
    referenceAttributes.cardLayout === 'stacked' &&
    referenceAttributes.align === 'full' &&
    parseInt( referenceAttributes.columns, 10 ) === 1 &&
    Array.isArray( images ) &&
    images.length === 0;
};
