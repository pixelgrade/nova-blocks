<?php
/**
 * Header navigation projection.
 *
 * Bridges the core/navigation editing entity (a `wp_navigation` post edited
 * inline in the header) to a Nova-owned classic menu, so the frontend can keep
 * rendering through `wp_nav_menu( [ 'theme_location' => $slug ] )` exactly as
 * today (Anima walker + special items + badges), byte-identical.
 *
 * The mapping (block tree -> menu-item descriptors) is pure and unit-tested in
 * tests/php/header-nav-projection-contract.php. The apply/sync step uses the
 * WordPress nav-menu API and runs on entity save, gated behind the
 * `novablocks/enable_block_nav_editing` feature flag.
 *
 * @package Nova_Blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * The predefined header locations handled by the block navigation editor.
 *
 * @return string[]
 */
function novablocks_header_nav_locations(): array {
	return apply_filters( 'novablocks/header_nav_locations', [ 'primary', 'secondary', 'tertiary' ] );
}

/**
 * Static projection config for Anima's special menu items. Each maps to a
 * classic custom menu item carrying the CSS class(es) the Anima walker / CSS
 * key off, so wp_nav_menu reproduces today's markup.
 *
 * @return array<string,array>
 */
function novablocks_header_nav_special_items(): array {
	return [
		'novablocks/navigation-search'    => [
			'title'   => 'Search',
			'url'     => '#search',
			'classes' => [ 'menu-item--search' ],
		],
		'novablocks/navigation-cart'      => [
			'title'   => 'Cart',
			'url'     => '', // Resolved to the WooCommerce cart permalink at apply time.
			'classes' => [ 'menu-item--cart' ],
		],
		'novablocks/navigation-dark-mode' => [
			'title'   => 'Dark Mode',
			'url'     => '#',
			'classes' => [ 'menu-item--dark-mode', 'js-sm-dark-mode-toggle' ],
		],
	];
}

/**
 * Default descriptor shape so every projected item has a complete record.
 *
 * @return array
 */
function novablocks_header_nav_descriptor_defaults(): array {
	return [
		'title'        => '',
		'url'          => '',
		'type'         => 'custom',
		'object'       => 'custom',
		'object_id'    => 0,
		'target'       => '',
		'xfn'          => '',
		'description'  => '',
		'attr_title'   => '',
		'classes'      => [],
		'badge'        => '',
		'source_block' => '',
		'children'     => [],
	];
}

/**
 * Map a single parsed block to a menu-item descriptor (or null if the block is
 * not projectable).
 *
 * @param array $block Parsed block (blockName, attrs, innerBlocks).
 * @return array|null
 */
function novablocks_header_nav_block_to_descriptor( array $block ): ?array {
	$name = $block['blockName'] ?? '';

	if ( '' === $name ) {
		return null;
	}

	$attrs    = $block['attrs'] ?? [];
	$defaults = novablocks_header_nav_descriptor_defaults();

	$special = novablocks_header_nav_special_items();

	if ( isset( $special[ $name ] ) ) {
		$config = $special[ $name ];

		return array_merge( $defaults, [
			'title'        => isset( $attrs['label'] ) && '' !== $attrs['label'] ? $attrs['label'] : $config['title'],
			'url'          => $config['url'],
			'type'         => 'custom',
			'object'       => 'custom',
			'object_id'    => 0,
			'classes'      => $config['classes'],
			'badge'        => isset( $attrs['novablocksBadge'] ) ? (string) $attrs['novablocksBadge'] : '',
			'source_block' => $name,
		] );
	}

	if ( 'core/navigation-link' === $name || 'core/navigation-submenu' === $name ) {
		$kind      = $attrs['kind'] ?? 'custom';
		$type_attr = $attrs['type'] ?? '';
		$object_id = isset( $attrs['id'] ) ? (int) $attrs['id'] : 0;

		if ( 'post-type' === $kind ) {
			$menu_type = 'post_type';
			$object    = '' !== $type_attr ? $type_attr : 'page';
		} elseif ( 'taxonomy' === $kind ) {
			$menu_type = 'taxonomy';
			$object    = '' !== $type_attr ? $type_attr : 'category';
		} else {
			$menu_type = 'custom';
			$object    = 'custom';
			$object_id = 0;
		}

		$descriptor = array_merge( $defaults, [
			'title'        => $attrs['label'] ?? '',
			'url'          => $attrs['url'] ?? '',
			'type'         => $menu_type,
			'object'       => $object,
			'object_id'    => $object_id,
			'target'       => ! empty( $attrs['opensInNewTab'] ) ? '_blank' : '',
			'xfn'          => $attrs['rel'] ?? '',
			'description'  => $attrs['description'] ?? '',
			'attr_title'   => $attrs['title'] ?? '',
			'badge'        => isset( $attrs['novablocksBadge'] ) ? (string) $attrs['novablocksBadge'] : '',
			'source_block' => $name,
		] );

		if ( 'core/navigation-submenu' === $name && ! empty( $block['innerBlocks'] ) ) {
			$descriptor['children'] = novablocks_header_nav_blocks_to_descriptors( $block['innerBlocks'] );
		}

		return $descriptor;
	}

	return null;
}

