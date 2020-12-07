<?php
/**
 * Custom comment walker.
 */

if ( ! class_exists( 'NovaBlocks_Walker_Comment' ) ) {
	/**
	 * CUSTOM COMMENT WALKER
	 * A custom walker for comments, based on the walker in Twenty Twenty.
	 */
	class NovaBlocks_Walker_Comment extends Walker_Comment {

		/**
		 * Outputs a comment in the HTML5 format.
		 *
		 * @see wp_list_comments()
		 * @see https://developer.wordpress.org/reference/functions/get_comment_author_url/
		 * @see https://developer.wordpress.org/reference/functions/get_comment_author/
		 * @see https://developer.wordpress.org/reference/functions/get_avatar/
		 * @see https://developer.wordpress.org/reference/functions/get_comment_reply_link/
		 * @see https://developer.wordpress.org/reference/functions/get_edit_comment_link/
		 *
		 * @param WP_Comment $comment Comment to display.
		 * @param int        $depth   Depth of the current comment.
		 * @param array      $args    An array of arguments.
		 */
		protected function html5_comment( $comment, $depth, $args ) {

			$tag = ( 'div' === $args['style'] ) ? 'div' : 'li';

			$comment_author_url   = get_comment_author_url( $comment );
			$comment_author       = get_comment_author( $comment );
			$avatar               = get_avatar( $comment, $args['avatar_size'] );
			$commenter_background = '';
			if ( ! empty( $args['display_commenter_background'] ) ) {
				$commenter_background = get_comment_meta( $comment->comment_ID, 'nb_commenter_background', true );
				// For post authors without a background, we will use a default one.
				if ( empty( $commenter_background ) && $this->is_comment_by_post_author( $comment ) ) {
					$commenter_background = esc_html__( 'Author', '__plugin_txtd' );
				}
			}

			$comment_reply_link = get_comment_reply_link(
				array_merge(
					$args,
					array(
						'add_below' => 'wrapper-comment', // This is the partial element ID after which the reply form should be moved on reply (e.g. wrapper-comment-12312).
						'depth'     => $depth,
						'max_depth' => $args['max_depth'],
						'before'    => '',
						'after'     => '',
					)
				)
			);

			$comment_moderation_message = ! empty( $args['moderation_message'] ) ? $args['moderation_message'] : esc_html__( 'This comment is only visible to you since it is awaiting moderation.', '__plugin_txtd' );
			?>

			<<?php echo $tag; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static output ?> id="comment-<?php comment_ID(); ?>" <?php comment_class( $this->has_children ? 'parent' : '', $comment ); ?>>
			<div class="comment-wrapper" id="wrapper-comment-<?php comment_ID(); ?>">
				<article class="comment-body">
					<footer class="comment-meta">
						<?php
						if ( 0 !== $args['avatar_size'] ) { ?>
						<div class="comment-author-avatar vcard">
							<?php echo wp_kses_post( $avatar ); ?>
						</div>
						<?php } else { ?>
							<div class="comment-author-avatar vcard empty-avatar">&nbsp;</div>
						<?php } ?>

						<div class="comment-author-info">
							<?php
							if ( ! empty( $comment_author_url ) ) {
								printf( '<a href="%s" rel="external nofollow" class="author-url">', $comment_author_url ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped --Escaped in https://developer.wordpress.org/reference/functions/get_comment_author_url/
							}

							printf(
									'<span class="fn comment-author-name">%1$s</span><span class="screen-reader-text says">%2$s</span>',
									esc_html( $comment_author ),
									esc_html__( 'says:', '__plugin_txtd' )
							);

							if ( ! empty( $comment_author_url ) ) {
								echo '</a>';
							}

							if ( ! empty( $commenter_background ) ) {
								printf(
									'<div class="commenter-background"><span class="screen-reader-text experience">%2$s</span><span class="commenter-background-label">%1$s</span></div>',
									esc_html( $commenter_background ),
									esc_html__( 'Relevant commenter background or experience:', '__plugin_txtd' )
								); ?>
							<?php } ?>
						</div><!-- .comment-author-info -->

						<div class="comment-dropdown">
							<input class="comment-dropdown-open" type="checkbox" id="dropdown-<?php comment_ID() ?>" aria-hidden="true" hidden/>
							<label for="dropdown-<?php comment_ID() ?>" class="comment-dropdown-toggle">
								<?php esc_html_e( 'More', '__plugin_txtd' ); ?>
								<span class="dropdown-icon">
									<svg class="arrow-down" viewBox="0 0 10 5"><use xlink:href="#arrow-down"></use></svg>
									<svg class="dots" viewBox="0 0 5 5"><use xlink:href="#dots"></use></svg>
								</span>
							</label>
							<div class="comment-dropdown-menu">
								<?php echo NovaBlocks_Comments::output_extras_options();?>
								<a class="comment-dropdown-item" href="<?php echo esc_url( get_comment_link( $comment, $args ) ); ?>" title="<?php esc_attr_e( 'Link to this comment', '__plugin_txtd'); ?>"><?php esc_html_e( 'Link to comment', '__plugin_txtd' ); ?></a>
							</div>
						</div>
					</footer><!-- .comment-meta -->

					<div class="comment-content">

						<?php
						comment_text();

						if ( '0' === $comment->comment_approved ) { ?>
							<p class="comment-awaiting-moderation"><?php echo $comment_moderation_message; ?></p>
						<?php } ?>

					</div><!-- .comment-content -->

					<footer class="comment-footer-meta">

						<?php
						/* translators: 1: Comment date, 2: Comment time. */
						$comment_timestamp = sprintf( esc_html__( '%1$s at %2$s', '__plugin_txtd' ), get_comment_date(), get_comment_time() );
						?>
						<time class="comment-posted-time" datetime="<?php comment_time( 'c' ); ?>" title="<?php echo esc_attr( $comment_timestamp ); ?>"><?php echo $this->comment_time_human_friendly() ?></time>

						<?php
						if ( $comment_reply_link ) {
							echo $comment_reply_link; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Link is escaped in https://developer.wordpress.org/reference/functions/get_comment_reply_link/
						}

						if ( get_edit_comment_link() ) {
							echo '<a class="comment-edit-link" href="' . esc_url( get_edit_comment_link() ) . '">' . esc_html__( 'Edit', '__plugin_txtd' ) . '</a>';
						} ?>

					</footer><!-- .comment-footer-meta -->

				</article><!-- .comment-body -->
			</div><!-- .comment-wrapper -->
			<?php
		}

		/**
		 * Checks if the specified comment is written by the author of the post commented on.
		 *
		 * @param object $comment Comment data.
		 * @return bool
		 */
		protected function is_comment_by_post_author( $comment = null ) {

			if ( is_object( $comment ) && $comment->user_id > 0 ) {

				$user = get_userdata( $comment->user_id );
				$post = get_post( $comment->comment_post_ID );

				if ( ! empty( $user ) && ! empty( $post ) ) {

					return $comment->user_id === $post->post_author;

				}
			}
			return false;
		}

		protected function comment_time_human_friendly() {
			if ( current_time( 'U' ) - get_comment_time( 'U' ) < 10 * MINUTE_IN_SECONDS ) {
				$time_text = esc_html__( 'Just now', '__plugin_txtd' );
			} elseif ( current_time( 'U' ) - get_comment_time( 'U' ) < 14 * DAY_IN_SECONDS ) {
				$time_text = sprintf(
						_x( '%s ago', '%s = human-readable time difference', '__plugin_txtd' ),
						human_time_diff(
								get_comment_time( 'U' ),
								current_time( 'timestamp' ) )
				);
			} else {
				$time_text = sprintf( esc_html__( 'On %s', '__plugin_txtd' ), get_comment_date() );
			}

			return $time_text;
		}

		/**
		 * Outputs a single comment.
		 *
		 * @see wp_list_comments()
		 *
		 * @param WP_Comment $comment Comment to display.
		 * @param int        $depth   Depth of the current comment.
		 * @param array      $args    An array of arguments.
		 */
		protected function comment( $comment, $args, $depth ) {
			$tag = ( 'div' === $args['style'] ) ? 'div' : 'li';
			$add_below = 'comment';

			$commenter          = wp_get_current_commenter();
			$show_pending_links = isset( $commenter['comment_author'] ) && $commenter['comment_author'];

			if ( $commenter['comment_author_email'] ) {
				$moderation_note = __( 'Your comment is awaiting moderation.', '__plugin_txtd' );
			} else {
				$moderation_note = __( 'Your comment is awaiting moderation. This is a preview, your comment will be visible after it has been approved.', '__plugin_txtd' );
			}

			$comment_author_url = get_comment_author_url( $comment );
			$comment_author     = get_comment_author( $comment );
			$avatar             = get_avatar( $comment, $args['avatar_size'] );
			$commenter_background = get_comment_meta( $comment->comment_ID, 'nb_commenter_background', true );
			// For post authors without a background, we will use a default one.
			if ( empty( $commenter_background ) && $this->is_comment_by_post_author( $comment ) ) {
				$commenter_background = esc_html__( 'Author', '__plugin_txtd' );
			}

			$comment_reply_link = get_comment_reply_link(
				array_merge(
					$args,
					array(
						'add_below' => 'div-comment',
						'depth'     => $depth,
						'max_depth' => $args['max_depth'],
						'before'    => '<span class="comment-reply">',
						'after'     => '</span>',
					)
				)
			);
			?>
			<<?php echo $tag; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static output ?> <?php comment_class( $this->has_children ? 'parent' : '', $comment ); ?> id="comment-<?php comment_ID(); ?>">
			<div class="comment-wrapper">
				<div id="div-comment-<?php comment_ID() ?>" class="comment-body">
					<div class="comment-meta">

						<?php
						if ( 0 !== $args['avatar_size'] ) { ?>
							<div class="comment-author-avatar vcard">
								<?php echo wp_kses_post( $avatar ); ?>
							</div>
						<?php } else { ?>
							<div class="comment-author-avatar vcard empty-avatar">&nbsp;</div>
						<?php } ?>

						<div class="comment-author-info">
							<?php
							if ( ! empty( $comment_author_url ) ) {
								printf( '<a href="%s" rel="external nofollow" class="author-url">', $comment_author_url ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped --Escaped in https://developer.wordpress.org/reference/functions/get_comment_author_url/
							}

							printf(
									'<span class="fn comment-author-name">%1$s</span><span class="screen-reader-text says">%2$s</span>',
									esc_html( $comment_author ),
									esc_html__( 'says:', '__plugin_txtd' )
							);

							if ( ! empty( $comment_author_url ) ) {
								echo '</a>';
							}

							if ( ! empty( $commenter_background ) ) {
								printf(
										'<div class="commenter-background"><span class="screen-reader-text experience">%2$s</span><span class="commenter-background-label">%1$s</span></div>',
										esc_html( $commenter_background ),
										esc_html__( 'Relevant commenter background or experience:', '__plugin_txtd' )
								); ?>
							<?php } ?>
						</div><!-- .comment-author-info -->
					</div><!-- .comment-meta -->

					<div class="comment-content">
						<?php
						if ( '0' == $comment->comment_approved ) { ?>
						<em class="comment-awaiting-moderation"><?php echo $moderation_note; ?></em>
						<br />
						<?php }

						comment_text(
							$comment,
							array_merge(
								$args,
								array(
									'add_below' => $add_below,
									'depth'     => $depth,
									'max_depth' => $args['max_depth'],
								)
							)
						);
						?>
					</div><!-- .comment-content -->
					<div class="comment-footer-meta">
						<span class="comment-posted-time"><?php $this->comment_time_human_friendly() ?></span>
						<span class="reply">
						<?php
						comment_reply_link(
							array_merge(
								$args,
								array(
									'add_below' => $add_below,
									'depth'     => $depth,
									'max_depth' => $args['max_depth'],
									'before'    => '<div class="reply">',
									'after'     => '</div>',
								)
							)
						);
						?>
						<?php edit_comment_link( esc_html__( 'Edit', '__plugin_txtd' ), '  ', '' ); ?>
						</span>
					</div><!-- .comment-footer-meta -->
				</div><!-- .comment-body -->
			</div><!-- .comment-wrapper -->
		<?php }
	}
}
