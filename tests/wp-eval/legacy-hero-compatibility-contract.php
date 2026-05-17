<?php

$registry = WP_Block_Type_Registry::get_instance();

if ( ! $registry->is_registered( 'novablocks/hero' ) ) {
	throw new RuntimeException( 'Expected the legacy novablocks/hero block to be registered for compatibility.' );
}

$block_type = $registry->get_registered( 'novablocks/hero' );

if ( empty( $block_type->editor_script ) ) {
	throw new RuntimeException( 'Expected the legacy hero block to have an editor script so the editor can migrate it.' );
}

$legacy_content = '<!-- wp:novablocks/hero {"align":"full","scrollingEffect":"parallax","colorSignal":3,"paletteVariation":12,"overlayFilterStrength":30,"minHeightFallback":66,"defaultsGenerated":true,"templateInserted":true} -->
<!-- wp:group {"align":"wide"} -->
<div class="wp-block-group alignwide">
<!-- wp:heading {"textAlign":"center","level":1} -->
<h1 class="wp-block-heading has-text-align-center">Check out Our Menus</h1>
<!-- /wp:heading -->
<!-- wp:paragraph {"align":"center","className":"is-style-lead"} -->
<p class="has-text-align-center is-style-lead">Our menu offers modern dishes, inspired by historic Italian gastronomy.</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
<!-- /wp:novablocks/hero -->';

$markup = do_blocks( $legacy_content );

if ( false === strpos( $markup, 'nb-supernova' ) ) {
	throw new RuntimeException( 'Expected legacy hero content to render through the current Supernova markup.' );
}

if ( false === strpos( $markup, 'nb-supernova-item' ) ) {
	throw new RuntimeException( 'Expected legacy hero content to render as a Supernova item.' );
}

if ( false === strpos( $markup, 'Check out Our Menus' ) ) {
	throw new RuntimeException( 'Expected legacy hero inner content to be preserved.' );
}

echo "legacy hero compatibility contract ok\n";
