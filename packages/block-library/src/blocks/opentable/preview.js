import classnames from "classnames";
import isShallowEqual from '@wordpress/is-shallow-equal';


/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { SandBox } from '@wordpress/components';

class OpenTablePreview extends Component {

	shouldComponentUpdate( prevProps ) {
		return ! isShallowEqual( prevProps.attributes, this.props.attributes );
	}

	render() {

		const {
			attributes: {
				restaurantId,
				language,
				layoutForm,
				showOpenTableLogo
			},
			className,
		} = this.props;

		const classNames = classnames(
			className,
			`novablocks-opentable`,
			`novablocks-opentable__${ layoutForm }`,

			{
				'has-opentable-logo': showOpenTableLogo === true
			}
		);

		const OpenTable = ( props ) => {
			return <SandBox {...props} />
		};

		const html = `<div class="novablocks-opentable ${ classNames }">` +
		             `<script type='text/javascript' src='//www.opentable.com/widget/reservation/loader?rid=${ restaurantId }&type=standard&theme=${ layoutForm }&iframe=false&overlay=false&domain=com&lang=${ language }'></script>` +
		             `<link rel="stylesheet" href="${ novablocks_urls.opentable_frontend_stylesheet }" type="text/css"/>` +
		             `<link rel="stylesheet" href="${ novablocks_urls.opentable_editor_stylesheet }" type="text/css"/>` +
		             '</div>';

		return (
			<OpenTable
				html={ html }
				title="Sandbox"
				type="embed"
			/>
		);

	}
}


export default OpenTablePreview;
