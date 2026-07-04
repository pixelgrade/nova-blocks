/**
 * Contract: which collection compositions get Cards depth controls, and in
 * what shape. Stacked Classic Grid and Masonry get the full room (3D Grid +
 * Depth Parallax); Parametric gets Depth Parallax only — its markup nests
 * items per-area, which breaks the 3D odd/even sibling pattern, but the
 * parallax drift is structure-agnostic. Each room carries its own Try & Play
 * gate id so the chrome copy matches what is actually offered.
 */
import { getCardsDepthSupport } from './cards-depth-support';

describe( 'getCardsDepthSupport', () => {
  test.each( [ 'classic', 'masonry' ] )(
    'stacked %s gets the full depth room under the stacked-depth gate',
    ( layoutStyle ) => {
      expect( getCardsDepthSupport( { layoutStyle, cardLayout: 'stacked' } ) ).toEqual( {
        showDepthControls: true,
        show3dToggle: true,
        gateId: 'stacked-depth',
      } );
    }
  );

  test.each( [ 'vertical', 'horizontal', 'horizontal-reverse' ] )(
    'non-stacked classic (%s cards) gets no depth controls',
    ( cardLayout ) => {
      expect( getCardsDepthSupport( { layoutStyle: 'classic', cardLayout } ) ).toEqual( {
        showDepthControls: false,
        show3dToggle: false,
        gateId: 'stacked-depth',
      } );
    }
  );

  test.each( [ 'vertical', 'horizontal', 'stacked' ] )(
    'parametric (%s cards) gets parallax-only controls under the parametric-depth gate',
    ( cardLayout ) => {
      expect( getCardsDepthSupport( { layoutStyle: 'parametric', cardLayout } ) ).toEqual( {
        showDepthControls: true,
        show3dToggle: false,
        gateId: 'parametric-depth',
      } );
    }
  );

  test( 'carousel gets no depth controls even when stacked', () => {
    expect( getCardsDepthSupport( { layoutStyle: 'carousel', cardLayout: 'stacked' } ) ).toEqual( {
      showDepthControls: false,
      show3dToggle: false,
      gateId: 'stacked-depth',
    } );
  } );

  test( 'missing attributes fail closed', () => {
    expect( getCardsDepthSupport( {} ).showDepthControls ).toBe( false );
    expect( getCardsDepthSupport().showDepthControls ).toBe( false );
  } );
} );
