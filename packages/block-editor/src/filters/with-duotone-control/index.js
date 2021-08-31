import { removeFilter } from '@wordpress/hooks';

// @todo: We should remove this only for SuperNova Block.
removeFilter(
  'editor.BlockEdit',
  'core/editor/duotone/with-editor-controls',
);
