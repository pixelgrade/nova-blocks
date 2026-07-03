/**
 * Pure classification helpers for the Plus post-save honesty layer.
 *
 * These mirror the SERVER's enforcement classification (lib/plus-gating.php)
 * on the client so the editor can tell the user, truthfully, what just
 * happened to a locked save:
 * - render-gated values (parametric layouts, named motion presets) DID save
 *   and are previewing only → "savedPreviewOnly" notice;
 * - save-guarded values (3D grid, grid parallax, doppler) newly authored in
 *   the session were reverted by the save guard → "savedWithoutGated" notice,
 *   while grandfathered values (present in the saved entity) stay silent.
 *
 * Presentation only — enforcement never trusts any of this.
 */

/**
 * Loose value equality, mirroring PHP's novablocks_plus_values_match():
 * numeric tolerance, bool coercion, recursive plain objects (focal points).
 */
export const valuesMatch = ( a, b ) => {
  if ( a && b && typeof a === 'object' && typeof b === 'object' ) {
    const aKeys = Object.keys( a );
    const bKeys = Object.keys( b );

    if ( aKeys.length !== bKeys.length ) {
      return false;
    }

    return aKeys.every( ( key ) => key in b && valuesMatch( a[ key ], b[ key ] ) );
  }

  if ( typeof a === 'boolean' || typeof b === 'boolean' ) {
    return !! a === !! b;
  }

  if ( isFinite( a ) && isFinite( b ) && a !== '' && b !== '' && a !== null && b !== null ) {
    return Math.abs( parseFloat( a ) - parseFloat( b ) ) < 0.0001;
  }

  return a === b;
};

// Editor blocks use { name, attributes, innerBlocks }; parsed post content
// uses { blockName, attrs, innerBlocks }. Normalize both shapes.
const getName = ( block ) => block?.name || block?.blockName || '';
const getAttrs = ( block ) => block?.attributes || block?.attrs || {};

const walkBlocks = ( blocks, visit ) => {
  ( blocks || [] ).forEach( ( block ) => {
    visit( block );

    if ( block?.innerBlocks?.length ) {
      walkBlocks( block.innerBlocks, visit );
    }
  } );
};

const lockedGates = ( plus, enforcement ) => {
  return Object.values( plus?.gates || {} ).filter( ( gate ) => {
    return gate.enforcement === enforcement && plus?.locked?.[ gate.entitlement ];
  } );
};

/**
 * Whether a value counts as gated for a gate's attribute: listed in the
 * gate's gatedValues when present, otherwise anything off the free default.
 */
const isGatedValue = ( gate, attribute, value ) => {
  const explicit = gate.gatedValues?.[ attribute ];

  if ( Array.isArray( explicit ) ) {
    return explicit.some( ( gated ) => valuesMatch( value, gated ) );
  }

  const defaults = gate.defaults || {};

  if ( attribute in defaults ) {
    return ! valuesMatch( value, defaults[ attribute ] );
  }

  return false;
};

/**
 * Collects the persisted values of save-guarded attributes from a block tree
 * — the client-side mirror of the server's grandfather whitelist.
 */
export const collectSaveGuardedValues = ( blocks, plus ) => {
  const gates = lockedGates( plus, 'save-guard' );
  const values = {};

  walkBlocks( blocks, ( block ) => {
    gates.forEach( ( gate ) => {
      if ( ! gate.blocks.includes( getName( block ) ) ) {
        return;
      }

      const attrs = getAttrs( block );

      gate.attributes.forEach( ( attribute ) => {
        if ( attribute in attrs ) {
          values[ attribute ] = values[ attribute ] || [];
          values[ attribute ].push( attrs[ attribute ] );
        }
      } );
    } );
  } );

  return values;
};

/**
 * Whether the editor tree carries locked save-guarded values the saved
 * entity does not allow — i.e. values the server reverted on this save.
 */
