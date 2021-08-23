import attributes from "./attributes.json";

const withLatestPostsAttributes = settings => {

  if ( ! settings?.supports?.novaBlocks?.latestPosts ) {
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

export default withLatestPostsAttributes;
