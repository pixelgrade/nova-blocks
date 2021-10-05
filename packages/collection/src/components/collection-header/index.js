import CollectionTitle from '../collection-title';
import CollectionSubtitle from '../collection-subtitle';

const CollectionHeader = ( props ) => {

  const { attributes } = props;
  const { align } = attributes;

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
