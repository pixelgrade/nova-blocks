/**
 * Structural attributes — the block-anatomy invariant for preset families.
 *
 * A preset family may WRITE a structural attribute (every definition
 * declares an explicit value, so applying any preset lands on deliberate
 * structure) or LEAVE IT ALONE (outside the managed set). It may never
 * half-own one: a single definition declaring it pulls the attribute into
 * the family's managed union, and every other definition then clears it to
 * `undefined` on apply — silently changing the block's anatomy.
 *
 * That is exactly the Motion & Effects incident (Stacked Drift declared
 * `cardLayout`, so "Still" un-stacked Hero cards; fixed in 3f14d797), and
 * why Card Styles is fine (all six tiles declare `cardLayout`). Clearing a
 * STYLE attribute back to its registered default is a decision; clearing
 * STRUCTURE is never one.
 *
 * Add an attribute here when clearing it would change what the block IS
 * (anatomy, layout skeleton, content source) rather than how it looks.
 */
export const STRUCTURAL_ATTRIBUTES = [
  'cardLayout',
  'layoutStyle',
  'columns',
  'contentType',
];

/**
 * Check a preset family against the invariant.
 *
 * @param {Array}  definitions          Family definitions ({ id, managedAttributes, values }).
 * @param {Array}  structuralAttributes Override for the registry (tests).
 * @return {Array} Violations as { id, attribute } — a definition that
 *                 manages a structural attribute without declaring a value
 *                 for it. Empty means the family honors the invariant.
 */
export const getStructuralBoundaryViolations = (
  definitions,
  structuralAttributes = STRUCTURAL_ATTRIBUTES
) => {
  const violations = [];

  ( definitions || [] ).forEach( ( definition ) => {
    ( definition?.managedAttributes || [] ).forEach( ( attribute ) => {
      if ( ! structuralAttributes.includes( attribute ) ) {
        return;
      }

      const values = definition?.values || {};

      if ( ! ( attribute in values ) || values[ attribute ] === undefined ) {
        violations.push( { id: definition.id, attribute } );
      }
    } );
  } );

  return violations;
};
