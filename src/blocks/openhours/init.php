<?php
/**
 * Handle the OpenHours block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_openhours_block_init' ) ) {
	function novablocks_openhours_block_init() {
		register_block_type( 'novablocks/openhours', array(
			'attributes'      => novablocks_get_openhours_attributes(),
			'render_callback' => 'novablocks_render_openhours_block'
		) );
	}
}

add_action( 'init', 'novablocks_openhours_block_init');

if ( ! function_exists( 'novablocks_render_openhours_block' ) ) {
	function novablocks_render_openhours_block( $attributes, $content ) {
		$classes = array();

		$attributes_config = novablocks_get_openhours_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$classes[] = 'novablocks-openhours';

		ob_start(); ?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
			<p>


                <?php OpenHours_Content($attributes) ?>
			</p>
		</div>

		<?php return ob_get_clean();
	}
}

class OpenHours_Helper {

	private $current_day;

	/**
	 * A helper function that takes in a raw JSON of timeframes and returns an array of human readable schedule
	 */
	public function parse_open_hours_2( $hours, $hours_format = null, $closed_label = 'Closed', $use_short_days = false, $compress_hours = false, $hide_closed_days = false ) {
		$hours_json = json_decode( $hours, true );
		$schedule   = array();

		if ( ! isset( $hours_json['timeframes'] ) ) {
			return false;
		}

		// Short day name or long day name
		if ( $use_short_days ) {
			$day_format = 'D';
		} else {
			$day_format = 'l';
		}

		// Create the initial array containing all the days of the week
		if ( ! $compress_hours && ! $hide_closed_days ) {
			for ( $i = 1; $i <= 7; $i ++ ) {
				$dow              = date( $day_format, strtotime( "Sunday +{$i} days" ) );
				$schedule[ $dow ] = $closed_label;
			}
		}
		// Get the closed days
		$closed_days = $this->_get_closed_days( $hours_json['timeframes'], $day_format );

		// Loop through our timeframes and add time intervals to our days
		foreach ( $hours_json['timeframes'] as $timeframe ) {
			if ( $compress_hours ) {
				// if the compress_opening_hours option is true - return compressed array
				$compressed_days          = $this->_parse_consecutive_days( $timeframe, $day_format, $hours_format );
				$compressed_days_interval = array_values( $compressed_days );

				$schedule[ key( $compressed_days ) ] = $compressed_days_interval[0];
			} else {
				// Build the normal array schedule
				foreach ( $timeframe['days'] as $day ) {
					$start = $this->_parse_hours( preg_replace( '/^\+/', '', $timeframe['open'][0]['start'] ), $hours_format );
					$end   = $this->_parse_hours( preg_replace( '/^\+/', '', $timeframe['open'][0]['end'] ), $hours_format );


					$day_key = date( $day_format, strtotime( "Sunday +{$day} days" ) );
					// Add the open time interval
					switch ( $day ) {
						case 1:
							$schedule[ $day_key ] = $start . ' - ' . $end;
							break;
						case 2:
							$schedule[ $day_key ] = $start . ' - ' . $end;
							break;
						case 3:
							$schedule[ $day_key ] = $start . ' - ' . $end;
							break;
						case 4:
							$schedule[ $day_key ] = $start . ' - ' . $end;
							break;
						case 5:
							$schedule[ $day_key ] = $start . ' - ' . $end;
							break;
						case 6:
							$schedule[ $day_key ] = $start . ' - ' . $end;
							break;
						case 7:
							$schedule[ $day_key ] = $start . ' - ' . $end;
							break;
						default:
							break;
					}
				}
			}
		}

		// if compressed hours - add the closed days at the end
		if ( $compress_hours && ! empty( $closed_days ) && ! $hide_closed_days ) {
			$schedule[ key( $closed_days ) ] = $closed_label;
		}

		return $schedule;
	}

	/**
	 * @param $hour
	 * @param null $format
	 *
	 * @return false|string
	 */
	public function _parse_hours( $hour, $format = null ) {
		$timestamp = strtotime( $hour );
		$date      = gmdate( $format, $timestamp );

		return $date;
	}

	public function is_open() {
		$overview_option = get_option( 'open_hours_overview_setting' );

		if ( ! $overview_option ) {
			return false;
		}

		$parsed_option = json_decode( $overview_option, true );

		if ( ! isset( $parsed_option['timeframes'] ) ) {
			return false;
		}

		$today     = date( 'N', current_time( 'timestamp' ) );
		$yesterday = date( 'N', current_time( 'timestamp' ) - 24 * 3600 );
		$ct        = current_time( 'timestamp' );

		$month = date( 'F', current_time( 'timestamp' ) );
		$year  = date( 'Y', current_time( 'timestamp' ) );

		$today_full     = date( 'j', current_time( 'timestamp' ) ) . ' ' . $month . ' ' . $year;
		$yesterday_full = date( 'j', current_time( 'timestamp' ) - 24 * 3600 ) . ' ' . $month . ' ' . $year;

		if ( ! isset( $parsed_option['timeframes'] ) ) {
			//exit
			return false;
		}
		$this->current_day = $today;
		foreach ( $parsed_option['timeframes'] as $timeframe ) {
			$days          = $timeframe['days'];
			$open_interval = $timeframe['open'];

			if ( in_array( $today, $days ) ) {
				if ( isset( $open_interval[0] ) ) {
					$start = strtotime( $today_full . ' ' . preg_replace( '/^\+/', '', $open_interval[0]['start'] ) );
					$end   = strtotime( $today_full . ' ' . preg_replace( '/^\+/', '', $open_interval[0]['end'] ) );

					if ( $end <= $start ) {
						$end = strtotime( '+1 day', $end );
					}

					if ( ( $ct >= $start && $ct <= $end ) ) {
						// It's open
						return true;
					}
				}
			}

			// Check for prev day
			if ( in_array( $yesterday, $days ) ) {
				if ( isset( $open_interval[0] ) ) {
					$start = strtotime( $yesterday_full . ' ' . preg_replace( '/^\+/', '', $open_interval[0]['start'] ) );
					$end   = strtotime( $yesterday_full . ' ' . preg_replace( '/^\+/', '', $open_interval[0]['end'] ) );

					if ( $end < $start ) {
						$end = strtotime( '+1 day', $end );
					}

					if ( ( $ct >= $start && $ct <= $end ) ) {
						$this->current_day = $yesterday;

						// It's open
						return true;
					}
				}
			}
		}

		return false;
	}

	/**
	 * @param $schedule
	 * @param $day
	 *
	 * @return array|bool
	 *
	 * A helper function that receives the JSON formatted schedule and returns the open interval for a specific day
	 */
	function _get_interval( $schedule, $day ) {

		if ( ! isset( $schedule['timeframes'] ) ) {
			return false;
		}

		$interval = array();

		foreach ( $schedule['timeframes'] as $timeframe ) {
			if ( in_array( $day, $timeframe['days'] ) ) {
				$interval = $timeframe['open'];
			}
		}

		return $interval;
	}

	function _parse_consecutive_days( $timeframe, $day_format, $hours_format ) {
		$days = $timeframe['days'];
		$open = $timeframe['open'];

		$start    = $this->_parse_hours( preg_replace( '/^\+/', '', $open[0]['start'] ), $hours_format );
		$end      = $this->_parse_hours( preg_replace( '/^\+/', '', $open[0]['end'] ), $hours_format );
		$response = array();

		$consecutive_days     = array();
		$non_consecutive_days = array();

		for ( $i = 0; $i < count( $days ); $i ++ ) {
			if ( isset( $days[ $i + 1 ] ) && $days[ $i ] == $days[ $i + 1 ] - 1 ) {
				// consecutive
				array_push( $consecutive_days, $days[ $i ] );
			} elseif ( isset( $days[ $i - 1 ] ) && $days[ $i ] == $days[ $i - 1 ] + 1 ) {
				array_push( $consecutive_days, $days[ $i ] );
			} else {
				// not consecutive
				array_push( $non_consecutive_days, $days[ $i ] );
			}
		}

		if ( ! empty( $consecutive_days ) ) {
			$parsed_first_day = date( $day_format, strtotime( "Sunday +{$consecutive_days[0]} days" ) );
			$last_element     = array_values( array_slice( $consecutive_days, - 1 ) );

			$parsed_last_day = date( $day_format, strtotime( "Sunday +{$last_element[0]} days" ) );

			$response[ $parsed_first_day . ' - ' . $parsed_last_day ] = $start . ' - ' . $end;
		}

		if ( ! empty ( $non_consecutive_days ) ) {
			foreach ( $non_consecutive_days as $ncd ) {
				$parsed_day              = date( $day_format, strtotime( "Sunday +{$ncd} days" ) );
				$response[ $parsed_day ] = $start . ' - ' . $end;
			}

		}

		return $response;
	}

	/**
	 * Helper function that returns closed days
	 */
	function _get_closed_days( $timeframes, $day_format = 'l' ) {
		$present_days = array();
		$all_days     = array( 1, 2, 3, 4, 5, 6, 7 );
		$key          = '';

		foreach ( $timeframes as $timeframe ) {
			$present_days = array_merge( $present_days, $timeframe['days'] );
		}

		$closed_days = array_diff( $all_days, $present_days );

		if ( ! empty( $closed_days ) ) {
			$num_days = count( $closed_days );
			$i        = 0;

			foreach ( $closed_days as $closed_day ) {
				$parsed_day = date( $day_format, strtotime( "Sunday +{$closed_day} days" ) );
				if ( ++ $i !== $num_days ) {
					$key .= $parsed_day . ', ';
				} else {
					$key .= $parsed_day;
				}
			}
		}
		$response[ $key ] = 'closed';

		return $response;
	}

	/**
	 * Helper function that creates an array of timeframes
	 */
	function _get_open_days() {
		$overview_option = get_option( 'open_hours_overview_setting' );
		$schedule        = array();

		if ( ! $overview_option ) {
			return false;
		}

		$parsed_option = json_decode( $overview_option, true );

		if ( ! isset( $parsed_option['timeframes'] ) ) {
			return false;
		}

		foreach ( $parsed_option['timeframes'] as $timeframe ) {
			foreach ( $timeframe['days'] as $day ) {
				$schedule[ $day ] = $timeframe['open'][0];
			}
		}

		ksort( $schedule );

		return $schedule;
	}

	/**
	 * Convert the json of timeframes to a smarter array
	 */
	function _get_schedule_array() {
		$option         = get_option( 'open_hours_overview_setting' );
		$schedule_array = array();

		// if no option was found - return false
		if ( ! $option ) {
			return false;
		}

		$option = json_decode( $option, true );

		foreach ( $option['timeframes'] as $timeframe ) {
			// Parse through the days and add them to our schedule_array
			foreach ( $timeframe['days'] as $day ) {
				$schedule_array[ $day ] = array(
					'start' => $timeframe['open'][0]['start'],
					'end'   => $timeframe['open'][0]['end']
				);
			}
		}

		// SOrt the array keys - so they're always be in order
		ksort( $schedule_array, SORT_ASC );

		return $schedule_array;
	}

	/**
	 * @param $today
	 *
	 * @return bool|mixed
	 * Gets the next open day
	 */
	public function get_next_open_day( $today ) {
		$today    = (int) $today;
		$schedule = $this->_get_schedule_array();

		if ( $today === 7 ) {
			$next_day = 1;
		} else {
			$next_day = $today + 1;
		}

		if ( ! isset( $schedule[ $next_day ] ) ) {
			return $this->get_next_open_day( $next_day );
		}

		$next_open_day = array( $next_day => $schedule[ $next_day ] );

		return $next_open_day;
	}

	/**
	 * A function that returns the current day - in the context of today's schedule
	 * If the current time is between today's start and end time - it will return the current day
	 * If the current time is before today's start time - it will return yesterday
	 */

	public function get_current_day( $today ) {
		$now             = current_time( 'timestamp' );
		$current_day     = date( 'l', $now );
		$current_end_day = $current_day;
		$schedule        = $this->_get_schedule_array();
		$today           = (int) $today;

		if ( ! isset( $schedule[ $today ] ) ) {
			// dunno what to do here
			return $today;
		}

		if ( false !== strpos( $schedule[ $today ]['end'], '+' ) ) {
			$current_end_day = date( 'l', $now + 86400 );
		}

		$now            = strtotime( preg_replace( '/^\+/', '', 'last ' . $current_day . ' ' . date( 'Hs', $now ) ) );
		$today_start    = strtotime( preg_replace( '/^\+/', '', 'last ' . $current_day . ' ' . $schedule[ $today ]['start'] ) );
		$today_end_time = strtotime( preg_replace( '/^\+/', '', 'last ' . $current_end_day . ' ' . $schedule[ $today ]['end'] ) );


		if ( $now > $today_end_time ) {
			return $today;
		}

		if ( $now < $today_start ) {
			$today = $today - 1;
		}

		if ( $today === 0 ) {
			$today = 7;
		}

		return $today;
	}
}

