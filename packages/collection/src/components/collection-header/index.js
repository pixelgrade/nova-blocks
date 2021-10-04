import { Fragment } from "@wordpress/element";

import CollectionTitle from '../collection-title';
import CollectionSubtitle from '../collection-subtitle';

const CollectionHeader = ( props ) => {

  return (
    <Fragment>
      <CollectionTitle { ...props } />
      <CollectionSubtitle { ...props } />
    </Fragment>
  )
};

export default CollectionHeader;