/**
 * Map a list of parsed blocks to menu-item descriptors, dropping unknown blocks.
 *
 * @param array $blocks Parsed blocks.
 * @return array
 */
function novablocks_header_nav_blocks_to_descriptors( array $blocks ): array {
	$descriptors = [];

	foreach ( $blocks as $block ) {
		$descriptor = novablocks_header_nav_block_to_descriptor( $block );

		if ( null !== $descriptor ) {
			$descriptors[] = $descriptor;
		}
	}

	return $descriptors;
}

/**
 * Flatten a descriptor tree into ordered rows (depth-first, pre-order) with
 * 1-based `index` and `parent_index` (0 = top-level). Pre-order guarantees a
 * parent row is emitted before its children, so the apply step can resolve
 * parent DB ids as it goes.
 *
 * @param array $descriptors Descriptor tree.
 * @return array
 */
function novablocks_header_nav_flatten_descriptors( array $descriptors ): array {
	$rows    = [];
	$counter = 0;

	$walk = function ( array $items, int $parent_index ) use ( &$walk, &$rows, &$counter ) {
		foreach ( $items as $descriptor ) {
			$counter++;
			$index    = $counter;
			$children = $descriptor['children'] ?? [];

			$row                 = $descriptor;
			$row['index']        = $index;
			$row['parent_index'] = $parent_index;
			unset( $row['children'] );

			$rows[] = $row;

			if ( ! empty( $children ) ) {
				$walk( $children, $index );
			}
		}
	};

	$walk( $descriptors, 0 );

	return $rows;
}

/* -------------------------------------------------------------------------
 * Reverse mapping (seeding): classic menu items -> core/navigation block tree.
 * Pure; used one-time to seed the editing entity from an existing menu.
 * ---------------------------------------------------------------------- */

/**
 * Marker class => special block name, for recognising Anima special items.
 *
 * @return array<string,string>
 */
function novablocks_header_nav_marker_blocks(): array {
	$markers = [];

	foreach ( novablocks_header_nav_special_items() as $block_name => $config ) {
		$markers[ $config['classes'][0] ] = $block_name;
	}

	return $markers;
}

/**
 * Convert one normalised classic menu item (+ its already-built child blocks)
 * into a parse_blocks-shaped block array.
 *
 * Normalised item keys: title, url, type, object, object_id, target, xfn,
 * description, attr_title, classes (array), badge.
 *
 * @param array $item     Normalised menu item.
 * @param array $children Child block arrays.
 * @return array
 */
