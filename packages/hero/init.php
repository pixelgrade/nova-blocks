<?php

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function novablocks_hero_of_the_galaxy_block_init() {
	$dir = novablocks_get_plugin_path();
	$script_asset_path = $dir . "build/hero/index.asset.php";

	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "novablocks/hero-of-the-galaxy" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'novablocks-hero-of-the-galaxy-block-editor',
		novablocks_get_plugin_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'editor.css';
	wp_register_style(
		'novablocks-hero-of-the-galaxy-block-editor',
		novablocks_get_plugin_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'style.css';
	wp_register_style(
		'novablocks-hero-of-the-galaxy-block',
		novablocks_get_plugin_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'novablocks/hero-of-the-galaxy', array(
		'render_callback' => 'novablocks_hero_of_the_galaxy_render',
		'editor_script'   => 'novablocks-hero-of-the-galaxy-block-editor',
		'editor_style'    => 'novablocks-hero-of-the-galaxy-block-editor',
		'style'           => 'novablocks-hero-of-the-galaxy-block',
	) );
}
add_action( 'init', 'novablocks_hero_of_the_galaxy_block_init' );

/**
 * Handle the Hero block server logic.
 */
function novablocks_hero_of_the_galaxy_render( $attributes, $content ) {

	$settings = apply_filters( 'novablocks_hero_of_the_galaxy_settings', array() );
	$attributes = $settings['attributes'];

	$classes = array_merge(
		array( 'novablocks-hero', 'alignfull' ),
		novablocks_get_block_extra_classes( $attributes )
	);

	if ( ! empty( $attributes['className'] ) ) {
		$classes[] = $attributes['className'];
	}

	if ( ! empty( $attributes['scrollingEffect'] ) ) {
		$classes[] = 'scrolling-effect-' . $attributes['scrollingEffect'];
	}

	if ( empty( $attributes['media'] || ! is_array( $attributes['media'] ) ) ) {
		$media = [];
	} else {
		$media = $attributes['media'];
	}

	// Make sure the media defaults are in place.
	$media_args = array(
		'type' => '',
		'url' => '',
		'sizes' => array()
	);
	$media = wp_parse_args( $media, $media_args );

	$heroStyle = '--novablocks-hero-text-color: ' . $attributes['contentColor'] . ';';
	$contentStyle = '';
	$foregroundStyle = '';
	$mediaStyle = novablocks_get_focal_point_style( $attributes['focalPoint'] );

	if ( ! empty( $attributes['contentWidth'] ) && $attributes['contentWidth'] === 'custom' ) {
		$contentStyle .= 'max-width: ' . floatval( $attributes['contentWidthCustom'] ) . '%';
	}

	if ( ! empty( $attributes['contentColor'] ) && $attributes['contentColor'] !== '#FFF' ) {
		$contentStyle .= '--theme-dark-primary: #FFF';
	}

	$minHeight = floatval( $attributes['minHeightFallback'] );
	$heroHeight = $minHeight;

	if ( 'doppler' === $attributes['scrollingEffect'] ) {
		$heroHeight = 2 * $minHeight;
	}

	$heroStyle .= 'min-height: calc(' . $heroHeight . '* var(--novablocks-1vh, 1vh)); ';
	$foregroundStyle .= 'min-height: calc(100 * var(--novablocks-1vh, 1vh)); ';

	if ( ! empty( $attributes['overlayFilterStyle'] ) && $attributes['overlayFilterStyle'] !== 'none' ) {
		$mediaStyle .= 'opacity: ' . ( 1 - floatval( $attributes['overlayFilterStrength'] ) / 100 ) . '; ';
	}

	$scrollIndicator = ! empty( $attributes['scrollIndicatorBlock'] );

	$scrollIndicatorClasses = array( 'novablocks-hero__indicator' );

	if ( $heroHeight > 100 ) {
		$scrollIndicatorClasses[] = 'novablocks-hero__indicator--middle';
	}

	$scrollIndicatorClass = join( ' ', $scrollIndicatorClasses );

	ob_start();

	do_action( 'novablocks_hero:before' );

	$id = '';
	if ( ! empty( $attributes['anchor'] ) ) {
		$id = 'id="' . $attributes['anchor'] . '"';
	} ?>

	<div <?php

	echo $id;
	echo "data-scrolling-effect='" . $attributes['scrollingEffect'] . "' ";
	echo "data-focal-point='" . json_encode( $attributes['focalPoint'] ) . "' ";
	echo "data-final-focal-point='" . json_encode( $attributes['finalFocalPoint'] ) . "' ";
	echo 'data-initial-background-scale="' . $attributes['initialBackgroundScale'] . '"';
	echo 'data-final-background-scale="' . $attributes['finalBackgroundScale'] . '" ';
	echo 'data-smooth-start="' . $attributes['followThroughStart'] . '" ';
	echo 'data-smooth-end="' . $attributes['followThroughEnd'] . '" ';

	?>
		class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
		style="<?php echo esc_attr( $heroStyle ); ?>"
	>

		<?php do_action( 'novablocks_hero:after_opening_tag', $attributes ); ?>

		<div class="novablocks-mask">
			<?php if ( $media['type'] === 'image' && ! empty( $media['sizes']['full']['url'] ) ) { ?>
				<img class="novablocks-parallax"
				     src="<?php echo esc_url( $media['sizes']['full']['url'] ); ?>"
				     style="<?php echo esc_attr( $mediaStyle ); ?>" />
			<?php }

			if ( $media['type'] === 'video' && ! empty( $media['url'] ) ) { ?>
				<video muted autoplay loop class="novablocks-parallax"
				       src="<?php echo esc_url( $media['url'] ); ?>"
				       style="<?php echo esc_attr( $mediaStyle ); ?>" />
			<?php } ?>
		</div>
		<div class="novablocks-hero__foreground novablocks-foreground novablocks-u-content-padding novablocks-u-content-align" style="<?php echo esc_attr( $foregroundStyle ); ?>">
			<div class="novablocks-hero__inner-container novablocks-u-content-width" style="<?php echo esc_attr( $contentStyle ); ?>">
				<?php echo $content ?>
			</div>
			<?php if ( $scrollIndicator ) { ?>
				<div class="<?php echo $scrollIndicatorClass; ?>">
					<?php echo $settings['scrollIndicatorMarkup']; ?>
				</div>
			<?php } ?>
		</div>

		<?php do_action( 'novablocks_hero:before_closing_tag', $attributes ) ?>

	</div>

	<?php do_action( 'novablocks_hero:after' );

	return ob_get_clean();
}

function novablocks_hero_of_the_galaxy_scripts() {
	wp_enqueue_script( 'novablocks-utils' );
}
add_action( 'enqueue_block_editor_assets', 'novablocks_hero_of_the_galaxy_scripts', 20 );
