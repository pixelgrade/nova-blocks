import {
	__experimentalGetSettings,
	dateI18n,
	format
} from '@wordpress/date';

import {
	Fragment,
	RawHTML
} from '@wordpress/element';

import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';

import { Card } from "@novablocks/components";

import Author from "./author";
import Category from "./category";
import Comments from "./comments";
import Tags from "./tags";
import ReadingTime from "./reading-time";

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

	if ( meta === 'reading-time' ) {
		return <ReadingTime post={ post } />
	}

	return null;

};

const Media = withSelect( ( select, ownProps ) => {
	const { getMedia } = select( 'core' );
	const { id } = ownProps;

	if ( ! id ) {
		return null;
	}

	const mediaObject = getMedia( id );
	const src = mediaObject?.source_url;

	return {
		src
	}
} )( ( { src } ) => {

	if ( !! src ) {
		return <img className={`novablocks-card__media-image`} src={ src }/>
	}

	return null;
} );

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

	const media = !! post.featured_media ? <Media id={ post.featured_media } /> : null;

	const buttons = (
		<div className="wp-block-buttons">
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
		media,
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
