<?php
/**
 * Compatibility with PHPUnit < 6.0.
 *
 * @package WP_Rig\Block_Areas
 * @license GNU General Public License v2 (or later)
 * @link    https://wordpress.org/plugins/block-areas
 */

if ( class_exists( 'PHPUnit_Framework_TestCase' ) && ! class_exists( 'PHPUnit\Framework\TestCase' ) ) {
	class_alias( 'PHPUnit_Framework_TestCase', 'PHPUnit\Framework\TestCase' );
	class_alias( 'PHPUnit_Framework_Exception', 'PHPUnit\Framework\Exception' );
	class_alias( 'PHPUnit_Framework_ExpectationFailedException', 'PHPUnit\Framework\ExpectationFailedException' );
	class_alias( 'PHPUnit_Framework_Error_Notice', 'PHPUnit\Framework\Error\Notice' );
	class_alias( 'PHPUnit_Framework_Error_Warning', 'PHPUnit\Framework\Error\Warning' );
	class_alias( 'PHPUnit_Framework_Test', 'PHPUnit\Framework\Test' );
	class_alias( 'PHPUnit_Framework_Warning', 'PHPUnit\Framework\Warning' );
	class_alias( 'PHPUnit_Framework_AssertionFailedError', 'PHPUnit\Framework\AssertionFailedError' );
	class_alias( 'PHPUnit_Framework_TestSuite', 'PHPUnit\Framework\TestSuite' );
	class_alias( 'PHPUnit_Framework_TestListener', 'PHPUnit\Framework\TestListener' );
	class_alias( 'PHPUnit_Util_GlobalState', 'PHPUnit\Util\GlobalState' );
	class_alias( 'PHPUnit_Util_Getopt', 'PHPUnit\Util\Getopt' );
	class_alias( 'PHPUnit_Util_Test', 'PHPUnit\Util\Test' );
}
