import { useCallback } from "@wordpress/element";
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';

const useMeta = name => {
  const noop = () => {};

  const postType = useSelect( ( select ) => select( 'core/editor' )?.getCurrentPostType(), [] );
  if ( ! postType ) {
    return [ null, noop ];
  }

  const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
  if ( ! meta ) {
    return [ null, noop ];
  }

  const metaFieldValue = meta[ name ];
  const setMetaFieldValue = useCallback( newValue => {
    setMeta( { ...meta, [ name ]: newValue } );
  }, [ meta ] );

  return [ metaFieldValue, setMetaFieldValue ];
};

export default useMeta;
