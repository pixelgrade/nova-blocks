/**
 * The Settings tab — the current composition's everyday dials, free in every
 * mode and never wrapped in trial chrome.
 *
 * The composition itself is chosen on the Composition tab; the context line
 * up top names the active one (the orientation job the old Layout Style
 * radio used to do).
 */
import { __, sprintf } from '@wordpress/i18n';
import { RadioControl, RangeControl, SelectControl, ToggleControl } from '@wordpress/components';
import { createInterpolateElement } from '@wordpress/element';

import { ControlsGroup, SectionLink } from '../../../components';
import { useSettings } from '../../../hooks';

import ItemsCountControl from './items-count-control';
import ItemsPerRowControl from './items-per-row-control';
import ItemsGapControls from './items-gap-control';
import VerticalGapModifierControl from './vertical-gap-modifier-control';
import ItemsAspectRatioControl from './items-aspect-ratio-control';
import { STYLE_LABELS } from './composition/style-tiles';
import { getActiveLayoutRecipe, normalizeLayoutRecipes } from './composition/layout-recipes';

const SettingsTab = ( props ) => {
  const { attributes, setAttributes } = props;
  const { layoutStyle, carouselLayout, postsToShow, automaticPostsNumber, columnsFitMinWidth, cardHoverEffect, headerIntegration } = attributes;
  const settings = useSettings();
  const recipes = normalizeLayoutRecipes( settings?.collectionLayoutRecipes );
  const activeRecipe = getActiveLayoutRecipe( attributes, recipes );

  const isParametric = 'parametric' === layoutStyle;
  const isCarousel = 'carousel' === layoutStyle;
  const isMasonry = 'masonry' === layoutStyle;
  const isGrid = 'classic' === layoutStyle || 'masonry' === layoutStyle;
  const fitColumnsOn = !! columnsFitMinWidth && columnsFitMinWidth > 0;
  const recipeColumnsFitMinWidth = Number( activeRecipe?.defaults?.columnsFitMinWidth );
  const fitColumnsDefault = Number.isFinite( recipeColumnsFitMinWidth )
    && recipeColumnsFitMinWidth >= 280
    && recipeColumnsFitMinWidth <= 600
    ? recipeColumnsFitMinWidth
    : 400;

  return (
    <>
      <p className="nb-settings-context">
        { createInterpolateElement(
          sprintf(
            /* translators: %s: the selected composition (layout style) name. */
            /* translators: %s: active collection composition label. */
            __( 'Settings for your <strong>%s</strong> composition — switch it on the Composition tab.', '__plugin_txtd' ),
            activeRecipe?.label || STYLE_LABELS[ layoutStyle ] || layoutStyle
          ),
          { strong: <strong /> }
        ) }
      </p>
      { activeRecipe?.capabilities?.headerIntegration && (
        <ControlsGroup title={ __( 'Header', '__plugin_txtd' ) }>
          <SelectControl
            key={ 'header-integration' }
            label={ __( 'Header Integration', '__plugin_txtd' ) }
            help={ __( 'Keep the standard Header Template Part in normal flow or let it occupy the first layout position.', '__plugin_txtd' ) }
            value={ headerIntegration || 'standard' }
            onChange={ ( value ) => {
              setAttributes( { headerIntegration: value } );
            } }
            options={ [
              { label: __( 'Standard header', '__plugin_txtd' ), value: 'standard' },
              { label: __( 'Include header in layout', '__plugin_txtd' ), value: 'grid-item' },
            ] }
          />
        </ControlsGroup>
      ) }
      <ControlsGroup title={ __( 'Cards', '__plugin_txtd' ) }>
        { ! ( isParametric && automaticPostsNumber ) && (
          <ItemsCountControl postsToShow={ postsToShow } setAttributes={ setAttributes } />
        ) }
        { isParametric && !! automaticPostsNumber && (
          <p className="nb-settings-hint">
            { __( 'Items Count is synced to the grid’s capacity (Auto-count is on in Fine-tune).', '__plugin_txtd' ) }
          </p>
        ) }
        { isGrid && <ItemsPerRowControl { ...props } /> }
        { isMasonry && (
          <ToggleControl
            key={ 'columns-fit-toggle' }
            label={ __( 'Fit Columns to Width', '__plugin_txtd' ) }
            help={ __( 'Show as many columns as comfortably fit the available width, up to Items per Row — instead of the fixed count with a single column on small screens.', '__plugin_txtd' ) }
            checked={ fitColumnsOn }
            onChange={ ( value ) => {
              setAttributes( { columnsFitMinWidth: value ? fitColumnsDefault : 0 } );
            } }
          />
        ) }
        { isMasonry && fitColumnsOn && (
          <RangeControl
            key={ 'columns-fit-min-width' }
            label={ __( 'Minimum Column Width (px)', '__plugin_txtd' ) }
            value={ columnsFitMinWidth }
            onChange={ ( value ) => {
              setAttributes( { columnsFitMinWidth: value } );
            } }
            min={ 280 }
            max={ 600 }
            step={ 10 }
          />
        ) }
        { isCarousel && 'fixed' === carouselLayout && <ItemsPerRowControl { ...props } /> }
        { isParametric && (
          <p className="nb-settings-hint">
            { __( 'Columns are shaped by Grid Anatomy in Fine-tune.', '__plugin_txtd' ) }
          </p>
        ) }
      </ControlsGroup>
      <ControlsGroup title={ __( 'Spacing & Rhythm', '__plugin_txtd' ) }>
        <ItemsGapControls { ...props } />
        { ! isCarousel && <VerticalGapModifierControl { ...props } /> }
      </ControlsGroup>
      { isGrid && (
        <ControlsGroup title={ __( 'Media', '__plugin_txtd' ) }>
          <ItemsAspectRatioControl { ...props } />
          <SelectControl
            key={ 'card-hover-effect' }
            label={ __( 'Card Hover Effect', '__plugin_txtd' ) }
            help={ __( 'A presentation hook styled by the active theme.', '__plugin_txtd' ) }
            value={ cardHoverEffect || 'none' }
            onChange={ ( value ) => {
              setAttributes( { cardHoverEffect: value } );
            } }
            options={ [
              { label: __( 'None', '__plugin_txtd' ), value: 'none' },
              { label: __( 'Meta Reveal', '__plugin_txtd' ), value: 'reveal' },
            ] }
          />
        </ControlsGroup>
      ) }
      { isCarousel && (
        <ControlsGroup title={ __( 'Media', '__plugin_txtd' ) }>
          <RadioControl
            key={ 'carousel-layout' }
            label={ __( 'Slide Width', '__plugin_txtd' ) }
            selected={ carouselLayout }
            onChange={ ( carouselLayout ) => {
              setAttributes( { carouselLayout } );
            } }
            options={ [
              { label: __( 'Fixed Width', '__plugin_txtd' ), value: 'fixed' },
              { label: __( 'Variable Width', '__plugin_txtd' ), value: 'variable' },
              { label: __( 'Content Width', '__plugin_txtd' ), value: 'content' },
            ] }
          />
        </ControlsGroup>
      ) }
      { isGrid && (
        <SectionLink sectionId={ 'scrolling-effect' }>
          { __( 'Looking for 3D Grid & Depth Parallax? Motion & Effects', '__plugin_txtd' ) }
        </SectionLink>
      ) }
      { isParametric && (
        <SectionLink sectionId={ 'scrolling-effect' }>
          { __( 'Looking for Depth Parallax? Motion & Effects', '__plugin_txtd' ) }
        </SectionLink>
      ) }
    </>
  );
};

export default SettingsTab;
