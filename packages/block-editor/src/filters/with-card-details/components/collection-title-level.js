import { __ } from "@wordpress/i18n";
import { PanelRow } from "@wordpress/components";
import { Fragment } from "@wordpress/element";

import { FontSizePicker, HeadingToolbar, withVisibility } from "../../../components";

const CollectionTitleLevel = props => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    collectionTitleLevel,
    collectionTitleFontSize,
  } = attributes;

  return (
    <Fragment>
      <div className="components-base-control">
        <div className={ 'components-base-control__field' }>
          <span className={ 'components-base-control__label' }>{ __( 'Collection Title Heading', '__plugin_txtd' ) }</span>
          <HeadingToolbar
            minLevel={ 1 }
            maxLevel={ 5 }
            selectedLevel={ collectionTitleLevel }
            onChange={ collectionTitleLevel => {
              setAttributes( { collectionTitleLevel } );
            } }
          />
        </div>
      </div>
      <FontSizePicker label={ __( 'Collection Title Font Size', '__plugin_txtd' ) } value={ collectionTitleFontSize } onChange={ collectionTitleFontSize => {
        setAttributes( { collectionTitleFontSize } )
      } } />
    </Fragment>
  )
};

export default withVisibility( 'collection-title-level' )( CollectionTitleLevel );
