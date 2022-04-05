<?php
/**
 * This is a utility class that groups all our array related helper functions.
 *
 * @since   2.0.0
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

namespace Pixelgrade\NovaBlocks\Utils;

/**
 * Array Helper class.
 *
 * @since   2.0.0
 * @package Style Manager
 */
class ArrayHelpers {
	/**
	 * Insert a value or key/value pair before a specific key in an array.  If key doesn't exist, value is prepended
	 * at the beginning of the array.
	 *
	 * @param array  $array
	 * @param string $key
	 * @param mixed  $insert
	 *
	 * @return array
	 */
	public static function insertBeforeKey( $array,  $key, $insert ) {
		$keys  = array_keys( $array );
		$index = array_search( $key, $keys );
		$pos   = ( ( false === $index ) ? 0 : $index );
		if ( ! is_array( $insert ) ) {
			$insert = [ $insert ];
		}

		return array_merge( array_slice( $array, 0, $pos ), $insert, array_slice( $array, $pos ) );
	}

	/**
	 * Insert a value (array included) or key/value pair after a specific key in an array.  If key doesn't exist, value is appended
	 * to the end of the array.
	 *
	 * @param array  $array
	 * @param string $key
	 * @param mixed  $insert
	 *
	 * @return array
	 */
	public static function insertAfterKey( $array, $key, $insert ) {
		$keys  = array_keys( $array );
		$index = array_search( $key, $keys );
		$pos   = ( ( false === $index ) ? count( $array ) : $index + 1 );
		if ( ! is_array( $insert ) ) {
			$insert = [ $insert ];
		}

		return array_merge( array_slice( $array, 0, $pos ), $insert, array_slice( $array, $pos ) );
	}

	/**
	 * Find a subarray that has the desired key=>value. We will only go one level deep.
	 *
	 * For example, given the following array:
	 * array( array( 'two' => 'value1' ), array( 'two' => 'value2' ) )
	 * you can search for the key of the subarray containing the 'two' key with the 'value2', that is 1
	 *
	 * @param array  $array The array in which to search
	 * @param string $key   The key to search for
	 * @param mixed  $value The value to search for
	 *
	 * @return mixed|false
	 */
	public static function findSubarrayByKeyValue( $array, $key, $value ) {
		// Bail if it's not array
		if ( ! is_array( $array ) ) {
			return false;
		}

		foreach ( $array as $k => $v ) {
			if ( isset( $v[ $key ] ) && $value == $v[ $key ] ) {
				return $k;
			}
		}

		return false;
	}

	/**
	 * Search an array of objects for a certain property value and return the index where it was found.
	 *
	 * @param array  $array
	 * @param string $property
	 * @param mixed  $value
	 *
	 * @return int|string|false
	 */
	public static function objArraySearch( $array, $property, $value ) {
		foreach ( $array as $key => $array_inf ) {
			if ( property_exists( $array_inf, $property ) && $array_inf->{$property} == $value ) {
				return $key;
			}
		}

		return false;
	}

	/**
	 * Get the difference between two associative arrays, recursively.
	 *
	 * @link http://be2.php.net/manual/en/function.array-diff-assoc.php#114297
	 *
	 * @param array $array1
	 * @param array $array2
	 *
	 * @return bool|array
	 */
	public static function arrayDiffAssocRecursive( $array1, $array2 ) {
		foreach ( $array1 as $key => $value ) {
			if ( is_array( $value ) ) {
				if ( ! isset( $array2[ $key ] ) ) {
					$difference[ $key ] = $value;
				} elseif ( ! is_array( $array2[ $key ] ) ) {
					$difference[ $key ] = $value;
				} else {
					$new_diff = self::arrayDiffAssocRecursive( $value, $array2[ $key ] );
					if ( false !== $new_diff ) {
						$difference[ $key ] = $new_diff;
					}
				}
			} elseif ( ! array_key_exists( $key, $array2 ) || $array2[ $key ] != $value ) {
				$difference[ $key ] = $value;
			}
		}

		return ! isset( $difference ) ? false : $difference;
	}

	/**
	 * Searches for an array entry that partially matches the needle and returns the first found key
	 *
	 * @param string $needle
	 * @param array  $haystack
	 *
	 * @return bool|int|string The first key whose value matched the partial needle. False on failure or invalid input.
	 */
	public static function strArraySearch( $needle, $haystack ) {
		if ( empty( $haystack ) ) {
			return false;
		}

		if ( ! is_array( $haystack ) ) {
			return false;
		}

		foreach ( $haystack as $key => $value ) {
			if ( ! is_string( $value ) ) {
				return false;
			}

			if ( false !== strpos( $value, $needle ) ) {
				return $key;
			}
		}

		return false;
	}

