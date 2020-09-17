const {
	useState,
	useEffect,
} = wp.element;

const { apiFetch } = wp;
const cache = {};

const useApiFetch = ( url ) => {
	const [data, setData] = useState( [] );

	useEffect( () => {

		if ( ! url ) {
			return;
		}

		const fetchData = async () => {
			if ( ! cache[ url ] ) {
				cache[ url ] = await apiFetch( { path: url } );
			}
			setData( cache[ url ] );
		};

		fetchData();

	}, [ url ] );

	return { data };
};

export default useApiFetch;
