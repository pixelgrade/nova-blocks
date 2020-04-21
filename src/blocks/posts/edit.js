/**
 * External dependencies
 */
import classnames from 'classnames';
import {isUndefined, pickBy, some} from "lodash";

const {compose} = wp.compose;

import { withPosts } from '../../components';

/**
 * WordPress dependencies
 */
const {
	BlockIcon,
	RichText,
} = wp.blockEditor;

const { __ } = wp.i18n;

const {
	__experimentalGetSettings,
	dateI18n,
	format
} = wp.date;

const {
	withSelect
} = wp.data;

const {
	Placeholder,
	Spinner
} = wp.components;

const {
	Component,
	Fragment,
	RawHTML
} = wp.element;

class PostsEdit extends Component {

	render() {

		const {
			attributes,
			setAttributes,
			className,
			posts,
		} = this.props;

		const {
			displayFeaturedImage,
			displayDate,
			displayContent,
			displayReadMore,
			postLink,
			excerptLength,
			numberOfPosts
		} = attributes;

		const hasPosts = Array.isArray( posts ) && posts.length;
		const displayPosts = Array.isArray( posts ) && posts.length > numberOfPosts ? posts.slice( 0, numberOfPosts ) : posts;
		const dateFormat = __experimentalGetSettings().formats.date;

		if ( ! hasPosts ) {
			return (
				<Fragment>
					<Placeholder
						icon={ <BlockIcon icon='format-gallery' /> }
						label={ __( 'Blog Posts', '__plugin_txtd' ) }
					>
						{ ! Array.isArray( posts ) ?
							<Spinner /> :
							__( 'No posts found. Start publishing or add posts from an RSS feed.', '__plugin_txtd' )
						}
					</Placeholder>
				</Fragment>
			);
		}

		return (
			<div className={className}>
				<div>
					{displayPosts.map( ( post, i ) => {
						const featuredImageUrl = post.featured_media_object ? post.featured_media_object.source_url : null;

						const titleTrimmed = post.title.rendered.trim();

						let excerpt = post.excerpt.rendered;
						if ( post.excerpt.raw === '' ) {
							excerpt = post.content.raw;
						}
						const excerptElement = document.createElement( 'div' );
						excerptElement.innerHTML = excerpt;
						excerpt = excerptElement.textContent || excerptElement.innerText || '';

						return (
							<div key={i}>
								<article
									className="novablocks-media novablocks-media--blog wp-block-group alignfull content-is-moderate block-is-moderate has-background">
									<div className="wp-block-group__inner-container">
										<div className="wp-block alignwide">
											<div className="novablocks-media__layout">
												<div className="novablocks-media__content">
													<div className="novablocks-media__inner-container">

														{displayDate &&
														 <time dateTime={format( 'c', post.date_gmt )}>
															 {dateI18n( dateFormat, post.date_gmt )}
														 </time>
														}

														<h2>
															<a href={post.link} target="_blank"
															   rel="noreferrer noopener" alt={titleTrimmed}>
																{titleTrimmed ? (
																		<RawHTML>
																			{titleTrimmed}
																		</RawHTML>
																	) :
																	/* translators: placeholder when a post has no title */
																	__( '(no title)', '__plugin_txtd' )
																}
															</a>
														</h2>
														{displayContent &&
														 <p>
															 <RawHTML
																 key="html"
															 >
																 {excerptLength < excerpt.trim().split( ' ' ).length ?
																	 excerpt.trim().split( ' ', excerptLength ).join( ' ' ) + '…' :
																	 excerpt.trim().split( ' ', excerptLength ).join( ' ' )}
															 </RawHTML>
														 </p>
														}

														{displayReadMore &&

														 <RichText
															 tagName="a"
															 onChange={( newPostLink ) => setAttributes( {postLink: newPostLink} )}
															 value={postLink}
															 placeholder={__( 'Read more', '__plugin_txtd' )}
															 multiline={false}
															 withoutInteractiveFormatting={false}
															 isSelected={false}
														 />
														}
													</div>
												</div>
												{featuredImageUrl !== null && displayFeaturedImage &&
												 <div className="novablocks-media__aside">
													 <div className="novablocks-media__image">
														 <a href="" className="post-thumbnail">
															 <img src={featuredImageUrl} alt=""/>
														 </a>
													 </div>
												 </div>
												}
											</div>
										</div>
									</div>
								</article>
							</div>
						);
					} )}
				</div>
			</div>
		)
	}
}

export default withPosts( PostsEdit );
