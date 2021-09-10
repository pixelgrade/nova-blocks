const PostsCollection = props => {

  const { posts, ...passedProps } = props;

  if ( ! Array.isArray( posts ) ) {
    return null;
  }

  return (
    <Collection { ...props }>

    </Collection>
  )
}

export default PostsCollection;
