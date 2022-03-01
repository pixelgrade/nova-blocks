import { postsParametricQuery } from './posts-parametric';
import { postsGridQuery } from './posts-grid';
import { postsSlideshowQuery } from './posts-slideshow';
import { parametricCollection, gridCollection, slideshowCollection } from './block-scoped';

const queryVariations = [
  postsParametricQuery,
  parametricCollection,
  postsGridQuery,
  gridCollection,
  postsSlideshowQuery,
  slideshowCollection,
];

export default queryVariations;
