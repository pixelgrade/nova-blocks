/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

import { AlignmentControls } from '../../components';

const {
	Fragment,
} = wp.element;

const {
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	RadioControl,
	RangeControl,
} = wp.components;

const MediaInspectorControls = function( props ) {
	const {
		attributes: {
			contentStyle,
			blockStyle,
			blockTopSpacing,
			blockBottomSpacing,
			emphasisTopSpacing,
			emphasisBottomSpacing,
		},
		setAttributes,
		settings: {
			media: {
				contentAreaOptions,
				blockAreaOptions,
			},
		},
	} = props;

	return (
		<Fragment>
			<InspectorControls>

				<PanelBody title={ __( 'Content Alignemnt', '__plugin_txtd' ) } initialOpen={ true }>
					<AlignmentControls { ...props } />
					<label>Block Spacing</label>
					<RangeControl
						value={ blockTopSpacing }
						onChange={ ( blockTopSpacing ) => setAttributes( { blockTopSpacing } ) }
						label={ __( 'Top' ) }
						min={ -2 }
						max={ 2 }
					/>
					<RangeControl
						value={ blockBottomSpacing }
						onChange={ ( blockBottomSpacing ) => setAttributes( { blockBottomSpacing } ) }
						label={ __( 'Bottom' ) }
						min={ -2 }
						max={ 2 }
					/>
					<label>Emphasis Spacing</label>
					<RangeControl
						value={ emphasisTopSpacing }
						onChange={ ( emphasisTopSpacing ) => setAttributes( { emphasisTopSpacing } ) }
						label={ __( 'Top' ) }
						min={ -2 }
						max={ 2 }
					/>
					<RangeControl
						value={ emphasisBottomSpacing }
						onChange={ ( emphasisBottomSpacing ) => setAttributes( { emphasisBottomSpacing } ) }
						label={ __( 'Bottom' ) }
						min={ -2 }
						max={ 2 }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Content Area', '__plugin_txtd' ) } initialOpen={ true }>
					<RadioControl
						label={ __( 'Emphasis Level', '__plugin_txtd' ) }
						value={ contentStyle }
						selected={ contentStyle }
						options={ contentAreaOptions }
						onChange={ ( nextContentStyle ) => setAttributes( { contentStyle: nextContentStyle } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Block Area', '__plugin_txtd' ) } initialOpen={ true }>
					<RadioControl
						label={ __( 'Emphasis Level', '__plugin_txtd' ) }
						value={ blockStyle }
						selected={ blockStyle }
						options={ blockAreaOptions }
						onChange={ ( nextBlockStyle ) => setAttributes( { blockStyle: nextBlockStyle } ) }
					/>
				</PanelBody>

			</InspectorControls>
		</Fragment>
	);
};

export default MediaInspectorControls;
