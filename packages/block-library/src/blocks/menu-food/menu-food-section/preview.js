/**
 * WordPress dependencies
 */
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { Button } from '@wordpress/components';

/**
 * Internal dependencies.
 */
const ALLOWED_BLOCKS = ['novablocks/menu-food-item'];
const TEMPLATE = [
	['novablocks/menu-food-item'],
];

const FoodMenuSectionPreview = function( props ) {
	const {
		attributes: {
			sectionTitle,
			showPrices,
			showDescription
		},
		setAttributes,
		clientId,
		className,
	} = props;

	const addFoodMenuItem = () => {
		const block = createBlock( 'novablocks/menu-food-item' );
		const index = wp.data.select( 'core/block-editor' ).getBlocksByClientId( clientId )[0].innerBlocks.length;
		wp.data.dispatch( 'core/block-editor' ).insertBlock( block, index, clientId );
	};

	const classNames = classnames(
		className,
		`nova-food-menu__section`
	);

	return (
		<div className={classNames}>
			<header className="nova-food-menu__header">
				<RichText
					tagName="h3"
					className="section-title"
					value={sectionTitle}
					onChange={( sectionTitle ) => setAttributes( {sectionTitle} )}
				/>
			</header>

			<div className="nova-food-menu__items">
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={TEMPLATE}
					renderAppender={false}
				/>
			</div>

			<Button
				className="components-button block-editor-button-block-appender nova-blocks-appender"
				label={__( 'Add New Item', '__plugin_txtd' )}
				onClick={addFoodMenuItem}
			>
				{ __( 'Add Item', '__plugin_txtd' ) }
			</Button>

		</div>

	);
};

export default FoodMenuSectionPreview;
