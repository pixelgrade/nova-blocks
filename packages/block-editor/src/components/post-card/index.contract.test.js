import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

const mockGetVisibleOrder = jest.fn();

jest.mock( '@wordpress/i18n', () => ( {
	__: text => text,
} ) );

jest.mock( '@wordpress/data', () => ( {
	withSelect: () => Component => Component,
} ) );

jest.mock( '@novablocks/utils', () => ( {
	getCardExpressionClassesFromValues: values => values.mediaWidth
		? [ 'nb-card--media-landscape', 'nb-card--title-short' ]
		: [ 'nb-card--no-media', 'nb-card--title-short' ],
	getColorSignalClassnames: () => '',
	getOverlayFilterCSSProps: () => ( {} ),
	getSpacingCSSProps: () => ( {} ),
	resizeDropcap: jest.fn(),
} ), { virtual: true } );

jest.mock( '../index', () => ( {
	Card: ( { className, children } ) => <div className={ className }>{ children }</div>,
	CardMeta: ( { children } ) => <div className="nb-card__meta">{ children }</div>,
	CardTitle: ( { children } ) => <h2 className="nb-card__title">{ children }</h2>,
	CardDescription: ( { children } ) => <div className="nb-card__description">{ children }</div>,
	CardFooter: ( { children } ) => <div>{ children }</div>,
	CardButton: ( { children } ) => <button>{ children }</button>,
	CardContentWrapper: ( { attributes = {}, children, extraClassName, region } ) => {
			const [ vertical = 'center', horizontal = 'center' ] = String( attributes.contentPosition || 'center center' ).split( /\s+/ );
			return (
				<div className={ `nb-supernova-item__content nb-supernova-item__content--valign-${ vertical } nb-supernova-item__content--halign-${ horizontal } ${ extraClassName || '' } ${ region?.classNames?.join( ' ' ) || '' }` }>
				{ children }
			</div>
		);
	},
	CardMediaWrapper: ( { children } ) => <div className="nb-supernova-item__media-wrapper">{ children }</div>,
} ) );

jest.mock( '../../filters/with-card-details/components/element-order-utils', () => {
	const actual = jest.requireActual( '../../filters/with-card-details/components/element-order-utils' );

	return {
		...actual,
		getVisibleOrder: ( ...args ) => mockGetVisibleOrder( ...args ),
		metasAreAdjacent: () => false,
	};
} );

jest.mock( './utils', () => ( {
	getMetadata: () => '',
	sanitizeMediaResponse: media => media,
} ) );

import { PostCardComponent } from './index';

const baseAttributes = {
	showMeta: false,
	showTitle: true,
	showDescription: true,
	showButtons: false,
	showMedia: false,
	primaryMetadata: 'category',
	secondaryMetadata: 'author',
};

const basePost = {
	id: 19,
	format: 'standard',
	title: { raw: 'A short card title' },
	excerpt: { rendered: '<p>A short description.</p>' },
	content: { raw: '' },
};

