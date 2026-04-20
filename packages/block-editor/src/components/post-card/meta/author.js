import { useSelect } from '@wordpress/data';

const Author = ( props ) => {
  const { userId } = props;

  const author = useSelect(
    ( select ) => userId ? select( 'core' ).getUser( userId ) : null,
    [ userId ],
  );

  if ( ! userId ) {
    return '';
  }

  return author?.name || '';

};

export default Author;
