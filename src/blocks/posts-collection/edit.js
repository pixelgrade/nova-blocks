import Preview from "./preview";

const { Fragment } = wp.element;

const PostsEdit = ( props ) => {

	return (
		<Fragment>
			<Preview { ...props } />
		</Fragment>
	)
};

export default PostsEdit;
