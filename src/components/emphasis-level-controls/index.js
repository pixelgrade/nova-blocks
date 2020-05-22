import withSettings from '../with-settings';


const { __ } = wp.i18n;

const {
	Fragment,
} = wp.element;

const {
	PanelBody,
	RadioControl,
	createSlotFill,
} = wp.components;

const EmphasisContentAreaSlotFill = createSlotFill( 'EmphasisContentArea' );
const EmphasisContentAreaSlot = EmphasisContentAreaSlotFill.Slot;
const EmphasisContentAreaFill = EmphasisContentAreaSlotFill.Fill;

const EmphasisBlockAreaSlotFill = createSlotFill( 'EmphasisBlockArea' );
const EmphasisBlockAreaSlot = EmphasisBlockAreaSlotFill.Slot;
const EmphasisBlockAreaFill = EmphasisBlockAreaSlotFill.Fill;

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
			<PanelBody title={ __( 'Content Area', '__plugin_txtd' ) } initialOpen={ false }>
				<RadioControl
					label={ __( 'Emphasis Level', '__plugin_txtd' ) }
					value={ contentStyle }
					selected={ contentStyle }
					options={ contentAreaOptions }
					onChange={ ( nextContentStyle ) => setAttributes( { contentStyle: nextContentStyle } ) }
				/>
				<EmphasisContentAreaSlot />
			</PanelBody>

			<PanelBody title={ __( 'Block Area', '__plugin_txtd' ) } initialOpen={ false }>
				<RadioControl
					label={ __( 'Emphasis Level', '__plugin_txtd' ) }
					value={ blockStyle }
					selected={ blockStyle }
					options={ blockAreaOptions }
					onChange={ ( nextBlockStyle ) => setAttributes( { blockStyle: nextBlockStyle } ) }
				/>
				<EmphasisBlockAreaSlot />
			</PanelBody>
		</Fragment>
	)
}

export { EmphasisContentAreaFill, EmphasisBlockAreaFill };

export default withSettings( EmphasisLevelControls );
