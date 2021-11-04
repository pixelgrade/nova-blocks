import { __ } from "@wordpress/i18n";
import { RichText } from '@wordpress/block-editor';

const CollectionSubtitle = ( props ) => {

  const {
    attributes: {
      showCollectionSubtitle,
      subtitle,
    },
    setAttributes,
  } = props;

  if ( ! showCollectionSubtitle ) {
    return null;
  }

  return (
    <RichText
      tagName={ 'p' }
      className={ 'nb-collection__subtitle is-style-lead alignfull' }
      value={ subtitle }
      placeholder={ __( 'Collection subtitle', '__plugin_txtd' ) }
      onChange={ subtitle => {
        setAttributes( { subtitle } );
      } }
      allowedFormats={ [] }
    />
  )
};

export default CollectionSubtitle;