function OpenHours_Content($attributes) {

	$helper = new OpenHours_Helper();
    $hours = $attributes['parsedText'];

    if ( ! empty($attributes['UseShortName']) && $attributes['UseShortName'] === true ) {
	    $use_short_days = true;
    } else {
	    $use_short_days = false;
    }

	if ( ! empty($attributes['compressOpeningHours']) && $attributes['compressOpeningHours'] === true ) {
		$compress_hours = true;
	} else {
		$compress_hours = false;
	}

	if ( ! empty($attributes['HideClosedDays']) && $attributes['HideClosedDays'] === true ) {
		$hide_closed_days = true;
	} else {
		$hide_closed_days = false;
	}

	$schedule = $helper->parse_open_hours_2( $hours, $attributes['timeFormat'], $attributes['closedLabel'], $use_short_days, $compress_hours, $hide_closed_days );

	if ( $schedule) { ?>

        <table class="open_overview_widget-schedule">
            <?php
            foreach ( $schedule as $day => $hours ) {
            ?>
            <tr>
                <td>
                    <div><?php echo $day; ?></div>
                </td>
                <?php
                if ( $hours === $attributes['closed_label'] ) {
                    ?>
                    <td>
                        <div class="open-hours-closed"><?php echo $hours; ?></div>
                    </td>
                    <?php
                } else {
                    ?>
                    <td>
                        <div><?php echo $hours; ?></div>
                    </td>
                    <?php
                }
                }
                ?>
            </tr>
        </table>
		<?php
	} else {
		?><p><?php echo __('You haven\'t setup a schedule yet.', 'open_hours')?></p><?php
    }
}
