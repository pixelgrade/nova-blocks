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
	resizeDropcap: jest.fn(),
} ), { virtual: true } );

jest.mock( '../index', () => ( {
	Card: ( { className, children } ) => <div className={ className }>{ children }</div>,
	CardMeta: ( { children } ) => <div className="nb-card__meta">{ children }</div>,
	CardTitle: ( { children } ) => <h2 className="nb-card__title">{ children }</h2>,
	CardDescription: ( { children } ) => <div className="nb-card__description">{ children }</div>,
	CardFooter: ( { children } ) => <div>{ children }</div>,
	CardButton: ( { children } ) => <button>{ children }</button>,
	CardContentWrapper: ( { children, extraClassName } ) => <div className={ extraClassName }>{ children }</div>,
	CardMediaWrapper: ( { children } ) => <div className="nb-supernova-item__media-wrapper">{ children }</div>,
} ) );

jest.mock( '../../filters/with-card-details/components/element-order-utils', () => ( {
	ELEMENT: {
		MEDIA: 'media',
		META_PRIMARY: 'meta-primary',
		META_SECONDARY: 'meta-secondary',
		TITLE: 'title',
		DESCRIPTION: 'description',
		BUTTONS: 'buttons',
	},
	getVisibleOrder: ( ...args ) => mockGetVisibleOrder( ...args ),
	metasAreAdjacent: () => false,
} ) );

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
} );
