import { ControlsSection, SettingsControls } from "../../components/control-sections";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	Fragment,
} = wp.element;

const {
	RadioControl,
	RangeControl,
} = wp.components;

const MediaInspectorControls = function( props ) {
	const {
		attributes: {
			blockTopSpacing,
			blockBottomSpacing,
			emphasisTopSpacing,
			emphasisBottomSpacing,
			emphasisArea,

			contentAreaWidth,
			layoutGutter,
		},
		setAttributes,
	} = props;

	return (
		<ControlsSection label={ __( 'Spacing' ) }>
			<SettingsControls>
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
				<RangeControl
					value={ emphasisArea }
					onChange={ ( emphasisArea ) => setAttributes( { emphasisArea } ) }
					label={ __( 'Emphasis Area' ) }
					min={ 0 }
					max={ 100 }
					step={ 5 }
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
			</SettingsControls>
		</ControlsSection>
	);
};

export default MediaInspectorControls;
