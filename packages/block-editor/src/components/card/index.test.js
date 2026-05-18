import { renderToStaticMarkup } from 'react-dom/server';

jest.mock( '@novablocks/utils', () => ( {
	getAlignFromMatrix: () => [ 'center', 'center' ],
	getAreaClassnameByWidthRatio: () => 'nb-grid__area--width-full',
	getColorSignalClassnames: () => '',
} ) );

jest.mock( './contents', () => ( {} ) );

import {
	Card,
	CardMediaWrapper,
} from './index';

const defaultAttributes = {
	cardLayout: 'stacked',
	columns: 1,
	contentPosition: 'center center',
	layoutStyle: 'classic',
	scrollingEffect: 'parallax',
	thumbnailAspectRatioString: 'landscape',
};

describe( 'Card', () => {
	it( 'keeps fragment-wrapped media and content as stacked frame siblings', () => {
		const markup = renderToStaticMarkup(
			<Card attributes={ defaultAttributes }>
				<>
					<CardMediaWrapper>
						<span>Media</span>
					</CardMediaWrapper>
					<div className="nb-supernova-item__inner-container">Inner Content</div>
				</>
			</Card>
		);

		const wrapper = document.createElement( 'div' );
		wrapper.innerHTML = markup;

		const frame = wrapper.querySelector( '.nb-supernova-item__frame' );
		const frameChildren = Array.from( frame.children );

		expect( frameChildren ).toHaveLength( 2 );
		expect( frameChildren[ 0 ].classList ).toContain( 'nb-supernova-item__media-wrapper' );
		expect( frameChildren[ 1 ].classList ).toContain( 'nb-supernova-item__content' );
		expect( frame.querySelector( '.nb-supernova-item__content > .nb-supernova-item__media-wrapper' ) ).toBeNull();
	} );
} );
