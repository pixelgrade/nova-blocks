/**
 * Internal dependencies
 */
import { debounce } from '../../utils';
import withSettings from '../with-settings';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	PanelBody,
	RadioControl,
	ToggleControl,
} = wp.components;

const {
	dispatch,
	select,
	subscribe,
} = wp.data;

let blockList = select( 'core/block-editor' ).getBlocks();

const debouncedOnSubscribe = debounce( () => {
	const newBlockList = select( 'core/block-editor' ).getBlocks();
	let blockListChanged = blockList.length !== newBlockList.length;

	if ( ! blockListChanged ) {
		blockListChanged = blockList.some( ( block, index ) => {
			return ( blockList[ index ].clientId !== newBlockList[ index ].clientId );
		} );
	}

	if ( blockListChanged ) {
		blockList = newBlockList;
		updateBlocks();
	}
}, 30 );

const debouncedUpdateBlocks = debounce( () => {
	updateBlocks();
}, 30 );

subscribe( debouncedOnSubscribe );


const updateBlocks = ( attributes ) => {
	select( 'core/block-editor' ).getBlocks().filter( ( block ) => {
		return block.name === 'novablocks/hero';
	} ).filter( ( block, index ) => {
		const { applyMinimumHeight, scrollIndicator } = { ...block.attributes, ...attributes };
		const applyMinimumHeightBlock = ( applyMinimumHeight === 'first' && index === 0 ) || applyMinimumHeight === 'all';
		const scrollIndicatorBlock = scrollIndicator === true && index === 0;

		dispatch( 'core/block-editor' ).updateBlockAttributes( block.clientId, {
			applyMinimumHeightBlock,
			scrollIndicatorBlock,
		} );

		return true;
	} );
};

const HeightPanel = withSettings( function( props ) {
	const {
		attributes,
		setAttributes,
		settings,
	} = props;

	const applyMinimumHeight = !! attributes.applyMinimumHeight ? attributes.applyMinimumHeight : 'first';

	return (
		<PanelBody title={ __( 'Height', '__plugin_txtd' ) } initialOpen={ false }>
			<RadioControl
				label={ __( 'Apply Minimum Height', '__plugin_txtd' ) }
				selected={ applyMinimumHeight }
				onChange={ ( nextMinimumHeight ) => {
					setAttributes( { applyMinimumHeight: nextMinimumHeight } );
					debouncedUpdateBlocks();
				} }
				options={ settings.applyMinimumHeightOptions }
			/>
			{ 'none' !== applyMinimumHeight &&
				<RadioControl
					label={ __( 'Minimum Height', '__plugin_txtd' ) }
					selected={ attributes.minHeight }
					onChange={ minHeight => {
						setAttributes( { minHeight: parseInt( minHeight, 10 ) } );
						debouncedUpdateBlocks();
					} }
					options={ settings.minimumHeightOptions }
				/>
			}
		</PanelBody>
	);
} );

const ScrollIndicatorPanel = withSettings( function( props ) {
	const {
		attributes: {
			scrollIndicator,
		},
		setAttributes,
	} = props;

	const heroBlocks = select( 'core/block-editor' ).getBlocks().filter( ( block ) => {
		return block.name === 'novablocks/hero';
	} );

	const index = heroBlocks.findIndex( ( block ) => block.clientId === select( 'core/block-editor' ).getSelectedBlockClientId() );

	return (
		<PanelBody title={ __( 'Scroll Indicator', '__plugin_txtd' ) } style={ { display: index === 0 ? 'block' : 'none' } } initialOpen={ false }>
			<ToggleControl
				label={ __( 'Enable Scroll Indicator', '__plugin_txtd' ) }
				checked={ scrollIndicator }
				onChange={ ( nextScrollIndicator ) => {
					setAttributes( { scrollIndicator: nextScrollIndicator } );
					debouncedUpdateBlocks();
				} }
			/>
		</PanelBody>
	);
} );

export {
	HeightPanel,
	ScrollIndicatorPanel,
};
