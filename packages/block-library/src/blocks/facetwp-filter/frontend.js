import domReady from "@wordpress/dom-ready";

const TRANSITION_DURATION = 280;
const TRANSITION_EASING = 'cubic-bezier(0.33, 1, 0.68, 1)';
const toggleTimers = new WeakMap();
const FILTER_PANEL_OPEN_CLASS = 'nb-filter-panel-open';
const MOBILE_PANEL_MEDIA_QUERY = '(max-width: 1023px)';
const SKIPPED_FILTER_TYPES = [ 'pager', 'reset', 'sort' ];

export const countActiveFilterValues = ( facets = {}, facetTypes = {} ) => {
  return Object.entries( facets ).reduce( ( total, [ facetName, value ] ) => {
    if ( SKIPPED_FILTER_TYPES.includes( facetTypes[ facetName ] ) ) {
      return total;
    }

    if ( Array.isArray( value ) ) {
      return total + value.filter( current => current !== '' && current !== null && typeof current !== 'undefined' ).length;
    }

    return total + ( String( value || '' ).trim() === '' ? 0 : 1 );
  }, 0 );
};

export const enhanceFacetFormControls = ( root = document ) => {
  root.querySelectorAll( '.nb-facetwp-facet' ).forEach( facetBlock => {
    const label = facetBlock.querySelector( '.nb-facetwp-facet__label' )?.textContent.trim();
    const facetContainer = facetBlock.querySelector( '.facetwp-facet[data-name]' );
    const facetName = facetContainer?.dataset.name;

    facetBlock.querySelectorAll( 'input, select, textarea' ).forEach( control => {
      const hasAssociatedLabel = Boolean( control.labels?.length );

      if ( label && ! hasAssociatedLabel && ! control.closest( 'label' ) && ! control.getAttribute( 'aria-label' ) && ! control.getAttribute( 'aria-labelledby' ) ) {
        control.setAttribute( 'aria-label', label );
      }

      if ( facetName && ! control.name ) {
        control.name = facetName;
      }
    } );
  } );
};

const resultCountTotal = ( rawCount, filterEngine ) => {
  const totalRows = Number( filterEngine?.settings?.pager?.total_rows );

  if ( Number.isFinite( totalRows ) ) {
    return totalRows;
  }

  const normalizedCount = String( rawCount || '' ).trim();
  return /^1$/.test( normalizedCount ) ? 1 : null;
};

export const updateResultCountLabels = ( root = document, filterEngine = window.FWP ) => {
  root.querySelectorAll( '.nb-facetwp-selections__count' ).forEach( countWrapper => {
    const rawCount = countWrapper.querySelector( '.facetwp-counts' );
    let label = countWrapper.querySelector( '.nb-facetwp-selections__count-label' );

    if ( ! rawCount || String( rawCount.textContent || '' ).trim() === '' ) {
      label?.remove();
      return;
    }

    const totalRows = resultCountTotal( rawCount.textContent, filterEngine );
    const noun = totalRows === 1
      ? countWrapper.dataset.resultLabelSingular
      : countWrapper.dataset.resultLabelPlural;
    const nextLabel = ` ${ noun || ( totalRows === 1 ? 'result' : 'results' ) }`;

    if ( ! label ) {
      label = document.createElement( 'span' );
      label.className = 'nb-facetwp-selections__count-label';
      label.textContent = nextLabel;
      countWrapper.appendChild( label );
      return;
    }

    if ( label.textContent !== nextLabel ) {
      label.textContent = nextLabel;
    }
  } );
};

export const setupResultCountLabels = ( root = document, filterEngine = window.FWP ) => {
  const updateLabels = () => updateResultCountLabels( root, filterEngine );

  updateLabels();

  if ( filterEngine?.hooks?.addAction ) {
    filterEngine.hooks.addAction( 'facetwp/loaded', updateLabels, 50 );
  }

  return () => {
    if ( filterEngine?.hooks?.removeAction ) {
      filterEngine.hooks.removeAction( 'facetwp/loaded', updateLabels );
    }
  };
};

const prefersReducedMotion = () => {
  return window.matchMedia && window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;
};

const clearToggleTimer = ( block ) => {
  const timerId = toggleTimers.get( block );

  if ( timerId ) {
    window.clearTimeout( timerId );
    toggleTimers.delete( block );
  }
};

const resetAnimatedStyles = ( block ) => {
  block.style.height = '';
  block.style.opacity = '';
  block.style.overflow = '';
  block.style.transition = '';
  block.style.willChange = '';
  block.style.marginTop = '';
  block.style.marginBottom = '';
};