describe( 'PostCard expression-class integration', () => {
	let container;

	beforeEach( () => {
		container = document.createElement( 'div' );
		document.body.appendChild( container );
	} );

	afterEach( () => {
		act( () => {
			unmountComponentAtNode( container );
		} );
		container.remove();
		jest.clearAllMocks();
	} );

	test( 'renders expression and format classes on a no-media card', () => {
		mockGetVisibleOrder.mockReturnValue( [ 'media', 'title', 'description' ] );

		act( () => {
			render( <PostCardComponent attributes={ baseAttributes } post={ basePost } />, container );
		} );

		expect( [ ...container.firstElementChild.classList ] ).toEqual(
			expect.arrayContaining( [ 'nb-card--no-media', 'nb-card--title-short', 'format-standard' ] )
		);
	} );

	test( 'mirrors the frontend sticky class for Lattice feature plates', () => {
		mockGetVisibleOrder.mockReturnValue( [ 'media', 'title' ] );

		act( () => {
			render(
				<PostCardComponent
					attributes={ baseAttributes }
					post={ { ...basePost, sticky: true } }
				/>,
				container
			);
		} );

		expect( container.firstElementChild.classList.contains( 'is-sticky-post' ) ).toBe( true );
	} );

	test( 'renders expression classes when content is split around media', () => {
		mockGetVisibleOrder.mockReturnValue( [ 'meta-primary', 'media', 'title' ] );
		const attributes = { ...baseAttributes, showMedia: true };

		act( () => {
			render(
				<PostCardComponent
					attributes={ attributes }
					post={ basePost }
					media={ { originalWidth: 800, originalHeight: 600 } }
				/>,
				container
			);
		} );

		expect( [ ...container.firstElementChild.classList ] ).toEqual(
			expect.arrayContaining( [ 'nb-card--media-landscape', 'nb-card--title-short', 'format-standard' ] )
		);
		expect( container.querySelector( '.nb-supernova-item__media-wrapper' ) ).not.toBeNull();
		expect( container.querySelector( '.nb-card__read-more' ) ).toBeNull();
	} );

	test( 'emits a trailing caption region for the default media-first order', () => {
		mockGetVisibleOrder.mockReturnValue( [ 'media', 'title', 'description' ] );
		const attributes = { ...baseAttributes, showMedia: true };

		act( () => {
			render(
				<PostCardComponent
					attributes={ attributes }
					post={ basePost }
					media={ { originalWidth: 800, originalHeight: 600 } }
				/>,
				container
			);
		} );

		const caption = container.querySelector( '.nb-supernova-item__content--after-media' );
		expect( caption ).not.toBeNull();
		expect( caption.classList ).toContain( 'nb-supernova-item__content--contains-title' );
		expect( caption.classList ).toContain( 'nb-supernova-item__content--trailing-boundary' );
	} );

	test( 'emits isolated leading details and trailing caption regions around media', () => {
		mockGetVisibleOrder.mockReturnValue( [ 'meta-primary', 'media', 'title' ] );
		const attributes = { ...baseAttributes, showMedia: true, showMeta: true };

		act( () => {
			render(
				<PostCardComponent
					attributes={ attributes }
					post={ basePost }
					media={ { originalWidth: 800, originalHeight: 600 } }
				/>,
				container
			);
		} );

		const leading = container.querySelector( '.nb-supernova-item__content--before-media' );
		const caption = container.querySelector( '.nb-supernova-item__content--after-media' );
		expect( leading.classList ).toContain( 'nb-supernova-item__content--details-only' );
		expect( leading.classList ).toContain( 'nb-supernova-item__content--leading-boundary' );
		expect( caption.classList ).toContain( 'nb-supernova-item__content--contains-title' );
		expect( caption.classList ).toContain( 'nb-supernova-item__content--trailing-boundary' );
	} );

	test( 'collapses a missing-media post into one content-only semantic plate', () => {
		mockGetVisibleOrder.mockReturnValue( [ 'media', 'title', 'description' ] );
		const attributes = { ...baseAttributes, showMedia: true };

		act( () => {
			render( <PostCardComponent attributes={ attributes } post={ basePost } />, container );
		} );

		const content = container.querySelector( '.nb-supernova-item__content--content-only' );
		expect( content ).not.toBeNull();
		expect( content.classList ).toContain( 'nb-supernova-item__content--contains-title' );
		expect( content.classList ).toContain( 'nb-supernova-item__content--leading-boundary' );
		expect( content.classList ).toContain( 'nb-supernova-item__content--trailing-boundary' );
	} );

	test( 'uses an inert frontend-equivalent block wrapper around post titles', () => {
		mockGetVisibleOrder.mockReturnValue( [ 'media', 'title', 'description' ] );

		act( () => {
			render( <PostCardComponent attributes={ baseAttributes } post={ basePost } />, container );
		} );

		const titleLink = container.querySelector( '.nb-card__title > .nb-supernova-item__link' );
		expect( titleLink ).not.toBeNull();
		expect( titleLink.tagName ).toBe( 'SPAN' );
		expect( titleLink.textContent ).toBe( basePost.title.raw );
		expect( titleLink.closest( 'a' ) ).toBeNull();
	} );

	test( 'renders the media Read More affordance only for a registered capable recipe', () => {
		mockGetVisibleOrder.mockReturnValue( [ 'media', 'title' ] );
		const attributes = {
			...baseAttributes,
			showMedia: true,
			layoutStyle: 'masonry',
			layoutRecipe: 'anima-collage',
		};

		act( () => {
			render(
				<PostCardComponent
					attributes={ attributes }
					post={ basePost }
					media={ { originalWidth: 800, originalHeight: 600 } }
					collectionLayoutRecipes={ [ {
						id: 'anima-collage',
						baseLayout: 'masonry',
						capabilities: { readMoreAffordance: true },
					} ] }
				/>,
				container
			);
		} );

		expect( container.querySelector( '.nb-card__read-more' ).textContent ).toBe( 'Read More' );
	} );

	test( 'renders quote content and citation under the quote-format class', () => {
		mockGetVisibleOrder.mockReturnValue( [ 'media', 'title', 'description' ] );
		const post = {
			...basePost,
			format: 'quote',
			content: {
				raw: '<blockquote><p>Design needs delight.</p><cite>Massimo Vignelli</cite></blockquote>',
			},
		};

		act( () => {
			render( <PostCardComponent attributes={ baseAttributes } post={ post } />, container );
		} );

		expect( container.firstElementChild.classList.contains( 'format-quote' ) ).toBe( true );
		expect( container.querySelector( 'blockquote p' ).textContent ).toBe( 'Design needs delight.' );
		expect( container.querySelector( 'blockquote cite' ).textContent ).toBe( 'Massimo Vignelli' );
	} );

	test( 'renders Quote posts through the theme blueprint structure and featured media', () => {
		mockGetVisibleOrder.mockReturnValue( [ 'meta-primary', 'media', 'description' ] );
		const post = {
			...basePost,
			format: 'quote',
			content: {
				raw: '<blockquote><p>Design needs delight.</p><cite>Massimo Vignelli</cite></blockquote>',
			},
		};
		const attributes = {
			...baseAttributes,
			showMedia: true,
			className: 'collection-custom-class',
			contentPosition: 'bottom right',
		};

		act( () => {
			render(
				<PostCardComponent
					attributes={ attributes }
					post={ post }
					media={ { url: 'quote.jpg', width: 1200, height: 722, originalWidth: 1200, originalHeight: 722 } }
					postFormatCardBlueprints={ {
						quote: {
							rootAttributes: { className: 'card-trait-landscape card-variant-quote' },
							itemAttributes: {
								cardLayout: 'stacked',
								className: 'quote-item-blueprint',
								contentPosition: 'middle center',
							},
						},
					} }
				/>,
				container
			);
		} );

		const blueprint = container.querySelector( '.nb-post-format-card-blueprint--quote' );
		expect( blueprint ).not.toBeNull();
		expect( blueprint.style.display ).toBe( 'block' );
		expect( blueprint.classList.contains( 'card-variant-quote' ) ).toBe( true );
		expect( blueprint.classList.contains( 'collection-custom-class' ) ).toBe( true );
		const item = blueprint.querySelector( '.nb-supernova-item.format-quote' );
		expect( item ).not.toBeNull();
		expect( item.classList.contains( 'nb-supernova-item--split-content' ) ).toBe( true );
		expect( item.classList.contains( 'collection-custom-class' ) ).toBe( true );
		expect( item.classList.contains( 'quote-item-blueprint' ) ).toBe( true );
		expect( blueprint.querySelector( '.nb-supernova-item__content--before-media' ) ).toEqual(
			expect.objectContaining( {
				className: expect.stringContaining( 'nb-supernova-item__content--valign-middle' ),
			} )
		);
		expect( blueprint.querySelector( '.nb-supernova-item__content--before-media' ).classList.contains( 'nb-supernova-item__content--halign-center' ) ).toBe( true );
		expect( blueprint.querySelector( '.nb-supernova-item__media-wrapper img' ).getAttribute( 'src' ) ).toBe( 'quote.jpg' );
	} );

	test( 'collapses a media-less Quote blueprint into one content-only semantic region', () => {
		mockGetVisibleOrder.mockReturnValue( [ 'media', 'title', 'description' ] );
		const post = {
			...basePost,
			format: 'quote',
			content: {
				raw: '<blockquote><p>Design needs delight.</p><cite>Massimo Vignelli</cite></blockquote>',
			},
		};

		act( () => {
			render(
				<PostCardComponent
					attributes={ { ...baseAttributes, showMedia: true } }
					post={ post }
					postFormatCardBlueprints={ {
						quote: {
							rootAttributes: {},
							itemAttributes: { cardLayout: 'stacked' },
						},
					} }
				/>,
				container
			);
		} );

		const blueprint = container.querySelector( '.nb-post-format-card-blueprint--quote' );
		const content = blueprint.querySelector( '.nb-supernova-item__content--content-only' );
		expect( content ).not.toBeNull();
		expect( content.classList ).toContain( 'nb-supernova-item__content--contains-title' );
		expect( blueprint.querySelector( '.nb-supernova-item__content--after-media' ) ).toBeNull();
	} );
} );
