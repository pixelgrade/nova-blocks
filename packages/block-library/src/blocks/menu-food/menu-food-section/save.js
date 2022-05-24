import classnames from "classnames";

/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText } from '@wordpress/block-editor';


const FoodMenuSectionSave = function( props ) {
	const {
		attributes: {
			sectionTitle
		},
		setAttributes,
		className,
	} = props;

	const classNames = classnames(
		className,
		`nova-food-menu__section`
	);

	return (
		<div className={classNames} itemScope itemType="https://schema.org/MenuSection">

			<header className="nova-food-menu__header">
				<RichText.Content
					tagName="h3"
					className="section-title"
					value={sectionTitle}
					onChange={( sectionTitle ) => setAttributes( {sectionTitle} )}
					itemprop="name"
				/>
			</header>

			<div className="nova-food-menu__items">
				<InnerBlocks.Content/>
			</div>

		</div>
	)
};

export default FoodMenuSectionSave;
