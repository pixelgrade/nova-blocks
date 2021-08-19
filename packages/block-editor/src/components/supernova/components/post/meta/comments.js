import { useApiFetch } from "../../../../../index";

import { addQueryArgs } from '@wordpress/url';
import { __ } from '@wordpress/i18n';

const Comments = ( props ) => {

	const { data } = useApiFetch( addQueryArgs( `/wp/v2/comments`, {
		post: props.postId
	} ) );

	const count = data.length;

	return ! count ? __( 'No Comments' ) : `${ count } Comment${ count > 1 ? 's' : ''}`;

};

export default Comments;
