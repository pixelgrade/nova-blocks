import { renderToStaticMarkup } from 'react-dom/server';

jest.mock( '@novablocks/utils', () => ( {
	getAlignFromMatrix: () => [ 'center', 'center' ],
	getAreaClassnameByWidthRatio: () => 'nb-grid__area--width-full',
	getColorSignalClassnames: () => '',
} ) );

jest.mock( './contents', () => ( {} ) );

import {
	Card,
	CardContentWrapper,
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
	it( 'emits explicit semantic content-region classes', () => {
		const markup = renderToStaticMarkup(
			<CardContentWrapper
				attributes={ defaultAttributes }
				region={ {
					classNames: [
						'nb-supernova-item__content--after-media',
						'nb-supernova-item__content--contains-title',
						'nb-supernova-item__content--trailing-boundary',
					],
				} }
			>
				<span>Caption</span>
			</CardContentWrapper>
		);

		const wrapper = document.createElement( 'div' );
		wrapper.innerHTML = markup;
		const content = wrapper.firstElementChild;

		expect( content.classList ).toContain( 'nb-supernova-item__content--after-media' );
		expect( content.classList ).toContain( 'nb-supernova-item__content--contains-title' );
		expect( content.classList ).toContain( 'nb-supernova-item__content--trailing-boundary' );
	} );

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

	it( 'marks a card with explicit content regions on both sides of Media', () => {
		const markup = renderToStaticMarkup(
			<Card attributes={ defaultAttributes }>
				<CardContentWrapper
					attributes={ defaultAttributes }
					region={ {
						placement: 'before-media',
						classNames: [ 'nb-supernova-item__content--before-media' ],
					} }
				>
					<span>Leading</span>
				</CardContentWrapper>
				<CardMediaWrapper><span>Media</span></CardMediaWrapper>
				<CardContentWrapper
					attributes={ defaultAttributes }
					region={ {
						placement: 'after-media',
						classNames: [ 'nb-supernova-item__content--after-media' ],
					} }
				>
					<span>Trailing</span>
				</CardContentWrapper>
			</Card>
		);

		const wrapper = document.createElement( 'div' );
		wrapper.innerHTML = markup;

		expect( wrapper.firstElementChild.classList ).toContain( 'nb-supernova-item--split-content' );
	} );
} );
