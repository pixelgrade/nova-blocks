/**
 * Sidecar Layout Recipes — the recipe picker control (Task 4.2).
 *
 * The presentation + editor wiring half of the `sidecar-layout` family; the pure
 * data/logic lives in `./layout-recipes` (jest-testable, no WP imports). This
 * file carries the labels, thumbnails, derivation, and the coordinated apply.
 *
 * Apply honors the managed-bundle contract with ONE undo level in every case:
 *   - structure already matches the recipe (attribute-only fine-tune): the
 *     engine's single `setAttributes()` patch (getPresetApplyPatch), preserving
 *     the block's identity and inner content;
 *   - structure must change (add/remove a rail): the SAME managed patch is
 *     applied together with the reconciled areas in ONE atomic `replaceBlock` —
 *     a single persistent change, so one Ctrl+Z reverts both the new areas and
 *     the new attributes. (A `markNextChangeAsNotPersistent` + `replaceInnerBlocks`
 *     + `setAttributes` sequence was tried and rejected: a non-persistent change
 *     folds into the PRECEDING checkpoint, so undo reverted the attributes but
 *     left the structure changed — proven live on a legacy two-area Sidecar.)
 *
 * Selection is DERIVED, never stored: the current rail structure (read live from
 * the inner blocks) filters the family to structurally-matching recipes, then
 * the engine derives the active recipe by attributes. No match = Custom.
 */
import { __ } from '@wordpress/i18n';
import { cloneBlock, createBlock } from '@wordpress/blocks';
import { Notice } from '@wordpress/components';
import { useCallback, useMemo } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';

import {
  deriveActivePresetId,
  getPresetApplyPatch,
  useInnerBlocks,
  useRegisteredAttributeDefaults,
} from '@novablocks/block-editor';

import {
  LAYOUT_RECIPES,
  SIDECAR_LAYOUT_MANAGED_ATTRIBUTES,
  applySidecarLayoutChange,
  doesSidecarSignatureConflictWithReservations,
  getCandidateDefinitions,
  getStructuralSignature,
  resolveSidecarAreaSide,
} from './layout-recipes';
import useAncestorRailReservations from './use-ancestor-rail-reservations';

/* ---------- schematic thumbnails (grey content · accent rails) ---------- */

const BASE_FILL = 'var(--nb-preset-thumb-base, #c6c6d0)';
const ACCENT_FILL = 'var(--nb-section-controls-accent, #de1651)';

const Thumb = ( { children } ) => (
  <svg
    className="nb-preset-thumb"
    viewBox="0 0 60 40"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
  >
    { children }
  </svg>
);

const Cell = ( { x, y, width, height, accent = false } ) => (
  <rect
    x={ x }
    y={ y }
    width={ width }
    height={ height }
    rx="1.2"
    fill={ accent ? ACCENT_FILL : BASE_FILL }
    opacity={ accent ? 0.9 : 0.85 }
  />
);

const RECIPE_THUMBNAILS = {
  centered: (
    <Thumb>
      <Cell x={ 12 } y={ 6 } width={ 36 } height={ 28 } />
    </Thumb>
  ),
  'right-rail': (
    <Thumb>
      <Cell x={ 4 } y={ 6 } width={ 36 } height={ 28 } />
      <Cell x={ 43 } y={ 6 } width={ 13 } height={ 28 } accent />
    </Thumb>
  ),
  'left-rail': (
    <Thumb>
      <Cell x={ 4 } y={ 6 } width={ 13 } height={ 28 } accent />
      <Cell x={ 20 } y={ 6 } width={ 36 } height={ 28 } />
    </Thumb>
  ),
  hive: (
    <Thumb>
      <Cell x={ 4 } y={ 6 } width={ 9 } height={ 28 } accent />
      <Cell x={ 16 } y={ 6 } width={ 28 } height={ 28 } />
      <Cell x={ 47 } y={ 6 } width={ 9 } height={ 28 } accent />
    </Thumb>
  ),
  // Offset Editorial: empty left gutter, content offset right, wide right rail.
  'offset-editorial': (
    <Thumb>
      <Cell x={ 14 } y={ 6 } width={ 22 } height={ 28 } />
      <Cell x={ 39 } y={ 6 } width={ 17 } height={ 28 } accent />
    </Thumb>
  ),
};

