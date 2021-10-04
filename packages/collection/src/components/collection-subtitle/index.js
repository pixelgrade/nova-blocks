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
    <div className="block-editor-block-list__block wp-block novablocks-collection__subtitle">
      <RichText
        tagName={ 'p' }
        className={ 'is-style-lead' }
        value={ subtitle }
        placeholder={ __( 'Collection subtitle', '__plugin_txtd' ) }
        onChange={ subtitle => {
          setAttributes( { subtitle } );
        } }
        allowedFormats={ [] }
      />
    </div>
  )
};

export default CollectionSubtitle;
