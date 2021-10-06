import CollectionTitle from '../collection-title';
import CollectionSubtitle from '../collection-subtitle';

const CollectionHeader = ( props ) => {

  const { attributes } = props;
  const { showCollectionTitle, showCollectionSubtitle } = attributes;
  const { align } = attributes;

  if ( ! showCollectionTitle && ! showCollectionSubtitle ) {
    return null;
  }

  return (
    <div className={ `align${ align }` }>
      <div className="nb-collection__inner-container">
        <CollectionTitle { ...props } />
        <CollectionSubtitle { ...props } />
      </div>
    </div>
  )
};

export default CollectionHeader;
