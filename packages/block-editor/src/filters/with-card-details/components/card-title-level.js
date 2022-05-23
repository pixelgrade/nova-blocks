import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { SelectControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";

import { FontSizePicker, HeadingToolbar, withVisibility } from "../../../components";

const CardTitleLevel = props => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    cardTitleLevel,
    cardTitleFontSize,
  } = attributes;

  return (
    <Fragment>
      <div className="components-base-control">
        <div className={ 'components-base-control__field' }>
          <span className={ 'components-base-control__label' }>{ __( 'Card Title Heading', '__plugin_txtd' ) }</span>
          <HeadingToolbar
            minLevel={ 1 }
            maxLevel={ 5 }
            selectedLevel={ cardTitleLevel }
            onChange={ cardTitleLevel => {
              setAttributes( { cardTitleLevel } );
            } }
          />
        </div>
      </div>
      <FontSizePicker label={ __( 'Card Title Font Size', '__plugin_txtd' ) } value={ cardTitleFontSize } onChange={ cardTitleFontSize => {
        setAttributes( { cardTitleFontSize } )
      } } />
      <ButtonsStyleControl { ...props } />
      <ButtonsGradeControl { ...props } />
    </Fragment>
  )
};

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

export default withVisibility( 'card-title-level' )( CardTitleLevel );
