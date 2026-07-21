import { buildEditorRestTaxQuery } from './editor-tax-query';

describe( 'buildEditorRestTaxQuery', () => {
  const taxonomies = [
    { slug: 'category', rest_base: 'categories' },
    { slug: 'post_tag', rest_base: 'tags' },
  ];

  test( 'builds REST params from the WordPress 7.0 include/exclude format', () => {
    expect( buildEditorRestTaxQuery( { include: { post_tag: [ 92 ] } }, taxonomies ) ).toEqual( { tags: [ 92 ] } );

    expect( buildEditorRestTaxQuery( {
      include: { category: [ 4 ] },
      exclude: { post_tag: [ 5 ] },
    }, taxonomies ) ).toEqual( { categories: [ 4 ], tags_exclude: [ 5 ] } );
  } );

  test( 'builds REST params from the legacy flat format', () => {
    expect( buildEditorRestTaxQuery( { post_tag: [ 92 ] }, taxonomies ) ).toEqual( { tags: [ 92 ] } );
  } );

  test( 'skips empty term lists like the frontend query', () => {
    expect( buildEditorRestTaxQuery( { include: { post_tag: [] } }, taxonomies ) ).toEqual( {} );
    expect( buildEditorRestTaxQuery( { post_tag: [] }, taxonomies ) ).toEqual( {} );
  } );

  test( 'ignores taxonomies the REST index does not expose', () => {
    expect( buildEditorRestTaxQuery( { include: { genre: [ 3 ] } }, taxonomies ) ).toEqual( {} );
    expect( buildEditorRestTaxQuery( { genre: [ 3 ] }, taxonomies ) ).toEqual( {} );
  } );

  test( 'treats mixed keys as the legacy format, mirroring core', () => {
    expect( buildEditorRestTaxQuery( {
      include: { category: [ 4 ] },
      post_tag: [ 92 ],
    }, taxonomies ) ).toEqual( { tags: [ 92 ] } );
  } );

  test( 'returns no params without a usable tax query or loaded taxonomies', () => {
    expect( buildEditorRestTaxQuery( undefined, taxonomies ) ).toEqual( {} );
    expect( buildEditorRestTaxQuery( null, taxonomies ) ).toEqual( {} );
    expect( buildEditorRestTaxQuery( { include: { post_tag: [ 92 ] } }, undefined ) ).toEqual( {} );
  } );
} );
