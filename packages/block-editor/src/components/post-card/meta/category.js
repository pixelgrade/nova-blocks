import { useApiFetch } from "../../../index";

const Category = ( props ) => {

	const { data } = useApiFetch( `/wp/v2/categories/${ props.id }` );

	return data?.name || '';

};

export default Category;
