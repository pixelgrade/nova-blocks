import * as icons from "../../blocks/icons";
import "./style.scss";

import BlockHorizontalAlignmentToolbar from '../block-horizontal-alignment-toolbar';

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
} = wp.components;

export default class AlignmentControls extends Component {
	render() {
		const {
			attributes: {
				applyMinimumHeightBlock,
				horizontalAlignment,
				verticalAlignment
			},
			setAttributes
		} = this.props;

		return (
			<Fragment>
				<PanelRow>
					<span>{ __( 'Horizontal', '__plugin_txtd' ) }</span>
					<BlockHorizontalAlignmentToolbar
						value={horizontalAlignment}
						onChange={horizontalAlignment => {
							wp.data.select('core/editor').getSelectedBlock().innerBlocks.map( block => {
								wp.data.dispatch( 'core/editor' ).updateBlockAttributes( block.clientId, { align: horizontalAlignment } );
							} );
							setAttributes( { horizontalAlignment } )
						}}
					/>
				</PanelRow>
				{ applyMinimumHeightBlock && <PanelRow>
					<span>{ __( 'Vertical', '__plugin_txtd' ) }</span>
					<BlockVerticalAlignmentToolbar
						value={verticalAlignment}
						onChange={verticalAlignment => setAttributes( {verticalAlignment} )}
					/>
				</PanelRow> }
			</Fragment>
		)
	}
}
