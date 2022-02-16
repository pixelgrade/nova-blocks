import { postsCollectionQuery } from './posts-collection';
import { postsSlideshowQuery } from './posts-slideshow';
import { parametricCollection, slideshowCollection } from './block-scoped';

const queryVariations = [
  postsCollectionQuery,
  parametricCollection,
  postsSlideshowQuery,
  slideshowCollection,
];

export default queryVariations;
