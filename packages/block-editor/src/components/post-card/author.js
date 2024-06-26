import { useApiFetch } from "../../index";

const Author = ( props ) => {

	const { data } = useApiFetch( `/wp/v2/users/${ props.id }` );

	return data?.name || '';

};

export default Author;
