import { InnerBlocks } from '@wordpress/block-editor';
import {__} from "@wordpress/i18n";

const ALLOWED_BLOCKS = ['novablocks/post-comments-list', 'novablocks/post-comments-form'];
let TEMPLATE =[
	['novablocks/post-comments-form'],
	['novablocks/post-comments-list']
]

const PostCommentsPreview = function( props ) {
	const {
		attributes,
		context
	} = props;

	const { postId, postType } = context;

	return (
		<div className="novablocks-conversations">
			<div className="novablocks-conversations__container">
				<h3 className="novablocks-conversations__title">
					{ __( 'Conversations', '__plugin_txtd' ) }
				</h3>

				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={TEMPLATE}
					renderAppender={false}
					templateLock = 'all'
				/>
			</div>
		</div>
	);
}

export default PostCommentsPreview;
