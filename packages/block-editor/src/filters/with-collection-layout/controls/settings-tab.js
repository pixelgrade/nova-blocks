/**
 * The Settings tab — the current composition's everyday dials, free in every
 * mode and never wrapped in trial chrome.
 *
 * The composition itself is chosen on the Composition tab; the context line
 * up top names the active one (the orientation job the old Layout Style
 * radio used to do).
 */
import { __, sprintf } from '@wordpress/i18n';
import { RadioControl } from '@wordpress/components';
import { createInterpolateElement } from '@wordpress/element';

import { ControlsGroup, SectionLink } from '../../../components';

import ItemsCountControl from './items-count-control';
import ItemsPerRowControl from './items-per-row-control';
import ItemsGapControls from './items-gap-control';
import VerticalGapModifierControl from './vertical-gap-modifier-control';
import ItemsAspectRatioControl from './items-aspect-ratio-control';
import { STYLE_LABELS } from './composition/style-tiles';

const SettingsTab = ( props ) => {
  const { attributes, setAttributes } = props;
  const { layoutStyle, carouselLayout, postsToShow, automaticPostsNumber } = attributes;

  const isParametric = 'parametric' === layoutStyle;
  const isCarousel = 'carousel' === layoutStyle;
  const isGrid = 'classic' === layoutStyle || 'masonry' === layoutStyle;

  return (
    <>
      <p className="nb-settings-context">
        { createInterpolateElement(
          sprintf(
            /* translators: %s: the selected composition (layout style) name. */
            __( 'Settings for your <strong>%s</strong> composition — switch it on the Composition tab.', '__plugin_txtd' ),
            STYLE_LABELS[ layoutStyle ] || layoutStyle
          ),
          { strong: <strong /> }
        ) }
      </p>
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
    </>
  );
};

export default SettingsTab;
