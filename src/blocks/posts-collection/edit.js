import classnames from 'classnames';
import { some, pickBy, isUndefined } from "lodash";
import { CardsManagerPanel, Collection } from '../../components';
import CardMedia from './media';
import { ControlsSection, ControlsTab } from "../../components/control-sections";

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

const PostsEdit = ( props ) => {

	const {
		attributes,
		setAttributes,
		className,
		posts,
		clientId,
		markPostsAsDisplayed,
	} = props;

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
			<CardsManagerPanel
				label={ __( 'Cards Manager', '__plugin_txtd' ) }
				onChange={ ( attributes ) => { setAttributes( attributes ) } }
				{ ...props }
			/>
			<ControlsSection label={ __( 'Display' ) } priority={ 10 }>
				<ControlsTab label={ __( 'Settings' ) }>
					<RangeControl
						key={ 'posts-collection-display-controls' }
						value={ columns }
						onChange={ ( columns ) => setAttributes( { columns } ) }
						label={ __( 'Columns' ) }
						min={ 2 }
						max={ 4 }
					/>
				</ControlsTab>
			</ControlsSection>
			<Collection hasAppender={ false } { ...props }>
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
											<div className="wp-block">
												<div className="novablocks-card__media-wrap">
													<div className="novablocks-card__media">
														<CardMedia post={ post } />
													</div>
												</div>
											</div>
										}
										{
											showMeta &&
											<div className="wp-block">
												<div className="novablocks-card__meta">
													 <time dateTime={ format( 'c', post.date_gmt ) }>
														 { dateI18n( dateFormat, post.date_gmt ) }
													 </time>
												</div>
											</div>
										}
										{
											showTitle &&
											<div className="wp-block">
												<TitleTagName className="novablocks-card__title">{ post.title.raw }</TitleTagName>
											</div>
										}
										{
											showSubtitle &&
											post.categories.length &&
											<div className="wp-block">
												<SubtitleTagName className="novablocks-card__subtitle">
													<Category id={ post.categories[0] } />
												</SubtitleTagName>
											</div>
										}
										{
											showDescription &&
											<RawHTML className="wp-block novablocks-card__description">
												{ post.excerpt.rendered }
											</RawHTML>
										}
										{
											showButtons &&
											<div className="wp-block">
												<div className="novablocks-card__buttons">
													<div className="wp-block-button">
														<div className="wp-block-button__link">Read More</div>
													</div>
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

export default PostsEdit;
