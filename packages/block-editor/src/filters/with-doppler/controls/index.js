import ScrollingEffectPanel from "./scrolling-effect-panel";
import DopplerPresetsPanel from "./doppler-presets-panel";
import StartFramePanel from "./start-frame-panel";
import EndFramePanel from "./end-frame-panel";

const Controls = ( props ) => {

  return (
    <ScrollingEffectPanel { ...props }>
      <DopplerPresetsPanel { ...props } />
      <StartFramePanel { ...props } />
      <EndFramePanel { ...props } />
    </ScrollingEffectPanel>
  )
};



export default Controls;
