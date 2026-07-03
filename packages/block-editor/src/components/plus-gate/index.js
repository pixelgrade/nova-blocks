/**
 * Plus gating trial UI — the block-editor port of Style Manager's
 * "Try & Play" interaction contract.
 *
 * Presentation only: locked controls stay fully usable as a live sandbox and
 * the real gate is intrinsic, server-side (lib/plus-gating.php). Copy is
 * canonical in pixelgrade-plus/docs/plus-gating-copy.md and the shared UI
 * spec both plugins pin to is pixelgrade-plus/docs/plus-gating-ui-contract.md;
 * strings arrive through the localized `plus` payload (wp.novaBlocks.settings.plus).
 *
 * Structure (mirrors SM's try-and-play.js one to one):
 * - A persistent intro in normal flow ABOVE the controls — badge + copy +
 *   learn-more, covering nothing. Before reveal it carries the invitation;
 *   after reveal the SAME element flips to the accent-filled trial reminder.
 * - A soft, blurred scrim over the controls with ONLY a full-width primary
 *   "Play with these options ▶" button floating on it.
 * - Reveal: the scrim fades out, controls return to the tab order, focus
 *   moves to the first control, and the host shows the diagonal sandbox
 *   texture while playing.
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

// Honour the scrim's 0.25s fade, but never strand it if transitionend doesn't
// fire (reduced motion, hidden tab, display:none).
const SCRIM_FADE_FALLBACK = 400;

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
  <svg className="nb-plus-gate__button-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
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
  // The scrim outlives the reveal by one fade: mounted -> leaving -> gone.
  const [ scrimLeaving, setScrimLeaving ] = useState( false );
  const [ scrimGone, setScrimGone ] = useState( () => wasRevealed( gateId ) );
  const contentRef = useRef( null );
  const scrimRef = useRef( null );

  // Keep simultaneous mounts of the same gate in sync (e.g. the parametric
  // Presets and Settings tabs) so one reveal covers the whole boundary. Only
  // the mount the user actually clicked moves focus.
  useEffect( () => {
    const onReveal = ( event ) => {
      if ( event?.detail?.gateId === gateId ) {
        setRevealed( true );
        setScrimLeaving( true );
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

  // Retire the leaving scrim after its fade (or the fallback timeout).
  useEffect( () => {
    if ( ! scrimLeaving || scrimGone ) {
      return;
    }

    const remove = () => setScrimGone( true );
    const node = scrimRef.current;
    const timer = window.setTimeout( remove, SCRIM_FADE_FALLBACK );

    if ( node ) {
      node.addEventListener( 'transitionend', remove, { once: true } );
    }

    return () => {
      window.clearTimeout( timer );

      if ( node ) {
        node.removeEventListener( 'transitionend', remove );
      }
    };
  }, [ scrimLeaving, scrimGone ] );

  const reveal = useCallback( () => {
    persistReveal( gateId );
    setRevealed( true );
    setScrimLeaving( true );
    window.dispatchEvent( new CustomEvent( REVEAL_EVENT, { detail: { gateId } } ) );

    // Move focus into the controls so keyboard users land where they can act,
    // instead of being stranded on a button that just vanished. Deferred so
    // the re-render has dropped `inert` first.
    window.requestAnimationFrame( () => {
      const focusable = contentRef.current?.querySelector(
        'input, select, textarea, button, a[href], [tabindex]:not([tabindex="-1"])'
      );

      if ( focusable && typeof focusable.focus === 'function' ) {
        focusable.focus();
      }
    } );
  }, [ gateId ] );

  if ( ! locked ) {
    return children;
  }

  return (
    <div className="nb-plus-gate">
      <div className={ 'nb-plus-gate__intro' + ( revealed ? ' is-revealed' : '' ) } role="note">
        <span className="nb-plus-badge">{ plus.badge }</span>
        <span className="nb-plus-gate__intro-text">
          { revealed ? ( gate.note || plus.bannerText ) : gate.overlayNote }
        </span>
        { !! plus.upsellUrl && (
          <a className="nb-plus-gate__intro-link" href={ plus.upsellUrl } target="_blank" rel="noreferrer noopener">
            { plus.learnMore } &rarr;
          </a>
        ) }
      </div>
      <div className={ 'nb-plus-gate__host' + ( revealed ? ' is-playing' : ' is-covered' ) }>
        <div className={ 'nb-plus-gate__content' + ( revealed ? '' : ' is-covered' ) } ref={ contentRef }>
          { children }
        </div>
        { ! scrimGone && (
          <div className={ 'nb-plus-gate__scrim' + ( scrimLeaving ? ' is-leaving' : '' ) } ref={ scrimRef } role="group">
            <Button variant="primary" className="nb-plus-gate__button" onClick={ reveal }>
              { plus.buttonLabel }
              <PlayIcon />
            </Button>
          </div>
        ) }
      </div>
    </div>
  );
};

export default TryAndPlay;
