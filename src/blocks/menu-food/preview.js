/**
 * External dependencies
 */
import classnames from 'classnames';

const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;
const { createBlock } = wp.blocks;

const { IconButton } = wp.components;

const ALLOWED_BLOCKS = [ 'novablocks/menu-food-item' ];
const TEMPLATE = [
	['core/heading', { level: 5, placeholder: __( 'Menu title' ) } ],
	['novablocks/menu-food-item'],
];

/**
 * Internal dependencies.
 */

const FoodMenuPreview = function( props ) {
	const {
		attributes: {

		},
		clientId,
		className,
	} = props;

	const addFoodMenuItem = () => {
		const block = createBlock('novablocks/menu-food-item');
		const index = wp.data.select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks.length;
		wp.data.dispatch('core/block-editor').insertBlock(block, index, clientId);
	};

	const classNames = classnames(
		className,
		`nova-food-menu`
	);

	return (
		<div className={ classNames }>

			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				template = { TEMPLATE }
				renderAppender={ false }
			/>

			<IconButton
				className="components-button block-editor-button-block-appender"
				label={ __( 'Add New Menu Item' ) }
				icon="insert"
				onClick={ addFoodMenuItem }
			/>

		</div>

	);
};

export default FoodMenuPreview;
