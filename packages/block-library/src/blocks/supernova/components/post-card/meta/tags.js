import { useApiFetch } from "@novablocks/block-editor";

const Tags = ( props ) => {

	const tags = props.tags.map( id => {
		const { data } = useApiFetch( `/wp/v2/tags/${ id }` );
		return data;
	} );

	return tags.map( tag => tag.name ).join( ', ' ) || '';

};

export default Tags;
