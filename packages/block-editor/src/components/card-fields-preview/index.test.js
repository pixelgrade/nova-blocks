import { renderToStaticMarkup } from 'react-dom/server';

jest.mock( '../../index', () => ( {
	CardButton: ( { children } ) => <div className="mock-card-button">{ children }</div>,
	CardDescription: ( { children } ) => <p className="mock-card-description">{ children }</p>,
	CardFooter: ( { children } ) => <div className="mock-card-footer">{ children }</div>,
	CardMeta: ( { children } ) => <div className="mock-card-meta">{ children }</div>,
	CardTitle: ( { children } ) => <h3 className="mock-card-title">{ children }</h3>,
	CardSubtitle: ( { children } ) => <h4 className="mock-card-subtitle">{ children }</h4>,
} ) );

import CardFieldsPreview from './index';

describe( 'CardFieldsPreview', () => {
	it( 'renders below-content metadata after the description and before the button', () => {
		const markup = renderToStaticMarkup(
			<CardFieldsPreview
				attributes={ {
					metaAboveTitle: 'Category',
					title: 'Maira Kalman',
					subtitle: '',
					metaBelowTitle: '',
					metaBelowContent: 'July 27, 2018 / Lifestyle',
					description: '<p>Excerpt copy</p>',
					showMeta: true,
					showTitle: true,
					showSubtitle: false,
					showDescription: true,
					buttonText: 'Read More',
					showButtons: true,
				} }
			/>
		);

		const descriptionIndex = markup.indexOf( 'Excerpt copy' );
		const belowContentIndex = markup.indexOf( 'July 27, 2018 / Lifestyle' );
		const buttonIndex = markup.indexOf( 'Read More' );

		expect( descriptionIndex ).toBeGreaterThan( -1 );
		expect( belowContentIndex ).toBeGreaterThan( descriptionIndex );
		expect( buttonIndex ).toBeGreaterThan( belowContentIndex );
	} );
} );
