import attributes from './attributes';

import { getControlsClasses, getRandomBetween, getRandomArrayFromArray } from "../../utils";
import { withSettings } from '../../components';

import {
	BlockVerticalAlignmentToolbar,
	ControlsGroup,
	ControlsSection,
	ControlsTab,
	PresetControl,
} from "../../components";

const { __ } = wp.i18n;

const {
	PanelRow,
	RangeControl,
	ToggleControl,
} = wp.components;

const {
	compose,
	createHigherOrderComponent
} = wp.compose;

const {
	Fragment
} = wp.element;

const {
	addFilter
} = wp.hooks;

const ALLOWED_BLOCKS = [
	'novablocks/media',
	'novablocks/cards-collection',
	'novablocks/posts-collection',
];

const ALLOWED_BLOCKS_ADVANCED = [
	'novablocks/media',
];

const getEmphasisAttributes = ( { emphasisBySpace, enableOverlapping, alignment } ) => {

	const actualEmphasis = ! enableOverlapping ? emphasisBySpace : -1 * emphasisBySpace;

	return {
		emphasisBySpace:        emphasisBySpace,
		enableOverlapping:      enableOverlapping,
		blockTopSpacing: 		( actualEmphasis < 0 && ['center', 'bottom'].includes( alignment ) ) 	? actualEmphasis : 0,
		blockBottomSpacing: 	( actualEmphasis < 0 && ['center', 'top'].includes( alignment ) ) 		? actualEmphasis : 0,
		emphasisTopSpacing: 	( alignment !== 'top' ) 	? actualEmphasis :  1,
		emphasisBottomSpacing: 	( alignment !== 'bottom' ) 	? actualEmphasis : 	1,
		verticalAlignment:      alignment,
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
			emphasisBySpace,

			blockTopSpacing,
			blockBottomSpacing,
		} = attributes;

		const presetOptions = props?.settings?.media?.spaceAndSizing?.presetOptions;

		const SPACING_MIN_VALUE = ALLOWED_BLOCKS_ADVANCED.includes( props.name ) ? -3 : 0;
		const SPACING_MAX_VALUE = 3;

		const cssVars = {
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
					{
						!! presetOptions &&
						<ControlsTab label={ __( 'General' ) }>
							<PresetControl
								key={ 'media-card-layout-preset' }
								label={ __( 'Choose a layout preset:', '__plugin_txtd' ) }
								options={ presetOptions }
								randomize={ getRandomAttributes }
							/>
						</ControlsTab>
					}
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
						</div>
					</ControlsTab>
					<ControlsTab label={ __( 'Settings' ) }>
						<div key={ 'space-and-sizing-settings-1' }>
							<ControlsGroup title={ __( 'Block Spacing' ) }>
								<RangeControl
									key={ 'media-card-block-top-spacing' }
									value={ blockTopSpacing }
									onChange={ ( blockTopSpacing ) => setAttributes( { blockTopSpacing } ) }
									label={ __( 'Top' ) }
									min={ SPACING_MIN_VALUE }
									max={ SPACING_MAX_VALUE }
								/>
								<RangeControl
									key={ 'media-card-block-bottom-spacing' }
									value={ blockBottomSpacing }
									onChange={ ( blockBottomSpacing ) => setAttributes( { blockBottomSpacing } ) }
									label={ __( 'Bottom' ) }
									min={ SPACING_MIN_VALUE }
									max={ SPACING_MAX_VALUE }
								/>
							</ControlsGroup>
						</div>
					</ControlsTab>
				</ControlsSection>
			</Fragment>
		);
	};
});

const componentWithSettings = compose( [
	withSettings,
	withSpaceAndSizingControls
] );

addFilter( 'editor.BlockEdit', 'novablocks/with-space-and-sizing', componentWithSettings );

const withSpaceAndSizingControlsAdvanced = createHigherOrderComponent( OriginalComponent => {

	return ( props ) => {

		if ( ! ALLOWED_BLOCKS.includes( props.name ) ) {
			return <OriginalComponent { ...props } />
		}

		const SPACING_MIN_VALUE = ALLOWED_BLOCKS_ADVANCED.includes( props.name ) ? -3 : 0;
		const SPACING_MAX_VALUE = 3;

		const {
			attributes,
			setAttributes,
		} = props;

		const {
			enableOverlapping,

			emphasisTopSpacing,
			emphasisBottomSpacing,
		} = attributes;

		const verticalAlignment = attributes.verticalAlignment || 'center';

		const cssVars = {
			'--novablocks-emphasis-top-spacing': verticalAlignment === 'top' ? Math.abs(emphasisTopSpacing) : emphasisTopSpacing,
			'--novablocks-emphasis-bottom-spacing': verticalAlignment === 'bottom' ? Math.abs(emphasisBottomSpacing) : emphasisBottomSpacing,
		};

		return (
			<Fragment>
				<div style={ cssVars }>
					<OriginalComponent { ...props } />
				</div>
				<ControlsSection label={ __( 'Space and Sizing' ) }>
					<ControlsTab label={ __( 'Customize' ) }>
						<div key={ 'space-and-sizing-customize-2' } className={ getControlsClasses( attributes, getEmphasisAttributes ) }>
							<ToggleControl
								label={ __( 'Enable Overlapping' ) }
								checked={ enableOverlapping }
								onChange={ enableOverlapping => {
									const newAttributes = getEmphasisAttributes( { ...attributes, enableOverlapping } );
									setAttributes( newAttributes );
								} }
							/>
							<PanelRow>
								<span>{ __( 'Vertical', '__plugin_txtd' ) }</span>
								<BlockVerticalAlignmentToolbar
									value={ verticalAlignment }
									onChange={ verticalAlignment => {
										const newAttributes = getEmphasisAttributes( { ...attributes, verticalAlignment } );
										setAttributes( newAttributes );
									} }
								/>
							</PanelRow>
						</div>
					</ControlsTab>
					<ControlsTab label={ __( 'Settings' ) }>
						<ControlsGroup title={ __( 'Content Area Spacing' ) }>
							<div key={ 'space-and-sizing-settings-2' }>
								<RangeControl
									key={ 'media-card-content-top-spacing' }
									value={ emphasisTopSpacing }
									onChange={ ( emphasisTopSpacing ) => setAttributes( { emphasisTopSpacing } ) }
									label={ __( 'Top' ) }
									min={ SPACING_MIN_VALUE }
									max={ SPACING_MAX_VALUE }
								/>
								<RangeControl
									key={ 'media-card-content-bottom-spacing' }
									value={ emphasisBottomSpacing }
									onChange={ ( emphasisBottomSpacing ) => setAttributes( { emphasisBottomSpacing } ) }
									label={ __( 'Bottom' ) }
									min={ SPACING_MIN_VALUE }
									max={ SPACING_MAX_VALUE }
								/>
							</div>
						</ControlsGroup>
					</ControlsTab>
				</ControlsSection>
			</Fragment>
		);
	};
});
addFilter( 'editor.BlockEdit', 'novablocks/with-space-and-sizing-advanced', withSpaceAndSizingControlsAdvanced );

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
