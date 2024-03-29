/**
 * WordPress dependencies
 */
import classnames from 'classnames';
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { getColorSignalClassnames } from "@novablocks/utils";
import { useEffect } from "@wordpress/element";

/**
 * Internal dependencies.
 */
const ALLOWED_BLOCKS = [ 'novablocks/logo', 'novablocks/navigation' ];

const withControlsVisibility = Component => {

  return ( props ) => {

    const { setControlsVisibility } = props;

    useEffect( () => {
      setControlsVisibility( {
        'spacing-children-modifier': false,
      } );
    }, [] );

    return (
      <Component { ...props } />
    )
  }
}

const HeaderRowEdit = withControlsVisibility( props => {

  const { attributes } = props;
  const { align, slug } = attributes;

  const blockProps = useBlockProps( {
    className: classnames(
      'nb-header-row',
      {
        [ `nb-header--${ slug }` ]: !! slug
      },
      getColorSignalClassnames( attributes, true ),
      props.className,
      `alignfull`
    ),
    style: props.style,
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
      <div className="nb-header-row__inner-container">
        <div { ...innerBlockProps } className={ fakeBlockClassname } />
      </div>
    </div>
  );
} );

export default HeaderRowEdit;
