import apiFetch from '@wordpress/apiFetch';
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { PanelBody, SelectControl } from '@wordpress/components';
import { addQueryArgs } from '@wordpress/url';

class AuthorSelect extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			authors: [],
			fetchedAuthors: false,
			queryArgs: {},
		};
	}

	componentDidMount() {
		this.isStillMounted = true;

		if ( ! this.state.fetchedAuthors ) {
			this.fetchAuthors();
		}
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	fetchAuthors() {
		this.fetchAuthorsRequest = apiFetch( {
			path: addQueryArgs( '/wp/v2/users', { per_page: -1 } ),
		} ).then( authors => {
			if ( this.isStillMounted ) {
				this.setState( {
					fetchedAuthors: true,
					authors: authors,
				} );
			}
		} ).catch( ( err ) => {
			console.log( err );
		} );
	}

	render() {

		const authorOpions = this.state.authors.map( author => {
			return {
				value: author.slug,
				label: author.name,
			}
		} );

		return (
			<SelectControl
				label={ __( 'Author' ) }
				value={ this.state.selectedAuthor }
				options={ [{
					slug: 'all',
					label: 'All',
				}, ...authorOpions] }
				onChange={ author => {
					this.setState( {
						selectedAuthor: author,
						queryArgs: {
							author: author
						}
					}, () => {
					} );
				} }
			/>
		);
	}
}

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

	updateQueryArgs() {
		let url = 'wp/v2/posts';
		let args = {};

		if ( 'post' === this.state.selectedType ) {

			if ( 'category' === this.state.selectedTaxonomy && 'all' !== this.state.selectedTerm ) {
				args[ 'categories' ] = [ this.state.selectedTerm ];
			}

			if ( 'post_tag' === this.state.selectedTaxonomy && 'all' !== this.state.selectedTerm ) {
				args[ 'tags' ] = [ this.state.selectedTerm ];
			}
		}

		if ( 'page' === this.state.selectedType ) {
			url = 'wp/v2/pages';
		}

		console.log( url, args );
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
				<AuthorSelect />
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
							if ( type !== 'all' ) {
								this.fetchTaxonomies();
							}
							this.updateQueryArgs();
						} );
					} }
				/>
				{
					this.state.fetchedTaxonomies && !! taxonomyOptions.length &&
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
								if ( taxonomy !== 'all' ) {
									this.fetchTerms();
								}
								this.updateQueryArgs();
							} );
						} }
					/>
				}
				{
					this.state.fetchedTerms && !! termOptions.length &&
					<SelectControl
						label={ __( 'Terms' ) }
						value={ this.state.selectedTerm }
						options={ [{
							slug: 'all',
							label: 'All',
						}, ...termOptions] }
						onChange={ term => {
							this.setState( {
								selectedTerm: term
							}, () => {
								this.updateQueryArgs();
							} );
						} }
					/>
				}
			</PanelBody>
		);
	}
}

export default SourceControls;
