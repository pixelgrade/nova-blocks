import classnames from 'classnames';
import Controls from './controls';

import { PostContent } from './components/post/index';

import { Fragment } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

import {
  withDopplerContext,
  withDopplerControls,
  withDopplerProvider,
} from '@novablocks/doppler';

const SuperNovaEdit = ( props ) => {

  const { posts } = props;

  return (
    <Fragment>
      <Collection { ...props }>
        { Array.isArray( posts ) && posts.map( post => <PostCard { ...props } post={ post } /> ) }
      </Collection>
      <Controls { ...props } />
    </Fragment>
  )
}

const sanitizeMediaResponse = ( mediaObject ) => {

  return {
    type: mediaObject?.media_type,
    width: mediaObject?.media_details?.width,
    height: mediaObject?.media_details?.height,
    src: mediaObject?.source_url,
  }
};

const PostCard = withSelect( ( select, ownProps ) => {
  const { getMedia } = select( 'core' );
  const { featured_media } = ownProps.post;

  if ( ! featured_media ) {
    return null;
  }

  const mediaObject = getMedia( featured_media );

  if ( ! mediaObject ) {
    return {};
  }

  return {
    media: sanitizeMediaResponse( mediaObject )
  }
} )( ( props ) => {

  return (
    <Card layout={ props?.attributes?.cardLayout } { ...props }>
      <PostContent { ...props } />
    </Card>
  )
} );

const Collection = ( props ) => {

  const {
    attributes: {
      columnsCount,
      itemsWidth,
      cardMediaOpacity,
    },
    children,
  } = props;

  const layoutClassName = classnames(
    `supernova-collection__layout`,
    `supernova-collection__layout--${ itemsWidth }-width`,
  );

  const style = {
    '--collection-columns-count': columnsCount,
    '--collection-card-media-opacity': cardMediaOpacity / 100,
  };

  return (
    <div className={ `supernova-collection` }>
      <div className={ layoutClassName } style={ style }>
        {
          Array.isArray( children ) && children.map( child => {
            return (
              <div className={ "supernova-collection__layout-item" }>
                { child }
              </div>
            );
          } )
        }
      </div>
    </div>
  )
}

const Card = ( props ) => {

  const {
    layout,
    media,
    attributes: {
      palette,
      paletteVariation
    },
  } = props;

  const className = classnames(
    `supernova-card`,
    `supernova-card--layout-${ layout }`,
    `sm-palette-${ palette }`,
    `sm-variation-${ paletteVariation }`,
  );

  return (
    <div className={ className }>
      {
        media &&
        <div className={ `supernova-card__media-wrapper` }>
          <CardMedia media={ media } { ...props } />
        </div>
      }
      <div className={ `supernova-card__content` }>{ props.children }</div>
    </div>
  );
}

const withDopplerContextAndProvider = compose([
  withDopplerProvider,
  withDopplerContext,
]);

const CardMedia = withDopplerContextAndProvider( ( props ) => {

  const {
    media: {
      type,
      width,
      height,
      src,
    }
  } = props;

  return (
    <div className={ `novablocks-mask` }>
      <img className={ `supernova-card__media` } src={ src } width={ width } height={ height } style={ props?.parallax?.style } />
    </div>
  );
} );

export default withDopplerControls( SuperNovaEdit );
