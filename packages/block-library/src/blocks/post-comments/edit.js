/**
 * WordPress dependencies
 */
import {
	Fragment
} from '@wordpress/element';

/**
 * Internal dependencies
 */
import Preview from "./preview";

const PostCommentsEdit = function(props) {
	return (
		<Fragment>
			<Preview {...props} />
		</Fragment>
	)
};

export default PostCommentsEdit;
