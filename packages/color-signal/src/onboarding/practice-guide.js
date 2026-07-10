import { Button } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { ControlsGroup } from '@novablocks/block-editor';

import { findPracticeBlocks } from './derive-steps';
import insertPracticeSection from './insert-practice-section';
import {
  isGuideAvailable,
  isGuideVisible,
  onGuideVisibilityChange,
  removePracticeSection,
  startGuideSession,
  syncPaletteBaseline,
} from './guide-session';

// Thin sidebar surface over the module-level guide session (guide-session.js). The steps
// themselves live ONLY in the Assistant's floating window — the sidebar just offers the way in
// (and out). The panel remounts on every selection change, so all guide state stays in the session.
const ColorSignalPracticeGuide = () => {

  const { intro, cta } = useSelect( ( select ) => {
    return findPracticeBlocks( select( 'core/block-editor' ).getBlocks() );
  }, [] );

  const hasPractice = !! ( intro || cta );
  const [ guideVisible, setGuideVisible ] = useState( isGuideVisible() );

  useEffect( () => {
    syncPaletteBaseline( intro, cta );
  }, [ intro, cta ] );

  useEffect( () => onGuideVisibilityChange( setGuideVisible ), [] );

  if ( ! hasPractice ) {
    return (
      <ControlsGroup key={ 'color_signal_practice_entry' } title={ __( 'Learn by doing', '__plugin_txtd' ) }>
        <p>
          { __( 'The quickest way to get Color Signal is to use it. Insert a small practice section below this block, shape its attention levels, then delete it — your page stays yours.', '__plugin_txtd' ) }
        </p>
        <Button
          variant={ 'secondary' }
          onClick={ () => {
            insertPracticeSection();
            // The step-by-step guide opens in the Assistant's floating window when available;
            // without it, the practice section teaches through its own content.
            startGuideSession();
          } }
        >
          { __( 'Try Color Signal', '__plugin_txtd' ) }
        </Button>
      </ControlsGroup>
    );
  }

  // While the walkthrough runs in the floating window, the sidebar stays out of the way —
  // the window itself carries the steps and the remove action.
  if ( guideVisible ) {
    return null;
  }

  return (
    <ControlsGroup key={ 'color_signal_practice_guide' } title={ __( 'Color Signal Practice', '__plugin_txtd' ) }>
      <div style={ { display: 'flex', flexWrap: 'wrap', gap: '8px' } }>
        { isGuideAvailable() &&
          <Button variant={ 'secondary' } onClick={ startGuideSession }>
            { __( 'Open the practice guide', '__plugin_txtd' ) }
          </Button>
        }
        <Button variant={ 'tertiary' } isDestructive onClick={ removePracticeSection }>
          { __( 'Remove practice section', '__plugin_txtd' ) }
        </Button>
      </div>
    </ControlsGroup>
  );
};

export default ColorSignalPracticeGuide;
