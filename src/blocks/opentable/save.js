import classnames from "classnames";

/**
 * WordPress dependencies.
 */
const {__} = wp.i18n;

const OpenTableSave = function( props ) {
	const {
		attributes: {
			restaurantId,
			showOpenTableLogo,
			layoutForm
		},
		className
	} = props;

	const formSrc = `//www.opentable.com/widget/reservation/loader?rid=${restaurantId}&domain=com&type=standard&theme=${layoutForm}&lang=en&overlay=false&iframe=false`

	const classNames = classnames(
		className,
		`novablocks-opentable`,
		`novablocks-opentable__${ layoutForm }`,

		{
			'has-opentable-logo': showOpenTableLogo === true
		}

	);

	return (

		<div className={classNames}>
			<script type="text/javascript" src = {formSrc}>
			</script>
		</div>

	);
};

export default OpenTableSave;
