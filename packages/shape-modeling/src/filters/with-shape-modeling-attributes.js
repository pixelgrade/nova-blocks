import attributes from "../attributes.json";

function withShapeModelingAttributes( settings ) {

  const support = settings?.supports?.novaBlocks?.shapeModeling

  if ( support !== true && support?.attributes !== true ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributes
    }
  };
}

export default withShapeModelingAttributes;
