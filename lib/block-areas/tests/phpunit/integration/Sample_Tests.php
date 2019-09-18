<?php
/**
 * Class WP_Rig\Block_Areas\Tests\PHPUnit\Integration\Sample_Tests
 *
 * @package WP_Rig\Block_Areas
 * @license GNU General Public License v2 (or later)
 * @link    https://wordpress.org/plugins/block-areas
 */

namespace WP_Rig\Block_Areas\Tests\PHPUnit\Integration;

use WP_Rig\Block_Areas\Tests\PHPUnit\Framework\Integration_Test_Case;

/**
 * Class containing a sample test.
 */
class Sample_Tests extends Integration_Test_Case {

	/**
	 * Performs a sample test.
	 */
	public function testNothingUseful() {
		$this->assertTrue( defined( 'ABSPATH' ) );
	}
}
