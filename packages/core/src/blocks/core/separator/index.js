import classnames from 'classnames';

import { addFilter } from '@wordpress/hooks';
import { useBlockProps } from "@wordpress/block-editor";
import { select } from "@wordpress/data";

import attributes from './attributes.json';
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
        colorSignal: {
          attributes: true,
          controls: true,
          functionalColors: false,
          paletteClassname: true,
          paletteVariationClassname: true,
          colorSignalClassname: true,
          stickySourceColor: false,
        },
        spaceAndSizing: true,
      },
    },
    edit,
    save: ( props ) => {
      const { className, attributes } = props;
      const { align } = attributes;
      const settings = select( 'novablocks' ).getSettings();
      const blockProps = useBlockProps.save( { className } );

      return (
        <div { ...blockProps } dangerouslySetInnerHTML={ { __html: settings?.separator?.markup } } />
      )
    }
  }
};

addFilter( 'blocks.registerBlockType', 'novablocks/separator/add-novablocks-support', addNovablocksSupport, 1 );
