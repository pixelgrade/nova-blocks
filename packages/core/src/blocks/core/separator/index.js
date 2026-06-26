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
      const blockProps = useBlockProps.save( { className } );

      return (
        <div { ...blockProps } dangerouslySetInnerHTML={ { __html: settings?.separator?.markup } } />
      )
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

// The separator save() injects the theme-provided markup via
// `settings.separator.markup`. Because that markup is dynamic (it can differ
// between the save time and a later page load, e.g. after a theme update), a
// stored separator can fail block validation and show the "unexpected or
// invalid content" recovery UI. The frontend is unaffected because the markup
// is fully regenerated server-side in separator/init.php.
//
// This tolerant deprecation captures whatever inner markup was actually stored
// (`source: 'html'`) and reproduces it verbatim, so any legacy separator
// re-validates silently and is migrated back onto the current save(). It is
// only ever attempted when the current save() fails to validate, so valid
// blocks are never affected. Registered late so `settings.attributes` /
// `settings.supports` are fully merged.
const addSeparatorDeprecation = ( settings ) => {

  if ( settings.name !== 'core/separator' ) {
    return settings;
  }

  const separatorDeprecation = {
    attributes: {
      ...settings.attributes,
      novaSeparatorMarkup: {
        type: 'string',
        source: 'html',
        selector: 'div',
      },
    },
    supports: settings.supports,
    save: ( props ) => {
      const { className, attributes } = props;
      const blockProps = useBlockProps.save( { className } );

      return (
        <div { ...blockProps } dangerouslySetInnerHTML={ { __html: attributes?.novaSeparatorMarkup } } />
      )
    },
    migrate: ( attributes ) => {
      const { novaSeparatorMarkup, ...rest } = attributes;
      return rest;
    },
  };

  return {
    ...settings,
    deprecated: [
      separatorDeprecation,
      ...( settings.deprecated || [] ),
    ],
  }
};
addFilter( 'blocks.registerBlockType', 'novablocks/separator/deprecation', addSeparatorDeprecation, 100 );
