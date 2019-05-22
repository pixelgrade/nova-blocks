import * as icons from "../../blocks/icons";

const { __ } = wp.i18n;

const {
	Component,
	Fragment
} = wp.element;

const {
	BlockVerticalAlignmentToolbar,
} = wp.blockEditor;

const {
	PanelRow,
	Toolbar
} = wp.components;

export default class AlignmentControls extends Component {
	render() {
		const {
			attributes: {
				horizontalAlignment,
				verticalAlignment
			},
			setAttributes
		} = this.props;

		const BLOCK_ALIGNMENTS_CONTROLS = {
			left: {
				icon: icons.alignTop,
				title: __( 'Align Left', '__plugin_txtd' ),
			},
			center: {
				icon: icons.alignCenter,
				title: __( 'Align Middle', '__plugin_txtd' ),
			},
			right: {
				icon: icons.alignBottom,
				title: __( 'Align Right', '__plugin_txtd' ),
			},
		};

		const DEFAULT_CONTROLS = [ 'left', 'center', 'right' ];
		const DEFAULT_CONTROL = 'center';

		return (
			<Fragment>
				<PanelRow>
					<label
						htmlFor='pixelgrade-hero-horizontal-alignment'>{__( 'Horizontal', '__plugin_txtd' )}</label>
					<Toolbar
						className="pixelgrade-hero-horizontal-alignment-toolbar"
						controls={
							DEFAULT_CONTROLS.map( ( control ) => {
								return {
									...BLOCK_ALIGNMENTS_CONTROLS[ control ],
									isActive: horizontalAlignment === control,
									onClick: () => {
										wp.data.select('core/editor').getSelectedBlock().innerBlocks.map( block => {
											wp.data.dispatch( 'core/editor' ).updateBlockAttributes( block.clientId, { align: control } );
										} );
										setAttributes( { horizontalAlignment: control } )
									}
								};
							} )
						}
					/>
				</PanelRow>
				<PanelRow>
					<label
						htmlFor='pixelgrade-hero-verical-alignment'>{__( 'Vertical', '__plugin_txtd' )}</label>
					<BlockVerticalAlignmentToolbar
						value={verticalAlignment}
						onChange={verticalAlignment => setAttributes( {verticalAlignment} )}
					/>
				</PanelRow>
			</Fragment>
		)
	}
}