const RECIPE_LABELS = {
  centered: { label: __( 'Centered', '__plugin_txtd' ), sub: __( 'No rails', '__plugin_txtd' ) },
  'right-rail': { label: __( 'Right Rail', '__plugin_txtd' ), sub: __( 'Content · rail', '__plugin_txtd' ) },
  'left-rail': { label: __( 'Left Rail', '__plugin_txtd' ), sub: __( 'Rail · content', '__plugin_txtd' ) },
  hive: { label: __( 'Hive', '__plugin_txtd' ), sub: __( 'Meta · content · rail', '__plugin_txtd' ) },
  'offset-editorial': { label: __( 'Offset Editorial', '__plugin_txtd' ), sub: __( 'Asymmetric gutter', '__plugin_txtd' ) },
};

/* ---------- area helpers (editor-side, need block objects) ---------- */

const AREA = 'novablocks/sidecar-area';
const areaNameOf = ( block ) => ( block.attributes && block.attributes.areaName ) || 'content';
const isArea = ( block ) => block.name === AREA;

const SidecarLayoutRecipes = ( props ) => {
  const { attributes, setAttributes, clientId, name } = props;

  const innerBlocks = useInnerBlocks( clientId );
  const ancestorRailReservations = useAncestorRailReservations( clientId );
  const registeredDefaults = useRegisteredAttributeDefaults( name );
  const { replaceBlock } = useDispatch( 'core/block-editor' );

  // Live structural signature — rails resolved under the CURRENT position.
  const signature = useMemo( () => {
    const sides = innerBlocks
      .filter( isArea )
      .filter( ( block ) => areaNameOf( block ) !== 'content' )
      .map( ( block ) => resolveSidecarAreaSide( areaNameOf( block ), attributes.sidebarPosition ) );

    return getStructuralSignature( sides );
  }, [ innerBlocks, attributes.sidebarPosition ] );

  const activeRecipeId = useMemo(
    () => deriveActivePresetId( getCandidateDefinitions( signature ), attributes, registeredDefaults ),
    [ signature, attributes, registeredDefaults ]
  );

  const hasAncestorRailConflict = doesSidecarSignatureConflictWithReservations(
    signature,
    ancestorRailReservations
  );

  const applyRecipe = useCallback( ( recipe ) => {
    const patch = getPresetApplyPatch(
      { id: recipe.id, managedAttributes: SIDECAR_LAYOUT_MANAGED_ATTRIBUTES, values: recipe.values },
      attributes,
      registeredDefaults
    );

    applySidecarLayoutChange( {
      attributes,
      clientId,
      innerBlocks,
      patch,
      targetSignature: recipe.signature,
      cloneBlock,
      createBlock,
      replaceBlock,
      setAttributes,
    } );
  }, [ attributes, innerBlocks, clientId, replaceBlock, setAttributes, registeredDefaults ] );

  return (
    <div className="nb-preset-cards">
      <span className="nb-preset-cards__label">{ __( 'Layout Recipe', '__plugin_txtd' ) }</span>
      <div className="nb-preset-cards__grid" role="group" aria-label={ __( 'Layout Recipe', '__plugin_txtd' ) }>
        { LAYOUT_RECIPES.map( ( recipe ) => {
          const isSelected = activeRecipeId === recipe.id;
          const isUnavailable = doesSidecarSignatureConflictWithReservations(
            recipe.signature,
            ancestorRailReservations
          );
          const meta = RECIPE_LABELS[ recipe.id ];
          const descriptionId = `nb-sidecar-layout-recipe-${ clientId }-${ recipe.id }-description`;

          return (
            <button
              type="button"
              key={ recipe.id }
              className={ 'nb-preset-card' + ( isSelected ? ' is-selected' : '' ) }
              aria-pressed={ isSelected }
              aria-disabled={ isUnavailable }
              aria-label={ meta.label }
              aria-describedby={ descriptionId }
              onClick={ () => {
                if ( ! isUnavailable ) {
                  applyRecipe( recipe );
                }
              } }
            >
              { RECIPE_THUMBNAILS[ recipe.id ] }
              <span className="nb-preset-card__name">{ meta.label }</span>
              <span id={ descriptionId } className="nb-preset-card__sub">
                { isUnavailable
                  ? __( 'Unavailable: parent rail', '__plugin_txtd' )
                  : meta.sub }
              </span>
            </button>
          );
        } ) }
      </div>
      { hasAncestorRailConflict && (
        <Notice status="warning" isDismissible={ false }>
          { __(
            'This Sidecar uses a rail reserved by a parent Sidecar and may overlap it. Choose an available layout.',
            '__plugin_txtd'
          ) }
        </Notice>
      ) }
      { null === activeRecipeId && (
        <p className="nb-settings-hint">{ __( 'Custom', '__plugin_txtd' ) }</p>
      ) }
    </div>
  );
};

export default SidecarLayoutRecipes;
