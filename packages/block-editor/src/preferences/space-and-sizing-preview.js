import { dispatch, useDispatch, useSelect } from '@wordpress/data';
import { createPortal, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
  PreferencesModalSection,
  ___unstablePreferencesModalBaseOption as BaseOption,
} from '@wordpress/interface';
import { store as preferencesStore } from '@wordpress/preferences';
import { registerPlugin } from '@wordpress/plugins';

import {
  SPACE_AND_SIZING_PREVIEW_PREFERENCE_KEY,
  SPACE_AND_SIZING_PREVIEW_PREFERENCE_SCOPE,
} from './constants';

const getPreferencesModalTarget = () => {
  const modal = document.querySelector( '.preferences-modal, .interface-preferences-modal' );

  if ( ! modal ) {
    return null;
  }

  const visibleTabPanels = Array.from(
    modal.querySelectorAll( '[role="tabpanel"], .preferences__tabs-tabpanel, .components-tab-panel__tab-content' )
  ).filter( ( element ) => {
    const style = window.getComputedStyle( element );

    return style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      ! element.hasAttribute( 'hidden' ) &&
      element.getClientRects().length > 0;
  } );

  if ( visibleTabPanels.length ) {
    return visibleTabPanels[ visibleTabPanels.length - 1 ];
  }

  const largeViewportTarget = modal.querySelector(
    '.interface-preferences__tabs .components-tab-panel__tab-content'
  );

  if ( largeViewportTarget ) {
    return largeViewportTarget;
  }

  const mobileTargets = Array.from(
    modal.querySelectorAll( '.interface-preferences__provider .components-card__body' )
  );

  return mobileTargets.pop() || null;
};

const SpaceAndSizingPreviewPreferences = () => {
  const [ portalTarget, setPortalTarget ] = useState( () => getPreferencesModalTarget() );
  const isChecked = useSelect( ( select ) => {
    return select( preferencesStore ).get(
      SPACE_AND_SIZING_PREVIEW_PREFERENCE_SCOPE,
      SPACE_AND_SIZING_PREVIEW_PREFERENCE_KEY
    ) ?? true;
  }, [] );
  const { set } = useDispatch( preferencesStore );

  useEffect( () => {
    const updatePortalTarget = () => {
      setPortalTarget( getPreferencesModalTarget() );
    };

    updatePortalTarget();

    if ( ! window?.MutationObserver || ! document.body ) {
      return undefined;
    }

    const observer = new window.MutationObserver( updatePortalTarget );
    observer.observe( document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: [ 'class', 'hidden', 'aria-selected', 'aria-hidden' ],
    } );

    return () => observer.disconnect();
  }, [] );

  if ( ! portalTarget ) {
    return null;
  }

  return createPortal(
    <PreferencesModalSection
      title={ __( 'Nova Blocks', '__plugin_txtd' ) }
      description={ __( 'Set defaults for Nova Blocks editing helpers.', '__plugin_txtd' ) }
    >
      <BaseOption
        label={ __( 'Show Space and Sizing preview by default', '__plugin_txtd' ) }
        help={ __( 'Shows the spacing preview while the Space and Sizing section is open on supported blocks.', '__plugin_txtd' ) }
        isChecked={ isChecked }
        onChange={ ( nextValue ) => {
          set(
            SPACE_AND_SIZING_PREVIEW_PREFERENCE_SCOPE,
            SPACE_AND_SIZING_PREVIEW_PREFERENCE_KEY,
            nextValue
          );
        } }
      />
    </PreferencesModalSection>,
    portalTarget
  );
};

dispatch( preferencesStore ).setDefaults(
  SPACE_AND_SIZING_PREVIEW_PREFERENCE_SCOPE,
  {
    [ SPACE_AND_SIZING_PREVIEW_PREFERENCE_KEY ]: true,
  }
);

registerPlugin( 'novablocks-editor-preferences', {
  render: SpaceAndSizingPreviewPreferences,
} );
