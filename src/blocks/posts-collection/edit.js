import classnames from 'classnames';
import { some, pickBy, isUndefined } from "lodash";
import { CardsManagerPanel, Collection } from '../../components';
import * as icons from "../../icons";

const { apiFetch } = wp;

const {
	compose
} = wp.compose;

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
	select,
} = wp.data;

const {
	PanelBody,
	Placeholder,
	RangeControl,
	Spinner
} = wp.components;

const {
	Component,
	Fragment,
	RawHTML
} = wp.element;

class Category extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			name: null
		};
	}

	componentDidMount() {
		const { id } = this.props;

		this.isStillMounted = true;
		this.fetchRequest = apiFetch( {
			path: `/wp/v2/categories/${id}`,
		} )
		.then( ( category ) => {
				if ( this.isStillMounted ) {
					this.setState( { name: category.name } )
				}
			}
		).catch( () => {} );
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	render() {
		return this.state.name;
	}
}

const CardMedia = ( { post } ) => {
	const featuredMediaObject = !! post.featured_media ? select( 'core' ).getMedia( post.featured_media ) : null;
	const featuredImageUrl = featuredMediaObject ? featuredMediaObject.source_url : null;

	if ( !! featuredImageUrl ) {
		return <img className={ `novablocks-card__media-image` } src={ featuredImageUrl } />
	}

	return <div className={ `novablocks-card__media-placeholder` }>{ icons.placeholder }</div>
}

class PostsEdit extends Component {

	render() {

		const {
			attributes,
			setAttributes,
			className,
			posts,
			clientId,
			markPostsAsDisplayed,
		} = this.props;

		const {
			columns,
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

		markPostsAsDisplayed( clientId, posts );

		return (
			<Fragment>
				<InspectorControls>
					<CardsManagerPanel
						label={ __( 'Cards Manager', '__plugin_txtd' ) }
						onChange={ ( attributes ) => { setAttributes( attributes ) } }
						{ ...this.props }
					/>
					<PanelBody title={ __( 'Layout', '__plugin_txtd' ) }>
						<RangeControl
							value={ columns }
							onChange={ ( columns ) => setAttributes( { columns } ) }
							min={ 2 }
							max={ 4 }
						/>
					</PanelBody>
				</InspectorControls>
				<Collection hasAppender={ false } { ...this.props }>
					<div className="block-editor-inner-blocks">
						<div className="block-editor-block-list__layout">
							{
								!! posts && posts.map( ( post, idx ) => {

									const style = {
										'--columns': columns,
									}

									return (
										<div className={ `novablocks-card novablocks-card__inner-container novablocks-block__content` } key={ idx } style={ style }>
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
												<SubtitleTagName className="novablocks-card__subtitle">
													<Category id={ post.categories[0] } />
												</SubtitleTagName>
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

export default PostsEdit;