const slideDown = ( block ) => {
  clearToggleTimer( block );
  block.classList.add( 'is-visible' );

  if ( prefersReducedMotion() ) {
    resetAnimatedStyles( block );
    return;
  }

  const computedStyle = window.getComputedStyle( block );
  const targetMarginTop = parseFloat( computedStyle.marginTop ) || 0;
  const targetMarginBottom = parseFloat( computedStyle.marginBottom ) || 0;

  block.style.transition = `height ${ TRANSITION_DURATION }ms ${ TRANSITION_EASING }, opacity ${ TRANSITION_DURATION }ms ease, margin-top ${ TRANSITION_DURATION }ms ${ TRANSITION_EASING }, margin-bottom ${ TRANSITION_DURATION }ms ${ TRANSITION_EASING }`;
  block.style.overflow = 'hidden';
  block.style.willChange = 'height, opacity, margin-top, margin-bottom';
  block.style.height = '0px';
  block.style.opacity = '0';
  block.style.marginTop = '0px';
  block.style.marginBottom = '0px';

  // Force layout before animating to the expanded height.
  block.offsetHeight;

  const targetHeight = block.scrollHeight;
  block.style.height = `${ targetHeight }px`;
  block.style.opacity = '1';
  block.style.marginTop = `${ targetMarginTop }px`;
  block.style.marginBottom = `${ targetMarginBottom }px`;

  const timerId = window.setTimeout( () => {
    resetAnimatedStyles( block );
    toggleTimers.delete( block );
  }, TRANSITION_DURATION + 50 );

  toggleTimers.set( block, timerId );
};

const slideUp = ( block ) => {
  clearToggleTimer( block );

  if ( prefersReducedMotion() ) {
    block.classList.remove( 'is-visible' );
    resetAnimatedStyles( block );
    return;
  }

  const computedStyle = window.getComputedStyle( block );
  const currentMarginTop = parseFloat( computedStyle.marginTop ) || 0;
  const currentMarginBottom = parseFloat( computedStyle.marginBottom ) || 0;

  block.style.transition = `height ${ TRANSITION_DURATION }ms ${ TRANSITION_EASING }, opacity ${ TRANSITION_DURATION }ms ease, margin-top ${ TRANSITION_DURATION }ms ${ TRANSITION_EASING }, margin-bottom ${ TRANSITION_DURATION }ms ${ TRANSITION_EASING }`;
  block.style.overflow = 'hidden';
  block.style.willChange = 'height, opacity, margin-top, margin-bottom';
  block.style.height = `${ block.scrollHeight }px`;
  block.style.opacity = '1';
  block.style.marginTop = `${ currentMarginTop }px`;
  block.style.marginBottom = `${ currentMarginBottom }px`;

  // Force layout before collapsing.
  block.offsetHeight;

  block.style.height = '0px';
  block.style.opacity = '0';
  block.style.marginTop = '0px';
  block.style.marginBottom = '0px';

  const timerId = window.setTimeout( () => {
    block.classList.remove( 'is-visible' );
    resetAnimatedStyles( block );
    toggleTimers.delete( block );
  }, TRANSITION_DURATION + 50 );

  toggleTimers.set( block, timerId );
};

const getFocusableElements = ( panel ) => {
  return Array.from( panel.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  ) ).filter( element => {
    let current = element;

    while ( current && current !== panel.parentElement ) {
      const style = window.getComputedStyle( current );

      if ( current.hidden || current.getAttribute( 'aria-hidden' ) === 'true' || style.display === 'none' || style.visibility === 'hidden' ) {
        return false;
      }

      current = current.parentElement;
    }

    return element.getClientRects().length > 0;
  } );
};

