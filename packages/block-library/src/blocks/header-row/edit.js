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
    attributes,
    className,
    colorSignal: {
      utils: {
        getColorSignalClassnames
      }
    }
  } = props;

  const {
    align,
  } = attributes;

  const classNames = classnames(
    'novablocks-header-row',
    getColorSignalClassnames( attributes, true ),
    className,
  );

  return (
    <div className={ classNames }>
      <div className="novablocks-header-row__inner-container">
        <div className="wp-block" data-align={ align }>
          <InnerBlocks
            allowedBlocks={ ALLOWED_BLOCKS }
            renderAppender={ false }
            templateLock="insert"
          />
        </div>
      </div>
    </div>

  );
};

export default HeaderRowEdit;
