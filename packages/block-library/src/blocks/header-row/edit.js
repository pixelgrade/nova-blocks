/**
 * WordPress dependencies
 */
import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies.
 */
const ALLOWED_BLOCKS = [ 'novablocks/logo', 'novablocks/navigation' ];

const HeaderRowEdit = function( props ) {
  const {
    className,
  } = props;

  const classNames = classnames(
    'site-header__row',
    className,
  );

  return (
    <div className={ classNames }>
      <InnerBlocks
        allowedBlocks={ ALLOWED_BLOCKS }
        renderAppender={ false }
        templateLock = 'insert'
      />
    </div>

  );
};

export default HeaderRowEdit;
