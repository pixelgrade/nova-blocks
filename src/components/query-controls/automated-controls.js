const { QueryControls } = wp.components;
const apiFetch = wp.apiFetch;
const { addQueryArgs } = wp.url;
const { decodeEntities } = wp.htmlEntities;

const { __ } = wp.i18n;
import AutocompleteTokenField from "../autocomplete-tokenfield";

const fetchAuthorSuggestions = ( search ) => {
	return apiFetch( {
		path: addQueryArgs( '/wp/v2/users', {
			search,
			per_page: 20,
			_fields: 'id,name',
		} ),
	} ).then( function( users ) {
		return users.map( user => ( {
			value: user.id,
			label: decodeEntities( user.name ) || __( '(no name)' ),
		} ) );
	} );
};

const fetchSavedAuthors = ( userIDs ) => {
	return apiFetch( {
		path: addQueryArgs( '/wp/v2/users', {
			per_page: 100,
			include: userIDs.join( ',' ),
			_fields: 'id,name',
		} ),
	} ).then( function( users ) {
		return users.map( user => ( {
			value: user.id,
			label: decodeEntities( user.name ) || __( '(no name)' ),
		} ) );
	} );
};

const fetchCategorySuggestions = ( search ) => {
	return apiFetch( {
		path: addQueryArgs( '/wp/v2/categories', {
			search,
			per_page: 20,
			_fields: 'id,name',
			orderby: 'count',
			order: 'desc',
		} ),
	} ).then( function( categories ) {
		return categories.map( category => ( {
			value: category.id,
			label: decodeEntities( category.name ) || __( '(no title)' ),
		} ) );
	} );
}

const fetchSavedCategories = ( categoryIDs ) => {
	return apiFetch( {
		path: addQueryArgs( '/wp/v2/categories', {
			per_page: 100,
			_fields: 'id,name',
			include: categoryIDs.join( ',' ),
		} ),
	} ).then( function( categories ) {
		return categories.map( category => ( {
			value: category.id,
			label: decodeEntities( category.name ) || __( '(no title)' ),
		} ) );
	} );
}

const fetchTagSuggestions = ( search ) => {
	return apiFetch( {
		path: addQueryArgs( '/wp/v2/tags', {
			search,
			per_page: 20,
			_fields: 'id,name',
			orderby: 'count',
			order: 'desc',
		} ),
	} ).then( function( tags ) {
		return tags.map( tag => ( {
			value: tag.id,
			label: decodeEntities( tag.name ) || __( '(no title)' ),
		} ) );
	} );
}

const fetchSavedTags = ( tagIDs ) => {
	return apiFetch( {
		path: addQueryArgs( '/wp/v2/tags', {
			per_page: 100,
			_fields: 'id,name',
			include: tagIDs.join( ',' ),
		} ),
	} ).then( function( tags ) {
		return tags.map( tag => ( {
			value: tag.id,
			label: decodeEntities( tag.name ) || __( '(no title)' ),
		} ) );
	} );
}

const AutomatedControls = ( props ) => {

	const {
		authors,
		onAuthorsChange,
		categories,
		onCategoriesChange,
		tags,
		onTagsChange,
		loadingMode,
	} = props;

	if ( 'automated' !== loadingMode ) {
		return null;
	}

	return [
		<QueryControls key="queryControls" { ...props } />,
		onAuthorsChange && (
			<AutocompleteTokenField
				key="authors"
				tokens={ authors || [] }
				onChange={ onAuthorsChange }
				fetchSuggestions={ fetchAuthorSuggestions }
				fetchSavedInfo={ fetchSavedAuthors }
				label={ __( 'Authors' ) }
			/>
		),
		onCategoriesChange && (
			<AutocompleteTokenField
				key="categories"
				tokens={ categories || [] }
				onChange={ onCategoriesChange }
				fetchSuggestions={ fetchCategorySuggestions }
				fetchSavedInfo={ fetchSavedCategories }
				label={ __( 'Categories' ) }
			/>
		),
		onTagsChange && (
			<AutocompleteTokenField
				key="tags"
				tokens={ tags || [] }
				onChange={ onTagsChange }
				fetchSuggestions={ fetchTagSuggestions }
				fetchSavedInfo={ fetchSavedTags }
				label={ __( 'Tags' ) }
			/>
		),
	]
}

export default AutomatedControls;
