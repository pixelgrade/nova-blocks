<?php
/**
 * NovaBlocks_Comments_List Class
 *
 * @since    1.8.0
 * @package  NovaBlocks
 * @author   Pixelgrade
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
		 * The post to render comments list for.
		 *
		 * @var WP_Post|null
		 */
		protected $post = null;

		/**
		 * The arguments to consider when rendering.
		 *
		 * These configure and adapt the behavior.
		 *
		 * @var array
		 */
		protected $args = [];

		/**
		 * @var WP_Comment_Query|null
		 */
		protected $query = null;
		/**
		 * @var array|null
		 */
		protected $query_args = null;

		/**
		 * @var WP_Comment[]|null
		 */
		protected $comments = null;

		/**
		 * Instantiate a comments list renderer.
		 *
		 * @param WP_Post|int|null $post Optional. The post whose comments to render. Defaults to the current post.
		 * @param array            $args Optional. The arguments to consider when rendering.
		 */
		public function __construct( $post = null, array $args = [] ) {
			$this->post = get_post( $post, OBJECT );

			// Make sure defaults are in place.
			$this->args = wp_parse_args( $args, [
				'threadComments'               => get_option( 'thread_comments' ) ? 'threaded' : false,
				'maxThreadDepth'               => get_option( 'thread_comments' ) ? get_option( 'thread_comments_depth' ) : - 1,

				// True to display the newest comments first.
				'reverseTopLevelCommentsOrder' => ( 'desc' === get_option( 'comment_order' ) ),

				'pageComments'        => get_option( 'page_comments' ),
				'commentsPerPage'     => (int) get_option( 'comments_per_page' ),
				// 'oldest', 'newest'
				'defaultCommentsPage' => get_option( 'default_comments_page' ),

				'displayCommenterBackground' => true,
				// Double the actual size for high dpi displays. Set to zero (0) for no avatars.
				'avatarSize'                 => 96,

				// The message to use in the comments list when a comment is not approved.
				'moderationMessage'          => '',

				// The text to use for reply links for each comment.
				'replyText'                  => esc_html__( 'Reply', '__plugin_txtd' ),
				// The text to use for explaining who is one replying to (via reply headings or submit buttons).
				/* translators: Comment reply button text. %s: Comment author name. */
				'replyToText'                => esc_html__( 'Reply to %s', '__plugin_txtd' ),
			] );

			if ( is_user_logged_in() ) {
				// If the current user is capable of moderating comments, we will change the moderation message.
				if ( current_user_can( 'moderate_comments' ) && current_user_can( 'edit_posts' ) ) {
					/* translators: Moderation message shown only to moderators.  */
					$this->args['moderationMessage'] = esc_html__( '⚠️ This comment is waiting for your moderation. ⚠️', '__plugin_txtd' );
				}
			}

			$this->init();
		}

		/**
		 * Initialize the logic.
		 */
		private function init() {

			// Load our custom comment walker.
			require_once 'class-novablocks-walker-comment.php';

			// Setup the comments query and resulting comments list.
			$this->query_args = $this->comments_query_args();
			$this->query      = new WP_Comment_Query( $this->query_args );
			$this->comments   = $this->get_comments_from_query( $this->query, $this->query_args );
		}

		/**
		 * Entry point to render the comments list.
		 *
		 * @param array $args Optional. Custom arguments to overwrite the ones used to initialize the instance.
		 *
		 * @return string
		 */
		public function render( array $args = [] ): string {
			// Render nothing without a proper post.
			if ( empty( $this->post ) ) {
				return '';
			}

			$comments = $this->get_comments();

			$list_args = $this->parse_args( $args );

			$page = (int) get_query_var( 'cpage' );
			if ( empty( $page ) ) {
				$page = 1;
			}

			if ( '' == get_query_var( 'cpage' ) && $this->query->max_num_pages > 1 ) {
				set_query_var( 'cpage', 'newest' === $list_args['defaultCommentsPage'] ? $this->query->max_num_pages : 1 );
			}

			// Allow others to change this.
			$wp_list_comments_args = apply_filters( 'novablocks/comments/wp_list_comments_args', [
				'walker'                       => new NovaBlocks_Walker_Comment(),
				'max_depth'                    => $list_args['maxThreadDepth'],
				'reverse_top_level'            => $list_args['reverseTopLevelCommentsOrder'],
				'avatar_size'                  => $list_args['avatarSize'],
				'moderation_message'           => $list_args['moderationMessage'],
				'style'                        => 'div',
				'short_ping'                   => true,
				// Since we do the proper query above, we don't want the walker to do it once again.
				// We just want all the passed comments displayed.
				'page'                         => 0,
				'per_page'                     => 0,
				// We will pass cpage so that functions like get_comment_link() will function properly without relying on get_query_var().
				'cpage'                        => $page,

				// Extra args of our own. These will also be passed along to the walker.
				'display_commenter_background' => $list_args['displayCommenterBackground'],
				'reply_text'                   => $list_args['replyText'],
				'reply_to_text'                => $list_args['replyToText'],
			], $this->post->ID, $list_args, $comments );

			$this->localize_wp_list_comments_args( $wp_list_comments_args );

			// Check if we should actually render.
			if ( ! $this->should_render( $list_args, $comments ) ) {
				return '';
			}

			/* ===============================
			 * RENDER THE COMMENTS LIST MARKUP
			 */

			ob_start();

			// Register our hooks just before rendering.
			$this->register_hooks(); ?>

			<div id="comments" class="comment-list">

				<?php wp_list_comments( $wp_list_comments_args, $comments ); ?>

			</div><!-- #comments.comment-list -->

			<?php
			$comment_pagination = paginate_comments_links( [
				'echo'      => false,
				'total'     => $this->query->max_num_pages,
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

				<nav
					class="comments-pagination pagination<?php echo $pagination_classes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static output ?>"
					aria-label="<?php esc_attr_e( 'Comments', '__plugin_txtd' ); ?>">
					<?php echo wp_kses_post( $comment_pagination ); ?>
				</nav>

				<?php
			}

			// Unregister our hooks to make sure this instance's logic only applies to this render.
			$this->unregister_hooks();

			return ob_get_clean();
		}

		protected function should_render( $args = [], $comments = [] ) {
			$should_render = true;

			// We will not output anything if there are no comments.
			if ( empty( $comments ) ) {
				$should_render = false;
			}

			return apply_filters( 'novablocks/comments/list_should_render', $should_render, $this->post, $args, $comments );
		}

		protected function register_hooks() {
			add_filter( 'get_avatar', 'novablocks_maybe_inline_svg_avatar', 99, 6 );
		}

		protected function unregister_hooks() {
			remove_filter( 'get_avatar', 'novablocks_maybe_inline_svg_avatar', 99 );
		}

		/**
		 * @return WP_Comment_Query|null
		 */
		public function get_query() {
			return $this->query;
		}

		/**
		 * @param WP_Comment_Query $query
		 * @param array            $query_args
		 *
		 * @return WP_Comment_Query|null
		 */
		public function set_query( WP_Comment_Query $query, array $query_args ): ?WP_Comment_Query {
			$this->query      = $query;
			$this->query_args = $query_args;

			return $this->query;
		}

		/**
		 * @return WP_Comment[]
		 */
		public function get_comments(): ?array {
			if ( ! is_null( $this->comments ) ) {
				return $this->comments;
			}

			return [];
		}

		/**
		 * @return int
		 */
		public function get_comments_count(): int {
			if ( ! is_null( $this->comments ) ) {
				return count( $this->comments );
			}

			return 0;
		}

		/**
		 * @param WP_Comment_Query $query
		 * @param array            $query_args
		 *
		 * @return WP_Comment[]
		 */
		public function get_comments_from_query( WP_Comment_Query $query, array $query_args ): array {

			return $this->prepare_comments_from_query( $query, $query_args );
		}

		/**
		 * @param WP_Comment_Query $query
		 * @param array            $query_args
		 *
		 * @return WP_Comment[]
		 */
		protected function prepare_comments_from_query( WP_Comment_Query $query, array $query_args ): array {
			if ( empty( $query->comments ) ) {
				return [];
			}

			$_comments = $query->comments;

			// Trees must be flattened before they're passed to the walker.
			if ( $query_args['hierarchical'] ) {
				$comments_flat = [];
				foreach ( $_comments as $_comment ) {
					$comments_flat[]  = $_comment;
					$comment_children = $_comment->get_children(
						[
							'format'  => 'flat',
							'status'  => $query_args['status'],
							'orderby' => $query_args['orderby'],
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
			return apply_filters( 'comments_array', $comments_flat, $query_args['post_id'] );
		}

		/**
		 * Prepare the given rendering arguments by merging them with the existing ones in the instance.
		 *
		 * @param array $args
		 *
		 * @return array
		 */
		protected function parse_args( array $args ): array {
			// Handle the arguments by merging them with the existing ones.
			return wp_parse_args( $args, $this->args );
		}

		/**
		 * Get the value of an argument.
		 *
		 * @param string $arg
		 *
		 * @return mixed|null The argument value if present, null otherwise.
		 */
		public function get_arg( string $arg ) {
			if ( isset( $this->args[ $arg ] ) ) {
				return $this->args[ $arg ];
			}

			return null;
		}

		/**
		 * @param array $args Optional.
		 *
		 * @return array
		 */
		protected function comments_query_args( array $args = [] ): array {
			// Make sure that all the needed args are there.
			$args = $this->parse_args( $args );

			/**
			 * Code taken from @see comments_template() to allow for uniform behavior.
			 */
			$comment_args = [
				'orderby'                   => 'comment_date_gmt',
				'order'                     => 'ASC',
				'status'                    => 'approve',
				'post_id'                   => $this->post->ID,
				'hierarchical'              => $args['threadComments'],
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
						$comment_preview_time    = apply_filters( 'novablocks/comments/list_preview_time', $args['commentPreviewTime'], $comment );
						$comment_preview_expires = strtotime( $comment->comment_date_gmt . '+' . absint( $comment_preview_time ) . ' minute' );

						if ( time() < $comment_preview_expires ) {
							$unapproved_email = $comment->comment_author_email;
						}
					}
				}

				if ( ! $unapproved_email ) {
					$commenter        = wp_get_current_commenter();
					$unapproved_email = $commenter['comment_author_email'];
				}

				if ( $unapproved_email ) {
					$comment_args['include_unapproved'] = [ $unapproved_email ];
				}
			}

			$page = (int) get_query_var( 'cpage' );
			if ( $args['pageComments'] ) {
				$per_page = (int) get_query_var( 'comments_per_page' );
				if ( 0 === $per_page ) {
					$per_page = $args['commentsPerPage'];
				}

				$comment_args['number'] = $per_page;

				if ( $page ) {
					$comment_args['offset'] = ( $page - 1 ) * $per_page;
				} elseif ( 'oldest' === $args['defaultCommentsPage'] ) {
					$comment_args['offset'] = 0;
				} else {
					// If fetching the first page of 'newest', we need a top-level comment count.
					$top_level_query = new WP_Comment_Query();
					$top_level_args  = [
						'count'   => true,
						'orderby' => false,
						'post_id' => $this->post->ID,
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
			 * Filters the arguments used to query comments in @param array $comment_args {
			 *                                               Array of WP_Comment_Query arguments.
			 *
			 * @type string|array $orderby                   Field(s) to order by.
			 * @type string       $order                     Order of results. Accepts 'ASC' or 'DESC'.
			 * @type string       $status                    Comment status.
			 * @type array        $include_unapproved        Array of IDs or email addresses whose unapproved comments
			 *                                                   will be included in results.
			 * @type int          $post_id                   ID of the post.
			 * @type bool         $no_found_rows             Whether to refrain from querying for found rows.
			 * @type bool         $update_comment_meta_cache Whether to prime cache for comment meta.
			 * @type bool|string  $hierarchical              Whether to query for comments hierarchically.
			 * @type int          $offset                    Comment offset.
			 * @type int          $number                    Number of comments to fetch.
			 * }
			 * @see WP_Comment_Query::__construct()
			 *
			 * @see comments_template().
			 *
			 */
			$comment_args = apply_filters( 'comments_template_query_args', $comment_args );
			$comment_args = apply_filters( 'novablocks/comments/list_query_args', $comment_args );

			return $comment_args;
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
		protected function localize_wp_list_comments_args( array $args ): bool {

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
						'ajaxUrl'          => admin_url( 'admin-ajax.php' ),
						// @todo This should be set in a more general place.
						'actions'          => [
							'toggleHighlight' => 'toggle_highlight_comment',
						],
						'commentsListArgs' => $args,
					]
				), 'before'
			);
		}

		/**
		 * Get the markup of a comment as rendered in the comments list.
		 *
		 * @param WP_Comment|string|int|null $comment Optional. The comment to get the markup of. Defaults to the current comment.
		 * @param array                      $args    Optional. Arguments to pass to wp_list_comments().
		 *                                            Use the same arguments passed to NovaBlocks_Walker_Comment to get the same markup as in the list.
		 *
		 * @return string
		 */
		public function get_single_comment_markup( $comment = null, array $args = [] ): string {
			$comment = get_comment( $comment );
			if ( empty( $comment ) ) {
				return '';
			}

			ob_start();

			$args = wp_parse_args( $args, [
				'walker'      => new NovaBlocks_Walker_Comment(),
				'avatar_size' => 96,
				'style'       => 'div',
				'short_ping'  => true,
				// Since we do the proper query above, we don't want the walker to do it once again.
				// We just want all the passed comments displayed.
				'page'        => 0,
				'per_page'    => 0,
				'max_depth'   => - 1, // Any depth will do.
				'type'        => 'all', // We want all types since we trust the comment sent to be displayed.
			] );

			wp_list_comments( $args, [ $comment ] );

			return ob_get_clean();
		}
	}
}
