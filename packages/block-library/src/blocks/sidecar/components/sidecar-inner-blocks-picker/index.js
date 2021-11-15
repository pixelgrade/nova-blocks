import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";

const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;

const VARIATIONS = [
  {
    name: 'sidebar-left',
    title: __( 'Sidebar Left with Content on the right', '__plugin_txtd' ),
    icons: 'heart',
    innerBlocks: [
      [ 'novablocks/sidecar-area' ],
      [ 'novablocks/sidecar-area' ],
    ],
    scope: [ 'block' ],
  },
  {
    name: 'sidebar-right',
    title: __( 'Sidebar Right with Content on the left', '__plugin_txtd' ),
    icons: 'heart',
    innerBlocks: [
      [ 'novablocks/sidecar-area' ],
      [ 'novablocks/sidecar-area' ],
    ],
    scope: [ 'block' ],
  },
];

const InnerBlocksPicker = ( props ) => {
  const { hasInnerBlocks, innerBlocks } = props;
  const [ template, setTemplate ] = useState( false );

  useEffect( () => {
    if ( hasInnerBlocks ) {
      setTemplate( innerBlocks );
    }
  }, [ hasInnerBlocks, innerBlocks ] );

  const innerBlocksProps = useInnerBlocksProps( {
    __experimentalTemplateOptions: VARIATIONS,
    __experimentalOnSelectTemplateOption: ( chosenTemplate ) => {
      if ( chosenTemplate === undefined ) {
        chosenTemplate = VARIATIONS[0].template;
      }
      setTemplate( chosenTemplate );
    },
    __experimentalAllowTemplateOptionSkip: true,
    template: template,
    templateInsertUpdatesSelection: false
  } );

  return (
    <div { ...innerBlocksProps } />
  );
}

export default InnerBlocksPicker;
