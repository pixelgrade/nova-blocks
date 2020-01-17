/**
 * External dependencies
 */
import classnames from 'classnames';
import apiFetch from '@wordpress/api-fetch';
import {isUndefined, pickBy, some} from "lodash";

const {compose} = wp.compose;

/**
 * WordPress dependencies
 */
const {BlockIcon, RichText} = wp.blockEditor;

const {__} = wp.i18n;

const {addQueryArgs} = wp.url;

const {__experimentalGetSettings, dateI18n, format} = wp.date;

const {withSelect} = wp.data;

const {Placeholder, Spinner} = wp.components;

const {Component, Fragment, RawHTML} = wp.element;

import InspectorControls from './inspector-controls';

/**
 * Module Constants
 */
const CATEGORIES_LIST_QUERY = {
	per_page: - 1,
};

class PostsEdit extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			categoriesList: [],
			lastColumnValue: null,
		};
	}

	componentDidMount() {
		const {className} = this.props;

		this.isStillMounted = true;
		this.fetchRequest = apiFetch( {
			path: addQueryArgs( '/wp-json/wp/v2/categories', CATEGORIES_LIST_QUERY ),
		} ).then(
			( categoriesList ) => {
				if ( this.isStillMounted ) {
					this.setState( {categoriesList} );
				}
			}
		).catch(
			() => {
				if ( this.isStillMounted ) {
					this.setState( {categoriesList: []} );
				}
			}
		);
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	render() {
		const {
			attributes,
			setAttributes,
			className,
			latestPosts,
		} = this.props;

		const {categoriesList} = this.state;

		const {
			displayFeaturedImage,
			displayDate,
			displayContent,
			displayReadMore,
			postLink,
			excerptLength,
			numberOfPosts
		} = attributes;

		const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;

		const displayPosts = Array.isArray( latestPosts ) && latestPosts.length > numberOfPosts ? latestPosts.slice( 0, numberOfPosts ) : latestPosts;

		const dateFormat = __experimentalGetSettings().formats.date;

		if ( ! hasPosts ) {
			return (
				<Fragment>
					<Placeholder
						icon={<BlockIcon icon='format-gallery'/>}
						label={__( 'Blog Posts', '__plugin_txtd' )}
					>
						{! Array.isArray( latestPosts ) ?
							<Spinner/> :
							<Fragment>
								{__( 'No posts found. Start publishing or add posts from an RSS feed.', '__plugin_txtd' )}
							</Fragment>
						}
					</Placeholder>
				</Fragment>
			);
		}

		return (
			<Fragment>
				<InspectorControls
					{...this.props}
					categoriesList={categoriesList}
				/>
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
			</Fragment>
		)
	}
}

export default compose( [
	withSelect( ( select, props ) => {
		const {numberOfPosts, order, orderBy, categories} = props.attributes;
		const {getEntityRecords} = select( 'core' );
		const latestPostsQuery = pickBy( {
			categories,
			order,
			orderby: orderBy,
			per_page: numberOfPosts,
		}, ( value ) => ! isUndefined( value ) );

		let latestPosts = getEntityRecords( 'postType', 'post', latestPostsQuery );
		if ( latestPosts ) {
			latestPosts = latestPosts.map( ( post ) => {
				return {
					...post,
					featured_media_object: post.featured_media && select( 'core' ).getMedia( post.featured_media ),
				};
			} );
		}

		return {
			latestPosts: latestPosts,
		};
	} ),
] )( PostsEdit );

