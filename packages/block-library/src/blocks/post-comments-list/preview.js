/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import {
	Warning,
} from '@wordpress/block-editor';

import moment from 'moment';

import { __ } from '@wordpress/i18n';
import { RawHTML } from '@wordpress/element';

function PostCommentsDisplay( { postId } ) {
	return useSelect(
		( select ) => {
			const comments = select( 'core' ).getEntityRecords(
				'root',
				'comment',
				{
					post: postId,
				}
			);

			return comments && comments.length
				? comments.map( ( comment ) => (
					<div className="comment" key={ comment.id }>
						<div className="comment-body comment-grid">
							<div className="comment-content">
								<div className="comment-author-avatar vcard">
									<img className="avatar" src={comment.author_avatar_urls[48]} alt=""/>
								</div>
								<div className="comment-author-info">
									<span className="comment-author">
										{ comment.author_name }
									</span>
								</div>
								<div className="comment-text">
									<RawHTML>
										{ comment.content.rendered }
									</RawHTML>
								</div>
								<div className="comment-footer">
									<span className="comment-posted-time">{ moment(comment.date).fromNow() }</span>
								</div>
							</div>
						</div>
					</div>
				) )
				: __( 'No comments.' );
		},
		[ postId ]
	);
}


const Preview = ( props ) => {
	const {
		attributes,
		setAttributes,
		context
	} = props;

	const { postType, postId } = context;

	if ( ! postType || ! postId ) {
		return (
			<Warning>{ __( 'Post comments block: no post found.' ) }</Warning>
		);
	}

	return (
		<>
			<div className='novablocks-conversations__comment-list comment-list'>
				<PostCommentsDisplay postId={ postId } />
			</div>
		</>
	)
};

export default Preview;
