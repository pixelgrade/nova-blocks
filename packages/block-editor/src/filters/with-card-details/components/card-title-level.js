import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";

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
    </Fragment>
  )
}

export default withVisibility( 'card-title-level' )( CardTitleLevel );
