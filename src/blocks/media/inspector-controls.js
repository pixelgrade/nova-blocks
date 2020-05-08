import { isMatch } from 'lodash';
import classnames from 'classnames';

import {
	ControlsGroup,
	ControlsSection,
} from "../../components/control-sections";

import {
	EmphasisBlockAreaControls
} from "../../components/emphasis-level-controls"

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	InspectorControls
} = wp.blockEditor;

const {
	Fragment,
} = wp.element;

const {
	RadioControl,
	RangeControl,
	ToggleControl,
} = wp.components;

const MediaInspectorControls = function( props ) {

	const {
		attributes,
		setAttributes,
	} = props;

	const {
		blockTopSpacing,
		blockBottomSpacing,
		emphasisTopSpacing,
		emphasisBottomSpacing,
		emphasisArea,

		contentAreaWidth,
		layoutGutter,
		blockStyle,

		// general tab attributes
		layoutPreset,

		// customize tab attributes
		emphasisBySpace,
		enableOverlapping,
		containerHeight,
		verticalAlignment,
	} = attributes;

	const { updateBlockAttributes } = wp.data.dispatch('core/block-editor');

	const getEmphasisAttributes = ( emphasis, overlap ) => {

		const actualEmphasis = ! overlap ? emphasis : -1 * emphasis;

		return {
			emphasisBySpace: emphasis,
			enableOverlapping: overlap,
			blockTopSpacing: ( actualEmphasis < 0 && ['center', 'bottom'].includes( verticalAlignment ) ) ? actualEmphasis : 0,
			blockBottomSpacing: ( actualEmphasis < 0 && ['top', 'center'].includes( verticalAlignment ) ) ? actualEmphasis : 0,
			emphasisTopSpacing: ( verticalAlignment !== 'top' ) ? actualEmphasis : 1,
			emphasisBottomSpacing: ( verticalAlignment !== 'bottom' ) ? actualEmphasis : 1,
		};
	}

	const emphasisAttributesMatch = () => {
		const emphasisAttributes = getEmphasisAttributes( emphasisBySpace, enableOverlapping );

		return Object.keys( emphasisAttributes ).every( key => {
			return emphasisAttributes[ key ] === attributes[ key ];
		} );
	}

	const getEmphasisControlsClassName = () => {
		return classnames(
			'novablocks-controls-wrap',
			{
				'novablocks-controls-wrap--dirty': ! emphasisAttributesMatch(),
			}
		);
	}

	return (
		<Fragment>

			<EmphasisBlockAreaControls>
				{
					blockStyle !== 'basic' &&
					<RangeControl
						value={ emphasisArea }
						onChange={ ( emphasisArea ) => setAttributes( { emphasisArea } ) }
						label={ __( 'Emphasis Area' ) }
						min={ 0 }
						max={ 100 }
						step={ 5 }
					/>
				}
			</EmphasisBlockAreaControls>

			<ControlsSection label={ __( 'Space and Sizing' ) }>

				<ControlsGroup label={ __( 'General' ) }>
					<RadioControl
						label={ __( 'Choose a layout preset:', '__plugin_txtd' ) }
						selected={ layoutPreset }
						onChange={ layoutPreset => { setAttributes( { layoutPreset } ) } }
						options={ [
							{ label: __( 'Calm and stable' ), value: 'stable' },
							{ label: __( 'Moving and dynamic' ), value: 'dynamic' },
						] }
					/>
				</ControlsGroup>

				<ControlsGroup label={ __( 'Customize' ) }>
					<div className={ getEmphasisControlsClassName() }>
						<RangeControl
							value={ emphasisBySpace }
							onChange={ ( emphasisBySpace ) => {
								const newAttributes = getEmphasisAttributes( emphasisBySpace, enableOverlapping );
								setAttributes( newAttributes );
							} }
							label={ __( 'Emphasis by Space' ) }
							min={ 0 }
							max={ 3 }
						/>
						<ToggleControl
							label={ __( 'Enable Overlapping' ) }
							checked={ enableOverlapping }
							onChange={ () => {
								const newAttributes = getEmphasisAttributes( emphasisBySpace, ! enableOverlapping );
								setAttributes( newAttributes );
							} }
						/>
					</div>
					<RadioControl
						label={ __( 'Minimum Height', '__plugin_txtd' ) }
						selected={ verticalAlignment }
						onChange={ verticalAlignment => { setAttributes( { verticalAlignment } ) } }
						options={ [
							{ label: __( 'Top' ), value: 'top' },
							{ label: __( 'Middle' ), value: 'center' },
							{ label: __( 'Bottom' ), value: 'bottom' },
						] }
					/>
					<RangeControl
						label={ __( 'Minimum Covered Area', '__plugin_txtd' ) }
						value={ containerHeight }
						onChange={ containerHeight => setAttributes( { containerHeight } ) }
						min={ 0 }
						max={ 100 }
						step={ 5 }
					/>
				</ControlsGroup>

				<ControlsGroup label={ __( 'Settings' ) }>
					<label>Block Spacing</label>
					<RangeControl
						value={ blockTopSpacing }
						onChange={ ( blockTopSpacing ) => setAttributes( { blockTopSpacing } ) }
						label={ __( 'Top' ) }
						min={ -3 }
						max={ 3 }
					/>
					<RangeControl
						value={ blockBottomSpacing }
						onChange={ ( blockBottomSpacing ) => setAttributes( { blockBottomSpacing } ) }
						label={ __( 'Bottom' ) }
						min={ -3 }
						max={ 3 }
					/>
					<label>Content Area Spacing</label>
					<RangeControl
						value={ emphasisTopSpacing }
						onChange={ ( emphasisTopSpacing ) => setAttributes( { emphasisTopSpacing } ) }
						label={ __( 'Top' ) }
						min={ -3 }
						max={ 3 }
					/>
					<RangeControl
						value={ emphasisBottomSpacing }
						onChange={ ( emphasisBottomSpacing ) => setAttributes( { emphasisBottomSpacing } ) }
						label={ __( 'Bottom' ) }
						min={ -3 }
						max={ 3 }
					/>
					<RangeControl
						value={ contentAreaWidth }
						onChange={ ( contentAreaWidth ) => setAttributes( { contentAreaWidth } ) }
						label={ __( 'Content Area Width' ) }
						min={ 0 }
						max={ 100 }
						step={ 1 }
					/>
					<RangeControl
						value={ layoutGutter }
						onChange={ ( layoutGutter ) => setAttributes( { layoutGutter } ) }
						label={ __( 'Layout Gutter' ) }
						min={ 0 }
						max={ 100 }
						step={ 5 }
					/>
				</ControlsGroup>

			</ControlsSection>
		</Fragment>
	);
};

export default MediaInspectorControls;
