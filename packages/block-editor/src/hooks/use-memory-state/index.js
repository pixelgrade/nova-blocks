import { useEffect, useMemo, useState } from '@wordpress/element';

const {
  getMemoryStateValue,
  setMemoryStateValue,
  subscribeToMemoryState,
} = require( './store' );

const useMemoryState = ( key, initialState ) => {
  const initialValue = useMemo(
    () => getMemoryStateValue( key, initialState ),
    [ key, initialState ]
  );
  const [ state, setState ] = useState( initialValue );

  useEffect( () => {
    setState( getMemoryStateValue( key, initialState ) );

    return subscribeToMemoryState( key, setState );
  }, [ key, initialState ] );

  function onChange( nextState ) {
    setMemoryStateValue( key, nextState, initialState );
  }

  return [ state, onChange ];
};

export default useMemoryState;
