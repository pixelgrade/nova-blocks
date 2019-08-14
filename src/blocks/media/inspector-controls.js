/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	Fragment,
} = wp.element;

const {
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	RadioControl,
} = wp.components;

const MediaInspectorControls = function( props ) {
	const {
		attributes: {
			contentStyle,
			blockStyle,
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
