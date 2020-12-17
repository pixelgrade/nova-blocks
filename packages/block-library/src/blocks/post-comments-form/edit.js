import {Fragment} from "@wordpress/element";
import { __ } from '@wordpress/i18n';

const CommentFormEdit = (props) => {

	return (
		<Fragment>
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
						<input id="experience" name="experience" type="text" value="" size="30" maxLength="245" required="required" placeholder="Your relevant experience or expertise..."/>
					</p>
					<p className="comment-form-author">
						<label htmlFor="author">{__('What is your name?', '__plugin_txtd')}</label>
						<span className="required">*</span>
						<input id="author" name="author" type="text" value="" size="30" maxLength="245" required="required" placeholder="eg. John Doe"/>
					</p>
					<p className="comment-form-email">
						<label htmlFor="email">{__('What is your email address?', '__plugin_txtd')}</label>
						<span className="field-description">{__('Your email address will not be published.', '__plugin_txtd')}</span>
						<input id="email" name="email" type="email" value="" size="30" maxLength="100" required="required" placeholder="your@email.com"/>
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
		</Fragment>
	)
}

export default CommentFormEdit;
