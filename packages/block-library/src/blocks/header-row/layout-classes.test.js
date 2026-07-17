/**
 * Mirrors tests/php/header-row-layout-classes-contract.php — the PHP render
 * (`novablocks_get_header_row_layout_classes()`) and the editor
 * (`getHeaderRowLayoutClassnames()`) must derive identical classes.
 */
import { getHeaderRowLayoutClassnames, getHeaderRowLayoutStyle } from './layout-classes';

describe( 'getHeaderRowLayoutClassnames', () => {

  it( 'emits no classes for defaults (legacy rows stay untouched)', () => {
    expect( getHeaderRowLayoutClassnames() ).toEqual( [] );
    expect( getHeaderRowLayoutClassnames( {} ) ).toEqual( [] );
    expect( getHeaderRowLayoutClassnames( {
      contentDirection: 'row',
      contentAlignment: '',
      navigationColumns: 1,
    } ) ).toEqual( [] );
  } );

  it( 'emits the direction modifier only for column', () => {
    expect( getHeaderRowLayoutClassnames( { contentDirection: 'column' } ) )
      .toEqual( [ 'nb-header-row--direction-column' ] );
    expect( getHeaderRowLayoutClassnames( { contentDirection: 'diagonal' } ) ).toEqual( [] );
  } );

  it( 'emits alignment modifiers for known values only', () => {
    [ 'start', 'center', 'end' ].forEach( alignment => {
      expect( getHeaderRowLayoutClassnames( { contentAlignment: alignment } ) )
        .toEqual( [ `nb-header-row--align-${ alignment }` ] );
    } );
    expect( getHeaderRowLayoutClassnames( { contentAlignment: 'justify' } ) ).toEqual( [] );
  } );

  it( 'emits navigation column modifiers for 2–3 and clamps above', () => {
    expect( getHeaderRowLayoutClassnames( { navigationColumns: 1 } ) ).toEqual( [] );
    expect( getHeaderRowLayoutClassnames( { navigationColumns: 2 } ) )
      .toEqual( [ 'nb-header-row--nav-columns-2' ] );
    expect( getHeaderRowLayoutClassnames( { navigationColumns: 3 } ) )
      .toEqual( [ 'nb-header-row--nav-columns-3' ] );
    expect( getHeaderRowLayoutClassnames( { navigationColumns: 7 } ) )
      .toEqual( [ 'nb-header-row--nav-columns-3' ] );
    expect( getHeaderRowLayoutClassnames( { navigationColumns: 'two' } ) ).toEqual( [] );
  } );

  it( 'emits the Patch primary row shape', () => {
    expect( getHeaderRowLayoutClassnames( { contentAlignment: 'start', navigationColumns: 2 } ) )
      .toEqual( [ 'nb-header-row--align-start', 'nb-header-row--nav-columns-2' ] );
  } );
} );

describe( 'getHeaderRowLayoutStyle', () => {

  it( 'emits nothing for the default 75 or non-numeric values', () => {
    expect( getHeaderRowLayoutStyle() ).toEqual( {} );
    expect( getHeaderRowLayoutStyle( { navigationLinkVerticalSpacing: 75 } ) ).toEqual( {} );
    expect( getHeaderRowLayoutStyle( { navigationLinkVerticalSpacing: 'dense' } ) ).toEqual( {} );
  } );

  it( 'emits the setting var for non-default values', () => {
    expect( getHeaderRowLayoutStyle( { navigationLinkVerticalSpacing: 25 } ) )
      .toEqual( { '--nb-navigation-link-vertical-spacing-setting': 25 } );
    expect( getHeaderRowLayoutStyle( { navigationLinkVerticalSpacing: 0 } ) )
      .toEqual( { '--nb-navigation-link-vertical-spacing-setting': 0 } );
  } );

  it( 'emits semantic rule overrides while leaving curated defaults token-driven', () => {
    expect( getHeaderRowLayoutStyle( { ruleWeight: 1, ruleStrength: 'subtle' } ) )
      .toEqual( {} );
    expect( getHeaderRowLayoutStyle( { ruleWeight: 2, ruleStrength: 'strong' } ) )
      .toEqual( {
        '--nb-header-row-rule-weight': '2px',
        '--nb-header-row-rule-color': 'var(--nb-rule-strong-color)',
      } );
    expect( getHeaderRowLayoutStyle( { ruleWeight: 4, ruleStrength: 'solid' } ) )
      .toEqual( {
        '--nb-header-row-rule-weight': '4px',
        '--nb-header-row-rule-color': 'currentColor',
      } );
  } );

  it( 'clamps rule weight and rejects unknown strength roles', () => {
    expect( getHeaderRowLayoutStyle( { ruleWeight: 20, ruleStrength: 'brandish' } ) )
      .toEqual( { '--nb-header-row-rule-weight': '4px' } );
    expect( getHeaderRowLayoutStyle( { ruleWeight: 'heavy', ruleStrength: 'strong' } ) )
      .toEqual( { '--nb-header-row-rule-color': 'var(--nb-rule-strong-color)' } );
  } );
} );
