import classnames from 'classnames';

import { addFilter } from '@wordpress/hooks';
import { useBlockProps } from "@wordpress/block-editor";
import { select } from "@wordpress/data";

import attributes from './attributes.json';
import edit from './edit';

const alterSeparatorSettings = ( settings ) => {

  if ( settings.name !== 'core/separator' ) {
    return settings;
  }

  return {
    ...settings,
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
          minColorSignal: 1,
        },
        spaceAndSizing: true,
      },
    },
    edit,
    save: ( props ) => {
      const { className, attributes } = props;
      const { align } = attributes;
      const settings = select( 'novablocks' ).getSettings();
    
      const alignClass = align ? `align${align}` : '';
    
      const blockProps = useBlockProps.save( {
        className: classnames( className, alignClass ),
      });
    
      return (
        <div { ...blockProps }>
          { settings?.separator?.markup && <div dangerouslySetInnerHTML={ { __html: settings.separator.markup } } /> }
        </div>
      );
    }    
  }
};
addFilter( 'blocks.registerBlockType', 'novablocks/separator/alter-support', alterSeparatorSettings, 1 );

const alterSeparatorAttributes = ( settings ) => {

  if ( settings.name !== 'core/separator' ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributes
    }
  }
};
addFilter( 'blocks.registerBlockType', 'novablocks/separator/alter-attributes', alterSeparatorAttributes, 20 );
