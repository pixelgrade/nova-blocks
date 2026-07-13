import { orderEditorPostsLikeFrontend } from './editor-post-order';

describe( 'orderEditorPostsLikeFrontend', () => {
  const posts = [
    { id: 1, sticky: false },
    { id: 2, sticky: true },
    { id: 3, sticky: false },
    { id: 4, sticky: true },
  ];

  test( 'stable-promotes sticky posts for the default first-page query', () => {
    const ordered = orderEditorPostsLikeFrontend( posts, { page: 1 } );

    expect( ordered.map( post => post.id ) ).toEqual( [ 2, 4, 1, 3 ] );
    expect( posts.map( post => post.id ) ).toEqual( [ 1, 2, 3, 4 ] );
  } );

  test( 'does not promote sticky posts after the first page', () => {
    expect( orderEditorPostsLikeFrontend( posts, { page: 2 } ) ).toBe( posts );
  } );

  test.each( [ 'exclude', 'only' ] )( 'respects the explicit %s sticky query', sticky => {
    expect( orderEditorPostsLikeFrontend( posts, { page: 1, sticky } ) ).toBe( posts );
  } );

  test( 'preserves loading and empty values', () => {
    expect( orderEditorPostsLikeFrontend( false, { page: 1 } ) ).toBe( false );
    expect( orderEditorPostsLikeFrontend( null, { page: 1 } ) ).toBeNull();
    expect( orderEditorPostsLikeFrontend( [], { page: 1 } ) ).toEqual( [] );
  } );
} );
