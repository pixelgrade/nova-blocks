/**
 * Row Surfaces — the first NEW managed-bundle tile family (Stage 3a Phase 3).
 *
 * Curated by George in `.ai/playground/preset-tiles-curation.html`; labels are
 * final and hue-agnostic per the naming rule (role + loudness, never a color
 * name — `.ai/design-customization/preset-engine.md`). `id + version + values`
 * are the immutable identity; labels are presentation and safely renameable.
 *
 * Rosters are static data keyed per block type (the family registry): a block
 * gets the Presets tab only when a roster exists for it, which is why no
 * "not supernova-family" exclusion list is needed — supernova simply has no
 * entry here (it gets Card Styles instead). `variation` is ABSOLUTE/visual;
 * context resolution happens in `resolveColorTileValues()` at render.
 *
 * Labels are plain strings on purpose (same precedent as the collection
 * free-presets data): pure data stays JSX/i18n-free and contract-testable.
 */
import colorTiles from './color-tiles.json';
import {
  COLOR_TILE_MANAGED_ATTRIBUTES,
  resolveColorTileValues,
} from './resolve-color-tile-values';

// The roster data lives in color-tiles.json (shared with the server writer,
// lib/color-tiles.php). Same ids, versions, labels and values as shipped.
export const ROW_SURFACE_TILES = colorTiles.families[ 'core/group' ].tiles;

const ROW_SURFACE_FAMILIES = {
  'core/group': ROW_SURFACE_TILES,
};

/**
 * The family registry gate: the roster for a block type, or null (no tab).
 *
 * @param {string} blockName
 * @return {Array|null}
 */
export const getRowSurfaceTiles = ( blockName ) => {
  return ROW_SURFACE_FAMILIES[ blockName ] || null;
};

/**
 * Builds the context-resolved PresetCardsControl options for a roster.
 * `preset` carries the complete managed value set; `palette`/`variation` ride
 * along (absolute) for the thumbnail painter.
 *
 * @param {Array} tiles Roster entries.
 * @param {number} referenceVariation The block context's absolute reference.
 * @return {Array} Options consumable by PresetCardsControl managed mode.
 */
export const buildRowSurfaceOptions = ( tiles, referenceVariation ) => {
  return ( tiles || [] ).map( ( tile ) => ( {
    label: tile.label,
    value: tile.id,
    version: tile.version,
    palette: tile.palette,
    variation: tile.variation,
    preset: resolveColorTileValues( tile, referenceVariation ),
  } ) );
};

export { COLOR_TILE_MANAGED_ATTRIBUTES };
