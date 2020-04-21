import {
	isUndefined,
	pickBy
} from "lodash";

const { apiFetch } = wp;

const { __ } = wp.i18n;
const { addQueryArgs } = wp.url;

const {
	Fragment,
} = wp.element;

const {
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	ToggleControl,
	RadioControl,
	QueryControls,
	RangeControl
} = wp.components;

const CATEGORIES_LIST_QUERY = {
	per_page: -1,
};

const {
	compose,
	createHigherOrderComponent
} = wp.compose;

const {
	Component
} = wp.element;

const {
	withSelect
} = wp.data;

const withInspectorControls = function( OriginalComponent ) {

	return class extends Component {

		constructor() {
			super( ...arguments );

			this.state = {
				categoriesList: [],
			};
		}

		componentDidMount() {
			this.isStillMounted = true;
			this.fetchRequest = apiFetch( {
				path: addQueryArgs( '/wp-json/wp/v2/categories', CATEGORIES_LIST_QUERY ),
			} ).then(
				( categoriesList ) => {
					if ( this.isStillMounted ) {
						this.setState( { categoriesList } );
					}
				}
			).catch(
				() => {
					if ( this.isStillMounted ) {
						this.setState( { categoriesList: [] } );
					}
				}
			);
		}

		componentWillUnmount() {
			this.isStillMounted = false;
		}

		render() {

			const {
				attributes: {
					displayFeaturedImage,
					displayDate,
					displayContent,
					layoutStyle,
					displayReadMore,
					order,
					orderBy,
					numberOfPosts
				},
				setAttributes,
			} = this.props;

			const {
				categoriesList,
			} = this.state;

			const postsCountOnChange = ( selectedPosts ) => {
				const changedAttributes = { numberOfPosts: selectedPosts };
				setAttributes( changedAttributes );
			};

			return (
				<Fragment>
					<OriginalComponent { ...this.props } />
					<InspectorControls>
						<PanelBody title={ __( 'Display', '__plugin_txtd' ) } initialOpen={ true }>
							<ToggleControl
								label={__( 'Display Image', '__plugin_txtd' )}
								checked={ displayFeaturedImage }
								onChange={() => setAttributes( {displayFeaturedImage: ! displayFeaturedImage} )}
							/>
							<ToggleControl
								label={__( 'Display Date', '__plugin_txtd' )}
								checked={displayDate}
								onChange={() => setAttributes( {displayDate: ! displayDate} )}
							/>
							<ToggleControl
								label={__( 'Display Content', '__plugin_txtd' )}
								checked={displayContent}
								onChange={() => setAttributes( {displayContent: ! displayContent} )}
							/>
							<ToggleControl
								label={__( 'Display Read More', '__plugin_txtd' )}
								checked={displayReadMore}
								onChange={() => setAttributes( {displayReadMore: ! displayReadMore} )}
							/>
						</PanelBody>
						<PanelBody title={ __( 'Sorting', '__plugin_txtd' ) } initialOpen={ true }>
							<QueryControls
								{ ...{ order, orderBy } }
								categoriesList={ categoriesList }
								selectedCategoryId={ categoriesList.categories }
								onOrderChange={ ( value ) => setAttributes( { order: value } ) }
								onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
								onCategoryChange={ ( value ) => setAttributes( { categories: '' !== value ? value : undefined } ) }
							/>
							<RangeControl
								label={ __( 'Number of posts', '__plugin_txtd' ) }
								value={ numberOfPosts }
								onChange={ ( value ) => postsCountOnChange( value ) }
								min={ 1 }
								max={ 100 }
							/>
						</PanelBody>
					</InspectorControls>
				</Fragment>
			)
		}
	}
};

const withQueriedPosts = withSelect( ( select, props ) => {
	const { numberOfPosts, order, orderBy, categories } = props.attributes;
	const { getEntityRecords } = select( 'core' );
	const postsQuery = pickBy( {
		categories,
		order,
		orderby: orderBy,
		per_page: numberOfPosts,
	}, ( value ) => ! isUndefined( value ) );

	let posts = getEntityRecords( 'postType', 'post', postsQuery );

	if ( posts ) {
		posts = posts.map( ( post ) => {
			return {
				...post,
				featured_media_object: post.featured_media && select( 'core' ).getMedia( post.featured_media ),
			};
		} );
	}

	return {
		posts: posts,
	};
} );

export default compose( [
	withInspectorControls,
	withQueriedPosts,
] );
