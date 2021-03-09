import classnames from 'classnames';
import Controls from './controls';
import CollectionLayout from './layout';
import { PostCard } from './components/post';

import { Fragment } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

import {
  withDopplerControls,
} from '@novablocks/doppler';

const SuperNovaEdit = ( props ) => {

  const {
    attributes: {
      itemsCount
    },
    clientId,
    posts,
  } = props;


  const { count } = useSelect( ( select ) => {
    return {
      count: select( 'core/block-editor' ).getBlockCount( clientId ),
    };
  }, [ clientId ] );

  if ( true ) {
    return (
      <Fragment>
        <Collection { ...props }>
          <InnerBlocks />
        </Collection>
        <Controls { ...props } />
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Collection { ...props }>
        { Array.isArray( posts ) && posts.map( post => <PostCard { ...props } post={ post } /> ) }
      </Collection>
      <Controls { ...props } />
    </Fragment>
  )
}

const Collection = ( props ) => {

  const {
    attributes: {
      columnsCount,
      cardMediaOpacity,
      layout,
      itemsWidth,
    },
  } = props;

  const layoutClassName = classnames(
    `supernova-collection__layout`,
    `supernova-collection__layout--${ layout }`,
    `supernova-collection__layout--${ itemsWidth }-width`,
  );

  const style = {
    '--collection-columns-count': columnsCount,
    '--collection-card-media-opacity': cardMediaOpacity / 100,
  };

  return (
    <div className={ `supernova-collection` } style={ style }>
      <div className={ layoutClassName }>
        <CollectionLayout { ...props } />
      </div>
    </div>
  )
}

export default withDopplerControls( SuperNovaEdit );
