const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );

const {
  getMemoryStateValue,
  resetMemoryStateStore,
  setMemoryStateValue,
  subscribeToMemoryState,
} = require( './store' );

test( 'initializes a key once and reuses the stored value', () => {
  resetMemoryStateStore();

  assert.equal( getMemoryStateValue( 'drawerActiveId', 'space-and-sizing' ), 'space-and-sizing' );
  assert.equal( getMemoryStateValue( 'drawerActiveId', 'colors' ), 'space-and-sizing' );
} );

test( 'notifies subscribers when a key changes', () => {
  resetMemoryStateStore();

  const seenStates = [];
  const unsubscribe = subscribeToMemoryState( 'drawerActiveId', nextState => {
    seenStates.push( nextState );
  } );

  setMemoryStateValue( 'drawerActiveId', 'space-and-sizing' );
  setMemoryStateValue( 'drawerActiveId', 'colors' );
  unsubscribe();
  setMemoryStateValue( 'drawerActiveId', 'advanced' );

  assert.deepEqual( seenStates, [ 'space-and-sizing', 'colors' ] );
} );

test( 'supports updater functions with the latest shared state', () => {
  resetMemoryStateStore();

  setMemoryStateValue( 'drawerHeight', 100 );

  assert.equal(
    setMemoryStateValue( 'drawerHeight', previousHeight => previousHeight + 24 ),
    124
  );
} );
