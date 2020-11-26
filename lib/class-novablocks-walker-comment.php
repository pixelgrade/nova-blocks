<?php
/**
 * Custom comment walker.
 */

if ( ! class_exists( 'TwentyTwenty_Walker_Comment' ) ) {
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

			?>
			<<?php echo $tag; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static output ?> id="comment-<?php comment_ID(); ?>" <?php comment_class( $this->has_children ? 'parent' : '', $comment ); ?>>
				<article id="div-comment-<?php comment_ID(); ?>" class="comment-body comment-grid">
					<footer class="comment-meta">
						<div class="comment-author vcard">
							<?php
							$comment_author_url = get_comment_author_url( $comment );
							$comment_author     = get_comment_author( $comment );
							$avatar             = get_avatar( $comment, $args['avatar_size'] );
							$commenter_background = get_comment_meta( $comment->comment_ID, 'nb_commenter_background', true );

							if ( 0 !== $args['avatar_size'] ) {
								if ( empty( $comment_author_url ) ) {
									echo wp_kses_post( $avatar );
								} else {
									printf( '<a href="%s" rel="external nofollow" class="url">', $comment_author_url ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped --Escaped in https://developer.wordpress.org/reference/functions/get_comment_author_url/
									echo wp_kses_post( $avatar );
								}
							}

							echo '<div class="comment-author-info">';
							printf(
									'<span class="fn comment-author-name">%1$s</span><span class="screen-reader-text says">%2$s</span>',
									esc_html( $comment_author ),
									__( 'says:', '__plugin_txtd' )
							);

							if ( ! empty( $commenter_background ) ) {
								printf(
										'<div class="comment-experience"><span class="screen-reader-text experience">%2$s</span><span class="experience-label">%1$s</span></div>',
										esc_html( $commenter_background ),
										__( 'Relevant commenter background or experience:', '__plugin_txtd' )
								); ?>
								<div class="comment-experience"><span class="experience-label"><?php echo esc_html( $commenter_background ) ?></span></div>
							<?php }

							echo '</div><!-- .comment-author-info -->';

							if ( ! empty( $comment_author_url ) ) {
								echo '</a>';
							}
							?>
						</div><!-- .comment-author -->

						<div class="comment-metadata">
							<a href="<?php echo esc_url( get_comment_link( $comment, $args ) ); ?>">
								<?php
								/* translators: 1: Comment date, 2: Comment time. */
								$comment_timestamp = sprintf( __( '%1$s at %2$s', '__plugin_txtd' ), get_comment_date( '', $comment ), get_comment_time() );
								?>
								<time datetime="<?php comment_time( 'c' ); ?>" title="<?php echo esc_attr( $comment_timestamp ); ?>">
									<?php echo esc_html( $comment_timestamp ); ?>
								</time>
							</a>
							<?php
							if ( get_edit_comment_link() ) {
								echo ' <span aria-hidden="true">&bull;</span> <a class="comment-edit-link" href="' . esc_url( get_edit_comment_link() ) . '">' . __( 'Edit', '__plugin_txtd' ) . '</a>';
							}
							?>
						</div><!-- .comment-metadata -->

					</footer><!-- .comment-meta -->

					<div class="comment-content entry-content">

						<?php

						comment_text();

						if ( '0' === $comment->comment_approved ) {
							?>
							<p class="comment-awaiting-moderation"><?php _e( 'Your comment is awaiting moderation.', '__plugin_txtd' ); ?></p>
							<?php
						}

						?>

					</div><!-- .comment-content -->

					<?php

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

					$by_post_author = twentytwenty_is_comment_by_post_author( $comment );

					if ( $comment_reply_link || $by_post_author ) {
						?>

						<footer class="comment-footer-meta">

							<?php
							if ( $comment_reply_link ) {
								echo $comment_reply_link; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Link is escaped in https://developer.wordpress.org/reference/functions/get_comment_reply_link/
							}
							if ( $by_post_author ) {
								echo '<span class="by-post-author">' . __( 'By Post Author', '__plugin_txtd' ) . '</span>';
							}
							?>

						</footer>

						<?php
					}
					?>

				</article><!-- .comment-body -->

			<?php
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
			?>
			<<?php echo $tag; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static output ?> <?php comment_class( $this->has_children ? 'parent' : '', $comment ); ?> id="comment-<?php comment_ID(); ?>">
			<div class="comment-body comment-grid">
				<div id="div-comment-<?php comment_ID() ?>" class="comment-content">
					<div class="comment-author vcard">

						<?php
						$comment_author_url   = get_comment_author_url( $comment );
						$comment_author       = get_comment_author( $comment );
						$avatar               = get_avatar( $comment, $args['avatar_size'] );
						$commenter_background = get_comment_meta( $comment->comment_ID, 'nb_commenter_background', true );

						if ( 0 !== $args['avatar_size'] ) {
							if ( empty( $comment_author_url ) || ( '0' == $comment->comment_approved && ! $show_pending_links ) ) {
								echo '<div class="comment-author-avatar">' . wp_kses_post( $avatar ) . '</div>';
							} else {
								printf( '<a href="%s" rel="external nofollow" class="url">', $comment_author_url ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped --Escaped in https://developer.wordpress.org/reference/functions/get_comment_author_url/
								echo '<div class="comment-author-avatar">' . wp_kses_post( $avatar ) . '</div>';
							}
						}

						echo '<div class="comment-author-info">';
						printf(
								'<span class="fn comment-author-name">%1$s</span><span class="screen-reader-text says">%2$s</span>',
								esc_html( $comment_author ),
								__( 'says:', '__plugin_txtd' )
						);

						if ( ! empty( $commenter_background ) ) {
							printf(
									'<div class="comment-experience"><span class="screen-reader-text experience">%2$s</span><span class="experience-label">%1$s</span></div>',
									esc_html( $commenter_background ),
									__( 'Relevant commenter background or experience:', '__plugin_txtd' )
							); ?>
							<div class="comment-experience"><span class="experience-label"><?php echo esc_html( $commenter_background ) ?></span></div>
						<?php }

						echo '</div><!-- .comment-author-info -->';

						if ( ! empty( $comment_author_url ) && ! ( '0' == $comment->comment_approved && ! $show_pending_links ) ) {
							echo '</a>';
						} ?>
					</div><!-- .comment-author -->

					<div class="comment-text">
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
					</div><!-- .comment-text -->
					<div class="comment-footer">
						<span class="comment-posted-time"><?php NovaBlocks_Comments::comment_time_human_friendly( $comment ) ?></span>
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
						<?php edit_comment_link( __( 'Edit', '__plugin_txtd' ), '  ', '' ); ?>
						</span>
					</div><!-- .comment-footer -->
				</div><!-- .comment-content -->
			</div><!-- .comment-body -->
		<?php }
	}
}
