import { __ } from "@wordpress/i18n";
import { RichText } from '@wordpress/block-editor';

const CollectionTitle = ( props ) => {

  const {
    attributes: {
      showCollectionTitle,
      title,
      collectionTitleLevel,
      collectionTitleFontSize,
    },
    setAttributes,
  } = props;

  if ( ! showCollectionTitle ) {
    return null;
  }

  return (
    <RichText
      tagName={ `h${ collectionTitleLevel }` }
      className={ `nb-collection__title has-${ collectionTitleFontSize }-font-size alignfull` }
      value={ title }
      placeholder={ __( 'Collection title', '__plugin_txtd' ) }
      onChange={ title => {
        setAttributes( { title } );
      } }
      allowedFormats={ [ 'core/link' ] }
    />
  );
};

export default CollectionTitle;
