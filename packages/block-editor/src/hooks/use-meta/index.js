import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';

const useMeta = name => {
  const postType = useSelect( ( select ) => select( 'core/editor' ).getCurrentPostType(), [] );
  const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
  const metaFieldValue = meta[ name ];
  const setMetaFieldValue = useCallback( newValue => {
    setMeta( { ...meta, [ name ]: newValue } );
  }, [] );
  return [ metaFieldValue, setMetaFieldValue ];
}
