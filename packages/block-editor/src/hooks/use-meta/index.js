import { useCallback } from "@wordpress/element";
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';

const useMeta = name => {
  const postType = useSelect( ( select ) => select( 'core/editor' ).getCurrentPostType(), [] );
  const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

  if ( ! meta ) {
    const noop = () => {};
    return [ null, noop ];
  }

  const metaFieldValue = meta[ name ];
  const setMetaFieldValue = useCallback( newValue => {
    setMeta( { ...meta, [ name ]: newValue } );
  }, [ meta ] );

  return [ metaFieldValue, setMetaFieldValue ];
};

export default useMeta;
