import classnames from "classnames";
import isShallowEqual from '@wordpress/is-shallow-equal';

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { SandBox } from '@wordpress/components';
import { getColorSetClassnames } from "@novablocks/utils";

const grabStylesheet = ( url ) => {
  return url && `<link rel="stylesheet" href="${ url }" type="text/css"/>` || '';
}

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
			},
      getColorSetClassnames( this.props.attributes )
		);

		const OpenTable = ( props ) => {
			return <SandBox {...props} />
		};

		const html = `<div class="novablocks-opentable ${ classNames }">` +
		             `<script type='text/javascript' src='//www.opentable.com/widget/reservation/loader?rid=${ restaurantId }&type=standard&theme=${ layoutForm }&iframe=false&overlay=false&domain=com&lang=${ language }'></script>` +
		             grabStylesheet( style_manager_urls?.style_manager_colors_custom_properties ) +
                 ( style_manager_urls?.sm_advanced_palettes_output && `<style>${ style_manager_urls?.sm_advanced_palettes_output }</style>` || '' ) +
		             grabStylesheet( novablocks_urls?.novablocks_core_frontend_stylesheet ) +
		             grabStylesheet( novablocks_urls?.novablocks_components_frontend_stylesheet ) +
		             grabStylesheet( novablocks_urls?.novablocks_opentable_frontend_stylesheet ) +
		             grabStylesheet( novablocks_urls?.novablocks_opentable_editor_stylesheet ) +
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
