/**
 * External dependencies
 */
import classnames from 'classnames';

const { __ } = wp.i18n;
const { InnerBlocks, RichText } = wp.blockEditor;
const { createBlock } = wp.blocks;

const { IconButton } = wp.components;

const ALLOWED_BLOCKS = [ 'novablocks/menu-food-item' ];
const TEMPLATE = [
	['novablocks/menu-food-item'],
];

/**
 * Internal dependencies.
 */

const FoodMenuPreview = function( props ) {
	const {
		attributes: {
			sectionTitle
		},
		setAttributes,
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
			<header className="nova-food-menu__header">
				<RichText
					tagName="h4"
					className="section-title"
					value={sectionTitle}
					onChange={ ( sectionTitle ) => setAttributes( { sectionTitle } ) }
				/>
			</header>

			<div className="nova-food-menu__items">
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template = { TEMPLATE }
					renderAppender={ false }
				/>
			</div>

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
