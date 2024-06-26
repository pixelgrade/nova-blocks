import { AutocompleteTokenField } from "../index";

import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { decodeEntities } from '@wordpress/html-entities';
import { __ } from '@wordpress/i18n';

const fetchPostSuggestions = ( search ) => {
	return apiFetch( {
		path: addQueryArgs( '/wp/v2/search', {
			search,
			per_page: 20,
			_fields: 'id,title',
			type: 'post',
		} ),
	} ).then( function( posts ) {
		return posts.map( post => ( {
			value: post.id,
			label: decodeEntities( post.title ) || __( '(no title)' ),
		} ) );
	} );
};

const fetchSavedPosts = ( postIDs ) => {
	return apiFetch( {
		path: addQueryArgs( '/wp/v2/posts', {
			per_page: 100,
			include: postIDs.join( ',' ),
			_fields: 'id,title',
		} ),
	} ).then( function( posts ) {
		return posts.map( post => ( {
			value: post.id,
			label: decodeEntities( post.title.rendered ) || __( '(no title)' ),
		} ) );
	} );
};

const ManualControls = ( props ) => {

	const {
		loadingMode,
		specificPosts,
		onSpecificPostsChange,
	} = props;

	if ( 'manual' !== loadingMode ) {
		return null;
	}

	return (
		<AutocompleteTokenField
			key="posts"
			tokens={ specificPosts || [] }
			onChange={ onSpecificPostsChange }
			fetchSuggestions={ fetchPostSuggestions }
			fetchSavedInfo={ fetchSavedPosts }
			label={ __( 'Posts' ) }
			help={ __( 'Begin typing post title, click autocomplete result to select.' ) }
		/>
	)
}

export default ManualControls;
