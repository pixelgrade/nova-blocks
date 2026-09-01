/**
 * @jest-environment jsdom
 */

jest.mock( '@wordpress/dom-ready', () => callback => callback() );

import {
	countActiveFilterValues,
	setupResultCountLabels,
	setupResponsiveFilterPanels,
} from './frontend';

describe( 'responsive filter panels', () => {
	let mobileMediaQuery;

	beforeEach( () => {
		document.documentElement.className = '';
		document.body.className = '';
		document.body.innerHTML = '';

		const listeners = new Set();
		mobileMediaQuery = {
			matches: true,
			addEventListener: jest.fn( ( eventName, callback ) => {
				if ( eventName === 'change' ) {
					listeners.add( callback );
				}
			} ),
			removeEventListener: jest.fn( ( eventName, callback ) => {
				if ( eventName === 'change' ) {
					listeners.delete( callback );
				}
			} ),
			setMatches( matches ) {
				this.matches = matches;
				listeners.forEach( callback => callback( { matches } ) );
			},
		};

		window.matchMedia = jest.fn( query => {
			if ( query === '(max-width: 1023px)' ) {
				return mobileMediaQuery;
			}

			return {
				matches: false,
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
			};
		} );
		window.requestAnimationFrame = jest.fn( callback => {
			callback();
			return 1;
		} );

		HTMLElement.prototype.getClientRects = jest.fn( () => [ { width: 1, height: 1 } ] );
	} );

	test( 'counts active choices while excluding non-filter controls', () => {
		expect( countActiveFilterValues(
			{
				categories: [ 'dessert' ],
				recipe_course: [ 'breakfast', 'brunch' ],
				recipe_search: 'cake',
				recipe_pager: [ '2' ],
				recipe_reset: [ 'reset' ],
				paged: '2',
			},
			{
				categories: 'dropdown',
				recipe_course: 'checkboxes',
				recipe_search: 'search',
				recipe_pager: 'pager',
				recipe_reset: 'reset',
			}
		) ).toBe( 4 );
	} );

	test( 'never counts internal pagination state before facet types initialize', () => {
		expect( countActiveFilterValues( { paged: '2' }, {} ) ).toBe( 0 );
	} );

	test( 'labels raw result counts with author-defined singular and plural nouns', async () => {
		document.body.innerHTML = `
			<div class="nb-facetwp-selections">
				<div class="nb-facetwp-selections__count" data-result-label-singular="recipe" data-result-label-plural="recipes">
					<div class="facetwp-counts">6</div>
				</div>
			</div>
		`;

		let onLoaded;
		const filterEngine = {
			settings: { pager: { total_rows: 6 } },
			hooks: {
				addAction: jest.fn( ( hook, callback ) => {
					if ( hook === 'facetwp/loaded' ) {
						onLoaded = callback;
					}
				} ),
				removeAction: jest.fn(),
			},
		};

		const teardown = setupResultCountLabels( document, filterEngine );
		const count = document.querySelector( '.nb-facetwp-selections__count' );

		expect( count.textContent.replace( /\s+/g, ' ' ).trim() ).toBe( '6 recipes' );

		const label = count.querySelector( '.nb-facetwp-selections__count-label' );
		const mutations = [];
		const observer = new MutationObserver( records => mutations.push( ...records ) );
		observer.observe( label, { characterData: true, childList: true, subtree: true } );
		onLoaded();
		await Promise.resolve();
		expect( mutations ).toHaveLength( 0 );
		observer.disconnect();

		filterEngine.settings.pager.total_rows = 1;
		count.querySelector( '.facetwp-counts' ).textContent = '1';
		onLoaded();
		expect( count.textContent.replace( /\s+/g, ' ' ).trim() ).toBe( '1 recipe' );

		filterEngine.settings.pager.total_rows = 20;
		count.querySelector( '.facetwp-counts' ).textContent = '1-9 of 20';
		onLoaded();
		onLoaded();
		expect( count.textContent.replace( /\s+/g, ' ' ).trim() ).toBe( '1-9 of 20 recipes' );
		expect( count.querySelectorAll( '.nb-facetwp-selections__count-label' ) ).toHaveLength( 1 );

		teardown();
		expect( filterEngine.hooks.removeAction ).toHaveBeenCalledWith( 'facetwp/loaded', expect.any( Function ) );
	} );

	test( 'uses generic result nouns and tolerates summaries without a count shortcode', () => {
		document.body.innerHTML = `
			<div class="nb-facetwp-selections">
				<div class="nb-facetwp-selections__count" data-result-label-singular="result" data-result-label-plural="results">
					<div class="facetwp-counts">1</div>
				</div>
			</div>
			<div class="nb-facetwp-selections"></div>
		`;

		setupResultCountLabels( document, {} );

		expect( document.querySelector( '.nb-facetwp-selections__count' ).textContent.replace( /\s+/g, ' ' ).trim() ).toBe( '1 result' );
	} );

	test( 'opens as a modal dialog, closes on Escape, and restores trigger focus', () => {
		document.body.innerHTML = `
			<button class="nb-facetwp-toggle nb-facetwp-toggle--mobile-panel" aria-expanded="false">
				Filters
				<span class="nb-facetwp-toggle__count" aria-hidden="true" hidden></span>
				<span class="screen-reader-text nb-facetwp-toggle__count-label" data-singular="%d active filter" data-plural="%d active filters" hidden></span>
			</button>
			<div id="recipe-filter-panel" class="nb-facetwp-filter nb-facetwp-filter--mobile-panel">
				<h2 id="recipe-filter-title">Filters</h2>
				<button class="nb-facetwp-filter__mobile-close">Close</button>
				<button class="facetwp-reset">Clear filters</button>
				<div class="nb-facetwp-facet">
					<div class="nb-facetwp-facet__label">Category</div>
					<div class="facetwp-facet" data-name="categories">
						<select><option>All categories</option></select>
					</div>
				</div>
				<a href="#course">Course</a>
			</div>
			<div class="nb-facetwp-selections">
				<div class="nb-facetwp-selections__count" role="status">4 recipes</div>
				<button class="facetwp-reset">Clear filters</button>
			</div>
		`;

		let onLoaded = null;
		const filterEngine = {
			facets: { categories: [ 'dessert' ], recipe_course: [ 'breakfast' ] },
			facet_type: { categories: 'dropdown', recipe_course: 'checkboxes' },
			hooks: {
				addAction: jest.fn( ( hook, callback ) => {
					if ( hook === 'facetwp/loaded' ) {
						onLoaded = callback;
					}
				} ),
				removeAction: jest.fn(),
			},
		};

		const teardown = setupResponsiveFilterPanels( document, filterEngine );
		const trigger = document.querySelector( '.nb-facetwp-toggle--mobile-panel' );
		const count = trigger.querySelector( '.nb-facetwp-toggle__count' );
		const countLabel = trigger.querySelector( '.nb-facetwp-toggle__count-label' );
		const panel = document.querySelector( '.nb-facetwp-filter--mobile-panel' );
		const close = panel.querySelector( '.nb-facetwp-filter__mobile-close' );

		expect( trigger.getAttribute( 'aria-controls' ) ).toBe( panel.id );
		expect( panel.getAttribute( 'aria-hidden' ) ).toBe( 'true' );
		expect( panel.querySelector( 'select' ).getAttribute( 'aria-label' ) ).toBe( 'Category' );
		expect( panel.querySelector( 'select' ).name ).toBe( 'categories' );
		expect( count.hidden ).toBe( false );
		expect( count.textContent ).toBe( '2' );
		expect( count.getAttribute( 'aria-hidden' ) ).toBe( 'true' );
		expect( countLabel.hidden ).toBe( false );
		expect( countLabel.textContent ).toBe( '2 active filters' );

		trigger.click();

		expect( trigger.getAttribute( 'aria-expanded' ) ).toBe( 'true' );
		expect( panel.classList.contains( 'is-mobile-open' ) ).toBe( true );
		expect( panel.getAttribute( 'role' ) ).toBe( 'dialog' );
		expect( panel.getAttribute( 'aria-modal' ) ).toBe( 'true' );
		expect( panel.hasAttribute( 'aria-hidden' ) ).toBe( false );
		expect( document.documentElement.classList.contains( 'nb-filter-panel-open' ) ).toBe( true );
		expect( document.activeElement ).toBe( close );

		document.dispatchEvent( new KeyboardEvent( 'keydown', { key: 'Escape', bubbles: true } ) );

		expect( trigger.getAttribute( 'aria-expanded' ) ).toBe( 'false' );
		expect( panel.classList.contains( 'is-mobile-open' ) ).toBe( false );
		expect( panel.hasAttribute( 'role' ) ).toBe( false );
		expect( panel.getAttribute( 'aria-hidden' ) ).toBe( 'true' );
		expect( document.documentElement.classList.contains( 'nb-filter-panel-open' ) ).toBe( false );
		expect( document.activeElement ).toBe( trigger );

		trigger.click();
		expect( panel.classList.contains( 'is-mobile-open' ) ).toBe( true );

		filterEngine.facets = { categories: [], recipe_course: [] };
		panel.querySelector( '.facetwp-reset' ).click();
		expect( panel.classList.contains( 'is-mobile-open' ) ).toBe( false );
		onLoaded();
		expect( count.hidden ).toBe( true );
		expect( document.activeElement ).toBe( document.querySelector( '.nb-facetwp-selections__count' ) );

		teardown();
		expect( filterEngine.hooks.removeAction ).toHaveBeenCalled();
	} );

	test( 'cleans up modal state when the viewport leaves mobile and ignores desktop open requests', () => {
		document.body.innerHTML = `
			<button class="nb-facetwp-toggle nb-facetwp-toggle--mobile-panel">Filters</button>
			<div class="nb-facetwp-filter nb-facetwp-filter--mobile-panel">
				<button class="nb-facetwp-filter__mobile-close">Close</button>
				<button>Course</button>
			</div>
		`;

		const teardown = setupResponsiveFilterPanels( document, {} );
		const trigger = document.querySelector( '.nb-facetwp-toggle--mobile-panel' );
		const panel = document.querySelector( '.nb-facetwp-filter--mobile-panel' );

		trigger.click();
		expect( panel.classList.contains( 'is-mobile-open' ) ).toBe( true );

		mobileMediaQuery.setMatches( false );

		expect( panel.classList.contains( 'is-mobile-open' ) ).toBe( false );
		expect( panel.hasAttribute( 'role' ) ).toBe( false );
		expect( panel.hasAttribute( 'aria-hidden' ) ).toBe( false );
		expect( trigger.getAttribute( 'aria-expanded' ) ).toBe( 'false' );
		expect( document.documentElement.classList.contains( 'nb-filter-panel-open' ) ).toBe( false );

		trigger.click();
		expect( panel.classList.contains( 'is-mobile-open' ) ).toBe( false );

		const desktopControl = panel.querySelector( 'button:not(.nb-facetwp-filter__mobile-close)' );
		desktopControl.focus();
		expect( document.activeElement ).toBe( desktopControl );
		trigger.getClientRects = jest.fn( () => [] );

		mobileMediaQuery.setMatches( true );
		expect( panel.getAttribute( 'aria-hidden' ) ).toBe( 'true' );
		expect( window.requestAnimationFrame ).toHaveBeenCalled();
		expect( document.activeElement ).toBe( trigger );

		teardown();
		expect( mobileMediaQuery.removeEventListener ).toHaveBeenCalledWith( 'change', expect.any( Function ) );
	} );

	test( 'returns focus to the originating trigger after a drawer reset without a result summary', () => {
		document.body.innerHTML = `
			<button class="nb-facetwp-toggle nb-facetwp-toggle--mobile-panel">Filters</button>
			<div class="nb-facetwp-filter nb-facetwp-filter--mobile-panel">
				<button class="nb-facetwp-filter__mobile-close">Close</button>
				<button class="facetwp-reset">Clear filters</button>
			</div>
		`;

		let onLoaded;
		const filterEngine = {
			facets: {},
			facet_type: {},
			hooks: {
				addAction: jest.fn( ( hook, callback ) => {
					if ( hook === 'facetwp/loaded' ) {
						onLoaded = callback;
					}
				} ),
				removeAction: jest.fn(),
			},
		};

		setupResponsiveFilterPanels( document, filterEngine );
		const trigger = document.querySelector( '.nb-facetwp-toggle--mobile-panel' );
		const panel = document.querySelector( '.nb-facetwp-filter--mobile-panel' );

		trigger.click();
		panel.querySelector( '.facetwp-reset' ).click();
		onLoaded();

		expect( panel.classList.contains( 'is-mobile-open' ) ).toBe( false );
		expect( document.activeElement ).toBe( trigger );
	} );

	test( 'focuses the result summary associated with the reset panel when listings repeat', () => {
		document.body.innerHTML = [ 'first', 'second' ].map( name => `
			<section data-listing="${ name }">
				<button class="nb-facetwp-toggle nb-facetwp-toggle--mobile-panel">Filters</button>
				<div class="nb-facetwp-selections">
					<div class="nb-facetwp-selections__count">${ name } results</div>
				</div>
				<div class="nb-facetwp-filter nb-facetwp-filter--mobile-panel">
					<button class="nb-facetwp-filter__mobile-close">Close</button>
					<button class="facetwp-reset">Clear filters</button>
				</div>
			</section>
		` ).join( '' );

		let onLoaded;
		const filterEngine = {
			facets: {},
			facet_type: {},
			hooks: {
				addAction: jest.fn( ( hook, callback ) => {
					if ( hook === 'facetwp/loaded' ) {
						onLoaded = callback;
					}
				} ),
				removeAction: jest.fn(),
			},
		};

		setupResponsiveFilterPanels( document, filterEngine );
		const second = document.querySelector( '[data-listing="second"]' );
		second.querySelector( '.nb-facetwp-toggle--mobile-panel' ).click();
		second.querySelector( '.facetwp-reset' ).click();
		onLoaded();

		expect( document.activeElement ).toBe( second.querySelector( '.nb-facetwp-selections__count' ) );
	} );

	test( 'skips controls hidden by an ancestor when wrapping focus', () => {
		document.body.innerHTML = `
			<button class="nb-facetwp-toggle nb-facetwp-toggle--mobile-panel">Filters</button>
			<div class="nb-facetwp-filter nb-facetwp-filter--mobile-panel">
				<button class="nb-facetwp-filter__mobile-close">Close</button>
				<a href="#course">Course</a>
				<div style="display: none"><button class="facetwp-reset">Clear filters</button></div>
			</div>
		`;

		setupResponsiveFilterPanels( document, {} );
		const trigger = document.querySelector( '.nb-facetwp-toggle--mobile-panel' );
		const close = document.querySelector( '.nb-facetwp-filter__mobile-close' );
		const course = document.querySelector( 'a' );

		trigger.click();
		course.focus();
		document.dispatchEvent( new KeyboardEvent( 'keydown', { key: 'Tab', bubbles: true } ) );

		expect( document.activeElement ).toBe( close );
	} );
} );
