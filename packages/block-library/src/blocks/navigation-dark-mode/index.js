/**
 * Header navigation "Dark Mode" special item.
 *
 * Editor-only block: projected to a classic menu item with the
 * `menu-item--dark-mode js-sm-dark-mode-toggle` classes so wp_nav_menu renders
 * it 1:1 on the frontend.
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';

registerBlockType( metadata.name, {
	attributes: metadata.attributes,
	edit: ( { attributes } ) => {
		const blockProps = useBlockProps( {
			className: 'wp-block-navigation-item nb-navigation-special-item',
		} );

		return (
			<div { ...blockProps }>
				<span className="wp-block-navigation-item__content">
					{ attributes.label || __( 'Dark Mode', 'nova-blocks' ) }
				</span>
			</div>
		);
	},
	save: () => null,
} );