export const hasRevertedSaveGuardedValues = ( editorBlocks, savedBlocks, plus ) => {
  const gates = lockedGates( plus, 'save-guard' );

  if ( ! gates.length ) {
    return false;
  }

  const whitelist = collectSaveGuardedValues( savedBlocks, plus );
  let reverted = false;

  walkBlocks( editorBlocks, ( block ) => {
    if ( reverted ) {
      return;
    }

    gates.forEach( ( gate ) => {
      if ( ! gate.blocks.includes( getName( block ) ) ) {
        return;
      }

      const attrs = getAttrs( block );

      gate.attributes.forEach( ( attribute ) => {
        if ( ! ( attribute in attrs ) || ! isGatedValue( gate, attribute, attrs[ attribute ] ) ) {
          return;
        }

        const allowed = ( whitelist[ attribute ] || [] ).some( ( value ) => valuesMatch( attrs[ attribute ], value ) );

        if ( ! allowed ) {
          reverted = true;
        }
      } );
    } );
  } );

  return reverted;
};

/**
 * Whether the SAVED tree holds locked render-gated values — persisted trial
 * tuning that previews in the editor while the live site keeps the free
 * rendering (and comes alive on upgrade).
 *
 * Motion presets follow the server's classifier: only doppler with a named
 * preset whose frame attributes exactly match that preset's bundle counts.
 */
export const hasLockedRenderGatedValues = ( savedBlocks, plus, motionPresetOptions = [] ) => {
  const gates = lockedGates( plus, 'render' );

  if ( ! gates.length ) {
    return false;
  }

  let found = false;

  walkBlocks( savedBlocks, ( block ) => {
    if ( found ) {
      return;
    }

    gates.forEach( ( gate ) => {
      if ( found || ! gate.blocks.includes( getName( block ) ) ) {
        return;
      }

      const attrs = getAttrs( block );

      if ( gate.attributes.includes( 'motionPreset' ) ) {
        found = found || isPresetAuthoredMotion( attrs, motionPresetOptions );
        return;
      }

      found = found || gate.attributes.some( ( attribute ) => {
        return attribute in attrs && isGatedValue( gate, attribute, attrs[ attribute ] );
      } );
    } );
  } );

  return found;
};

const isPresetAuthoredMotion = ( attrs, motionPresetOptions ) => {
  if ( attrs.scrollingEffect !== 'doppler' || ! attrs.motionPreset || attrs.motionPreset === 'custom' ) {
    return false;
  }

  const option = ( motionPresetOptions || [] ).find( ( candidate ) => candidate.value === attrs.motionPreset );

  if ( ! option?.preset ) {
    return false;
  }

  return Object.keys( option.preset ).every( ( key ) => valuesMatch( attrs[ key ], option.preset[ key ] ) );
};

/**
 * Whether the edited tree carries locked render-gated values the saved tree
 * does not already hold — i.e. render-gated refinements pending on the next
 * save (they WILL persist, previewing only). Same value-whitelist semantics
 * as the save-guard side: a persisted gated value re-applied elsewhere is
 * grandfathered, not pending.
 */
