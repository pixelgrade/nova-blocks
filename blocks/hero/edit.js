import { debounce } from '../utils';
import * as icons from '../icons';

import {
	AlignmentControls,
	HeightPanel,
	LayoutPanel,
	ColorControls,
	ColorPanel,
	OverlayControls,
	ParallaxPanel,
	ScrollIndicatorPanel,
} from "../../components";

import HeroPreview from './preview';
import HeroBlockControls from './controls';

const { __ } = wp.i18n;

const {
	InspectorControls,
	BlockControls,
	MediaUpload,
	InnerBlocks
} = wp.blockEditor;

const {
	Component,
	Fragment
} = wp.element;

const {
	Button,
	Dropdown,
	IconButton,
	PanelBody,
	PanelRow,
	SelectControl,
	RadioControl,
	ToggleControl,
	Toolbar,
} = wp.components;

const editorData = wp.data.select( 'core/block-editor' );
const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const updateBlocks = ( attributes ) => {
	const blocks = editorData.getBlocks();

	blocks.filter( block => {
		return block.name === 'nova/hero';
	} ).filter( ( block, heroBlockIndex ) => {
		const { applyMinimumHeight, scrollIndicator } = { ...block.attributes, ...attributes };
		const applyMinimumHeightBlock = applyMinimumHeight === 'first' && heroBlockIndex === 0 || applyMinimumHeight === 'all';
		const scrollIndicatorBlock = scrollIndicator === true && heroBlockIndex === 0;
		const blockIndex = blocks.findIndex( testBlock => block === testBlock );

		wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( block.clientId, {
			blockIndex,
			applyMinimumHeightBlock,
			scrollIndicatorBlock
		} );

		return true;
	} );

}

let blockList = editorData.getBlocks();
let debouncedOnSubscribe = debounce(() => {

	const newBlockList = editorData.getBlocks();
	let blockListChanged = blockList.length !== newBlockList.length;

	if ( ! blockListChanged ) {
		blockListChanged = blockList.some( ( block, index ) => {
			return ( blockList[index].clientId !== newBlockList[index].clientId );
		} );
	}

	if ( blockListChanged ) {
		blockList = newBlockList;
		updateBlocks();
	}
}, 30);

wp.data.subscribe( debouncedOnSubscribe );

export default class Edit extends Component {

	render() {

		const {
			attributes: {
				positionIndicator,
			},
			setAttributes,
		} = this.props;

		return [
			<Fragment>
				<HeroPreview { ...this.props } />
				<BlockControls />
			</Fragment>,
			<InspectorControls>

				<PanelBody title={ __( 'Content Position', '__plugin_txtd' ) } initialOpen={ true }>
					<AlignmentControls { ...this.props } />
				</PanelBody>

				<ColorPanel { ...this.props } />
				<LayoutPanel { ...this.props } />
				<HeightPanel { ...this.props } />
				<ScrollIndicatorPanel { ...this.props } />
				<PanelBody title={ __( 'Position Indicators', '__plugin_txtd' ) } initialOpen={ true }>
					<ToggleControl
						label={ __( 'Enable Position Indicators', '__plugin_txtd' ) }
						checked={ positionIndicator }
						onChange={ positionIndicator => {
							setAttributes( { positionIndicator } );
							updateBlocks( { positionIndicator } );
						} }
					/>
				</PanelBody>
				<ParallaxPanel { ...this.props } />

			</InspectorControls>
		]
	}
}
