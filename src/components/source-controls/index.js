const { apiFetch } = wp;
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { PanelBody, SelectControl } = wp.components;
const { addQueryArgs } = wp.url;

class SourceControls extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			fetchedTypes: false,
			selectedType: 'all',
			types: [],
			fetchedTaxonomies: false,
			selectedTaxonomy: 'all',
			taxonomies: [],
			fetchedTerms: false,
			selectedTerm: 'all',
			terms: [],
		};
	}

	componentDidMount() {
		this.isStillMounted = true;

		if ( ! this.state.fetchedTypes ) {
			this.fetchTypes();
		}
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	fetchTypes() {
		this.fetchTypesRequest = apiFetch( {
			path: addQueryArgs( '/wp/v2/types', { per_page: -1 } ),
		} ).then( types => {
			const excludeTypes = [ 'wp_block', 'block_area', 'attachment' ];
			const postTypes = Object.keys( types )
			                        .filter( type => ! excludeTypes.includes( type ) )
			                        .map( type => {
										return {
											slug: type,
											label: types[type].name,
										}
			                        } );

			if ( this.isStillMounted ) {
				this.setState( {
					fetchedTypes: true,
					types: postTypes
				} );
			}
		} ).catch( ( err ) => {
			console.log( err );
		} );
	}

	fetchTaxonomies() {
		this.fetchTaxonomiesRequest = apiFetch( {
			path: addQueryArgs( '/wp/v2/taxonomies', { per_page: -1 } ),
		} ).then( taxonomies => {
			const postTaxonomies = Object.keys( taxonomies )
			                             .map( taxonomy => {
			                             	return {
						                        slug: taxonomy,
						                        label: taxonomies[taxonomy].name,
					                            items_url: taxonomies[taxonomy]['_links']['wp:items'][0]
					                        }
			                             } );

			if ( this.isStillMounted ) {
				this.setState( {
					fetchedTaxonomies: true,
					taxonomies: postTaxonomies
				} );
			}
		} ).catch( ( err ) => {
			console.log( err );
		} );
	}

	fetchTerms() {
		const selectedTaxonomy = this.state.taxonomies.find( taxonomy => {
			console.log( taxonomy.slug, this.state.selectedTaxonomy );
			return this.state.selectedTaxonomy === taxonomy.slug
		} );

		console.log( selectedTaxonomy );
		if ( ! selectedTaxonomy ) {
			return false;
		}

		const url = selectedTaxonomy.items_url;

		this.fetchTermsRequest = apiFetch( {
			path: addQueryArgs( url, { per_page: -1 } ),
		} ).then( terms => {
			const postTerms = Object.keys( terms )
			                        .map( term => {
			                        	return {
			                        		slug: term,
					                        label: terms[term].name,
				                        }
			                        } );

			if ( this.isStillMounted ) {
				this.setState( {
					fetchedTerms: true,
					terms: terms
				} );
			}
		} ).catch( ( err ) => {
			console.log( err );
		} );
	}

	render() {
		return (
			<PanelBody title={ __( 'Source' ) }>
				{
					<SelectControl
						label={ __( 'Post Type' ) }
						value={ this.state.selectedType }
						options={ [{
							slug: 'all',
							label: 'All',
						}, ...this.state.types] }
						onChange={ type => {
							this.setState( {
								selectedType: type,
								selectedTaxonomy: 'all',
								selectedTerm: 'all',
								fetchedTaxonomies: false,
								fetchedTerms: false,
							} );
							this.fetchTaxonomies();
						} }
					/>
				}
				{
					this.state.fetchedTaxonomies &&
					<SelectControl
						label={ __( 'Taxonomy' ) }
						value={ this.state.selectedTaxonomy }
						options={ [{
							slug: 'all',
							label: 'All',
						}, ...this.state.taxonomies] }
						onChange={ taxonomy => {
							this.setState( {
								selectedTaxonomy: taxonomy,
								selectedTerm: 'all',
								fetchedTerms: false,
							} );
							this.fetchTerms();
						} }
					/>
				}
				{
					this.state.fetchedTerms &&
					<SelectControl
						label={ __( 'Terms' ) }
						value={ this.state.selectedTerm }
						options={ [{
							slug: 'all',
							label: 'All',
						}, ...this.state.terms] }
						onChange={ term => {
							this.setState( { selectedTerm: term } );
						} }
					/>
				}
			</PanelBody>
		);
	}
}


export default SourceControls;
