export const defaultSnapValues = {
  x: [0, 0.5, 1],
  y: [0, 0.5, 1]
};

export const maybeSnapFocalPoint = function( focalPoint, snapValues = defaultSnapValues ) {
  let x = parseFloat( focalPoint.x );
  let y = parseFloat( focalPoint.y );
  let thereshold = 0.05;

  snapValues.x.forEach( snapValue => {
    if ( snapValue - thereshold < x && x < snapValue + thereshold ) {
      x = snapValue;
    }
  } );

  snapValues.y.forEach( snapValue => {
    if ( snapValue - thereshold < y && y < snapValue + thereshold ) {
      y = snapValue;
    }
  } );

  return { x, y }
};

export const getSnapClassname = focalPoint => {
  const classNames = [];

  if ( defaultSnapValues.x.includes( parseFloat( focalPoint.x ) ) ) {
    classNames.push( 'is-snapped-x' );
  }

  if ( defaultSnapValues.y.includes( parseFloat( focalPoint.y ) ) ) {
    classNames.push( 'is-snapped-y' );
  }

  return classNames.join( ' ' );
};
