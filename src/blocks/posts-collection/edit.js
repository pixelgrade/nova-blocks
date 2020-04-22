import classnames from 'classnames';

import {
	some,
	pickBy,
	isUndefined,
} from "lodash";

const {
	compose
} = wp.compose;

import {CardsManagerPanel, Collection, withPosts} from '../../components';
import * as icons from "../../icons";

const {
	BlockIcon,
	RichText,
	InspectorControls,
} = wp.blockEditor;

const { __ } = wp.i18n;

const {
	__experimentalGetSettings,
	dateI18n,
	format
} = wp.date;

const {
	withSelect
} = wp.data;

const {
	Placeholder,
	Spinner
} = wp.components;

const {
	Component,
	Fragment,
	RawHTML
} = wp.element;

class PostsEdit extends Component {

	render() {

		const {
			attributes,
			setAttributes,
			className,
			posts,
		} = this.props;

		const {
			level,
			showButtons,
			showDescription,
			showMedia,
			showMeta,
			showTitle,
			showSubtitle,
		} = attributes;

		const hasPosts = Array.isArray( posts ) && posts.length;
		const TitleTagName = `h${ level + 1 }`;
		const SubtitleTagName = `h${ level + 2 }`;
		const dateFormat = __experimentalGetSettings().formats.date;

		const CardMedia = ( props ) => {
			const { post } = props;
			const featuredImageUrl = post.featured_media_object ? post.featured_media_object.source_url : null;

			if ( !! featuredImageUrl ) {
				return <img className={ `novablocks-card__media-image` } src={ featuredImageUrl } />
			}

			return <div className={ `novablocks-card__media-placeholder` }>{ icons.placeholder }</div>
		}

		return (
			<Fragment>
				<InspectorControls>
					<CardsManagerPanel
						label={ __( 'Cards Manager', '__plugin_txtd' ) }
						onChange={ ( attributes ) => { setAttributes( attributes ) } }
						{ ...this.props }
					/>
				</InspectorControls>
				<Collection hasAppender={ false } { ...this.props }>
					<div className="block-editor-inner-blocks">
						<div className="block-editor-block-list__layout">
							{
								!! posts && posts.map( ( post, idx ) => {

									return (
										<div className={ `novablocks-card novablocks-card__inner-container novablocks-block__content` } key={ idx }>
											{
												showMedia &&
												<div className="novablocks-card__media-wrap">
													<div className="novablocks-card__media">
														<CardMedia post={ post } />
													</div>
												</div>
											}
											{
												showMeta &&
												<div className="novablocks-card__meta">
													 <time dateTime={ format( 'c', post.date_gmt ) }>
														 { dateI18n( dateFormat, post.date_gmt ) }
													 </time>
												</div>
											}
											{ showTitle && <TitleTagName className="novablocks-card__title">{ post.title.raw }</TitleTagName> }
											{
												showSubtitle && post.categories.length &&
												<SubtitleTagName className="novablocks-card__subtitle">{ post.categories[0] }</SubtitleTagName>
											}
											{ showDescription && <p className="novablocks-card__description">{ post.excerpt.raw }</p> }
											{
												showButtons &&
												<div className="novablocks-card__buttons">
													<div className="wp-block-button">
														<div className="wp-block-button__link">Read More</div>
													</div>
												</div>
											}
										</div>
									);

								} )
							}
						</div>
					</div>
				</Collection>
			</Fragment>
		)
	}
}

export default withPosts( PostsEdit );
