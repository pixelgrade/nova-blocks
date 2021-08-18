import withScrollingPreview from "./with-scrolling-preview";
import ScrollingEffectPanel from "./scrolling-effect-panel";
import DopplerPresetsPanel from "./doppler-presets-panel";
import StartFramePanel from "./start-frame-panel";
import EndFramePanel from "./end-frame-panel";

const Controls = ( props ) => {

  const Panel = withScrollingPreview( ScrollingEffectPanel );

  return (
    <Panel { ...props }>
      <DopplerPresetsPanel { ...props } />
      <StartFramePanel { ...props } />
      <EndFramePanel { ...props } />
    </Panel>
  )
};



export default Controls;
