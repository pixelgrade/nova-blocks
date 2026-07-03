/**
 * Collection Layout — three tabs on the Style Manager grammar:
 *
 * - Composition (choose): visual style tiles + curated presets per style.
 *   Free compositions stay fully native; the parametric presets and the
 *   depth presets are Try & Play boundaries.
 * - Settings: the current composition's everyday dials, free in every mode.
 * - Fine-tune: the parametric engine room — exists ONLY while the
 *   Parametric composition is active (the tab you earn by choosing it),
 *   and is one whole Try & Play room when locked.
 *
 * 3D Grid + Depth Parallax moved OUT of this section into Motion & Effects
 * (they are effects on the cards, not layout fine-tuning); subtle
 * SectionLinks point there.
 */
import { __ } from "@wordpress/i18n";

import {
  ControlsSection,
  ControlsTab,
  TryAndPlay,
} from "../../../components";

import CompositionTab from "./composition";
import SettingsTab from "./settings-tab";
import ParametricLayoutControls from "./parametric-layout-controls";

const Controls = ( props ) => {

  const {
    attributes: {
      layoutStyle,
      postsToShow,
      columns
    },
  } = props;

  // Hide the "Collection" section when there is
  // a single item in a single column
  // Examples: Media Card, Hero Card
  if ( postsToShow === 1  && columns === 1 ) {
    return null;
  }

  return (
    <ControlsSection
      id={ 'collection-layout' }
      label={ __( 'Collection Layout', '__plugin_txtd' ) }
      order={ 20 }>
      <ControlsTab label={ __( 'Composition', '__plugin_txtd' ) }>
        <CompositionTab { ...props } />
      </ControlsTab>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <SettingsTab { ...props } />
      </ControlsTab>
      {
        'parametric' === layoutStyle &&
        <ControlsTab label={ __( 'Fine-tune', '__plugin_txtd' ) }>
          <TryAndPlay gateId={ 'parametric-layout' }>
            <ParametricLayoutControls { ...props } />
          </TryAndPlay>
        </ControlsTab>
      }
    </ControlsSection>
  );
};

export default Controls;
