const memoryState = {};
const memoryStateListeners = {};

const hasMemoryStateValue = ( key ) => {
  return Object.prototype.hasOwnProperty.call( memoryState, key );
};

const getMemoryStateValue = ( key, initialState ) => {
  if ( hasMemoryStateValue( key ) ) {
    return memoryState[ key ];
  }

  const value = typeof initialState === 'function' ? initialState() : initialState;

  memoryState[ key ] = value;

  return value;
};

const subscribeToMemoryState = ( key, listener ) => {
  if ( ! memoryStateListeners[ key ] ) {
    memoryStateListeners[ key ] = new Set();
  }

  memoryStateListeners[ key ].add( listener );

  return () => {
    memoryStateListeners[ key ].delete( listener );

    if ( ! memoryStateListeners[ key ].size ) {
      delete memoryStateListeners[ key ];
    }
  };
};

const setMemoryStateValue = ( key, nextState, initialState ) => {
  const previousState = getMemoryStateValue( key, initialState );
  const resolvedNextState = typeof nextState === 'function'
    ? nextState( previousState )
    : nextState;

  memoryState[ key ] = resolvedNextState;

  if ( memoryStateListeners[ key ] ) {
    memoryStateListeners[ key ].forEach( listener => listener( resolvedNextState ) );
  }

  return resolvedNextState;
};

const resetMemoryStateStore = () => {
  Object.keys( memoryState ).forEach( key => delete memoryState[ key ] );
  Object.keys( memoryStateListeners ).forEach( key => delete memoryStateListeners[ key ] );
};

module.exports = {
  getMemoryStateValue,
  resetMemoryStateStore,
  setMemoryStateValue,
  subscribeToMemoryState,
};
