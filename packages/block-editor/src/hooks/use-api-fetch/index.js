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

		if ( cache[ url ] ) {
			setData( cache[ url ] );
		} else {
			index( { path: url } ).then( ( result ) => {
				cache[ url ] = result;
				setData( result );
			} );
		}

	}, [ url ] );

	return { data };
};

export default useApiFetch;
