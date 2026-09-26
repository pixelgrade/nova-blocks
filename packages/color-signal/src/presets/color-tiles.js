/**
 * Color tile families — the per-block registry of Color Signal preset tiles.
 *
 * The data lives in `color-tiles.json`, the single source shared with the
 * server writer (`lib/color-tiles.php`, `wp pixelgrade blocks apply-preset`),
 * so the editor and an agent apply the same definitions by the same id.
 *
 * Two families today:
 *
 * - `core/group` — Row Surfaces (Stage 3a). Tiles carry an ABSOLUTE
 *   `variation`; `resolveColorTileValues()` turns it into stored form for one
 *   block context.
 * - `core/button` — Button roles (style-manager#210). "Default" clears every
 *   managed attribute to its registered default (an untouched Button, which
 *   serializes nothing); "Action" paints the palette's SOURCE color — the
 *   brand color Style Manager generated the palette from — on a pinned
 *   palette, with that variation's own contrast-checked foreground.
 *
 * Roles (`roles` in the JSON) are semantic names agents and the UI use for a
 * tile: `action` and `light-surface`. A role names an existing definition; it
 * never duplicates one (two definitions with equal values would make the
 * derived selection ambiguous).
 */
import data from './color-tiles.json';

import {
  clampColorSignal,
  computeColorSignal,
  getAbsoluteColorVariation,
  getPaletteConfig,
  getSignalRelativeToVariation,
  removeSiteVariationOffset,
} from '../utils';
import { resolveColorTileValues } from './resolve-color-tile-values';

export const COLOR_TILE_ROLES = data.roles;

const FAMILIES = Object.keys( data.families ).reduce( ( families, blockName ) => {
  families[ blockName ] = { blockName, ...data.families[ blockName ] };
  return families;
}, {} );

/**
 * The tile family for a block type, or null (no Presets tab).
 *
 * @param {string} blockName
 * @return {Object|null} `{ id, label, thumbnail, minColorSignal, managedAttributes, tiles }`.
 */
export const getColorTileFamily = ( blockName ) => FAMILIES[ blockName ] || null;

/**
 * @param {string} role Role slug, e.g. `action`.
 * @return {{block: string, tile: string, label: string}|null}
 */
export const resolveColorTileRole = ( role ) => {
  const entry = COLOR_TILE_ROLES[ role ];

  return entry ? { block: entry.block, tile: entry.tile, label: entry.label } : null;
};

const getRoleLabelForTile = ( tileId ) => {
  const role = Object.keys( COLOR_TILE_ROLES ).find( ( slug ) => COLOR_TILE_ROLES[ slug ].tile === tileId );

  return role ? COLOR_TILE_ROLES[ role ].label : undefined;
};

/**
 * The palette source color's visual (absolute) variation — the swatch the
 * Action tile paints, independent of the Palette Basis Offset.
 *
 * @param {string} palette
 * @return {number}
 */
const getSourceVariation = ( palette ) => {
  const sourceIndex = parseInt( getPaletteConfig( palette )?.sourceIndex, 10 );

  return Number.isNaN( sourceIndex ) ? 1 : sourceIndex + 1;
};

/**
 * Resolves one tile's stored attribute values for a block context.
 *
 * @param {Object} family Family from `getColorTileFamily()`.
 * @param {Object} tile Roster entry.
 * @param {number} referenceVariation The context's absolute reference variation.
 * @return {Object} Values inside the family's managed boundary.
 */
export const resolveColorTile = ( family, tile, referenceVariation ) => {
  if ( 'default' === tile.kind ) {
    return {};
  }

  if ( 'source' === tile.kind ) {
    // The palette source color as an EXPLICIT variation — the form the editor settles a Button
    // on at every mount (Button declares `stickySourceColor: false`, so getUpdatedAttributes()
    // turns `useSourceColorAsReference` into the source's own variation), with the signal and
    // content variation it computes alongside. Storing any other form would be rewritten on
    // the next editor load and derive as Custom.
    const sourceVariation = getAbsoluteColorVariation( {
      palette: tile.palette,
      paletteVariation: 1,
      useSourceColorAsReference: true,
    } );
    const colorSignal = clampColorSignal(
      getSignalRelativeToVariation( sourceVariation, referenceVariation, tile.palette ),
      { minColorSignal: family.minColorSignal }
    );
    // On a surface that already IS the source color, the Button minimum signal
    // moves it to the nearest distinct step — exactly what the mount computes.
    const paletteVariation = removeSiteVariationOffset(
      computeColorSignal( referenceVariation, colorSignal, tile.palette, sourceVariation )
    );

    return {
      useColorSignal: true,
      useParentPalette: false,
      palette: tile.palette,
      paletteVariation,
      colorSignal,
      useSourceColorAsReference: false,
      contentPaletteVariation: paletteVariation,
    };
  }

  return resolveColorTileValues( tile, referenceVariation );
};

/**
 * Builds the context-resolved PresetCardsControl options for a family.
 * `palette`/`variation` are the visual (absolute) swatch for the thumbnail.
 *
 * @param {Object} family
 * @param {number} referenceVariation
 * @return {Array}
 */
export const buildColorTileOptions = ( family, referenceVariation ) => {
  return ( family?.tiles || [] ).map( ( tile ) => {
    const option = {
      label: tile.label,
      value: tile.id,
      version: tile.version,
      kind: tile.kind || 'variation',
      palette: tile.palette || '1',
      variation: 'source' === tile.kind ? getSourceVariation( tile.palette ) : ( tile.variation || 1 ),
      preset: resolveColorTile( family, tile, referenceVariation ),
    };
    const sub = getRoleLabelForTile( tile.id );

    if ( sub && sub !== tile.label ) {
      option.sub = sub;
    }

    return option;
  } );
};

/**
 * Completes a tile patch with the one attribute the editor itself writes on
 * the next mount (getUpdatedAttributes() via withUpdatedAttributes): with no
 * content signal, `contentPaletteVariation` mirrors the block variation.
 * Folding it into the SAME patch keeps apply one setAttributes() call and
 * stops a reload from turning the post dirty. It is the editor's own derived
 * normalization, not part of any tile definition (published definitions stay
 * as they are); the server writer reproduces it in
 * novablocks_color_tiles_mount_normalize().
 *
 * @param {Object} patch The preset-engine patch.
 * @param {Object} attributes The block's current attributes.
 * @param {Object|boolean} colorSignalSupport The block's Color Signal support.
 * @return {Object} The completed patch.
 */
export const getColorTileMountPatch = ( patch, attributes = {}, colorSignalSupport = {} ) => {
  const next = { ...attributes, ...patch };
  const activation = colorSignalSupport?.activationAttribute;

  if ( activation && true !== next[ activation ] ) {
    return patch;
  }

  if ( 0 !== parseInt( next.contentColorSignal ?? 0, 10 ) ) {
    return patch;
  }

  return {
    ...patch,
    contentPaletteVariation: next.paletteVariation ?? 1,
  };
};
