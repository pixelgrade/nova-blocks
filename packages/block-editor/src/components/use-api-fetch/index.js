import { 
	useState,
	useEffect,
 } from '@wordpress/element';

const { apiFetch: index } = wp;
const cache = {};

const useApiFetch = ( url ) => {
	const [data, setData] = useState( [] );

	useEffect( () => {

		if ( ! url ) {
			return;
		}

		const fetchData = async () => {
			if ( ! cache[ url ] ) {
				cache[ url ] = await index( { path: url } );
			}
			setData( cache[ url ] );
		};

		fetchData();

	}, [ url ] );

	return { data };
};

export default useApiFetch;
