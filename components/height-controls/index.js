import {debounce} from "../../blocks/utils";

const { __ } = wp.i18n;

const {
	Component,
} = wp.element;

const {
	PanelBody,
	SelectControl,
	ToggleControl,
} = wp.components;

const {
	dispatch,
	select,
	subscribe,
} = wp.data;

let blockList = select( 'core/editor' ).getBlocks();

let debouncedOnSubscribe = debounce(() => {
	let newBlockList = select( 'core/editor' ).getBlocks();
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

subscribe( debouncedOnSubscribe );

const updateBlocks = ( attributes ) => {

	select( 'core/editor' ).getBlocks().filter( block => {
		return block.name === 'pixelgrade/hero';
	} ).filter( ( block, index ) => {
		const { applyMinimumHeight, scrollIndicator } = { ...block.attributes, ...attributes };
		const applyMinimumHeightBlock = applyMinimumHeight === 'first' && index === 0 || applyMinimumHeight === 'all';
		const scrollIndicatorBlock = scrollIndicator === true && index === 0;

		dispatch( 'core/editor' ).updateBlockAttributes( block.clientId, {
			applyMinimumHeightBlock,
			scrollIndicatorBlock
		} );

		return true;
	} );

}

class HeightPanel extends Component {

	render() {

		const {
			attributes: {
				applyMinimumHeight,
				minHeight,
			},
			setAttributes
		} = this.props;

		return (
			<PanelBody title={ __( 'Height', '__plugin_txtd' ) } initialOpen={ true }>
				<SelectControl
					label={ __( 'Apply Minimum Height', '__plugin_txtd' ) }
					value={ applyMinimumHeight }
					onChange={ applyMinimumHeight => {
						setAttributes( { applyMinimumHeight } );
						updateBlocks( { applyMinimumHeight } );
					} }
					options={[{
						label: __( 'None', '__plugin_txtd' ),
						value: 'none'
					}, {
						label: __( 'First Block Only', '__plugin_txtd' ),
						value: 'first'
					}, {
						label: __( 'All Blocks', '__plugin_txtd' ),
						value: 'all'
					}]}
				/>
				{ 'none' !== applyMinimumHeight && <SelectControl
					label={ __( 'Minimum Height', '__plugin_txtd' ) }
					value={ minHeight }
					onChange={ minHeight => {
						setAttributes( { minHeight } );
						updateBlocks( { minHeight } );
					} }
					options={[{
						label: __( 'Half', '__plugin_txtd' ),
						value: 50
					}, {
						label: __( 'Two Thirds', '__plugin_txtd' ),
						value: 66
					}, {
						label: __( 'Three Quarters', '__plugin_txtd' ),
						value: 75
					}, {
						label: __( 'Full', '__plugin_txtd' ),
						value: 100
					}]}
				/> }
			</PanelBody>
		)
	}
}

class ScrollIndicatorPanel extends Component {

	render() {

		const {
			attributes: {
				scrollIndicator,
			},
			setAttributes
		} = this.props;

		const heroBlocks = select( 'core/editor' ).getBlocks().filter( block => {
			return block.name === 'pixelgrade/hero';
		} );

		const index = heroBlocks.findIndex( block => block.clientId === select( 'core/editor' ).getSelectedBlockClientId() );

		return <PanelBody title={ __( 'Scroll Indicator', '__plugin_txtd' ) } style={ { display: index === 0 ? 'block' : 'none' } } initialOpen={ false }>
			<ToggleControl
				label={ __( 'Enable Scroll Indicator', '__plugin_txtd' ) }
				checked={ scrollIndicator }
				onChange={ scrollIndicator => {
					setAttributes( { scrollIndicator } );
					updateBlocks( { scrollIndicator } );
				} }
			/>
		</PanelBody>
	}
}

export {
	HeightPanel,
	ScrollIndicatorPanel,
};
