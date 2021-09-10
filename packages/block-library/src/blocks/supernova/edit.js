import classnames from "classnames";
import { Fragment } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";

import { CollectionHeader } from "@novablocks/collection";
import { useInnerBlocks } from "@novablocks/block-editor";

import BlockControls from './block-controls';

import {
  CollectionLayout,
  SupernovaItemPreview,
} from './components';

import { withPreviewAttributes } from './utils';

const SupernovaEdit = props => {

  return (
    <Fragment>
      <SupernovaPreview { ...props } />
      <BlockControls { ...props } />
    </Fragment>
  )
}

const SupernovaPreview = withPreviewAttributes( props => {

  const {
    attributes,
    clientId,
  } = props;

  const {
    align,
    headerPosition,
    showCollectionTitle,
    showCollectionSubtitle,

    cardMediaOpacity,
  } = attributes;

  const innerBlocks = useInnerBlocks( clientId );

  const className = classnames(
    props.className,
    'supernova',
    'alignfull'
  );

  const blockProps = useBlockProps( {
    className: className,
    style: {
      ...props.style,
      '--collection-card-media-opacity': cardMediaOpacity / 100,
    },
  } );

  return (
    <div { ...blockProps }>
      <div className={ `wp-block__inner-container` }>
        {
          headerPosition === 0 && ( showCollectionTitle || showCollectionSubtitle ) &&
          <div className="wp-block" data-align={ align }>
            <CollectionHeader { ...props } />
          </div>
        }

        <div className="wp-block" data-align={ align }>
          <CollectionLayout { ...props }>
            { innerBlocks.map( innerBlock => <SupernovaItemPreview { ...innerBlock } /> ) }
          </CollectionLayout>
        </div>
      </div>
    </div>
  );
} );

export default SupernovaEdit;
