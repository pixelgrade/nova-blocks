/**
 * Wiring test for the Space and Sizing retrofit: pins that the REAL preset
 * data mirrored from `lib/block-editor-settings.php`
 * (`novablocks_get_space_and_sizing_presets()` /
 * `novablocks_get_space_and_sizing_advanced_presets()`) still declares the
 * same key set across every option today, so `getManagedAttributes()`
 * produces one clean 6-attribute boundary with no dev warning — and that
 * the computed `managedAttributes` prop actually reaches `PresetControl`.
 *
 * If a future PHP change makes some option omit one of these keys, this
 * test's exact-key assertion breaks loudly instead of silently changing
 * which attributes clear on click.
 */
import { renderToStaticMarkup } from 'react-dom/server';

jest.mock( '@wordpress/i18n', () => ( {
	__: ( text ) => text,
} ) );

// `@novablocks/utils` touches `window.matchMedia` at import time; every
// existing test that reaches it mocks it out rather than loading it for
// real (see with-overlay-filter/controls.test.js). Only `getRandomAttributes`
// (imported transitively via `../utils`) is used by the module under test.
jest.mock( '@novablocks/utils', () => ( {
	getRandomArrayFromArray: () => [ 'center' ],
	getRandomBetween: () => 0,
} ) );

const mockPresetControl = jest.fn( () => null );
jest.mock( '../../../components', () => ( {
	PresetControl: ( props ) => mockPresetControl( props ),
	buildPresetDefinitions: jest.requireActual( '../../../components/preset-control/build-preset-definitions' ).buildPresetDefinitions,
} ) );

const mockUseSupports = jest.fn();
jest.mock( '../../../hooks', () => ( {
	useSettings: () => mockUseSettings(),
	useSupports: ( name ) => mockUseSupports( name ),
} ) );

const mockUseSettings = jest.fn();

// Mirrors lib/block-editor-settings.php::novablocks_get_space_and_sizing_presets()
const PRESET_OPTIONS = [
	{ label: 'Default Block Spacing', value: 'default', preset: {
		blockTopSpacing: 1, blockBottomSpacing: 0, emphasisTopSpacing: 0, emphasisBottomSpacing: 0,
		enableOverlapping: false, verticalAlignment: 'center',
	} },
	{ label: 'Overlap Nearby Blocks / Bottom', value: 'overlap-nearby-2', preset: {
		blockTopSpacing: 0, blockBottomSpacing: -2, emphasisTopSpacing: 2, emphasisBottomSpacing: -2,
		enableOverlapping: true, verticalAlignment: 'top',
	} },
];

// Mirrors novablocks_get_space_and_sizing_advanced_presets()
const ADVANCED_PRESET_OPTIONS = [
	{ label: 'Overlap 1 / Top Anchoring', value: 'overlap1', preset: {
		blockTopSpacing: 0, blockBottomSpacing: 2, emphasisTopSpacing: -2, emphasisBottomSpacing: -2,
		enableOverlapping: true, verticalAlignment: 'top',
	} },
];

const EXPECTED_KEYS = [
	'blockTopSpacing', 'blockBottomSpacing', 'emphasisTopSpacing', 'emphasisBottomSpacing',
	'enableOverlapping', 'verticalAlignment',
];

import SpaceAndSizingPresets from './space-and-sizing-presets';

describe( 'SpaceAndSizingPresets wiring', () => {
	beforeEach( () => {
		mockPresetControl.mockClear();
	} );

	test( 'passes the exact 6-key managed boundary through to PresetControl (basic presets only)', () => {
		mockUseSettings.mockReturnValue( {
			modules: { spaceAndSizing: { presetOptions: PRESET_OPTIONS, advancedPresetOptions: ADVANCED_PRESET_OPTIONS } },
		} );
		mockUseSupports.mockReturnValue( { novaBlocks: { spaceAndSizing: { advancedSpacing: false } } } );

		renderToStaticMarkup( <SpaceAndSizingPresets name="core/group" attributes={ {} } setAttributes={ jest.fn() } /> );

		expect( mockPresetControl ).toHaveBeenCalledTimes( 1 );
		const props = mockPresetControl.mock.calls[ 0 ][ 0 ];
		expect( props.managedAttributes.slice().sort() ).toEqual( EXPECTED_KEYS.slice().sort() );
		expect( props.options ).toEqual( PRESET_OPTIONS );
	} );

	test( 'includes the advanced presets in the managed boundary when the block supports advancedSpacing', () => {
		mockUseSettings.mockReturnValue( {
			modules: { spaceAndSizing: { presetOptions: PRESET_OPTIONS, advancedPresetOptions: ADVANCED_PRESET_OPTIONS } },
		} );
		mockUseSupports.mockReturnValue( { novaBlocks: { spaceAndSizing: { advancedSpacing: true } } } );

		renderToStaticMarkup( <SpaceAndSizingPresets name="core/columns" attributes={ {} } setAttributes={ jest.fn() } /> );

		const props = mockPresetControl.mock.calls[ 0 ][ 0 ];
		expect( props.options ).toEqual( [ ...PRESET_OPTIONS, ...ADVANCED_PRESET_OPTIONS ] );
		// Still the same 6 keys — advanced presets do not introduce new ones.
		expect( props.managedAttributes.slice().sort() ).toEqual( EXPECTED_KEYS.slice().sort() );
	} );

	test( 'renders nothing when no presets are configured', () => {
		mockUseSettings.mockReturnValue( { modules: { spaceAndSizing: {} } } );
		mockUseSupports.mockReturnValue( {} );

		const markup = renderToStaticMarkup(
			<SpaceAndSizingPresets name="core/group" attributes={ {} } setAttributes={ jest.fn() } />
		);

		expect( markup ).toBe( '' );
		expect( mockPresetControl ).not.toHaveBeenCalled();
	} );
} );
