import classnames from 'classnames';
import Controls from './controls';
import CollectionLayout from './layout';
import { PostCard } from './components/post';

import { InnerBlocks } from '@wordpress/block-editor';

import { getColorSetClassnames } from '@novablocks/utils';

import {
  withDopplerControls,
} from '@novablocks/doppler';

const SuperNovaEdit = ( props ) => {

  const {
    attributes: {
      sourceType,
    },
    posts,
  } = props;

  if ( sourceType === 'custom' ) {
    return (
      <Collection { ...props }>
        <InnerBlocks
          allowedBlocks={ [ 'novablocks/supernova-item' ] }
          renderAppender={ false }
          templateInsertUpdatesSelection={ false }
        />
      </Collection>
    )
  }

  return (
    <Collection { ...props }>
      { Array.isArray( posts ) && posts.map( post => <PostCard { ...props } post={ post } /> ) }
    </Collection>
  )
}

const Collection = ( props ) => {

  const { attributes } = props;

  const {
    align,
    columnsCount,
    cardMediaOpacity,
    layout,
    itemsWidth,
    sourceType,
  } = attributes;

  const colorSetClassnames = getColorSetClassnames( attributes );

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
    <div className={ `supernova ${ colorSetClassnames }` }>
      <div className={ `supernova__inner-container` }>
        <div className="wp-block" data-align={ align }>
          <div className={ `supernova-collection` } style={ style }>
            <div className={ layoutClassName } data-source={ sourceType }>
              <CollectionLayout { ...props } />
            </div>
          </div>
        </div>
      </div>
      <Controls { ...props } />
    </div>
  )
}

export default withDopplerControls( SuperNovaEdit );