function novablocks_header_nav_item_to_block( array $item, array $children = [] ): array {
	$classes = $item['classes'] ?? [];
	$badge   = (string) ( $item['badge'] ?? '' );

	// Special item?
	foreach ( novablocks_header_nav_marker_blocks() as $marker => $block_name ) {
		if ( in_array( $marker, $classes, true ) ) {
			$config = novablocks_header_nav_special_items()[ $block_name ];
			$attrs  = [];

			if ( ( $item['title'] ?? '' ) !== $config['title'] && '' !== ( $item['title'] ?? '' ) ) {
				$attrs['label'] = $item['title'];
			}
			if ( '' !== $badge ) {
				$attrs['novablocksBadge'] = $badge;
			}

			return [
				'blockName'   => $block_name,
				'attrs'       => $attrs,
				'innerBlocks' => [],
				'innerHTML'   => '',
			];
		}
	}

	$block_name = ! empty( $children ) ? 'core/navigation-submenu' : 'core/navigation-link';
	$attrs      = [
		'label' => $item['title'] ?? '',
		'url'   => $item['url'] ?? '',
	];

	$type = $item['type'] ?? 'custom';
	if ( 'post_type' === $type ) {
		$attrs['kind'] = 'post-type';
		$attrs['type'] = $item['object'] ?? 'page';
		$attrs['id']   = (int) ( $item['object_id'] ?? 0 );
	} elseif ( 'taxonomy' === $type ) {
		$attrs['kind'] = 'taxonomy';
		$attrs['type'] = $item['object'] ?? 'category';
		$attrs['id']   = (int) ( $item['object_id'] ?? 0 );
	} else {
		$attrs['kind'] = 'custom';
	}

	if ( '_blank' === ( $item['target'] ?? '' ) ) {
		$attrs['opensInNewTab'] = true;
	}
	if ( '' !== ( $item['xfn'] ?? '' ) ) {
		$attrs['rel'] = $item['xfn'];
	}
	if ( '' !== ( $item['description'] ?? '' ) ) {
		$attrs['description'] = $item['description'];
	}
	if ( '' !== ( $item['attr_title'] ?? '' ) ) {
		$attrs['title'] = $item['attr_title'];
	}
	if ( '' !== $badge ) {
		$attrs['novablocksBadge'] = $badge;
	}

	return [
		'blockName'   => $block_name,
		'attrs'       => $attrs,
		'innerBlocks' => $children,
		'innerHTML'   => '',
	];
}

/**
 * Convert a flat set of normalised classic menu items into a nested
 * core/navigation block tree (parse_blocks shape). Each item needs `id`,
 * `parent` (0 = top-level) and `order`.
 *
 * @param array $items Normalised items.
 * @return array
 */
function novablocks_header_nav_menu_items_to_blocks( array $items ): array {
	$by_parent = [];

	foreach ( $items as $item ) {
		$parent                 = (int) ( $item['parent'] ?? 0 );
		$by_parent[ $parent ][] = $item;
	}

	$build = function ( int $parent_id ) use ( &$build, $by_parent ) {
		$blocks   = [];
		$children = $by_parent[ $parent_id ] ?? [];

		usort( $children, static function ( $a, $b ) {
			return ( $a['order'] ?? 0 ) <=> ( $b['order'] ?? 0 );
		} );

		foreach ( $children as $item ) {
			$child_blocks = $build( (int) $item['id'] );
			$blocks[]     = novablocks_header_nav_item_to_block( $item, $child_blocks );
		}

		return $blocks;
	};

	return $build( 0 );
}

/* -------------------------------------------------------------------------
 * WordPress-runtime apply / sync (only executed via hooks, never at include).
 * ---------------------------------------------------------------------- */

/**
 * Whether the block-based header navigation editing + projection is enabled.
 */
function novablocks_header_nav_block_editing_enabled(): bool {
	return (bool) apply_filters( 'novablocks/enable_block_nav_editing', false );
}

/**
 * Resolve the runtime URL for a special item (cart is dynamic).
 *
 * @param string $source_block Block name.
 * @return string
 */
