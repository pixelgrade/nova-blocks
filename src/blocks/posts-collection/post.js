const {
	__experimentalGetSettings,
	dateI18n,
	format
} = wp.date;

const {
	Fragment,
	RawHTML
} = wp.element;

const { __ } = wp.i18n;

import Card from "../../components/card";

import Author from "./components/author";
import Category from "./components/category";
import Comments from "./components/comments";
import Tags from "./components/tags";

const getMeta = ( post, meta ) => {

	if ( meta === 'author' ) {
		return post?.author && <Author id={ post.author } />
	}

	if ( meta === 'category' ) {
		return !! post?.categories?.length && <Category id={ post.categories[0] } />
	}

	if ( meta === 'comments' ) {
		return <Comments postId={ post.id } />
	}

	if ( meta === 'date' ) {
		const dateFormat = __experimentalGetSettings().formats.date;

		return (
			<time dateTime={ format( 'c', post.date_gmt ) }>
				{ dateI18n( dateFormat, post.date_gmt ) }
			</time>
		)
	}

	if ( meta === 'tags' ) {
		return !! post?.tags?.length && <Tags tags={ post.tags } />
	}

	return null;

};

const Post = ( props ) => {

	const {
		attributes: {
			cardTitleLevel,
			thumbnailAspectRatioString,

			showMedia,
			showMeta,
			showTitle,
			showDescription,
			showButtons,

			metadataPosition,
			primaryMetadata,
			secondaryMetadata,
		},
		post,
	} = props;

	const primaryMeta = getMeta( post, primaryMetadata );
	const secondaryMeta = getMeta( post, secondaryMetadata );

	let combinedMeta;
	let metaAboveTitle;
	let metaBelowTitle;

	if ( primaryMeta && secondaryMeta ) {
		combinedMeta = (
			<Fragment>
				{ primaryMeta }
				<RawHTML style={ { display: 'inline' } }>{ ' &mdash; ' }</RawHTML>
				{ secondaryMeta }
			</Fragment>
		);
	} else {
		combinedMeta = primaryMeta || secondaryMeta;
	}

	if ( metadataPosition === 'above-title' ) {
		metaAboveTitle = combinedMeta;
	}

	if ( metadataPosition === 'below-title' ) {
		metaBelowTitle = combinedMeta;
	}

	if ( metadataPosition === 'split' ) {
		metaAboveTitle = primaryMeta;
		metaBelowTitle = secondaryMeta;
	}

	const buttons = (
		<div className="wp-block-buttons alignleft">
			<div className="wp-block-button is-style-text">
				<div className="wp-block-button__link">
					<div className="novablocks-buttons-size-modifier">
						{ __( 'Read More' ) }
					</div>
				</div>
			</div>
		</div>
	);

	const cardProps = {
		mediaId: post.featured_media,
		metaAboveTitle: metaAboveTitle,
		metaBelowTitle: metaBelowTitle,
		title: post.title.raw,
		titleTagName: `h${ cardTitleLevel }`,
		content: post.excerpt.rendered,
		buttons,
		isLandscape: props.isLandscape || false,

		showMedia,
		showMeta,
		showTitle,
		showContent: showDescription,
		showButtons,
		hasFixedAspectRatio: thumbnailAspectRatioString !== 'auto'
	};

	return <Card { ...cardProps } />
};

export default Post;
