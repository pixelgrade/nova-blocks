import { postsCollectionQuery } from './posts-collection';
import { slideshowQuery } from './slideshow';
import { parametricCollection, slideshowCollection } from './block-scoped';

const queryVariations = [
  postsCollectionQuery,
  slideshowQuery,
  parametricCollection,
  slideshowCollection,
];

export default queryVariations;
