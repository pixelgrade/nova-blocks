export const INITIAL_QUERY_ITEMS_COUNT_SYNC = Object.freeze( { postsToShow: undefined, perPage: undefined } );

/**
 * Reconciles a Posts Collection's Items Count (`postsToShow`) with its parent
 * Query Loop's `perPage`.
 *
 * Inside a Query the frontend is governed by the Query: PHP merges
 * `build_query_vars_from_query_block()` (or the global query when
 * `inherit` is on) over `postsToShow`. So `postsToShow` is the editor's mirror
 * of `perPage`, and only the user moving Items Count is an edit of the Query.
 *
 * - First reconciliation (opening saved content): a disagreement is resolved
 *   by mirroring `perPage` into `postsToShow` as a NON-persistent change. The
 *   editor preview then matches the frontend, and merely opening a page or
 *   template never dirties it (#543). Writing `perPage` here changed the
 *   frontend on the next unrelated save.
 * - `perPage` moved: mirror it, non-persistently. Core's Query edit normalizes
 *   an inherited Query's `perPage` to the Reading setting through a
 *   non-persistent change; a persistent mirror turned that into a phantom edit.
 *   When the user changed `perPage`, their own change already dirties the post,
 *   and the mirrored value is serialized with it.
 * - Items Count moved: write it into the Query as a real edit. It wins when both
 *   sides moved, so the two effects can never swap values back and forth.
 *
 * @param {{postsToShow: number|undefined, perPage: number|undefined}} lastSynced The last reconciled pair.
 * @param {number|string} postsToShowValue Supernova's `postsToShow`.
 * @param {number|string} perPageValue     The Query's `perPage`.
 * @return {{lastSynced: Object, write: null|{attribute: string, value: number, persistent: boolean}}}
 */
export const getQueryItemsCountSync = ( lastSynced, postsToShowValue, perPageValue ) => {
  const postsToShow = parseInt( postsToShowValue, 10 );
  const perPage = parseInt( perPageValue, 10 );
  const hasPostsToShow = Number.isFinite( postsToShow );
  const hasPerPage = Number.isFinite( perPage );
  const isFirstSync = lastSynced.postsToShow === undefined && lastSynced.perPage === undefined;
  const current = {
    postsToShow: hasPostsToShow ? postsToShow : undefined,
    perPage: hasPerPage ? perPage : undefined,
  };

  if ( ! hasPostsToShow || ! hasPerPage || postsToShow === perPage ) {
    return { lastSynced: current, write: null };
  }

  const settled = value => ( { postsToShow: value, perPage: value } );

  if ( ! isFirstSync && postsToShow !== lastSynced.postsToShow ) {
    return {
      lastSynced: settled( postsToShow ),
      write: { attribute: 'perPage', value: postsToShow, persistent: true },
    };
  }

  if ( isFirstSync || perPage !== lastSynced.perPage ) {
    return {
      lastSynced: settled( perPage ),
      write: { attribute: 'postsToShow', value: perPage, persistent: false },
    };
  }

  return { lastSynced: current, write: null };
};
