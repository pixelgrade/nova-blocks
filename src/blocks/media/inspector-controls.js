const { __ } = wp.i18n;

const {
	Component,
	Fragment
} = wp.element;

const {
	InspectorControls
} = wp.blockEditor;

const {
	PanelBody,
	RadioControl
} = wp.components;

const MediaInspectorControls = function( props ) {

	const {
		attributes,
		setAttributes,
		settings: {
			media: {
				contentAreaOptions,
				blockAreaOptions
			}
		}
	} = props;

	const {
		contentStyle,
		blockStyle,
	} = attributes;

	return (
		<Fragment>
			<InspectorControls>

				<PanelBody title={ __( 'Content Area', '__plugin_txtd' ) } initialOpen = { true }>
					<RadioControl
						label = { __( 'Emphasis Level', '__plugin_txtd' ) }
						value = { contentStyle }
						selected = { contentStyle }
						options = { contentAreaOptions }
						onChange = { contentStyle => setAttributes( { contentStyle } ) }
					/>
				</PanelBody>


				<PanelBody title={ __( 'Block Area', '__plugin_txtd' ) } initialOpen = { true }>
					<RadioControl
						label = { __( 'Emphasis Level', '__plugin_txtd' ) }
						value = { blockStyle }
						selected = { blockStyle }
						options = { blockAreaOptions }
						onChange = { blockStyle => setAttributes( { blockStyle } ) }
					/>
				</PanelBody>

			</InspectorControls>
		</Fragment>
	);
}

export default MediaInspectorControls;