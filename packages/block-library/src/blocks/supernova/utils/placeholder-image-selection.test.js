import {
  getUniquePlaceholderImages,
  getUsedPlaceholderImages,
} from './placeholder-image-selection';

const placeholders = [ 'horizon', 'ridge', 'diagonal', 'bars' ].map( id => ( {
  id: `local-placeholder-${ id }`,
  url: `data:image/svg+xml,${ id }`,
} ) );

test( 'selects the first placeholder not already used by sibling cards', () => {
  expect( getUniquePlaceholderImages( placeholders, placeholders.slice( 0, 3 ), 1, () => 0.999 ) )
    .toEqual( [ placeholders[3] ] );
} );

test( 'randomizes the unused placeholder pool for each insertion', () => {
  expect( getUniquePlaceholderImages( placeholders, [], 1, () => 0 ) )
    .toEqual( [ placeholders[1] ] );
} );

test( 'matches recolored local placeholders by stable id instead of data URL', () => {
  const recoloredHorizon = {
    ...placeholders[0],
    url: 'data:image/svg+xml,recolored-horizon',
  };

  expect( getUniquePlaceholderImages( placeholders, [ recoloredHorizon ], 1, () => 0.999 ) )
    .toEqual( [ placeholders[1] ] );
} );

test( 'avoids repeats inside a multi-image card and cycles only after exhaustion', () => {
  expect( getUniquePlaceholderImages( placeholders, placeholders.slice( 0, 2 ), 3, () => 0.999 ) )
    .toEqual( [ placeholders[2], placeholders[3], placeholders[0] ] );

  expect( getUniquePlaceholderImages( placeholders, placeholders, 1, () => 0.999 ) )
    .toEqual( [ placeholders[0] ] );
} );

test( 'collects media already assigned to sibling blocks', () => {
  expect( getUsedPlaceholderImages( [
    { attributes: { images: [ placeholders[0] ] } },
    { attributes: { images: [] } },
    { attributes: { images: [ placeholders[2] ] } },
  ] ) ).toEqual( [ placeholders[0], placeholders[2] ] );
} );
