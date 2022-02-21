import classnames from 'classnames';

import { addFilter } from '@wordpress/hooks';
import { useBlockProps } from "@wordpress/block-editor";
import { select } from "@wordpress/data";

import edit from './edit';

const addNovablocksSupport = ( settings ) => {

  if ( settings.name !== 'core/separator' ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      align: {
        type: "string",
        default: "none",
      }
    },
    supports: {
      ...settings.supports,
      align: [ 'wide', 'full' ],
      novaBlocks: {
        spaceAndSizing: true
      },
    },
    edit,
    save: ( { attributes } ) => {
      const { align } = attributes;
      const className = classnames(
        'wp-block-separator',
        `align${ align }`,
      );
      const settings = select( 'novablocks' ).getSettings();
      const blockProps = useBlockProps.save( {
        className: className
      } );

      return (
        <div { ...blockProps } dangerouslySetInnerHTML={ { __html: settings?.separator?.markup } } />
      )
    }
  }
};

addFilter( 'blocks.registerBlockType', 'novablocks/separator/add-novablocks-support', addNovablocksSupport, 1 );
