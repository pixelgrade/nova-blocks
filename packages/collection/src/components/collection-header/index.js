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
    <div className={ `nb-collection__header  align${ align }` }>
      <div className={ `nb-collection__inner-container` }>
        <CollectionTitle { ...props } key={'title'}/>
        <CollectionSubtitle { ...props } key={'subtitle'}/>
      </div>
    </div>
  )
};

export default CollectionHeader;
