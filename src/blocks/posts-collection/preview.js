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
		console.log( index );

		if ( index === 0 ) {
			return <Header { ...props } />
		}

		const post = posts?.[index - 1];

		return post && <Post post={ post } isLandscape={ isLandscape } attributes={ attributes } />;
	};

	return (
		<GridLayoutPreview getContent={ getContent } cardsCount={ posts.length } attributes={ attributes } />
	)
};

const Header = ( props ) => {

	const {
		attributes: {
			collectionTitle,
			collectionDescription,
		},
		setAttributes
	} = props;

	return (
		<div>
			<EditableText
				tagName={ 'h2' }
				value={ collectionTitle }
				onChange={ collectionTitle => {
					setAttributes( { collectionTitle } )
				}}
			/>
			<EditableText
				tagName={ 'p' }
				value={ collectionDescription }
				onChange={ collectionDescription => {
					setAttributes( { collectionDescription } )
				}}
			/>
		</div>
	)
};

export default Preview;
