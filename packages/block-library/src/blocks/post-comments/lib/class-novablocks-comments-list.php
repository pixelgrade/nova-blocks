<?php
/**
 * NovaBlocks_Comments_List Class
 *
 * @author   Pixelgrade
 * @package  NovaBlocks
 * @since    1.8.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'NovaBlocks_Comments_List' ) ) {

	/**
	 * The NovaBlocks Comments List rendering class
	 */
	class NovaBlocks_Comments_List {

		/**
		 * Instance of this class (the singleton pattern).
		 * @since    1.8.0
		 * @var      NovaBlocks_Comments_List
		 */
		protected static $_instance = null;


		public function __construct() {
			// Maybe do some checks before initializing the logic.
			$this->init();
		}

		/**
		 * Initialize the logic.
		 */
		private function init() {

			/*
			 * Register all needed hooks.
			 */
			$this->register_hooks();
		}

		private function register_hooks() {

		}

		/**
		 * Entry point to render the comments list with the block-given attributes, content, and context.
		 *
		 * @param WP_Post|int|null $post
		 * @param array $attributes
		 * @param string $content
		 * @param WP_Block $block
		 *
		 * @return string
		 */
		public function render( $post = null, $attributes = [], $content = '', $block = null ) {
			$post = get_post( $post );
			// Render nothing without a proper post.
			if ( empty( $post ) ) {
				return '';
			}

			$list_attributes = $this->parse_block_attributes( $attributes );

			$comments_query_args = $this->comments_query_args( $post, $list_attributes );

			$comment_query = new WP_Comment_Query( $comments_query_args );

			$page = (int) get_query_var( 'cpage' );
			if ( empty( $page ) ) {
				$page = 1;
			}

			$comments = $this->prepare_comments_from_query( $comment_query, $comments_query_args );

			$comment_count         = count( $comments );
			$max_num_comment_pages = $comment_query->max_num_pages;

			if ( '' == get_query_var( 'cpage' ) && $max_num_comment_pages > 1 ) {
				set_query_var( 'cpage', 'newest' === $list_attributes['defaultCommentsPage'] ? $max_num_comment_pages : 1 );
			}

			// Allow others to change this.
			$comments_list_args = apply_filters( 'novablocks_comments_list_args', [
				'walker'                       => new NovaBlocks_Walker_Comment(),
				'max_depth'                    => $list_attributes['maxThreadDepth'],
				'reverse_top_level'            => $list_attributes['reverseTopLevelCommentsOrder'],
				'avatar_size'                  => $list_attributes['displayAvatarSize'],
				'moderation_message'           => $list_attributes['moderationMessage'],
				'style'                        => 'div',
				'short_ping'                   => true,
				// Since we do the proper query above, we don't want the walker to do it once again.
				// We just want all the passed comments displayed.
				'page'                         => 0,
				'per_page'                     => 0,
				// We will pass cpage so that functions like get_comment_link() will function properly without relying on get_query_var().
				'cpage'                        => $page,

				// Extra args of our own. These will also be passed along to the walker.
				'display_commenter_background' => $list_attributes['displayCommenterBackground'],
			], $post->ID, $list_attributes, $comments );

			$this->localize_comments_list_args( $comments_list_args );

			// We will not output anything if there are no comments.
			if ( empty( $comments ) ) {
				return '';
			}

			/* ===============================
			 * RENDER THE COMMENTS LIST MARKUP
			 */

			ob_start();

			echo NovaBlocks_Comments_Render::generate_fake_form_markup();
			?>

			<div id="comments" class="comment-list">

				<?php wp_list_comments( $comments_list_args, $comments ); ?>

			</div><!-- #comments.comment-list -->

			<?php
			$comment_pagination = paginate_comments_links( [
				'echo'      => false,
				'total'     => $max_num_comment_pages,
				'current'   => $page,
				'end_size'  => 0,
				'mid_size'  => 0,
				'next_text' => esc_html__( 'Newer Conversations', '__plugin_txtd' ) . ' <span aria-hidden="true">&rarr;</span>',
				'prev_text' => '<span aria-hidden="true">&larr;</span> ' . esc_html__( 'Older Conversations', '__plugin_txtd' ),
				'type'      => 'list',
			] );

			if ( $comment_pagination ) {
				$pagination_classes = '';

				// If we're only showing the "Next" link, add a class indicating so.
				if ( false === strpos( $comment_pagination, 'prev page-numbers' ) ) {
					$pagination_classes = ' only-next';
				} ?>

				<nav class="comments-pagination pagination<?php echo $pagination_classes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static output ?>" aria-label="<?php esc_attr_e( 'Comments', '__plugin_txtd' ); ?>">
					<?php echo wp_kses_post( $comment_pagination ); ?>
				</nav>

				<?php
			}

			// Add another form at the bottom when we have a certain number of comments.
			if ( comments_open( $post->ID )
			     && ! empty( $list_attributes['scrollRelocateCommentFormAfterNumComments'] )
			     && $comment_count >= absint( $list_attributes['scrollRelocateCommentFormAfterNumComments'] ) ) {

				echo NovaBlocks_Comments_Render::generate_fake_form_markup();
			}

			if ( ! comments_open( $post->ID ) ) { ?>
				<p class="comments-closed"><?php echo $list_attributes['commentsClosedMessage']; ?></p>
			<?php }

			return ob_get_clean();
		}

		protected function parse_block_attributes( $attributes ) {
			// Handle the block attributes by merging them with the defaults.
			$attributes = wp_parse_args( $attributes, [
				'threadComments' => get_option( 'thread_comments' ) ? 'threaded' : false,
				'maxThreadDepth' => get_option( 'thread_comments' ) ? get_option( 'thread_comments_depth' ) : -1,

				'reverseTopLevelCommentsOrder' => ( 'desc' === get_option( 'comment_order' ) ), // True to display the newest comments first.

				'pageComments' => get_option( 'page_comments' ),
				'commentsPerPage' => (int) get_option( 'comments_per_page' ),
				'defaultCommentsPage' => get_option( 'default_comments_page' ), // 'oldest', 'newest'

				'displayCommenterBackground' => true,
				'displayAvatarSize' => 100, // Double the actual size for high dpi displays.

				// The message to use in the comments list when a comment is not approved.
				'moderationMessage' => '', // Fallback to core's default.
				'commentsClosedMessage' => esc_html__( 'No further conversations or replies allowed, at this time.', '__plugin_txtd' ),

				// If this is 0 or false, no relocation will take place.
				'scrollRelocateCommentFormAfterNumComments' => 7,

				// In minutes. How long should the commenter see his unapproved comment. 0 for no preview.
				// This is also the time the commenter is allowed to amend its comment.
				'commentPreviewTime' => 5,

			] );

			if ( is_user_logged_in() ) {
				// If the current user is capable of moderating comments, we will change the moderation message.
				if ( current_user_can( 'moderate_comments' ) && current_user_can( 'edit_posts' ) ) {
					/* translators: Moderation message shown only to moderators.  */
					$attributes['moderationMessage'] = esc_html__( '⚠️ This comment is waiting for your moderation. ⚠️', '__plugin_txtd' );
				}
			}

			return $attributes;
		}

		/**
		 * @param WP_Post $post
		 * @param array $list_attributes
		 *
		 * @return array
		 */
		protected function comments_query_args( $post, $list_attributes ) {
			/**
			 * Code taken from @see comments_template() to allow for uniform behavior.
			 */
			$comment_args = [
				'orderby'                   => 'comment_date_gmt',
				'order'                     => 'ASC',
				'status'                    => 'approve',
				'post_id'                   => $post->ID,
				'hierarchical'              => $list_attributes['threadComments'],
				'no_found_rows'             => false,
				'update_comment_meta_cache' => false, // We lazy-load comment meta for performance.
			];

			if ( is_user_logged_in() ) {
				$comment_args['include_unapproved'] = [ get_current_user_id() ];

				// If the current user is capable of moderating comments, we will show all comments.
				if ( current_user_can( 'moderate_comments' ) && current_user_can( 'edit_posts' ) ) {
					$comment_args['status'] = 'all';

					// No need for this since we include all.
					unset( $comment_args['include_unapproved'] );
				}
			} else {
				/**
				 * Code taken from @see wp_get_unapproved_comment_author_email()
				 * We want to control the time the user gets to see it's own comment, since the core restricts it to 1 minute.
				 */
				$unapproved_email = '';

				if ( ! empty( $_GET['unapproved'] ) && ! empty( $_GET['moderation-hash'] ) ) {
					$comment_id = (int) $_GET['unapproved'];
					$comment    = get_comment( $comment_id );

					if ( $comment && hash_equals( $_GET['moderation-hash'], wp_hash( $comment->comment_date_gmt ) ) ) {
						/**
						 * Filters the period of time the comment will be viewable to the comment author.
						 *
						 * @param int The time in minutes the comment should be visible to the author.
						 * @param WP_Comment $comment
						 */
						$comment_preview_time = apply_filters( 'novablocks_comments_list_preview_time', $list_attributes['commentPreviewTime'], $comment );
						$comment_preview_expires = strtotime( $comment->comment_date_gmt . '+' . absint( $comment_preview_time ) . ' minute' );

						if ( time() < $comment_preview_expires ) {
							$unapproved_email = $comment->comment_author_email;
						}
					}
				}

				if ( ! $unapproved_email ) {
					$commenter       = wp_get_current_commenter();
					$unapproved_email = $commenter['comment_author_email'];
				}

				if ( $unapproved_email ) {
					$comment_args['include_unapproved'] = [ $unapproved_email ];
				}
			}

			$page = (int) get_query_var( 'cpage' );
			if ( $list_attributes['pageComments'] ) {
				$per_page = (int) get_query_var( 'comments_per_page' );
				if ( 0 === $per_page ) {
					$per_page = $list_attributes['commentsPerPage'];
				}

				$comment_args['number'] = $per_page;

				if ( $page ) {
					$comment_args['offset'] = ( $page - 1 ) * $per_page;
				} elseif ( 'oldest' === $list_attributes['defaultCommentsPage'] ) {
					$comment_args['offset'] = 0;
				} else {
					// If fetching the first page of 'newest', we need a top-level comment count.
					$top_level_query = new WP_Comment_Query();
					$top_level_args  = [
						'count'   => true,
						'orderby' => false,
						'post_id' => $post->ID,
						'status'  => 'approve',
					];

					if ( $comment_args['hierarchical'] ) {
						$top_level_args['parent'] = 0;
					}

					if ( isset( $comment_args['include_unapproved'] ) ) {
						$top_level_args['include_unapproved'] = $comment_args['include_unapproved'];
					}

					$top_level_count = $top_level_query->query( $top_level_args );

					$comment_args['offset'] = ( ceil( $top_level_count / $per_page ) - 1 ) * $per_page;
				}
			}

			/**
			 * Filters the arguments used to query comments in @see comments_template().
			 *
			 * @see WP_Comment_Query::__construct()
			 *
			 * @param array $comment_args {
			 *     Array of WP_Comment_Query arguments.
			 *
			 *     @type string|array $orderby                   Field(s) to order by.
			 *     @type string       $order                     Order of results. Accepts 'ASC' or 'DESC'.
			 *     @type string       $status                    Comment status.
			 *     @type array        $include_unapproved        Array of IDs or email addresses whose unapproved comments
			 *                                                   will be included in results.
			 *     @type int          $post_id                   ID of the post.
			 *     @type bool         $no_found_rows             Whether to refrain from querying for found rows.
			 *     @type bool         $update_comment_meta_cache Whether to prime cache for comment meta.
			 *     @type bool|string  $hierarchical              Whether to query for comments hierarchically.
			 *     @type int          $offset                    Comment offset.
			 *     @type int          $number                    Number of comments to fetch.
			 * }
			 */
			$comment_args  = apply_filters( 'comments_template_query_args', $comment_args );
			$comment_args  = apply_filters( 'novablocks_comments_list_query_args', $comment_args );

			return $comment_args;
		}

		/**
		 * @param WP_Comment_Query $comment_query
		 * @param array $comments_query_args
		 *
		 * @return []
		 */
		protected function prepare_comments_from_query( $comment_query, $comments_query_args ) {
			$_comments     = $comment_query->comments;

			// Trees must be flattened before they're passed to the walker.
			if ( $comments_query_args['hierarchical'] ) {
				$comments_flat = [];
				foreach ( $_comments as $_comment ) {
					$comments_flat[]  = $_comment;
					$comment_children = $_comment->get_children(
						[
							'format'  => 'flat',
							'status'  => $comments_query_args['status'],
							'orderby' => $comments_query_args['orderby'],
						]
					);

					foreach ( $comment_children as $comment_child ) {
						$comments_flat[] = $comment_child;
					}
				}
			} else {
				$comments_flat = $_comments;
			}

			/**
			 * Filters the comments array.
			 *
			 * @param WP_Comment[] $comments Array of comments to be rendered.
			 * @param int          $post_ID  Post ID.
			 */
			return apply_filters( 'comments_array', $comments_flat, $comments_query_args['post_id'] );
		}

		/**
		 * Add the comments list args to the localized comments JS global variable so the client-side logic can make use of them.
		 *
		 * We rely on the fact that the comments frontend script will be enqueued in the page footer, not the header.
		 *
		 * @param array $args
		 *
		 * @return bool
		 */
		protected function localize_comments_list_args( $args ) {

			// We don't want the walker instance in the localized data.
			if ( isset( $args['walker'] ) ) {
				unset( $args['walker'] );
			}

			/**
			 * The frontend script is registered in @see novablocks_register_packages_scripts()
			 */
			return wp_add_inline_script( 'novablocks/post-comments/frontend',
				novablocks_get_localize_to_window_script( 'nb_comments',
					[
						'ajaxUrl' => admin_url( 'admin-ajax.php' ), // @todo This should be set in a more general place.
						'actions' => [
							'toggleHighlight' => 'toggle_highlight_comment',
						],
						'commentsListArgs' => $args,
					]
				), 'before'
			);
		}

		/**
		 * Main NovaBlocks_Comments_List Instance
		 *
		 * Ensures only one instance of NovaBlocks_Comments_List is loaded or can be loaded.
		 *
		 * @since  1.8.0
		 * @static
		 *
		 * @see    NovaBlocks_Comments_List()
		 * @return NovaBlocks_Comments_List Main NovaBlocks_Comments_List instance
		 */
		public static function instance( ) {
			// If the single instance hasn't been set, set it now.
			if ( is_null( self::$_instance ) ) {
				self::$_instance = new self();
			}

			return self::$_instance;
		}

		/**
		 * Cloning is forbidden.
		 *
		 * @since 1.8.0
		 */
		public function __clone() {

			_doing_it_wrong( __FUNCTION__, esc_html__( 'You should not do that!', '__plugin_txtd' ), null );
		}

		/**
		 * Unserializing instances of this class is forbidden.
		 *
		 * @since 1.8.0
		 */
		public function __wakeup() {

			_doing_it_wrong( __FUNCTION__, esc_html__( 'You should not do that!', '__plugin_txtd' ), null );
		}
	}
}
