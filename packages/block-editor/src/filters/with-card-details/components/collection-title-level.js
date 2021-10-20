import { __ } from "@wordpress/i18n";
import { PanelRow } from "@wordpress/components";

import { HeadingToolbar, withVisibility } from "../../../components";

const CollectionTitleLevel = props => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    collectionTitleLevel
  } = attributes;

  return (
    <PanelRow>
      <span className={ 'components-base-control__label ' }>{ __( 'Collection Title Heading', '__plugin_txtd' ) }</span>
      <HeadingToolbar
        minLevel={ 1 }
        maxLevel={ 5 }
        selectedLevel={ collectionTitleLevel }
        onChange={ collectionTitleLevel => {
          setAttributes( { collectionTitleLevel } );
        } }
      />
    </PanelRow>
  )
}

export default withVisibility( 'collection-title-level' )( CollectionTitleLevel );
