import attributes from '../attributes';

function withMediaCompositionAttributes( settings ) {

  const mediaCompositionSupport = settings?.supports?.novaBlocks?.mediaComposition;

  if ( mediaCompositionSupport !== true && mediaCompositionSupport?.attributes !== true ) {
		return settings;
	}

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributes,
    }
  };
}

export default withMediaCompositionAttributes;
