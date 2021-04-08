import classnames from 'classnames';

import { InnerBlocks } from '@wordpress/block-editor';
import { dispatch, select } from '@wordpress/data';

const { getBlockRootClientId } = select( 'core/block-editor' );
const { selectBlock } = dispatch( 'core/editor' );

const TEMPLATE = [
  [
    'core/paragraph', { content: 'For example, car dealers have websites packed with details about the cars they sell and the services they provide. All of their core web content is meant to encourage potential customers to buy a car or come and get their vehicle serviced.'},
  ]
];



const LayoutAreaPreview = function( props ) {
  const {
    attributes,
    className,
    clientId,
    isSelected
  } = props;

  const parentClientId = getBlockRootClientId( clientId );

  const { lastItemIsSticky } = attributes;

  if ( isSelected ) {
    selectBlock(parentClientId);
  }

  const classNames = classnames(
    className,
    {
      'last-block-is-sticky' : lastItemIsSticky === true
    }
  )

  return (
    <div className={classNames}>
      <InnerBlocks
        template={TEMPLATE}
        templateLock ={false}
      />
    </div>
  )
}

export default LayoutAreaPreview;
