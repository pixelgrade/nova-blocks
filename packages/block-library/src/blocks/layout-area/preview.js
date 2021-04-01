import classnames from 'classnames';

import { Inserter, InnerBlocks, ButtonBlockerAppender } from '@wordpress/block-editor';
import { IconButton } from '@wordpress/components';

const TEMPLATE = [
  [
    'core/paragraph', { content: 'For example, car dealers have websites packed with details about the cars they sell and the services they provide. All of their core web content is meant to encourage potential customers to buy a car or come and get their vehicle serviced.'},
  ]
];

const LayoutAreaPreview = function( props ) {
  const {
    attributes,
    className
  } = props;

  const { lastItemIsSticky } = attributes;

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
      />
    </div>
  )
}

export default LayoutAreaPreview;
