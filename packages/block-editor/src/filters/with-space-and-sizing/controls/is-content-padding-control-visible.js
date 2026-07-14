/**
 * Whether the "Content Area Padding" control should render for a block,
 * given its `novaBlocks.spaceAndSizing` support declaration.
 *
 * Group and Columns opt into the full spaceAndSizing bundle (attributes +
 * controls) but `contentPadding` (-> --nb-card-content-padding-multiplier)
 * has no CSS consumer for either block — only supernova's _card.scss and
 * contextual-post-card's style.scss read that custom property. The control
 * changes an attribute with zero visual effect there, so those two blocks
 * opt out via `spaceAndSizing.contentPadding: false`.
 *
 * Every other block keeps the pre-existing behaviour untouched: the boolean
 * `true` shorthand (e.g. core/separator) and any object form that omits
 * `contentPadding` (e.g. supernova/supernova-item's
 * `{ attributes, controls, advancedSpacing }`) both resolve to "visible",
 * exactly as before this flag existed. The `contentPadding` attribute
 * itself always stays registered regardless of this flag — this only gates
 * whether the control renders.
 *
 * @param {boolean|Object|undefined} spaceAndSizingSupport
 * @return {boolean}
 */
const isContentPaddingControlVisible = ( spaceAndSizingSupport ) => {
  return spaceAndSizingSupport?.contentPadding !== false;
};

module.exports = {
  isContentPaddingControlVisible,
};
