export const getExternalLayoutParticipant = ( attributes = {}, recipes = [] ) => {
  const activeRecipe = Array.isArray( recipes )
    ? recipes.find( recipe => recipe?.id === attributes.layoutRecipe && recipe?.baseLayout === attributes.layoutStyle )
    : null;

  if (
    attributes.layoutStyle !== 'masonry' ||
    attributes.headerIntegration !== 'grid-item' ||
    ! activeRecipe?.capabilities?.headerIntegration
  ) {
    return null;
  }

  return {
    id: 'site-header',
    role: 'site-header-proxy',
  };
};

const ExternalLayoutParticipant = ( { attributes, recipes } ) => {
  const participant = getExternalLayoutParticipant( attributes, recipes );

  if ( ! participant ) {
    return null;
  }

  return (
    <div
      className="nb-collection__layout-item nb-collection__layout-item--external"
      data-nb-collection-item-role={ participant.role }
      data-nb-external-participant={ participant.id }
      hidden
      aria-hidden="true"
      style={ { height: 'var(--nb-external-participant-height, 0px)' } }
    />
  );
};

export default ExternalLayoutParticipant;
