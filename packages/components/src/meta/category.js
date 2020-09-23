import { useApiFetch } from "@novablocks/utils";

const Category = ( props ) => {

	const { data } = useApiFetch( `/wp/v2/categories/${ props.id }` );

	return data?.name || '';

};

export default Category;
