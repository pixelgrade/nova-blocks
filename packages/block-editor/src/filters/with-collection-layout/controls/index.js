/**
 * Collection Layout — three tabs on the Style Manager grammar:
 *
 * - Composition (choose): visual style tiles + curated presets per style.
 *   Free compositions stay fully native; the parametric presets and the
 *   depth presets are Try & Play boundaries.
 * - Settings: the current composition's everyday dials, free in every mode.
 * - Fine-tune: the active layout engine's structural parameters. Parametric
 *   owns its established room; registered recipes may declare additional
 *   data-only controls without coupling the editor to a recipe identifier.
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
import { useSettings } from '../../../hooks';

import CompositionTab from "./composition";
import SettingsTab from "./settings-tab";
import ParametricLayoutControls from "./parametric-layout-controls";
import RecipeFineTuneControls from './recipe-fine-tune-controls';
import {
  getActiveLayoutRecipe,
  normalizeLayoutRecipes,
} from './composition/layout-recipes';

const Controls = ( props ) => {

  const {
    attributes: {
      layoutStyle,
      postsToShow,
      columns
    },
  } = props;
  const settings = useSettings();
  const recipes = normalizeLayoutRecipes( settings?.collectionLayoutRecipes );
  const activeRecipe = getActiveLayoutRecipe( props.attributes, recipes );
  const hasParametricFineTune = 'parametric' === layoutStyle;
  const hasRecipeFineTune = !! activeRecipe?.fineTune?.length;

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
        ( hasParametricFineTune || hasRecipeFineTune ) &&
        <ControlsTab label={ __( 'Fine-tune', '__plugin_txtd' ) }>
          { hasParametricFineTune && (
            <TryAndPlay gateId={ 'parametric-layout' }>
              <ParametricLayoutControls { ...props } />
            </TryAndPlay>
          ) }
          { hasRecipeFineTune && (
            <RecipeFineTuneControls { ...props } recipe={ activeRecipe } />
          ) }
        </ControlsTab>
      }
    </ControlsSection>
  );
};

export default Controls;
