import { __ } from "@wordpress/i18n";
import { PanelRow } from "@wordpress/components";

import { HeadingToolbar, withVisibility } from "../../../components";

const CardTitleLevel = props => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    cardTitleLevel
  } = attributes;

  return (
    <PanelRow>
      <span className={ 'components-base-control__label' }>{ __( 'Card Title Heading', '__plugin_txtd' ) }</span>
      <HeadingToolbar
        minLevel={ 1 }
        maxLevel={ 5 }
        selectedLevel={ cardTitleLevel }
        onChange={ cardTitleLevel => {
          setAttributes( { cardTitleLevel } );
        } }
      />
    </PanelRow>
  )
}

export default withVisibility( 'card-title-level' )( CardTitleLevel );
