/**
 * WordPress dependencies
 */
import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { getColorSignalClassnames } from "@novablocks/utils";

const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps ?? wp.blockEditor.__experimentalUseInnerBlocksProps;

/**
 * Internal dependencies.
 */
const ALLOWED_BLOCKS = [ 'novablocks/logo', 'novablocks/navigation' ];

const HeaderRowEdit = function( props ) {

  const { attributes } = props;
  const { align } = attributes;

  const blockProps = useBlockProps( {
    className: classnames(
      'novablocks-header-row',
      getColorSignalClassnames( attributes, true ),
      props.className,
    )
  } );

  const fakeBlockClassname = classnames(
    'wp-block',
    `align${ align }`
  );

  const innerBlockProps = useInnerBlocksProps( {}, {
    allowedBlocks: ALLOWED_BLOCKS,
    renderAppender: false,
    templateLock: 'insert'
  } );

  return (
    <div { ...blockProps }>
      <div className="novablocks-header-row__inner-container">
        <div { ...innerBlockProps } className={ fakeBlockClassname } />
      </div>
    </div>

  );
};

export default HeaderRowEdit;
