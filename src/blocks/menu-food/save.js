import classnames from "classnames";

/**
 * External dependencies
 */

const {__} = wp.i18n;
const {InnerBlocks} = wp.blockEditor;

const FoodMenuSave = function( props ) {
	const {
		attributes: {
			enableTwoColumns
		},
		className,
	} = props;

	const classNames = classnames(
		className,
		`nova-food-menu`,
		{
			'nova-food-menu--layout' : enableTwoColumns === true
		}
	);

	return (
		<div className={classNames} itemScope itemType="http://schema.org/Menu">
			<InnerBlocks.Content/>
		</div>
	)
};

export default FoodMenuSave;
