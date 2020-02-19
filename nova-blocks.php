<?php
/**
 * Plugin Name: Nova Blocks
 * Plugin URI: https://github.com/pixelgrade/nova-blocks/
 * Description: Nova Blocks is a collection of <strong>distinctive Gutenberg blocks</strong>, committed to making your site shine like a newborn star. It is taking a design-driven approach to help you made the right decisions and showcase your content in the best shape.
 * Version: 1.2.1
 * Author: Pixelgrade
 * Author URI: https://www.pixelgrade.com
 * Text Domain: __plugin_txtd
 * Tested up to: 5.3.2
 * Requires PHP: 5.4.0
 * License: GPLv2 or later
 *
 * Nova Blocks is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.
 *
 * You should have received a copy of the GNU General Public License
 * along with Nova Blocks. If not, see <http://www.gnu.org/licenses/gpl-2.0.html>.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once dirname( __FILE__ ) . '/lib/setup.php';

// @todo - forget about settings, theme support an attributes for a couple of moments
 require_once dirname( __FILE__ ) . '/lib/extras.php';
// require_once dirname( __FILE__ ) . '/lib/settings.php';

// @todo probably each block will take care of its assets and initialisation
// require_once dirname( __FILE__ ) . '/lib/enqueue-scripts.php';
// require_once dirname( __FILE__ ) . '/src/blocks/init.php';

require_once dirname( __FILE__ ) . '/lib/client-assets.php';

// load block areas functionality
require_once dirname( __FILE__ ) . '/lib/block-areas/block-areas.php';


require_once dirname( __FILE__ ) . '/packages/hero/init.php';


