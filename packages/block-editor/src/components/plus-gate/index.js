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
 *
 * ONE BOUNDARY PER TAB (ui-contract "merged groups"): a tab must never stack
 * several banners + scrims + CTAs. When multiple gates share a tab, call sites
 * wrap the gated tail in <TryAndPlayGroup gateIds={[...]}>: the group renders
 * ONE shared boundary around all its locked member gates (generic
 * `groupOverlayNote` copy when there's more than one), and each inner
 * <TryAndPlay> the group handles renders its children bare. Revealing the
 * group persists + broadcasts EVERY member gate, so solo mounts of the same
 * gates on other tabs stay in sync; the group itself counts as revealed only
 * when all of its members are.
 */
import { Button } from "@wordpress/components";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "@wordpress/element";
import { addQueryArgs } from "@wordpress/url";

import { useSettings } from "../../hooks";

const STORAGE_PREFIX = 'nbTryAndPlay:';
const REVEAL_EVENT = 'novablocks:plus-gate-reveal';
// Constant for the life of the document, unique per load — survives tab
// switches, re-discloses on fresh loads.
const LOAD_NONCE = Math.round( window.performance?.timeOrigin || 0 );

// Honour the scrim's 0.25s fade, but never strand it if transitionend doesn't
// fire (reduced motion, hidden tab, display:none).
const SCRIM_FADE_FALLBACK = 400;

// The Set of gate ids a surrounding <TryAndPlayGroup> is presenting; member
// <TryAndPlay> mounts render bare and leave the chrome to the group.
const PlusGateGroupContext = createContext( null );

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
 * The upsell URL with feature attribution, so the landing page knows which
 * gated feature the visitor came from and can highlight/personalize
 * accordingly. Parameter contract is canonical in
 * pixelgrade-plus/docs/plus-gating-copy.md (mirrored by Style Manager's
 * upsell-url.js): utm_source = the plugin, utm_medium = the link surface
 * ('plus-gate' banner or 'save-plus' snackbar), utm_campaign = 'try-and-play',
 * utm_content = the feature context (gate id, comma-joined for merged
 * boundaries). Applied on top of the (filterable) base URL.
 */
export const plusUpsellUrl = ( plus, { medium = 'plus-gate', content = '' } = {} ) => {
  if ( ! plus?.upsellUrl ) {
    return '';
  }

  return addQueryArgs( plus.upsellUrl, {
    utm_source: 'nova-blocks',
    utm_medium: medium,
    utm_campaign: 'try-and-play',
    ...( content ? { utm_content: content } : {} ),
  } );
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
 * The two-state trial chrome around one OR several locked gates. `gates` is a
 * non-empty array of `{ id, gate }` descriptors; a single entry renders that
 * gate's own copy (indistinguishable from the pre-group behavior), several
 * entries render the generic merged-boundary copy. Callers key the mount on
 * the joined gate ids so membership changes remount with fresh state.
 */
const TrialBoundary = ( { plus, gates, children } ) => {
  const gateIds = gates.map( ( { id } ) => id );
  const allRevealed = () => gateIds.every( wasRevealed );
  const [ revealed, setRevealed ] = useState( allRevealed );
  // The scrim outlives the reveal by one fade: mounted -> leaving -> gone.
  const [ scrimLeaving, setScrimLeaving ] = useState( false );
  const [ scrimGone, setScrimGone ] = useState( allRevealed );
  // Reveal events received this mount — tracked alongside sessionStorage so
  // cross-mount sync still works when storage is unavailable (private mode).
  const revealedIdsRef = useRef( new Set( gateIds.filter( wasRevealed ) ) );
  const contentRef = useRef( null );
  const scrimRef = useRef( null );

  // Keep simultaneous mounts sharing any of these gates in sync (e.g. the
  // parametric Presets and Settings tabs, or a merged Composition boundary
  // and the Cards tab's solo depth room). Only the mount the user actually
  // clicked moves focus; this boundary uncovers once EVERY member gate has
  // been revealed somewhere.
  useEffect( () => {
    const onReveal = ( event ) => {
      const revealedId = event?.detail?.gateId;

      if ( ! revealedId || ! gateIds.includes( revealedId ) ) {
        return;
      }

      revealedIdsRef.current.add( revealedId );

      if ( gateIds.every( ( id ) => revealedIdsRef.current.has( id ) ) ) {
        setRevealed( true );
        setScrimLeaving( true );
      }
    };

    window.addEventListener( REVEAL_EVENT, onReveal );
    return () => window.removeEventListener( REVEAL_EVENT, onReveal );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ gateIds.join( '|' ) ] );

  // `inert` removes covered controls from focus/pointer/a11y while visible.
  // Set through the DOM property for compatibility with the bundled React.
  useEffect( () => {
    if ( contentRef.current ) {
      contentRef.current.inert = ! revealed;
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
    gateIds.forEach( ( id ) => {
      persistReveal( id );
      revealedIdsRef.current.add( id );
    } );
    setRevealed( true );
    setScrimLeaving( true );
    gateIds.forEach( ( id ) => {
      window.dispatchEvent( new CustomEvent( REVEAL_EVENT, { detail: { gateId: id } } ) );
    } );

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ gateIds.join( '|' ) ] );

  // A merged boundary speaks generically (canonical `groupOverlayNote` /
  // shared `bannerText`); a single-gate boundary keeps that gate's own voice.
  const isMerged = gates.length > 1;
  const introText = isMerged
    ? ( plus.groupOverlayNote || plus.bannerText )
    : gates[ 0 ].gate.overlayNote;
  const reminderText = isMerged
    ? plus.bannerText
    : ( gates[ 0 ].gate.note || plus.bannerText );

  return (
    <div className="nb-plus-gate">
      <div className={ 'nb-plus-gate__intro' + ( revealed ? ' is-revealed' : '' ) } role="note">
        <span className="nb-plus-badge">{ plus.badge }</span>
        <span className="nb-plus-gate__intro-text">
          { revealed ? reminderText : introText }
        </span>
        { !! plus.upsellUrl && (
          <a
            className="nb-plus-gate__intro-link"
            href={ plusUpsellUrl( plus, { content: gateIds.join( ',' ) } ) }
            target="_blank"
            rel="noreferrer noopener"
          >
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

/**
 * Merges every locked gate of a tab into ONE shared Try & Play boundary at
 * the gated tail of the panel. Inner <TryAndPlay> mounts whose gate id is
 * listed here render bare (the group owns the chrome); ids that resolve
 * unlocked are simply left out. With no locked member the children render
 * untouched; with exactly one, the boundary matches a solo <TryAndPlay>.
 *
 * Call sites keep ONLY gated content inside the group (free controls stay
 * above it): while any member gate is locked the whole group body sits under
 * the shared scrim. Entitlements ship all-or-nothing today, so a mixed
 * locked/unlocked membership is theoretical — it would cover the unlocked
 * group until reveal, never hide it.
 */
export const TryAndPlayGroup = ( { gateIds = [], children } ) => {
  const settings = useSettings();
  const plus = settings?.plus;

  const lockedGates = gateIds
    .map( ( id ) => ( { id, gate: plus?.gates?.[ id ] } ) )
    .filter( ( { gate } ) => !! ( gate && plus?.locked?.[ gate.entitlement ] ) );

  if ( ! lockedGates.length ) {
    return children;
  }

  const lockedIds = new Set( lockedGates.map( ( { id } ) => id ) );

  return (
    <PlusGateGroupContext.Provider value={ lockedIds }>
      <TrialBoundary key={ [ ...lockedIds ].join( '|' ) } plus={ plus } gates={ lockedGates }>
        { children }
      </TrialBoundary>
    </PlusGateGroupContext.Provider>
  );
};

/**
 * Wraps gated controls in the two-state trial chrome. Unlocked (or when the
 * payload is absent) it renders children untouched; inside a
 * <TryAndPlayGroup> that lists its gate it also renders bare — the group
 * presents the shared boundary.
 */
const TryAndPlay = ( { gateId, children } ) => {
  const { plus, gate, locked } = usePlusGate( gateId );
  const groupGateIds = useContext( PlusGateGroupContext );

  if ( ! locked ) {
    return children;
  }

  if ( groupGateIds && groupGateIds.has( gateId ) ) {
    return children;
  }

  return (
    <TrialBoundary key={ gateId } plus={ plus } gates={ [ { id: gateId, gate } ] }>
      { children }
    </TrialBoundary>
  );
};

export default TryAndPlay;
