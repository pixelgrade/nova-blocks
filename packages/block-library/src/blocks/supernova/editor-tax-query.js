const RELATION_KEYS = [ 'include', 'exclude' ];

const buildRestTaxQueryParams = ( termsByTaxonomy, taxonomies, suffix = '' ) => {
  return Object.entries( termsByTaxonomy || {} ).reduce( ( accumulator, [ taxonomySlug, termIds ] ) => {
    const taxonomy = taxonomies?.find( ( { slug } ) => slug === taxonomySlug );

    if ( taxonomy?.rest_base && termIds?.length ) {
      accumulator[ taxonomy.rest_base + suffix ] = termIds;
    }

    return accumulator;
  }, {} );
};

/**
 * Build the REST API term filters for the editor posts preview from a Query
 * block `taxQuery` attribute, using the taxonomies' `rest_base` as keys.
 *
 * Since WordPress 7.0 the Query block stores term filters nested under
 * `include` / `exclude`; older content keeps the flat `{ taxonomy: [termIds] }`
 * map. Mirror core's `build_query_vars_from_query_block()` detection so the
 * preview filters posts exactly like the frontend query: any key outside
 * include/exclude means the legacy format, and empty term lists apply no filter.
 */
export const buildEditorRestTaxQuery = ( taxQuery, taxonomies ) => {
  if ( ! taxQuery || typeof taxQuery !== 'object' ) {
    return {};
  }

  const isLegacyFormat = Object.keys( taxQuery ).some( key => ! RELATION_KEYS.includes( key ) );

  if ( isLegacyFormat ) {
    return buildRestTaxQueryParams( taxQuery, taxonomies );
  }

  return {
    ...buildRestTaxQueryParams( taxQuery.include, taxonomies ),
    ...buildRestTaxQueryParams( taxQuery.exclude, taxonomies, '_exclude' ),
  };
};
