import attributes from './attributes';
import classnames from "classnames";

import { getControlsClasses } from "../../utils";

import {
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
	createHigherOrderComponent
} = wp.compose;

const {
	BlockVerticalAlignmentToolbar
} = wp.blockEditor;

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

const getEmphasisAttributes = ( emphasis, overlap, contentPosition ) => {

	const actualEmphasis = ! overlap ? emphasis : -1 * emphasis;
	const alignment = contentPosition.split( ' ' );
	const verticalAlignment = alignment[0] || 'center';
	const horizontalAlignment = alignment[1] || 'center';

	return {
		emphasisBySpace: emphasis,
		enableOverlapping: overlap,
		blockTopSpacing: ( actualEmphasis < 0 && ['center', 'bottom'].includes( verticalAlignment ) ) ? actualEmphasis : 0,
		blockBottomSpacing: ( actualEmphasis < 0 && ['top', 'center'].includes( verticalAlignment ) ) ? actualEmphasis : 0,
		emphasisTopSpacing: ( verticalAlignment !== 'top' ) ? actualEmphasis : 1,
		emphasisBottomSpacing: ( verticalAlignment !== 'bottom' ) ? actualEmphasis : 1,
		contentPosition: `${ verticalAlignment } ${ horizontalAlignment }`
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
			enableOverlapping,
			layoutPreset,

			blockTopSpacing,
			blockBottomSpacing,

			contentPosition,
		} = attributes;

		const alignment = contentPosition.split( ' ' );
		const verticalAlignment = alignment[0] || 'center';

		const presetOptions = props?.settings?.media?.spaceAndSizing?.presetOptions;

		const SPACING_MIN_VALUE = ALLOWED_BLOCKS_ADVANCED.includes( props.name ) ? -3 : 0;
		const SPACING_MAX_VALUE = 3;

		const cssVars = {
			'--block-top-spacing': blockTopSpacing,
			'--block-bottom-spacing': blockBottomSpacing,
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
								selected={ layoutPreset }
								options={ presetOptions }
								attribute={ 'layoutPreset' }
								setAttributes={ setAttributes }
							/>
						</ControlsTab>
					}
					<ControlsTab label={ __( 'Customize' ) }>
						<div key={ 'space-and-sizing-customize-1' } className={ classnames( getControlsClasses( attributes, getEmphasisAttributes( emphasisBySpace, enableOverlapping, contentPosition ) ) ) }>
							<RangeControl
								value={ emphasisBySpace }
								onChange={ ( emphasisBySpace ) => {
									const newAttributes = getEmphasisAttributes( emphasisBySpace, enableOverlapping, contentPosition );
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
addFilter( 'editor.BlockEdit', 'novablocks/with-space-and-sizing', withSpaceAndSizingControls );

const withSpaceAndSizingControlsAdvanced = createHigherOrderComponent( OriginalComponent => {

	return ( props ) => {

		if ( ! ALLOWED_BLOCKS_ADVANCED.includes( props.name ) ) {
			return <OriginalComponent { ...props } />
		}

		const {
			attributes,
			setAttributes,
		} = props;

		const {
			emphasisBySpace,
			enableOverlapping,

			emphasisTopSpacing,
			emphasisBottomSpacing,

			contentPosition,
		} = attributes;

		const alignment = contentPosition.split( ' ' );
		const verticalAlignment = alignment[0] || 'center';
		const horizontalAlignment = alignment[1] || 'center';

		const cssVars = {
			'--emphasis-top-spacing': verticalAlignment === 'top' ? Math.abs(emphasisTopSpacing) : emphasisTopSpacing,
			'--emphasis-bottom-spacing': verticalAlignment === 'bottom' ? Math.abs(emphasisBottomSpacing) : emphasisBottomSpacing,
		};

		return (
			<Fragment>
				<div style={ cssVars }>
					<OriginalComponent { ...props } />
				</div>
				<ControlsSection label={ __( 'Space and Sizing' ) }>
					<ControlsTab label={ __( 'Customize' ) }>
						<div key={ 'space-and-sizing-customize-2' } className={ classnames( getControlsClasses( attributes, getEmphasisAttributes( emphasisBySpace, enableOverlapping, contentPosition ) ) ) }>
							<ToggleControl
								label={ __( 'Enable Overlapping' ) }
								checked={ enableOverlapping }
								onChange={ () => {
									const newAttributes = getEmphasisAttributes( emphasisBySpace, ! enableOverlapping, contentPosition );
									setAttributes( newAttributes );
								} }
							/>
							<PanelRow>
								<span>{ __( 'Vertical', '__plugin_txtd' ) }</span>
								<BlockVerticalAlignmentToolbar
									value={ verticalAlignment }
									isCollapsed={ false }
									onChange={ ( verticalAlignment ) => {
										const contentPosition = `${ verticalAlignment } ${ horizontalAlignment }`;
										const newAttributes = getEmphasisAttributes( emphasisBySpace, enableOverlapping, contentPosition );
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
									min={ -3 }
									max={ 3 }
								/>
								<RangeControl
									key={ 'media-card-content-bottom-spacing' }
									value={ emphasisBottomSpacing }
									onChange={ ( emphasisBottomSpacing ) => setAttributes( { emphasisBottomSpacing } ) }
									label={ __( 'Bottom' ) }
									min={ -3 }
									max={ 3 }
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
