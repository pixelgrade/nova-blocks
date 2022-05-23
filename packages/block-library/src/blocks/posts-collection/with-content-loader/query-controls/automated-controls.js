import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { decodeEntities } from '@wordpress/html-entities';

import { ToggleControl } from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import { AutocompleteTokenField } from "@novablocks/block-editor";

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
			label: decodeEntities( user.name ) || __( '(no name)', '__plugin_txtd' ),
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
			label: decodeEntities( user.name ) || __( '(no name)', '__plugin_txtd' ),
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
			label: decodeEntities( category.name ) || __( '(no title)', '__plugin_txtd' ),
		} ) );
	} );
};

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
			label: decodeEntities( category.name ) || __( '(no title)', '__plugin_txtd' ),
		} ) );
	} );
};

const expandCategories = ( categoryIDs ) => {
	return apiFetch( {
		path: addQueryArgs( '/novablocks/v1/categories', {
			ids: categoryIDs
		} ),
	} )
};

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
			label: decodeEntities( tag.name ) || __( '(no title)', '__plugin_txtd' ),
		} ) );
	} );
};

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
			label: decodeEntities( tag.name ) || __( '(no title)', '__plugin_txtd' ),
		} ) );
	} );
};

const AutomatedControls = ( props ) => {

	const {
		authors,
		categories,
		loadingMode,
		preventDuplicatePosts,
		tags,

		onAuthorsChange,
		onCategoriesChange,
		onPreventDuplicatePostsChange,
		onTagsChange,
	} = props;

	if ( 'automated' !== loadingMode ) {
		return null;
	}

	return [
		<ToggleControl
      key={"prevent-duplicate-posts"}
			label={ __( 'Prevent Duplicate Posts', '__plugin_txtd' ) }
			help={ __( "The posts displayed by other blocks won't show up in this block", '__plugin_txtd' ) }
			checked={ preventDuplicatePosts }
			onChange={ onPreventDuplicatePostsChange }
		/>,
		onAuthorsChange && (
			<AutocompleteTokenField
				key="authors"
				tokens={ authors || [] }
				onChange={ onAuthorsChange }
				fetchSuggestions={ fetchAuthorSuggestions }
				fetchSavedInfo={ fetchSavedAuthors }
				label={ __( 'Authors', '__plugin_txtd' ) }
			/>
		),
		onCategoriesChange && (
			<AutocompleteTokenField
				key="categories"
				tokens={ categories || [] }
				onChange={ ( newCategories ) => {
					expandCategories( newCategories ).then( categories => {
						onCategoriesChange( categories );
					} );
				} }
				fetchSuggestions={ fetchCategorySuggestions }
				fetchSavedInfo={ fetchSavedCategories }
				label={ __( 'Categories', '__plugin_txtd' ) }
			/>
		),
		onTagsChange && (
			<AutocompleteTokenField
				key="tags"
				tokens={ tags || [] }
				onChange={ onTagsChange }
				fetchSuggestions={ fetchTagSuggestions }
				fetchSavedInfo={ fetchSavedTags }
				label={ __( 'Tags', '__plugin_txtd' ) }
			/>
		),
	]
};

export default AutomatedControls;