function novablocks_header_nav_resolve_special_url( string $source_block ): string {
	$special = novablocks_header_nav_special_items();
	$url     = $special[ $source_block ]['url'] ?? '';

	if ( 'novablocks/navigation-cart' === $source_block && function_exists( 'wc_get_page_id' ) ) {
		$cart_id = wc_get_page_id( 'cart' );

		if ( $cart_id && $cart_id > 0 ) {
			$url = get_permalink( $cart_id );
		}
	}

	return $url;
}

/**
 * Find (or create) the Nova-owned generated classic menu for a location.
 * Ownership is stamped via term meta so projection only ever touches our menus.
 *
 * @param string $location Theme location slug.
 * @return WP_Term|null
 */
function novablocks_header_nav_get_or_create_generated_menu( string $location ) {
	foreach ( wp_get_nav_menus() as $menu ) {
		if ( get_term_meta( $menu->term_id, '_novablocks_generated_for', true ) === $location ) {
			return $menu;
		}
	}

	/* translators: %s: header location name. */
	$name    = sprintf( __( 'Header: %s (managed)', '__plugin_txtd' ), ucfirst( $location ) );
	$menu_id = wp_create_nav_menu( $name );

	if ( is_wp_error( $menu_id ) ) {
		return null;
	}

	update_term_meta( $menu_id, '_novablocks_generated_for', $location );

	return wp_get_nav_menu_object( $menu_id );
}

/**
 * Project a wp_navigation entity into its location's Nova-owned classic menu.
 *
 * Diff-based by position: existing item ids are reused row-for-row so item ids
 * stay stable across edits; surplus items are deleted.
 *
 * @param int    $entity_id wp_navigation post id.
 * @param string $location  Theme location slug.
 * @return bool True on success.
 */
function novablocks_header_nav_project_entity_to_menu( int $entity_id, string $location ): bool {
	$entity = get_post( $entity_id );

	if ( ! $entity instanceof WP_Post ) {
		return false;
	}

	$descriptors = novablocks_header_nav_blocks_to_descriptors( parse_blocks( $entity->post_content ) );
	$rows        = novablocks_header_nav_flatten_descriptors( $descriptors );

	return novablocks_header_nav_apply_rows_to_menu( $rows, $location );
}

/**
 * Write a flattened row set into a location's Nova-owned classic menu.
 *
 * Diff-based by position: existing item ids are reused row-for-row so item ids
 * stay stable across edits; surplus items are deleted. Pre-order rows guarantee
 * a parent is written before its children, so parent DB ids resolve in order.
 *
 * @param array  $rows     Flattened rows (see novablocks_header_nav_flatten_descriptors).
 * @param string $location Theme location slug.
 * @return bool True on success.
 */
