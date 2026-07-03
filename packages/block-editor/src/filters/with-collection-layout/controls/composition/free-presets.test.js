/**
 * Contract: the free layout presets write ONLY free-tier attributes — a
 * copy-paste bug must never smuggle a gated attribute into the free tier —
 * and the depth presets write exactly the gated depth bundle.
 *
 * Gated attributes mirror lib/plus-gating.php's enforcement gates
 * (layoutStyle:parametric via 'parametric-layout'; pile3dEffect/
 * pile3dTarget/pile3dTargetRule via 'pile-3d-grid'; pileParallaxAmount via
 * 'pile-parallax'). The PHP contract tests pin that side.
 */
import {
  CLASSIC_PRESETS,
  MASONRY_PRESETS,
  CAROUSEL_PRESETS,
  DEPTH_PRESETS,
  LAYOUT_PRESET_RESETS,
} from './free-presets';

const FREE_ATTRIBUTES = [
  'layoutStyle',
  'postsToShow',
  'columns',
  'gridGap',
  'verticalGapModifier',
  'thumbnailAspectRatio',
  'thumbnailAspectRatioString',
  'imageResizing',
  'carouselLayout',
];

const GATED_ATTRIBUTES = [ 'pile3dEffect', 'pile3dTarget', 'pile3dTargetRule', 'pileParallaxAmount' ];

const FREE_LAYOUT_STYLES = [ 'classic', 'masonry', 'carousel' ];

describe( 'free layout presets', () => {
  const freePresets = [ ...CLASSIC_PRESETS, ...MASONRY_PRESETS, ...CAROUSEL_PRESETS ];

  test( 'every family ships exactly four curated presets', () => {
    expect( CLASSIC_PRESETS ).toHaveLength( 4 );
    expect( MASONRY_PRESETS ).toHaveLength( 4 );
    expect( CAROUSEL_PRESETS ).toHaveLength( 4 );
  } );

  test.each( freePresets.map( ( preset ) => [ preset.label, preset ] ) )(
    '%s writes only free attributes and a free layout style',
    ( label, option ) => {
      const keys = Object.keys( option.preset );

      keys.forEach( ( key ) => expect( FREE_ATTRIBUTES ).toContain( key ) );
      expect( FREE_LAYOUT_STYLES ).toContain( option.preset.layoutStyle );
    }
  );

  test( 'Dumas keeps its historical bundle so existing content keeps matching', () => {
    const dumas = CLASSIC_PRESETS.find( ( option ) => 'tear0down3' === option.value );

    expect( dumas.preset ).toEqual( {
      layoutStyle: 'classic',
      postsToShow: 6,
      columns: 3,
    } );
  } );
} );

describe( 'depth presets', () => {
  const depthPresets = [ ...DEPTH_PRESETS.classic, ...DEPTH_PRESETS.masonry ];

  test.each( depthPresets.map( ( preset ) => [ preset.label, preset ] ) )(
    '%s writes the full stacked-depth bundle on a free composition',
    ( label, option ) => {
      expect( FREE_LAYOUT_STYLES ).toContain( option.preset.layoutStyle );
      expect( option.preset.cardLayout ).toBe( 'stacked' );
      expect( option.preset.pile3dEffect ).toBe( true );
      expect( option.preset.pile3dTarget ).toBe( 'item' );
      expect( option.preset.pile3dTargetRule ).toBe( 'odd' );
      expect( option.preset.pileParallaxAmount ).toBe( 78 );
    }
  );
} );

describe( 'layout preset resets', () => {
  test( 'applying any layout preset resets the depth attributes', () => {
    expect( LAYOUT_PRESET_RESETS ).toEqual( {
      pile3dEffect: false,
      pileParallaxAmount: 0,
    } );
  } );

  test( 'free presets never re-introduce gated attributes past the resets', () => {
    [ ...CLASSIC_PRESETS, ...MASONRY_PRESETS, ...CAROUSEL_PRESETS ].forEach( ( option ) => {
      const applied = { ...LAYOUT_PRESET_RESETS, ...option.preset };

      GATED_ATTRIBUTES.forEach( ( attribute ) => {
        if ( 'pile3dEffect' === attribute ) {
          expect( applied[ attribute ] ).toBe( false );
        } else if ( 'pileParallaxAmount' === attribute ) {
          expect( applied[ attribute ] ).toBe( 0 );
        } else {
          expect( option.preset[ attribute ] ).toBeUndefined();
        }
      } );
    } );
  } );
} );
