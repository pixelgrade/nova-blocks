import { withVisibility } from "@novablocks/block-editor";

import ScrollingEffectPanel from "./scrolling-effect-panel";
import DopplerPresetsPanel from "./doppler-presets-panel";
import StartFramePanel from "./start-frame-panel";
import EndFramePanel from "./end-frame-panel";
import PreviewScrollingButton from "./preview-scrolling-button";

const Controls = ( props ) => {

  return (
    <ScrollingEffectPanel { ...props }>
      <PreviewScrollingButton { ...props } />
      <DopplerPresetsPanel { ...props } />
      <StartFramePanel { ...props } />
      <EndFramePanel { ...props } />
    </ScrollingEffectPanel>
  )
};

export default withVisibility( 'scrolling-effect-section' )( Controls );
