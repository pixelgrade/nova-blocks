/**
 * Motion & Effects (formerly "Scrolling Effect") — organized by SUBJECT,
 * i.e. what moves:
 *
 * - Presets: curated motion recipes, tagged Media vs Cards, mixed tier.
 * - Media: the image inside each card (effect radio + Start/End frames).
 * - Cards: the cards themselves (3D Grid + Depth Parallax, moved here from
 *   Collection Layout) — everything on it is Plus, so locked it reads as
 *   ONE Try & Play room, mirroring Collection Layout's Fine-tune. Stacked
 *   Classic Grid and Masonry get the full room; Parametric gets Depth
 *   Parallax only (see cards-depth-support.js for why 3D is excluded).
 *
 * The section id stays `scrolling-effect` (visibility contracts, drawer
 * links); only the presentation is new. Blocks without collection depth
 * (e.g. Google Map) get no Cards tab and no depth recipe.
 */
import { __ } from "@wordpress/i18n";

import {
  ControlsSection,
  ControlsTab,
  TryAndPlay,
  layoutRecipeSupports,
  normalizeLayoutRecipes,
  useSettings,
  useSupports,
  withVisibility,
} from "@novablocks/block-editor";

import MediaTab from "./media-tab";
import MotionRecipes, { getScrollingEffectSupports } from "./motion-recipes";
import { getCardsDepthSupport } from "./cards-depth-support";
import DepthControls from "./depth-controls";
import StartFramePanel from "./start-frame-panel";
import EndFramePanel from "./end-frame-panel";
import PreviewScrollingButton from "./preview-scrolling-button";

const Controls = ( props ) => {

  const { attributes, name } = props;
  const supports = useSupports( name );
  const settings = useSettings();
  const recipes = normalizeLayoutRecipes( settings?.collectionLayoutRecipes );
  const supportsPile3d = layoutRecipeSupports( attributes, recipes, 'pile3d' );
  const { hasCollectionDepth: blockSupportsCollectionDepth } = getScrollingEffectSupports( supports );
  const hasCollectionDepth = blockSupportsCollectionDepth && supportsPile3d;

  const { showDepthControls, show3dToggle, gateId } = getCardsDepthSupport( attributes );

  return (
    <ControlsSection
      id={ 'scrolling-effect' }
      label={ __( 'Motion & Effects', '__plugin_txtd' ) }
      group={ __( 'Modules', '__plugin_txtd' ) }
      order={ 20 }>
      <ControlsTab label={ __( 'Presets', '__plugin_txtd' ) }>
        <MotionRecipes { ...props } />
        <PreviewScrollingButton { ...props } />
      </ControlsTab>
      <ControlsTab label={ __( 'Media', '__plugin_txtd' ) }>
        <MediaTab { ...props }>
          <PreviewScrollingButton { ...props } />
          <StartFramePanel { ...props } />
          <EndFramePanel { ...props } />
        </MediaTab>
      </ControlsTab>
      {
        hasCollectionDepth &&
        <ControlsTab label={ __( 'Cards', '__plugin_txtd' ) }>
          <p className="nb-settings-context">
            { __( 'These effects move and stack the cards themselves — independent of what the media does inside them.', '__plugin_txtd' ) }
          </p>
          { showDepthControls ? (
            <TryAndPlay gateId={ gateId }>
              <DepthControls { ...props } show3d={ show3dToggle } />
              <PreviewScrollingButton { ...props } />
            </TryAndPlay>
          ) : (
            <p className="nb-settings-hint">
              { __( 'Card depth applies to stacked Classic Grid and Masonry collections, and Depth Parallax to Parametric grids — pick a Depth preset in Collection Layout → Composition to set one up in one click.', '__plugin_txtd' ) }
            </p>
          ) }
        </ControlsTab>
      }
    </ControlsSection>
  );
};

export default withVisibility( 'scrolling-effect-section' )( Controls );
