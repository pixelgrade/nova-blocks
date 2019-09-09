import classnames from "classnames";
import isShallowEqual from '@wordpress/is-shallow-equal';

/**
 * WordPress dependencies
 */

const {__} = wp.i18n;
const {Component} = wp.element;
const {SandBox} = wp.components;


class OpenTablePreview extends Component {

	shouldComponentUpdate( prevProps ) {
		return ! isShallowEqual( prevProps.attributes, this.props.attributes );
	}

	render() {

		const {
			attributes: {
				restaurantId,
				layoutForm,
				showOpenTableLogo
			},
			className,
		} = this.props;

		const classNames = classnames(
			className,
			`novablocks-opentable`,
			`novablocks-opentable__${layoutForm}`,

			{
				'has-opentable-logo': showOpenTableLogo === true
			}
		);

		const OpenTable = ( props ) => {
			return <SandBox {...props} />
		};

		const html = `<div class="novablocks-opentable ${classNames}">` +
		             `<script type='text/javascript' src='//www.opentable.com/widget/reservation/loader?rid=${restaurantId}&type=standard&theme=${layoutForm}&iframe=false&overlay=false&domain=com&lang=en-US'></script>` +
		             `<link rel="stylesheet" href="${novablocks_urls.frontend_blocks_stylesheet}" type="text/css"/>` +
		             `<link rel="stylesheet" href="${novablocks_urls.editor_blocks_stylesheet}" type="text/css"/>` +
		             '</div>';

		return (
			<OpenTable
				html={html}
				title="Sandbox"
				type="embed"
			/>
		)

	}
}


export default OpenTablePreview;
