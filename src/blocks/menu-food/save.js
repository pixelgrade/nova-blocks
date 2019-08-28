import classnames from "classnames";

/**
 * External dependencies
 */

const {__} = wp.i18n;
const {InnerBlocks, RichText} = wp.blockEditor;


const FoodMenuSave = function( props ) {
	const {
		attributes: {
			sectionTitle
		},
		setAttributes,
		className,
	} = props;

	const classNames = classnames(
		className,
		`nova-food-menu`
	);

	return (
		<div className={classNames} itemScope itemType="http://schema.org/MenuSection">

			<header className="nova-food-menu__header">
				<RichText.Content
					tagName="h4"
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

export default FoodMenuSave;
