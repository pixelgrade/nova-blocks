import Controls from "./controls";
import Preview from "./preview";

const { Fragment } = wp.element;

const PostsEdit = ( props ) => {

	return (
		<Fragment>
			<Controls { ...props } />
			<Preview { ...props } />
		</Fragment>
	)
};

export default PostsEdit;
