import * as icons from "../../../icons";

const {
	withSelect,
} = wp.data;

const CardMedia = ( { post } ) => {
	const { featured_media_url } = post;

	if ( !! featured_media_url ) {
		return <img className={`novablocks-card__media-image`} src={ featured_media_url }/>
	}

	return <div className={`novablocks-card__media-placeholder`}>{ icons.placeholder }</div>
};

export default withSelect( ( select, ownProps ) => {
	const { getMedia } = select( 'core' );
	const { post } = ownProps;

	if ( ! post.featured_media ) {
		return {};
	}

	const featured_media_obj = getMedia( post.featured_media );
	const featured_media_url = featured_media_obj ? featured_media_obj.source_url : null;

	return {
		post: {
			...post,
			featured_media_url
		}
	}
} )( CardMedia );
