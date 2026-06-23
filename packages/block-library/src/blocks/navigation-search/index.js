/**
 * Header navigation "Search" special item.
 *
 * Editor-only block (no frontend output of its own): it lives in the
 * core/navigation editing entity and is projected to a classic menu item with
 * the `menu-item--search` class, so wp_nav_menu renders it 1:1 on the frontend.
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
					{ attributes.label || __( 'Search', 'nova-blocks' ) }
				</span>
			</div>
		);
	},
	save: () => null,
} );
