import { useSelect } from "@wordpress/data";
import { SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { withVisibility } from "../../../components";

const ButtonsStyleControl = ( props ) => {
  const { attributes, setAttributes } = props;
  const { buttonsStyle, contentType } = attributes;
  const options = useSelect( select => {
    const styles = select( 'core/blocks' ).getBlockStyles( 'core/button' );
    return styles.map( style => {
      return {
        value: style.name,
        label: style.label
      }
    } );
  } );

  if ( ! [ 'auto', 'fields' ].includes( contentType ) ) {
    return null;
  }

  return (
    <SelectControl
      label={ __( 'Buttons Style', '__plugin_txtd' ) }
      value={ buttonsStyle }
      onChange={ ( buttonsStyle ) => { setAttributes( { buttonsStyle } ) } }
      options={ options }
    />
  )
}

export default withVisibility( 'buttons-style' )( ButtonsStyleControl );