function novablocks_header_nav_apply_rows_to_menu( array $rows, string $location ): bool {
	$menu = novablocks_header_nav_get_or_create_generated_menu( $location );

	if ( ! $menu instanceof WP_Term ) {
		return false;
	}

	$menu_id      = $menu->term_id;
	$existing     = wp_get_nav_menu_items( $menu_id ) ?: [];
	$existing_ids = wp_list_pluck( $existing, 'db_id' );

	$created_ids = []; // 1-based row index => created db id.

	foreach ( $rows as $position => $row ) {
		$reuse_id = isset( $existing_ids[ $position ] ) ? (int) $existing_ids[ $position ] : 0;

		$url = $row['url'];
		if ( 'custom' === $row['type'] && '' === $url && '' !== $row['source_block'] ) {
			$url = novablocks_header_nav_resolve_special_url( $row['source_block'] );
		}

		$parent_db_id = $row['parent_index'] > 0 && isset( $created_ids[ $row['parent_index'] ] )
			? $created_ids[ $row['parent_index'] ]
			: 0;

		$item_id = wp_update_nav_menu_item( $menu_id, $reuse_id, [
			'menu-item-title'       => $row['title'],
			'menu-item-url'         => $url,
			'menu-item-type'        => $row['type'],
			'menu-item-object'      => $row['object'],
			'menu-item-object-id'   => $row['object_id'],
			'menu-item-status'      => 'publish',
			'menu-item-parent-id'   => $parent_db_id,
			'menu-item-target'      => $row['target'],
			'menu-item-xfn'         => $row['xfn'],
			'menu-item-description'  => $row['description'],
			'menu-item-attr-title'  => $row['attr_title'],
			'menu-item-classes'     => implode( ' ', $row['classes'] ),
			'menu-item-position'    => $row['index'],
		] );

		if ( is_wp_error( $item_id ) ) {
			continue;
		}

		$created_ids[ $row['index'] ] = (int) $item_id;

		update_post_meta( $item_id, '_menu_item_badge', $row['badge'] );
	}

	// Remove surplus items left over from a previous, longer projection.
	for ( $i = count( $rows ); $i < count( $existing_ids ); $i++ ) {
		wp_delete_post( (int) $existing_ids[ $i ], true );
	}

	// Ensure the generated menu is assigned to the location.
	$locations              = get_nav_menu_locations();
	$locations[ $location ] = $menu_id;
	set_theme_mod( 'nav_menu_locations', $locations );

	return true;
}

/**
 * Map of location => entity post id, persisted as an option. The inline editor
 * (find-or-create) writes it; projection reads it in reverse.
 *
 * @return array<string,int>
 */
function novablocks_header_nav_entity_map(): array {
	$map = get_option( 'novablocks_header_nav_entities', [] );

	return is_array( $map ) ? array_map( 'intval', $map ) : [];
}

/**
 * Which location (if any) a given wp_navigation entity backs.
 *
 * @param int $entity_id Entity post id.
 * @return string Location slug, or '' if none.
 */
function novablocks_header_nav_entity_location( int $entity_id ): string {
	foreach ( novablocks_header_nav_entity_map() as $location => $mapped_id ) {
		if ( (int) $mapped_id === $entity_id ) {
			return (string) $location;
		}
	}

	return '';
}

/**
 * Persist the location => entity id map.
 *
 * @param string $location  Theme location slug.
 * @param int    $entity_id wp_navigation post id.
 */
function novablocks_header_nav_set_entity_for_location( string $location, int $entity_id ): void {
	$map              = novablocks_header_nav_entity_map();
	$map[ $location ] = $entity_id;
	update_option( 'novablocks_header_nav_entities', $map );
}

/**
 * Normalise a WordPress nav_menu_item object into the shape the reverse mapper
 * expects (including the Anima badge meta).
 *
 * @param WP_Post|object $item WordPress menu item.
 * @return array
 */
function novablocks_header_nav_normalize_menu_item( $item ): array {
	return [
		'id'          => (int) $item->ID,
		'parent'      => (int) $item->menu_item_parent,
		'order'       => (int) $item->menu_order,
		'title'       => (string) $item->title,
		'url'         => (string) $item->url,
		'type'        => (string) $item->type, // 'post_type' | 'taxonomy' | 'custom'
		'object'      => (string) $item->object,
		'object_id'   => (int) $item->object_id,
		'target'      => (string) $item->target,
		'xfn'         => (string) $item->xfn,
		'description' => (string) $item->description,
		'attr_title'  => (string) $item->attr_title,
		'classes'     => array_values( array_filter( (array) $item->classes ) ),
		'badge'       => (string) get_post_meta( $item->ID, '_menu_item_badge', true ),
	];
}

/**
 * Create a wp_navigation editing entity for a location from a block tree.
 *
 * @param string $location Theme location slug.
 * @param array  $blocks   parse_blocks-shaped block tree.
 * @return int Entity post id (0 on failure).
 */
