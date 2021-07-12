import classnames from 'classnames';

import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

export const addSeparatorFilters = ( settings ) => {

  const separatorMarkup = settings?.separator?.markup;

	const Separator = ( props ) => {

	  const useBlockProps = wp.blockEditor.useBlockProps;
    const className = classnames(
      'wp-block-separator',
      props.className
    );

	  if ( typeof useBlockProps !== "undefined" ) {
      const blockProps = useBlockProps( {
        className: className,
      } );

      return <div { ...blockProps } dangerouslySetInnerHTML={ { __html: separatorMarkup } } />
    }

    return <div className={ className } dangerouslySetInnerHTML={ { __html: separatorMarkup } } />
	};

	const replaceSeparatorEdit = createHigherOrderComponent( ( BlockEdit ) => {
		return ( props ) => {
			if ( 'core/separator' === props.name ) {
				return <Separator className={ props.attributes.className } />;
			} else {
				return <BlockEdit { ...props } />;
			}
		}
	}, "replaceSeparatorEdit" );

	const replaceSeparatorSave = ( element, blockType, attributes ) => {
		if ( 'core/separator' === blockType.name ) {
      return <div className={ `wp-block-separator ${ attributes.className }` } dangerouslySetInnerHTML={ { __html: separatorMarkup } } />
		}

    return element;
	};

	addFilter( 'editor.BlockEdit', 'nova-theme/separator', replaceSeparatorEdit );
	addFilter( 'blocks.getSaveElement', 'nova-theme/separator', replaceSeparatorSave );
};
