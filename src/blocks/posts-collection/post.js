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
import Category from "./components/category";

const Post = ( props ) => {

	const {
		attributes: {
			level,

			showMedia,
			showMeta,
			showTitle,
			showDescription,
			showButtons,
		},
		post,
	} = props;

	const dateFormat = __experimentalGetSettings().formats.date;

	const meta = (
		<Fragment>
			<time dateTime={ format( 'c', post.date_gmt ) }>
				{ dateI18n( dateFormat, post.date_gmt ) }
			</time>
			{
				post.categories.length &&
			    <Fragment>
				    <RawHTML style={ { display: 'inline' } }>{ ' &mdash; ' }</RawHTML>
				    <Category id={ post.categories[0] } />
			    </Fragment>
			}
		</Fragment>
	);

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
		meta,
		title: post.title.raw,
		titleTagName: `h${ level + 1 }`,
		content: post.excerpt.rendered,
		buttons,
		isLandscape: props.isLandscape || false,

		showMedia,
		showMeta,
		showTitle,
		showContent: showDescription,
		showButtons,
	};

	return <Card { ...cardProps } />
};

export default Post;
