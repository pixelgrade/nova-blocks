import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { Placeholder } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";
import { useBlockProps, Warning } from "@wordpress/block-editor";

import { useInnerBlocks, VariationPicker } from "@novablocks/block-editor";

import InspectorControls from "./inspector-controls";

const PostCommentsEdit = props => {

  const { 
    context,
    attributes: {
      hasUserExperience
    },
  } = props;
  const commentStatus = useSelect( select => select( 'core/editor' ).getEditedPostAttribute( 'comment_status' ) );

  const { postId, postType } = context;
  const className = classnames(
    'novablocks-conversations',
    props.className,
  );

  const blockProps = useBlockProps( {
    className: className,
    style: props.style
  } );

  if ( ! postType || ! postId ) {
    return (
      <div { ...blockProps }>
      <InspectorControls { ...props } />
        <Placeholder>{ __( 'Nova Blocks: Conversation System Block.', '__plugin_txtd' ) }</Placeholder>
      </div>
    );
  }

  if ( 'open' !== commentStatus ) {
    return (
      <div { ...blockProps }>
        <Warning>{ __( 'Comments are disabled for this post', '__plugin_txtd' ) }</Warning>
      </div>
    );
  }

  return (
    <div { ...blockProps }>
      <div className="novablocks-conversations__container">
        <h3 className="novablocks-conversations__title">
          { __( 'Conversations', '__plugin_txtd' ) }
        </h3>

        <div className="comment-form form-grid">
          <img className="avatar" alt=""/>

          <p className="comment-form-comment">
					<span className="comment-label__container">
						<label htmlFor="comment">{__('What’s your comment or question?', '__plugin_txtd')}</label>
						<span className="field-description">{__('Let’s start a personal and a meaningful conversation. ', '__plugin_txtd')}</span>
					</span>
            <textarea name="comment" id="comment" cols="30" rows="1" placeholder={__('Join the conversation, share your knowledge or ask a question...', '__plugin_txtd')}/>
          </p>
          <div className="second-column">
            <p className="comment-form-background">
              <label htmlFor="experience">{__('What is your expertise or qualification in this topic?', '__plugin_txtd')}</label>
              <span className="field-description">{__('Example: Practical philosopher, therapist and writer.', '__plugin_txtd')}</span>
              <input id="experience" name="experience" type="text" value="" size="30" maxLength="245" required="required" placeholder={__('Your relevant experience or expertise...', '__plugin_txtd')}/>
            </p>
            <p className="comment-form-author">
              <label htmlFor="author">{__('What is your name?', '__plugin_txtd')}</label>
              <span className="required">*</span>
              <input id="author" name="author" type="text" value="" size="30" maxLength="245" required="required" placeholder={__('eg. John Doe', '__plugin_txtd')}/>
            </p>
            <p className="comment-form-email">
              <label htmlFor="email">{__('What is your email address?', '__plugin_txtd')}</label>
              <span className="field-description">{__('Your email address will not be published.', '__plugin_txtd')}</span>
              <input id="email" name="email" type="email" value="" size="30" maxLength="100" required="required" placeholder={__('your@email.com', '__plugin_txtd')}/>
            </p>
            <div className="form-submit">
              <div className="wp-block-button">
                <div className="wp-block-button__link">
                  {__('Add this comment', '__plugin_txtd')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='novablocks-conversations__comment-list comment-list'>
          <PostCommentsDisplay postId={ postId } />
        </div>
      </div>
    </div>
  );
};

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
          <div className="comment" key={ 'comment_' + comment.id }>
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
        : __( 'No comments.', '__plugin_txtd' );
    },
    [ postId ]
  );
};

export default PostCommentsEdit;
