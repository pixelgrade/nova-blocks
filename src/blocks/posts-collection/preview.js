import GridLayoutPreview from "../../components/grid-generator/preview";
import Post from "./post";
import EditableText from "../../components/editable-text";

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

	const getContent = ( index, attributes, isLandscape ) => {
		const post = posts?.[index];

		return post && <Post post={ post } isLandscape={ isLandscape } attributes={ attributes } />;
	};

	return (
		<GridLayoutPreview getContent={ getContent } cardsCount={ posts.length } attributes={ attributes } posts={ posts } />
	)
};

export default Preview;
