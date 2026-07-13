/**
 * The REST posts collection used by the editor keeps date order when the
 * Query Loop leaves its sticky option at the default. WP_Query promotes
 * sticky posts on the first frontend page, so mirror that stable partition
 * without mutating the records owned by the core data store.
 */
export const orderEditorPostsLikeFrontend = ( posts, { page = 1, sticky } = {} ) => {
  if ( ! Array.isArray( posts ) || posts.length < 2 || Number.parseInt( page, 10 ) !== 1 || sticky ) {
    return posts;
  }

  const stickyPosts = posts.filter( post => post.sticky === true );

  if ( ! stickyPosts.length ) {
    return posts;
  }

  return [
    ...stickyPosts,
    ...posts.filter( post => post.sticky !== true ),
  ];
};