export const setupResponsiveFilterPanels = ( root = document, filterEngine = window.FWP ) => {
  const panels = Array.from( root.querySelectorAll( '.nb-facetwp-filter--mobile-panel' ) );
  const triggers = Array.from( root.querySelectorAll( '.nb-facetwp-toggle--mobile-panel' ) );
  const summaries = Array.from( root.querySelectorAll( '.nb-facetwp-selections' ) );
  const mobileMediaQuery = window.matchMedia?.( MOBILE_PANEL_MEDIA_QUERY );

  if ( panels.length === 0 || triggers.length === 0 ) {
    return () => {};
  }

  panels.forEach( ( panel, index ) => {
    if ( ! panel.id ) {
      panel.id = `nb-facetwp-mobile-panel-${ index + 1 }`;
    }
  } );

  const bindings = triggers.map( ( trigger, index ) => {
    const panel = panels[ index ] || panels[ 0 ];
    let sharedContainer = trigger.parentElement;

    while ( sharedContainer && ! sharedContainer.contains( panel ) ) {
      sharedContainer = sharedContainer.parentElement;
    }

    const summary = sharedContainer?.querySelector( '.nb-facetwp-selections' ) || summaries[ index ] || null;
    trigger.setAttribute( 'aria-controls', panel.id );
    trigger.setAttribute( 'aria-expanded', 'false' );
    return { panel, summary, trigger };
  } );

  bindings.forEach( binding => {
    if ( ! mobileMediaQuery || mobileMediaQuery.matches ) {
      binding.panel.setAttribute( 'aria-hidden', 'true' );
    }
  } );

  let activeBinding = null;
  let pendingFocusAfterLoad = null;
  const listeners = [];

  const listen = ( target, eventName, callback ) => {
    target.addEventListener( eventName, callback );
    listeners.push( () => target.removeEventListener( eventName, callback ) );
  };

  const closePanel = ( binding, restoreFocus = true ) => {
    if ( ! binding ) {
      return;
    }

    binding.trigger.setAttribute( 'aria-expanded', 'false' );
    binding.panel.classList.remove( 'is-mobile-open' );
    binding.panel.removeAttribute( 'role' );
    binding.panel.removeAttribute( 'aria-modal' );
    binding.panel.removeAttribute( 'aria-labelledby' );

    if ( ! mobileMediaQuery || mobileMediaQuery.matches ) {
      binding.panel.setAttribute( 'aria-hidden', 'true' );
    } else {
      binding.panel.removeAttribute( 'aria-hidden' );
    }

    document.documentElement.classList.remove( FILTER_PANEL_OPEN_CLASS );
    document.body.classList.remove( FILTER_PANEL_OPEN_CLASS );

    if ( restoreFocus ) {
      binding.trigger.focus();
    }

    if ( activeBinding === binding ) {
      activeBinding = null;
    }
  };

  const openPanel = binding => {
    if ( mobileMediaQuery && ! mobileMediaQuery.matches ) {
      return;
    }

    if ( activeBinding && activeBinding !== binding ) {
      closePanel( activeBinding, false );
    }

    const titleId = binding.panel.dataset.mobileTitleId || binding.panel.querySelector( '[id]' )?.id;
    binding.trigger.setAttribute( 'aria-expanded', 'true' );
    binding.panel.classList.add( 'is-mobile-open' );
    binding.panel.removeAttribute( 'aria-hidden' );
    binding.panel.setAttribute( 'role', 'dialog' );
    binding.panel.setAttribute( 'aria-modal', 'true' );

    if ( titleId ) {
      binding.panel.setAttribute( 'aria-labelledby', titleId );
    }

    document.documentElement.classList.add( FILTER_PANEL_OPEN_CLASS );
    document.body.classList.add( FILTER_PANEL_OPEN_CLASS );
    activeBinding = binding;

    const closeButton = binding.panel.querySelector( '.nb-facetwp-filter__mobile-close' );
    ( closeButton || getFocusableElements( binding.panel )[ 0 ] || binding.panel ).focus();
  };

  const updateCounts = () => {
    enhanceFacetFormControls( root );

    const activeCount = countActiveFilterValues( filterEngine?.facets || {}, filterEngine?.facet_type || {} );

    triggers.forEach( trigger => {
      const count = trigger.querySelector( '.nb-facetwp-toggle__count' );

      if ( ! count ) {
        return;
      }

      count.textContent = String( activeCount );
      count.hidden = activeCount === 0;

      const countLabel = trigger.querySelector( '.nb-facetwp-toggle__count-label' );

      if ( countLabel ) {
        const labelTemplate = activeCount === 1 ? countLabel.dataset.singular : countLabel.dataset.plural;
        countLabel.textContent = ( labelTemplate || '%d active filters' ).replace( '%d', String( activeCount ) );
        countLabel.hidden = activeCount === 0;
      }
    } );

    if ( pendingFocusAfterLoad ) {
      const summaryCount = pendingFocusAfterLoad.summary?.querySelector( '.nb-facetwp-selections__count' );

      if ( summaryCount ) {
        summaryCount.setAttribute( 'tabindex', '-1' );
        summaryCount.focus();
      } else {
        pendingFocusAfterLoad.trigger?.focus();
      }

      pendingFocusAfterLoad = null;
    }
  };

  bindings.forEach( binding => {
    listen( binding.trigger, 'click', () => {
      if ( activeBinding === binding ) {
        closePanel( binding );
        return;
      }

      openPanel( binding );
    } );

    const closeButton = binding.panel.querySelector( '.nb-facetwp-filter__mobile-close' );
    if ( closeButton ) {
      listen( closeButton, 'click', () => closePanel( binding ) );
    }
  } );

	listen( root, 'click', event => {
		const resetButton = event.target.closest( '.facetwp-reset' );

		if ( ! resetButton ) {
			return;
		}

		const resetSummary = resetButton.closest( '.nb-facetwp-selections' );
		const resetBinding = bindings.find( binding => binding.panel.contains( resetButton ) || binding.summary === resetSummary );

		pendingFocusAfterLoad = {
			summary: resetSummary || resetBinding?.summary || null,
			trigger: resetBinding?.trigger || activeBinding?.trigger || null,
		};

		if ( resetBinding?.panel.contains( resetButton ) ) {
			closePanel( resetBinding, false );
		}
	} );

  listen( root, 'keydown', event => {
    if ( ! activeBinding ) {
      return;
    }

    if ( event.key === 'Escape' ) {
      event.preventDefault();
      closePanel( activeBinding );
      return;
    }

    if ( event.key !== 'Tab' ) {
      return;
    }

    const focusable = getFocusableElements( activeBinding.panel );
    if ( focusable.length === 0 ) {
      return;
    }

    const first = focusable[ 0 ];
    const last = focusable[ focusable.length - 1 ];

    if ( event.shiftKey && document.activeElement === first ) {
      event.preventDefault();
      last.focus();
    } else if ( ! event.shiftKey && document.activeElement === last ) {
      event.preventDefault();
      first.focus();
    }
  } );

  const handleMobileViewportChange = event => {
    if ( event.matches ) {
      bindings.forEach( binding => {
        if ( binding !== activeBinding ) {
          const focusWasInside = binding.panel.contains( document.activeElement );
          binding.panel.setAttribute( 'aria-hidden', 'true' );

          if ( focusWasInside ) {
            if ( binding.trigger.getClientRects().length > 0 ) {
              binding.trigger.focus();
            } else {
              window.requestAnimationFrame( () => binding.trigger.focus() );
            }
          }
        }
      } );
      return;
    }

    bindings.forEach( binding => binding.panel.removeAttribute( 'aria-hidden' ) );

    if ( ! activeBinding ) {
      return;
    }

    const binding = activeBinding;
    const focusWasInside = binding.panel.contains( document.activeElement );
    closePanel( binding, false );

    if ( focusWasInside ) {
      const nextControl = getFocusableElements( binding.panel ).find( element => ! element.closest( '.nb-facetwp-filter__mobile-header' ) );

      if ( nextControl ) {
        nextControl.focus();
      } else {
        binding.panel.setAttribute( 'tabindex', '-1' );
        binding.panel.focus();
      }
    }
  };

  if ( mobileMediaQuery?.addEventListener ) {
    mobileMediaQuery.addEventListener( 'change', handleMobileViewportChange );
    listeners.push( () => mobileMediaQuery.removeEventListener( 'change', handleMobileViewportChange ) );
  } else if ( mobileMediaQuery?.addListener ) {
    mobileMediaQuery.addListener( handleMobileViewportChange );
    listeners.push( () => mobileMediaQuery.removeListener( handleMobileViewportChange ) );
  }

  updateCounts();

  if ( filterEngine?.hooks?.addAction ) {
    filterEngine.hooks.addAction( 'facetwp/loaded', updateCounts, 50 );
  }

  return () => {
    listeners.forEach( removeListener => removeListener() );
    bindings.forEach( binding => closePanel( binding, false ) );
    pendingFocusAfterLoad = null;

    if ( filterEngine?.hooks?.removeAction ) {
      filterEngine.hooks.removeAction( 'facetwp/loaded', updateCounts );
    }
  };
};

