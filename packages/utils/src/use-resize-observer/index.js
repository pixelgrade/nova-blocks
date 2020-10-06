const {
	useRef,
	useLayoutEffect,
	useState,
	useCallback,
} = wp.element;

const useResizeObserver = () => {
	const [entry, setEntry] = useState( {} );
	const [node, setNode] = useState( null );
	const observer = useRef( null );

	const disconnect = useCallback( () => {
		const {current} = observer;
		current && current.disconnect();
	}, [] );

	const observe = useCallback( () => {
		observer.current = new ResizeObserver( ( [entry] ) => setEntry( entry ) );
		node && observer.current.observe( node );
	}, [node] );

	useLayoutEffect( () => {
		observe();
		return () => disconnect();
	}, [disconnect, observe] );

	return [setNode, entry];
};

export default useResizeObserver;
