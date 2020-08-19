import GridLayoutPreview from "../../components/grid-generator/preview";
import Post from "./post";

const Preview = ( props ) => {

	const {
		attributes,
		posts,
		clientId,
		markPostsAsDisplayed,
	} = props;

	markPostsAsDisplayed( clientId, posts );

	if ( ! posts || ! posts.length ) {
		return null;
	}

	const getContent = ( index ) => {
		const post = posts?.[index];
		return post && <Post post={ post } attributes={ attributes } />;
	};

	return (
		<GridLayoutPreview getContent={ getContent } cardsCount={ posts.count } attributes={ attributes } />
	)
};

export default Preview;
