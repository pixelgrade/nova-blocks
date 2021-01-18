import classnames from 'classnames';

import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

export const addSeparatorFilters = ( settings ) => {

	const Separator = ( props ) => {

	  const useBlockProps = wp.blockEditor.useBlockProps;

	  if( typeof useBlockProps !== "undefined" ) {
      const blockProps = useBlockProps( {
        className: classnames( {
            className: 'wp-block-separator',
          }
        ),
      } );

      return (
        <div { ...blockProps } dangerouslySetInnerHTML={ {
          __html: settings.separator && settings.separator.markup
        } }>
        </div>
      );
    } else {
        const className = classnames(
          'wp-block-separator',
          props.className
        );

        return (
          <div className={ className } dangerouslySetInnerHTML={ {
            __html: settings.separator && settings.separator.markup
          } }>
          </div>
        );
    }
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
		if ( 'core/separator' !== blockType.name ) {
			return element;
		}

		return null;
	};

	addFilter( 'editor.BlockEdit', 'nova-theme/separator', replaceSeparatorEdit );
	addFilter( 'blocks.getSaveElement', 'nova-theme/separator', replaceSeparatorSave );
};
