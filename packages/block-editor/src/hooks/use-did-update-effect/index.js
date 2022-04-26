import React, { useEffect, useRef } from 'react';

const useDidUpdateEffect = ( fn, inputs ) => {
  const didMountRef = useRef( false );

  useEffect( () => {
    if ( didMountRef.current ) {
      fn();
    } else {
      didMountRef.current = true;
    }
  }, inputs );
};

export default useDidUpdateEffect;
