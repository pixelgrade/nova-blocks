export const getRandomBetween = ( min, max ) => {
  const random = Math.max(0, Math.random() - Number.MIN_VALUE );
  return Math.floor( random * (max - min + 1) + min );
};

export const getRandomArrayFromArray = ( arr, n ) => {

  let result = new Array( n ),
    len = arr.length,
    taken = new Array( len );

  if ( ! len ) {
    return [];
  }

  while ( n -- ) {
    const x = Math.floor( Math.random() * len );
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = -- len in taken ? taken[len] : len;
  }

  return result;
};

export const getRandomFromArray = ( arr ) => {
  const array = getRandomArrayFromArray( arr, 1 );
  return array[0];
};

export const getRandomBooleanValue = () => {
  return getRandomArrayFromArray( [ true, false ], 1 )[0];
};
