/**
 * Plus gating trial UI — the block-editor port of Style Manager's
 * "Try & Play" interaction contract.
 *
 * Presentation only: locked controls stay fully usable as a live sandbox and
 * the real gate is intrinsic, server-side (lib/plus-gating.php). Copy is
 * canonical in pixelgrade-plus/docs/plus-gating-copy.md and arrives through
 * the localized `plus` payload (wp.novaBlocks.settings.plus).
 *
 * Interaction contract (ported from SM's try-and-play.js):
 * - Covered state: soft scrim + the gate's overlayNote + a primary
 *   "Play with these options ▶" button over inert controls.
 * - Revealed state: fully interactive controls + a slim persistent banner
 *   carrying the gate's while-playing note + an `is-playing` texture.
 * - Re-disclosure: sessionStorage keyed by gate id + performance.timeOrigin,
 *   so tab switches don't re-prompt but fresh loads do.
 */
import { Button } from "@wordpress/components";
import { useCallback, useEffect, useRef, useState } from "@wordpress/element";

import { useSettings } from "../../hooks";

const STORAGE_PREFIX = 'nbTryAndPlay:';
const REVEAL_EVENT = 'novablocks:plus-gate-reveal';
// Constant for the life of the document, unique per load — survives tab
// switches, re-discloses on fresh loads.
const LOAD_NONCE = Math.round( window.performance?.timeOrigin || 0 );

const storageKey = ( gateId ) => `${ STORAGE_PREFIX }${ LOAD_NONCE }:${ gateId }`;

const wasRevealed = ( gateId ) => {
  try {
    return window.sessionStorage.getItem( storageKey( gateId ) ) === '1';
  } catch ( error ) {
    return false;
  }
};

const persistReveal = ( gateId ) => {
  try {
    window.sessionStorage.setItem( storageKey( gateId ), '1' );
  } catch ( error ) {
    // Private mode etc. — the overlay simply re-shows; never block the editor.
  }
};

/**
 * Resolves a gate from the localized payload. Fails open: a missing payload,
 * gate, or entitlement entry renders zero gating chrome.
 */
export const usePlusGate = ( gateId ) => {
  const settings = useSettings();
  const plus = settings?.plus;
  const gate = plus?.gates?.[ gateId ];
  const locked = !! ( gate && plus?.locked?.[ gate.entitlement ] );

  return { plus, gate, locked };
};

/**
 * Small "Plus" pill for a gated entry point. Renders nothing when unlocked.
 */
export const PlusBadge = ( { gateId } ) => {
  const { plus, locked } = usePlusGate( gateId );

  if ( ! locked ) {
    return null;
  }

  return <span className="nb-plus-badge">{ plus.badge }</span>;
};

const PlayIcon = () => (
  <svg className="nb-plus-gate__play-icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M8 5v14l11-7z" fill="currentColor" />
  </svg>
);

/**
 * Wraps gated controls in the two-state trial chrome. Unlocked (or when the
 * payload is absent) it renders children untouched.
 */
const TryAndPlay = ( { gateId, children } ) => {
  const { plus, gate, locked } = usePlusGate( gateId );
  const [ revealed, setRevealed ] = useState( () => wasRevealed( gateId ) );
  const contentRef = useRef( null );

  // Keep simultaneous mounts of the same gate in sync (e.g. the parametric
  // Presets and Settings tabs) so one reveal covers the whole boundary.
  useEffect( () => {
    const onReveal = ( event ) => {
      if ( event?.detail?.gateId === gateId ) {
        setRevealed( true );
      }
    };

    window.addEventListener( REVEAL_EVENT, onReveal );
    return () => window.removeEventListener( REVEAL_EVENT, onReveal );
  }, [ gateId ] );

  // `inert` removes covered controls from focus/pointer/a11y while visible.
  // Set through the DOM property for compatibility with the bundled React.
  useEffect( () => {
    if ( contentRef.current ) {
      contentRef.current.inert = locked && ! revealed;
    }
  } );

  const reveal = useCallback( () => {
    persistReveal( gateId );
    setRevealed( true );
    window.dispatchEvent( new CustomEvent( REVEAL_EVENT, { detail: { gateId } } ) );
  }, [ gateId ] );

  if ( ! locked ) {
    return children;
  }

  return (
    <div className={ 'nb-plus-gate' + ( revealed ? ' is-playing' : ' is-covered' ) }>
      { revealed && (
        <div className="nb-plus-gate__banner" role="note">
          <span className="nb-plus-badge">{ plus.badge }</span>
          <span className="nb-plus-gate__banner-text">{ gate.note || plus.bannerText }</span>
          { !! plus.upsellUrl && (
            <a className="nb-plus-gate__link" href={ plus.upsellUrl } target="_blank" rel="noreferrer noopener">
              { plus.learnMore }
            </a>
          ) }
        </div>
      ) }
      <div className="nb-plus-gate__content" ref={ contentRef }>
        { children }
      </div>
      { ! revealed && (
        <div className="nb-plus-gate__scrim">
          <div className="nb-plus-gate__note" role="note">
            <span className="nb-plus-badge">{ plus.badge }</span>
            <span className="nb-plus-gate__note-text">{ gate.overlayNote }</span>
          </div>
          <Button variant="primary" className="nb-plus-gate__button" onClick={ reveal }>
            { plus.buttonLabel }
            <PlayIcon />
          </Button>
        </div>
      ) }
    </div>
  );
};

export default TryAndPlay;
