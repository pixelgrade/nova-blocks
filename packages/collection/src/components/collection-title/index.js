import { __ } from "@wordpress/i18n";
import { RichText } from '@wordpress/block-editor';

const CollectionTitle = ( props ) => {

  const {
    attributes: {
      showCollectionTitle,
      title,
      collectionTitleLevel,
    },
    setAttributes,
  } = props;

  if ( ! showCollectionTitle ) {
    return null;
  }

  return (
    <div className="block-editor-block-list__block wp-block novablocks-collection__title">
      <RichText
        tagName={ `h${ collectionTitleLevel }` }
        value={ title }
        placeholder={ __( 'Collection title', '__plugin_txtd' ) }
        onChange={ title => {
          setAttributes( { title } );
        } }
        allowedFormats = {[ 'core/link' ]}
      />
    </div>
  );
};

export default CollectionTitle;
