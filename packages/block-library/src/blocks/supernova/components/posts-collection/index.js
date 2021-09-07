const PostsCollection = props => {

  const { posts, ...passedProps } = props;

  if ( ! Array.isArray( posts ) ) {
    return null;
  }

  return (
    <Collection { ...props }>
      { posts.map( post => <PostCard { ...passedProps } post={ post } /> ) }
    </Collection>
  )
}

export default PostsCollection;
