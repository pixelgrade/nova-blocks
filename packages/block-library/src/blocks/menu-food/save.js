import classnames from "classnames";

/**
 * External dependencies
 */

import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

const FoodMenuSave = function( props ) {
	const {
		attributes: {
			enableTwoColumns,
			showPrices,
			showDescription
		},
		className,
	} = props;

	const classNames = classnames(
		className,
		`nova-food-menu`,
		{
			'nova-food-menu--layout' : enableTwoColumns === true,
			'price--is-hidden' : showPrices === false
		}
	);

	return (
		<div className={classNames} itemScope itemType="http://schema.org/Menu">
			<InnerBlocks.Content/>
		</div>
	)
};

export default FoodMenuSave;