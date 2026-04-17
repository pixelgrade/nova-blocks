import { Children, isValidElement } from '@wordpress/element';

import { getMeta } from './utils';

jest.mock( '@wordpress/date', () => ( {
	getSettings: () => ( {
		formats: {
			date: 'F j, Y',
		},
	} ),
	dateI18n: () => 'July 27, 2018',
	format: () => '2018-07-27T00:00:00',
} ) );

describe( 'getMeta', () => {
	it( 'routes combined metadata to the below-content slot for the hive-style option', () => {
		const props = {
			attributes: {
				metadataPosition: 'below-content',
				primaryMetadata: 'date',
				secondaryMetadata: 'date',
			},
			post: {
				id: 17,
				date_gmt: '2018-07-27T00:00:00',
			},
		};

		const {
			metaAboveTitle,
			metaBelowTitle,
			metaBelowContent,
		} = getMeta( props );

		expect( metaAboveTitle ).toBeUndefined();
		expect( metaBelowTitle ).toBeUndefined();
		expect( isValidElement( metaBelowContent ) ).toBe( true );

		const children = Children.toArray( metaBelowContent.props.children );

		expect( children ).toHaveLength( 3 );
		expect( children[0].props.className ).toBe( 'nb-card__meta--primary' );
		expect( children[1].props.className ).toBe( 'nb-card__meta-separator' );
		expect( children[2].props.className ).toBe( 'nb-card__meta--secondary' );
	} );
} );