export const hasPendingRenderGatedValues = ( editedBlocks, savedBlocks, plus, motionPresetOptions = [] ) => {
  const gates = lockedGates( plus, 'render' );

  if ( ! gates.length ) {
    return false;
  }

  // The saved tree's render-gated values, per attribute (the whitelist).
  const saved = {};

  walkBlocks( savedBlocks, ( block ) => {
    gates.forEach( ( gate ) => {
      if ( ! gate.blocks.includes( getName( block ) ) ) {
        return;
      }

      const attrs = getAttrs( block );

      gate.attributes.forEach( ( attribute ) => {
        if ( attribute in attrs ) {
          saved[ attribute ] = saved[ attribute ] || [];
          saved[ attribute ].push( attrs[ attribute ] );
        }
      } );
    } );
  } );

  let pending = false;

  walkBlocks( editedBlocks, ( block ) => {
    if ( pending ) {
      return;
    }

    gates.forEach( ( gate ) => {
      if ( pending || ! gate.blocks.includes( getName( block ) ) ) {
        return;
      }

      const attrs = getAttrs( block );

      if ( gate.attributes.includes( 'motionPreset' ) ) {
        if ( isPresetAuthoredMotion( attrs, motionPresetOptions ) ) {
          const allowed = ( saved.motionPreset || [] ).some( ( value ) => valuesMatch( attrs.motionPreset, value ) );
          pending = pending || ! allowed;
        }

        return;
      }

      pending = pending || gate.attributes.some( ( attribute ) => {
        if ( ! ( attribute in attrs ) || ! isGatedValue( gate, attribute, attrs[ attribute ] ) ) {
          return false;
        }

        return ! ( saved[ attribute ] || [] ).some( ( value ) => valuesMatch( attrs[ attribute ], value ) );
      } );
    } );
  } );

  return pending;
};

/**
 * Whether ANY locked gated change is pending on the next save — the
 * Save · Plus decoration trigger (both enforcement classes).
 */
export const hasPendingGatedChanges = ( editedBlocks, savedBlocks, plus, motionPresetOptions = [] ) => {
  return hasRevertedSaveGuardedValues( editedBlocks, savedBlocks, plus )
    || hasPendingRenderGatedValues( editedBlocks, savedBlocks, plus, motionPresetOptions );
};

/**
 * The union of every locked gate's attributes, per block name — what
 * stripGatedAttributes() removes.
 */
const lockedAttributesByBlock = ( plus ) => {
  const map = {};

  [ ...lockedGates( plus, 'render' ), ...lockedGates( plus, 'save-guard' ) ].forEach( ( gate ) => {
    gate.blocks.forEach( ( name ) => {
      map[ name ] = map[ name ] || new Set();
      gate.attributes.forEach( ( attribute ) => map[ name ].add( attribute ) );
    } );
  } );

  return map;
};

/**
 * Deep-clones a block tree with every locked gate's attributes removed from
 * matching blocks — the "free remainder" used to tell gated-only edits apart
 * from mixed ones. Stripping is deliberately unconditional (gated or not):
 * symmetric on both trees, so a free-valued edit to a gate-listed attribute
 * (e.g. a start-frame focal point) simply doesn't count as a free change —
 * the affordance degrades toward the stronger treatment, never lies about
 * gated content.
 */
export const stripGatedAttributes = ( blocks, plus ) => {
  const stripMap = lockedAttributesByBlock( plus );

  const stripBlock = ( block ) => {
    const strip = stripMap[ getName( block ) ];
    const attrs = getAttrs( block );
    const kept = {};

    Object.keys( attrs ).forEach( ( attribute ) => {
      if ( ! strip || ! strip.has( attribute ) ) {
        kept[ attribute ] = attrs[ attribute ];
      }
    } );

    return {
      name: getName( block ),
      attributes: kept,
      innerBlocks: ( block?.innerBlocks || [] ).map( stripBlock ),
    };
  };

  return ( blocks || [] ).map( stripBlock );
};

/**
 * Structural equality of two block trees: names, attributes (valuesMatch),
 * and inner-block recursion. Both trees should come from parse() so default
 * attributes are elided consistently on each side.
 */
export const blockTreesMatch = ( a, b ) => {
  const listA = a || [];
  const listB = b || [];

  if ( listA.length !== listB.length ) {
    return false;
  }

  return listA.every( ( blockA, index ) => {
    const blockB = listB[ index ];

    return getName( blockA ) === getName( blockB )
      && valuesMatch( getAttrs( blockA ), getAttrs( blockB ) )
      && blockTreesMatch( blockA?.innerBlocks, blockB?.innerBlocks );
  } );
};