	/**
	 * Searches in reverse order for an array entry that partially matches the needle and returns the first found key
	 *
	 * @param string $needle
	 * @param array  $haystack
	 *
	 * @return bool|int|string The first key whose value matched the partial needle. False on failure or invalid input.
	 */
	public static function strrArraySearch( $needle, $haystack ) {
		if ( empty( $haystack ) ) {
			return false;
		}

		if ( ! is_array( $haystack ) ) {
			return false;
		}

		$haystack = array_reverse( $haystack, true );

		foreach ( $haystack as $key => $value ) {
			if ( ! is_string( $value ) ) {
				return false;
			}

			if ( false !== strpos( $value, $needle ) ) {
				return $key;
			}
		}

		return false;
	}

	/**
	 * Detaches a specified item from an array and returns that item.
	 *
	 * @param array $array The array from which you want to detach an item (by reference).
	 * @param mixed $key   The key to detach and return.
	 *
	 * @return mixed|false Returns the key that was detached, or false if no key was found.
	 */
	public static function detach( &$array, $key ) {
		if ( ! array_key_exists( $key, $array ) ) {
			return false;
		}
		$value = $array[ $key ];
		unset( $array[ $key ] );

		return $value;
	}

	/**
	 * Detaches a specified item from an array by value and returns that item.
	 *
	 * @param array $array The array from which you want to detach an item (by reference).
	 * @param mixed $value The value to find, detach, and return.
	 *
	 * @return mixed|false
	 */
	public static function detach_by_value( &$array, $value ) {
		$key = array_search( $value, $array );
		if ( ! $key ) {
			return false;
		}

		return self::detach( $array, $key );
	}

	/**
	 * Moves an item from one position in an array to another position in the array.
	 *
	 * @param array $array
	 * @param       $old_index
	 * @param       $new_index
	 *
	 * @return array
	 */
	public static function reorder( $array, $old_index, $new_index ) {
		array_splice(
			$array,
			$new_index,
			count( $array ),
			array_merge(
				array_splice( $array, $old_index, 1 ),
				array_slice( $array, $new_index, count( $array ) )
			)
		);

		return $array;
	}

	/**
	 * Merge arrays recursively and distinct
	 *
	 * Merges any number of arrays / parameters recursively, replacing
	 * entries with string keys with values from latter arrays.
	 * If the entry or the next value to be assigned is an array, then it
	 * automagically treats both arguments as an array.
	 * Numeric entries are appended, not replaced, but only if they are
	 * unique
	 *
	 * @link   http://www.php.net/manual/en/function.array-merge-recursive.php#96201
	 *
	 * @param array ...     Variable list of arrays to recursively merge.
	 *
	 * @param array $base Initial array to merge.
	 *
	 * @return array
	 *
	 * @author Mark Roduner <mark.roduner@gmail.com>
	 */
	public static function array_merge_recursive_distinct() {
		$arrays = func_get_args();
		$base   = array_shift( $arrays );
		if ( ! is_array( $base ) ) {
			$base = empty( $base ) ? [] : [ $base ];
		}
		foreach ( $arrays as $append ) {
			if ( ! is_array( $append ) ) {
				$append = [ $append ];
			}
			foreach ( $append as $key => $value ) {
				if ( ! array_key_exists( $key, $base ) && ! is_numeric( $key ) ) {
					$base[ $key ] = $append[ $key ];
					continue;
				}
				if ( is_array( $value ) || ( array_key_exists( $key, $base ) && is_array( $base[ $key ] ) ) ) {
					if ( ! isset( $base[ $key ] ) ) {
						$base[ $key ] = [];
					}
					$base[ $key ] = self::array_merge_recursive_distinct( $base[ $key ], $append[ $key ] );
				} else if ( is_numeric( $key ) ) {
					if ( ! in_array( $value, $base ) ) {
						$base[] = $value;
					}
				} else {
					$base[ $key ] = $value;
				}
			}
		}

		return $base;
	}

	/**
	 * Orders an associative array by several keys values, each with its own order.
	 *
	 * See array_multisort() for flags.
	 *
	 * Taken from here: http://docs.php.net/manual/en/function.array-multisort.php#100534
	 *
	 * @return array
	 */
	public static function array_orderby() {
		$args = func_get_args();
		$data = array_shift( $args );
		foreach ( $args as $n => $field ) {
			if ( is_string( $field ) ) {
				$tmp = [];
				foreach ( $data as $key => $row ) {
					$tmp[ $key ] = $row[ $field ];
				}
				$args[ $n ] = $tmp;
			}
		}
		$args[] = &$data;
		call_user_func_array( 'array_multisort', $args );

		return array_pop( $args );
	}
}
