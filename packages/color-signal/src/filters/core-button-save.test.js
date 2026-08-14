import { getSupports } from '@novablocks/block-editor';

import withColorSignalSaveClassnames from './with-color-signal-save-classnames';
import withColorSignalSaveDataAttributes from './with-color-signal-save-data-attributes';

jest.mock( '@novablocks/block-editor', () => ( {
	getSupports: jest.fn(),
} ) );

jest.mock( '@novablocks/utils', () => ( {
	isColorSignalActive: ( support, blockAttributes = {} ) => (
		! support.activationAttribute || true === blockAttributes[ support.activationAttribute ]
	),
	getColorSignalClassnames: ( blockAttributes, supports ) => {
		const support = supports?.novaBlocks?.colorSignal;
		if ( support?.activationAttribute && true !== blockAttributes[ support.activationAttribute ] ) {
			return '';
		}

		return [
			`sm-palette-${ blockAttributes.palette }`,
			blockAttributes.useSourceColorAsReference ? 'sm-palette--shifted' : '',
			`sm-variation-${ blockAttributes.paletteVariation }`,
			`sm-color-signal-${ blockAttributes.colorSignal }`,
		].filter( Boolean ).join( ' ' );
	},
} ) );

const colorSignalSupport = {
	activationAttribute: 'useColorSignal',
	paletteClassname: true,
	paletteVariationClassname: true,
	colorSignalClassname: true,
	paletteInheritanceAttribute: 'useParentPalette',
};

const attributes = {
	palette: 1,
	paletteVariation: 1,
	colorSignal: 1,
	useSourceColorAsReference: true,
};

describe( 'core/button Color Signal save filters', () => {
	beforeEach( () => {
		getSupports.mockReturnValue( {
			novaBlocks: {
				colorSignal: colorSignalSupport,
			},
		} );
	} );

	it( 'preserves the wrapper props of an unconfigured Core Button', () => {
		const extraProps = { className: 'wp-block-button' };
		const element = { props: extraProps };

		expect( withColorSignalSaveClassnames(
			extraProps,
			{ name: 'core/button' },
			attributes
		) ).toEqual( extraProps );
		expect( withColorSignalSaveDataAttributes(
			element,
			{ name: 'core/button' },
			attributes
		) ).toBe( element );
	} );

	it( 'emits Color Signal output after explicit activation', () => {
		const activeAttributes = {
			...attributes,
			useColorSignal: true,
			useParentPalette: false,
		};

		expect( withColorSignalSaveClassnames(
			{ className: 'wp-block-button' },
			{ name: 'core/button' },
			activeAttributes
		) ).toEqual( {
			className: 'wp-block-button sm-palette-1 sm-palette--shifted sm-variation-1 sm-color-signal-1',
		} );

		expect( withColorSignalSaveDataAttributes(
			{ props: { className: 'wp-block-button' } },
			{ name: 'core/button' },
			activeAttributes
		) ).toEqual( {
			props: {
				className: 'wp-block-button',
				'data-palette': 1,
				'data-palette-variation': 1,
				'data-color-signal': 1,
				'data-use-parent-palette': 'false',
				'data-use-source-color-as-reference': true,
			},
		} );
	} );
} );
