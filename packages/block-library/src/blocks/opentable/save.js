import classnames from "classnames";

/**
 * WordPress dependencies.
 */
import { getColorSignalClassnames } from "@novablocks/utils";

const OpenTableSave = function( props ) {

	const {
		attributes,
		className
	} = props;

	const {
    restaurantId,
    language,
    showOpenTableLogo,
    layoutForm
  } = attributes;

	const formSrc = `//www.opentable.com/widget/reservation/loader?rid=${ restaurantId }&domain=com&type=standard&theme=${ layoutForm }&iframe=false&overlay=false&domain=com&lang=${ language }`

  const classNames = classnames(
    className,
    `novablocks-opentable`,
    `novablocks-opentable__${ layoutForm }`,
    {
      'has-opentable-logo': showOpenTableLogo === true
    },
    getColorSignalClassnames( attributes, true )
  );

	return (
		<div className={ classNames }>
			<script type="text/javascript" src={ formSrc }></script>
		</div>
	);
};

export default OpenTableSave;
