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
import HeaderRowInspectorControls from './inspector-controls';
import { getHeaderRowLayoutClassnames, getHeaderRowLayoutStyle } from './layout-classes';

// `core/site-logo` is the inline-editable logo going forward; `novablocks/logo`
// stays allowed so existing headers (serialized with it) keep working.
const ALLOWED_BLOCKS = [
  'core/site-logo',
  'novablocks/logo',
  'novablocks/site-identity',
  'novablocks/navigation',
];

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
        // Match the PHP render (`nb-header-row--{slug}`) so slug-scoped rules
        // (skin rhythm, primary-row spacing) apply in the editor canvas too.
        [ `nb-header-row--${ slug }` ]: !! slug
      },
      getHeaderRowLayoutClassnames( attributes ),
      getColorSignalClassnames( attributes, true ),
      props.className,
      `alignfull`
    ),
    style: {
      ...props.style,
      ...getHeaderRowLayoutStyle( attributes ),
    },
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
      <HeaderRowInspectorControls { ...props } />
      <div className="nb-header-row__inner-container">
        <div { ...innerBlockProps } className={ fakeBlockClassname } />
      </div>
    </div>
  );
} );

export default HeaderRowEdit;
