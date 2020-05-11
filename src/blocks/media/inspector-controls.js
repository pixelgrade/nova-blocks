import { isMatch } from 'lodash';
import classnames from 'classnames';

import ControlsGroup from "../../components/controls-group";
import BlockVerticalAlignmentToolbar from "../../components/block-vertical-alignment-toolbar";

import {
	ControlsTab,
	ControlsSection,
} from "../../components/control-sections";

import {
	EmphasisBlockAreaControls
} from "../../components/emphasis-level-controls"

import {
	getControlsWrapClassname
} from "../../utils";

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
	PanelRow,
	RadioControl,
	RangeControl,
	ToggleControl,
} = wp.components;

const CONTENT_AREA_MAX_WIDTH = 65;
const CONTENT_AREA_MIN_WIDTH = 35;

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
		balanceEmphasis,
		balanceFocalPoint,

		emphasisBySpace,
		enableOverlapping,
		containerHeight,
		verticalAlignment,
	} = attributes;

	const { updateBlockAttributes } = wp.data.dispatch('core/block-editor');

	const getEmphasisAttributes = ( emphasis, overlap, alignment ) => {

		const actualEmphasis = ! overlap ? emphasis : -1 * emphasis;

		return {
			emphasisBySpace: emphasis,
			enableOverlapping: overlap,
			blockTopSpacing: ( actualEmphasis < 0 && ['center', 'bottom'].includes( alignment ) ) ? actualEmphasis : 0,
			blockBottomSpacing: ( actualEmphasis < 0 && ['top', 'center'].includes( alignment ) ) ? actualEmphasis : 0,
			emphasisTopSpacing: ( alignment !== 'top' ) ? actualEmphasis : 1,
			emphasisBottomSpacing: ( alignment !== 'bottom' ) ? actualEmphasis : 1,
			verticalAlignment: alignment,
		};
	}

	const getBalanceAttributes = ( balanceEmphasis, balanceFocalPoint ) => {
		const width = balanceEmphasis * ( CONTENT_AREA_MAX_WIDTH - CONTENT_AREA_MIN_WIDTH ) / 100 + CONTENT_AREA_MIN_WIDTH;
		const contentAreaWidth = 'content' === balanceFocalPoint ? width : 100 - width;

		return {
			balanceEmphasis,
			balanceFocalPoint,
			contentAreaWidth,
		}
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

				<ControlsTab label={ __( 'General' ) }>
					<RadioControl
						label={ __( 'Choose a layout preset:', '__plugin_txtd' ) }
						selected={ layoutPreset }
						onChange={ layoutPreset => { setAttributes( { layoutPreset } ) } }
						options={ [
							{ label: __( 'Calm and stable' ), value: 'stable' },
							{ label: __( 'Moving and dynamic' ), value: 'dynamic' },
						] }
					/>
				</ControlsTab>

				<ControlsTab label={ __( 'Customize' ) }>
					<div className={ getControlsWrapClassname( attributes, getEmphasisAttributes( emphasisBySpace, enableOverlapping, verticalAlignment ) ) }>
						<RangeControl
							value={ emphasisBySpace }
							onChange={ ( emphasisBySpace ) => {
								const newAttributes = getEmphasisAttributes( emphasisBySpace, enableOverlapping, verticalAlignment );
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
								const newAttributes = getEmphasisAttributes( emphasisBySpace, ! enableOverlapping, verticalAlignment );
								setAttributes( newAttributes );
							} }
						/>
						<PanelRow>
							<span>{ __( 'Vertical', '__plugin_txtd' ) }</span>
							<BlockVerticalAlignmentToolbar
								value={ verticalAlignment }
								onChange={ ( verticalAlignment ) => {
									const newAttributes = getEmphasisAttributes( emphasisBySpace, enableOverlapping, verticalAlignment );
									setAttributes( newAttributes );
								} }
							/>
						</PanelRow>
					</div>
					<RangeControl
						label={ __( 'Minimum Covered Area', '__plugin_txtd' ) }
						value={ containerHeight }
						onChange={ containerHeight => setAttributes( { containerHeight } ) }
						min={ 0 }
						max={ 100 }
						step={ 5 }
					/>
				</ControlsTab>

				<ControlsTab label={ __( 'Settings' ) }>
					<ControlsGroup title={ __( 'Block Spacing' ) }>
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
					</ControlsGroup>
					<ControlsGroup title={ __( 'Content Area Spacing' ) }>
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
					</ControlsGroup>
				</ControlsTab>

			</ControlsSection>

			<ControlsSection label={ __( 'Visual Balance' ) }>

				<ControlsTab label={ __( 'Customize' ) }>
					<div className={ getControlsWrapClassname( attributes, getBalanceAttributes( balanceEmphasis, balanceFocalPoint ) ) }>
						<RangeControl
							value={ balanceEmphasis }
							onChange={ ( balanceEmphasis ) => {
								setAttributes( getBalanceAttributes( balanceEmphasis, balanceFocalPoint ) );
							} }
							label={ __( 'Emphasis by Balance' ) }
							min={ 0 }
							max={ 100 }
							step={ 50 }
						/>
						<RadioControl
							label={ __( 'Focal Point', '__plugin_txtd' ) }
							selected={ balanceFocalPoint }
							onChange={ ( balanceFocalPoint ) => {
								setAttributes( getBalanceAttributes( balanceEmphasis, balanceFocalPoint ) );
							} }
							options={ [
								{ label: __( 'Content Area' ), value: 'content' },
								{ label: __( 'Media / Gallery' ), value: 'media' },
							] }
						/>
					</div>
				</ControlsTab>

				<ControlsTab label={ __( 'Settings' ) }>
					<RangeControl
						value={ contentAreaWidth }
						onChange={ ( contentAreaWidth ) => setAttributes( { contentAreaWidth } ) }
						label={ __( 'Content Area Width' ) }
						min={ CONTENT_AREA_MIN_WIDTH }
						max={ CONTENT_AREA_MAX_WIDTH }
						step={ 5 }
					/>
					<RangeControl
						value={ layoutGutter }
						onChange={ ( layoutGutter ) => setAttributes( { layoutGutter } ) }
						label={ __( 'Layout Gutter' ) }
						min={ 0 }
						max={ 100 }
						step={ 5 }
					/>
				</ControlsTab>

			</ControlsSection>

		</Fragment>
	);
};

export default MediaInspectorControls;
