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
			if ( this.isStillMounted ) {
				this.setState( {
					fetchedTypes: true,
					types: types
				} );
			}
		} ).catch( ( err ) => {
			console.log( err );
		} );
	}

	fetchTaxonomies() {
		this.fetchTaxonomiesRequest = apiFetch( {
			path: addQueryArgs( '/wp/v2/taxonomies', {
				per_page: -1,
				type: this.state.selectedType
			} ),
		} ).then( taxonomies => {
			if ( this.isStillMounted ) {
				this.setState( {
					fetchedTaxonomies: true,
					taxonomies: taxonomies
				} );
			}
		} ).catch( ( err ) => {
			console.log( err );
		} );
	}

	fetchTerms() {
		const { taxonomies, selectedTaxonomy } = this.state;
		const taxonomy = taxonomies[ selectedTaxonomy ];

		if ( ! taxonomy ) {
			return false;
		}

		const url = taxonomy['_links']['wp:items'][0]['href'];

		this.fetchTermsRequest = apiFetch( {
			url: addQueryArgs( url, { per_page: -1 } ),
		} ).then( terms => {
			const postTerms = Object.keys( terms )
			                        .map( term => {
			                        	return {
			                        		value: term,
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

		const excludeTypes = [ 'wp_block', 'block_area', 'attachment' ];

		const typeOptions = Object.keys( this.state.types )
		                          .filter( type => !excludeTypes.includes( type ) )
		                          .map( type => {
			                          return {
				                          value: type,
				                          label: this.state.types[type].name,
			                          }
		                          } );

		const taxonomyOptions = Object.keys( this.state.taxonomies )
		                              .map( taxonomy => {
			                              return {
				                              value: taxonomy,
				                              label: this.state.taxonomies[taxonomy].name
			                              }
		                              } );

		const termOptions = this.state.terms.map( term => {
			return {
				value: term.slug,
				label: term.name,
			}
		} );

		return (
			<PanelBody title={ __( 'Source' ) }>
				{
					<SelectControl
						label={ __( 'Post Type' ) }
						value={ this.state.selectedType }
						options={ [{
							slug: 'all',
							label: 'All',
						}, ...typeOptions] }
						onChange={ type => {
							this.setState( {
								selectedType: type,
								selectedTaxonomy: 'all',
								selectedTerm: 'all',
								fetchedTaxonomies: false,
								fetchedTerms: false,
							}, () => {
								this.fetchTaxonomies();
							} );
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
						}, ...taxonomyOptions] }
						onChange={ taxonomy => {
							this.setState( {
								selectedTaxonomy: taxonomy,
								selectedTerm: 'all',
								fetchedTerms: false,
							}, () => {
								this.fetchTerms();
							} );
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
						}, ...termOptions] }
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