function novablocks_header_nav_create_entity( string $location, array $blocks ): int {
	/* translators: %s: header location name. */
	$title = sprintf( __( 'Header: %s', '__plugin_txtd' ), ucfirst( $location ) );

	$entity_id = wp_insert_post( [
		'post_type'    => 'wp_navigation',
		'post_status'  => 'publish',
		'post_title'   => $title,
		'post_content' => serialize_blocks( $blocks ),
	] );

	if ( is_wp_error( $entity_id ) || ! $entity_id ) {
		return 0;
	}

	novablocks_header_nav_set_entity_for_location( $location, (int) $entity_id );

	return (int) $entity_id;
}

/**
 * Get (or create an empty) editing entity for a location. Used by the inline
 * editor to resolve a slug to a `ref`.
 *
 * @param string $location Theme location slug.
 * @return int Entity post id.
 */
function novablocks_header_nav_get_or_create_entity_for_location( string $location ): int {
	$map = novablocks_header_nav_entity_map();

	if ( ! empty( $map[ $location ] ) && get_post( $map[ $location ] ) instanceof WP_Post ) {
		return (int) $map[ $location ];
	}

	return novablocks_header_nav_create_entity( $location, [] );
}

/**
 * Seed a location's editing entity from its currently-assigned classic menu,
 * then project it. Non-destructive: the original menu is left intact; the
 * location is reassigned to a fresh Nova-owned generated menu by the projection.
 *
 * @param string $location Theme location slug.
 * @return bool True if a new entity was seeded.
 */
function novablocks_header_nav_seed_location( string $location ): bool {
	$map = novablocks_header_nav_entity_map();

	// Already seeded.
	if ( ! empty( $map[ $location ] ) && get_post( $map[ $location ] ) instanceof WP_Post ) {
		return false;
	}

	$locations = get_nav_menu_locations();
	$menu_id   = isset( $locations[ $location ] ) ? (int) $locations[ $location ] : 0;

	if ( $menu_id <= 0 ) {
		return false;
	}

	$raw_items = wp_get_nav_menu_items( $menu_id );

	if ( empty( $raw_items ) ) {
		return false;
	}

	$items  = array_map( 'novablocks_header_nav_normalize_menu_item', $raw_items );
	$blocks = novablocks_header_nav_menu_items_to_blocks( $items );

	$entity_id = novablocks_header_nav_create_entity( $location, $blocks );

	if ( ! $entity_id ) {
		return false;
	}

	novablocks_header_nav_project_entity_to_menu( $entity_id, $location );

	return true;
}

/**
 * One-time migration: seed all predefined locations from their existing menus.
 * Guarded by an option so it only runs once per site.
 */
function novablocks_header_nav_maybe_seed(): void {
	if ( ! novablocks_header_nav_block_editing_enabled() ) {
		return;
	}

	if ( get_option( 'novablocks_header_nav_seeded' ) ) {
		return;
	}

	foreach ( novablocks_header_nav_locations() as $location ) {
		novablocks_header_nav_seed_location( $location );
	}

	update_option( 'novablocks_header_nav_seeded', 1 );
}

/**
 * Save hook: re-project an entity when it is saved.
 *
 * @param int $post_id wp_navigation post id.
 */
function novablocks_header_nav_on_entity_save( int $post_id ): void {
	if ( wp_is_post_revision( $post_id ) || wp_is_post_autosave( $post_id ) ) {
		return;
	}

	$location = novablocks_header_nav_entity_location( $post_id );

	if ( '' !== $location ) {
		novablocks_header_nav_project_entity_to_menu( $post_id, $location );
	}
}

/**
 * Register projection hooks. Called from setup (flag-gated), not at include.
 */
function novablocks_header_nav_register_projection(): void {
	if ( ! novablocks_header_nav_block_editing_enabled() ) {
		return;
	}

	add_action( 'save_post_wp_navigation', 'novablocks_header_nav_on_entity_save', 20, 1 );

	// One-time, admin-side adoption of existing menus into editing entities.
	add_action( 'admin_init', 'novablocks_header_nav_maybe_seed' );
}
