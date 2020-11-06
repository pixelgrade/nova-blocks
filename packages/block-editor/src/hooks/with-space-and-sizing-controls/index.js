import attributes from './attributes';

import {
	getControlsClasses,
	getRandomBetween,
	getRandomArrayFromArray,
} from "@novablocks/utils";

import {
	BlockVerticalAlignmentToolbar,
	ControlsGroup,
	ControlsSection,
	ControlsTab,
	PresetControl,
} from '../../components';

import { __ } from '@wordpress/i18n';

import {
	PanelRow,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';

import {
	compose,
	createHigherOrderComponent
} from '@wordpress/compose';

import {
	Fragment
} from '@wordpress/element';

import {
	addFilter
} from '@wordpress/hooks';

const ALLOWED_BLOCKS = [
	'novablocks/media',
	'novablocks/cards-collection',
	'novablocks/posts-collection',
];

const ALLOWED_BLOCKS_ADVANCED = [
	'novablocks/media',
];

const getEmphasisAttributes = ( { emphasisBySpace, enableOverlapping, verticalAlignment } ) => {

	const actualEmphasis = ! enableOverlapping ? emphasisBySpace : -1 * emphasisBySpace;

	return {
		emphasisBySpace:        emphasisBySpace,
		enableOverlapping:      enableOverlapping,
		blockTopSpacing: 		( actualEmphasis < 0 && ['center', 'bottom'].includes( verticalAlignment ) ) 	? actualEmphasis : 0,
		blockBottomSpacing: 	( actualEmphasis < 0 && ['center', 'top'].includes( verticalAlignment ) ) 		? actualEmphasis : 0,
		emphasisTopSpacing: 	( verticalAlignment !== 'top' ) 	? actualEmphasis :  1,
		emphasisBottomSpacing: 	( verticalAlignment !== 'bottom' ) 	? actualEmphasis : 	1,
		verticalAlignment:      verticalAlignment,
	};
};

const getRandomAttributes = () => {
	const getRandomSign = () => { return getRandomArrayFromArray( [ -1, 0, 1 ], 1 )[0] };
	const block = getRandomBetween( 0, 3 );
	const emphasis = getRandomBetween( 0, 3 );
	const blockTopSign = getRandomSign();
	const blockBottomSign = getRandomSign();
	const emphasisTopSign = getRandomSign();
	const emphasisBottomSign = getRandomSign();
	const verticalAlignment = getRandomArrayFromArray( [ 'top', 'center', 'bottom' ], 1 )[0];
	const enableOverlapping = getRandomArrayFromArray( [ true, false ], 1 )[0];

	return {
		blockTopSpacing: block * blockTopSign,
		blockBottomSpacing: block * blockBottomSign,
		emphasisTopSpacing: emphasis * emphasisTopSign,
		emphasisBottomSpacing: emphasis * emphasisBottomSign,
		enableOverlapping,
		verticalAlignment,
	};
};

const withSpaceAndSizingControlsAdvanced = createHigherOrderComponent( OriginalComponent => {

	return ( props ) => {

		if ( ! ALLOWED_BLOCKS.includes( props.name ) ) {
			return <OriginalComponent { ...props } />
		}

		const presetOptions = props?.settings?.modules?.spaceAndSizing?.presetOptions;
		const advancedPresetOptions = props?.settings?.modules?.spaceAndSizing?.advancedPresetOptions;

		const presets = [];

		if ( Array.isArray( presetOptions ) ) {
			presets.push( ...presetOptions );

			if ( Array.isArray( advancedPresetOptions ) && ALLOWED_BLOCKS_ADVANCED.includes( props.name ) ) {
				presets.push( ...advancedPresetOptions );
			}
		}

		return (
			<Fragment>
				<OriginalComponent { ...props } />
				<ControlsSection label={ __( 'Space and Sizing' ) } priority={ 30 }>
					{
						!! presetOptions &&
						<ControlsTab label={ __( 'General' ) }>
							<PresetControl
								key={ 'media-card-layout-preset' }
								label={ __( 'Choose a layout preset:', '__plugin_txtd' ) }
								options={ presets }
								randomize={ getRandomAttributes }
							/>
						</ControlsTab>
					}
				</ControlsSection>
			</Fragment>
		);
	};
});

const componentWithSettings = compose( [
	withSpaceAndSizingControlsAdvanced
] );

addFilter( 'editor.BlockEdit', 'novablocks/with-space-and-sizing-advanced', componentWithSettings );

const withSpaceAndSizingControls = createHigherOrderComponent( OriginalComponent => {

	return ( props ) => {

		if ( ! ALLOWED_BLOCKS.includes( props.name ) ) {
			return <OriginalComponent { ...props } />
		}

		const {
			attributes,
			setAttributes,
		} = props;

		const {
			blockTopSpacing,
			blockBottomSpacing,
			emphasisTopSpacing,
			emphasisBottomSpacing,
			emphasisBySpace,
			enableOverlapping,
		} = attributes;

		const verticalAlignment = attributes.verticalAlignment || 'center';

		const BLOCK_SPACING_MIN_VALUE = -3;
		const BLOCK_SPACING_MAX_VALUE = 3;

		const CONTENT_SPACING_MIN_VALUE = ALLOWED_BLOCKS_ADVANCED.includes( props.name ) ? -3 : 0;
		const CONTENT_SPACING_MAX_VALUE = 3;

		const cssVars = {
			'--novablocks-emphasis-top-spacing': verticalAlignment === 'top' ? Math.abs(emphasisTopSpacing) : emphasisTopSpacing,
			'--novablocks-emphasis-bottom-spacing': verticalAlignment === 'bottom' ? Math.abs(emphasisBottomSpacing) : emphasisBottomSpacing,
			'--novablocks-block-top-spacing': blockTopSpacing,
			'--novablocks-block-bottom-spacing': blockBottomSpacing,
			'--novablocks-block-zindex': Math.max( 0, -1 * ( blockTopSpacing + blockBottomSpacing ) )
		};

		return (
			<Fragment>
				<div style={ cssVars }>
					<OriginalComponent { ...props } />
				</div>
				<ControlsSection label={ __( 'Space and Sizing' ) }>
					<ControlsTab label={ __( 'Customize' ) }>
						<div key={ 'space-and-sizing-customize-1' } className={ getControlsClasses( attributes, getEmphasisAttributes ) }>
							<RangeControl
								value={ emphasisBySpace }
								onChange={ ( emphasisBySpace ) => {
									const newAttributes = getEmphasisAttributes( { ...attributes, emphasisBySpace } );
									setAttributes( newAttributes );
								} }
								label={ __( 'Emphasis by Space' ) }
								min={ 0 }
								max={ 3 }
							/>
							<ToggleControl
								label={ __( 'Enable Overlapping' ) }
								checked={ enableOverlapping }
								onChange={ enableOverlapping => {
									const newAttributes = getEmphasisAttributes( { ...attributes, enableOverlapping } );
									setAttributes( newAttributes );
								} }
							/>
							<PanelRow>
								<span>{ __( 'Vertical Anchoring', '__plugin_txtd' ) }</span>
								<BlockVerticalAlignmentToolbar
									value={ verticalAlignment }
									onChange={ ( verticalAlignment ) => {
										const newAttributes = getEmphasisAttributes( { ...attributes, verticalAlignment } );
										setAttributes( newAttributes );
									} }
								/>
							</PanelRow>
						</div>
					</ControlsTab>
					<ControlsTab label={ __( 'Settings' ) }>
						<div key={ 'space-and-sizing-settings-1' }>
							<ControlsGroup>
								<PanelRow>
									<span>{ __( 'Vertical Anchoring', '__plugin_txtd' ) }</span>
									<BlockVerticalAlignmentToolbar
										value={ verticalAlignment }
										onChange={ ( nextVerticalAlignment ) => setAttributes( { verticalAlignment: nextVerticalAlignment } ) }
									/>
								</PanelRow>
							</ControlsGroup>
							<ControlsGroup title={ __( 'Block Spacing' ) }>
								<RangeControl
									key={ 'media-card-block-top-spacing' }
									value={ blockTopSpacing }
									onChange={ ( blockTopSpacing ) => setAttributes( { blockTopSpacing } ) }
									label={ __( 'Top' ) }
									min={ BLOCK_SPACING_MIN_VALUE }
									max={ BLOCK_SPACING_MAX_VALUE }
								/>
								<RangeControl
									key={ 'media-card-block-bottom-spacing' }
									value={ blockBottomSpacing }
									onChange={ ( blockBottomSpacing ) => setAttributes( { blockBottomSpacing } ) }
									label={ __( 'Bottom' ) }
									min={ BLOCK_SPACING_MIN_VALUE }
									max={ BLOCK_SPACING_MAX_VALUE }
								/>
							</ControlsGroup>
							<ControlsGroup title={ __( 'Content Area Spacing' ) }>
								<div key={ 'space-and-sizing-settings-2' }>
									<RangeControl
										key={ 'media-card-content-top-spacing' }
										value={ emphasisTopSpacing }
										onChange={ ( emphasisTopSpacing ) => setAttributes( { emphasisTopSpacing } ) }
										label={ __( 'Top' ) }
										min={ CONTENT_SPACING_MIN_VALUE }
										max={ CONTENT_SPACING_MAX_VALUE }
									/>
									<RangeControl
										key={ 'media-card-content-bottom-spacing' }
										value={ emphasisBottomSpacing }
										onChange={ ( emphasisBottomSpacing ) => setAttributes( { emphasisBottomSpacing } ) }
										label={ __( 'Bottom' ) }
										min={ CONTENT_SPACING_MIN_VALUE }
										max={ CONTENT_SPACING_MAX_VALUE }
									/>
								</div>
							</ControlsGroup>
						</div>
					</ControlsTab>
				</ControlsSection>
			</Fragment>
		);
	};
});
addFilter( 'editor.BlockEdit', 'novablocks/with-space-and-sizing', withSpaceAndSizingControls );

function addSpaceAndSizingAttributes( block ) {

	if ( ! ALLOWED_BLOCKS.includes( block.name ) ) {
		return block;
	}

	if ( typeof block.attributes !== 'undefined' ) {
		Object.assign( block.attributes, attributes );
	}

	return block;
}
addFilter( 'blocks.registerBlockType', 'novablocks/add-space-and-sizing-attributes', addSpaceAndSizingAttributes );