import withSettings from '../with-settings';

const { __ } = wp.i18n;

const {
	Fragment,
} = wp.element;

const {
	PanelBody,
	RadioControl,
} = wp.components;

const EmphasisLevelControls = ( props ) => {

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
		</Fragment>
	)
}

export default withSettings( EmphasisLevelControls );