domReady( () => {
  const blocks = Array.from( document.querySelectorAll( '.nb-facetwp-filter' ) );
  const hiddenBlocks = blocks.filter( block => block.classList.contains( 'nb-facetwp-filter--section-type-hidden' ) );

  blocks.forEach( block => {
    const toggles = block.querySelectorAll( '.nb-facetwp-toggle:not(.nb-facetwp-toggle--mobile-panel)' );

    toggles.forEach( toggle => {
      if ( toggle.dataset.novablocksFacetToggleBound === "true" ) {
        return;
      }

      toggle.dataset.novablocksFacetToggleBound = "true";
      toggle.dataset.toggled = "false";

      const handleToggle = () => {
        const shouldOpen = toggle.dataset.toggled !== "true";
        toggle.dataset.toggled = shouldOpen ? "true" : "false";
        toggle.setAttribute( 'aria-expanded', shouldOpen ? 'true' : 'false' );

        hiddenBlocks.forEach( hiddenBlock => {
          if ( shouldOpen ) {
            slideDown( hiddenBlock );
            return;
          }

          slideUp( hiddenBlock );
        } );
      };

      toggle.addEventListener( 'click', handleToggle );

      toggle.addEventListener( 'keydown', ( event ) => {
        if ( event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar' ) {
          event.preventDefault();
          handleToggle();
        }
      } );
    } );
  } );

  setupResultCountLabels( document, window.FWP );
  setupResponsiveFilterPanels( document, window.FWP );
} );
