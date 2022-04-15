export const range = ( min, max ) => {
  const array = [];
  for ( let i = 0; i <= max - min; i++ ) {
    array.push( i + min );
  }
  return array;
};

export const arrayRotate = (arr, count, reverse) => {
  count = count % arr.length;

  for ( let i = 1; i <= count; i++ ) {
    if ( reverse ) {
      arr.unshift( arr.pop() );
    } else {
      arr.push( arr.shift() );
    }
  }

  return arr;
};
