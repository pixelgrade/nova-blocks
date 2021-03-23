import useApiFetch from "../../../../use-api-fetch";

const Category = ( props ) => {

	const { data } = useApiFetch( `/wp/v2/categories/${ props.id }` );

	return data?.name || '';

};

export default Category;
