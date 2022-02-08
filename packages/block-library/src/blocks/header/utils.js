export const syncColorSignalClasses = ( from, to ) => {

  if ( to && from ) {

    to.classList.forEach( className => {
      if ( className.indexOf( 'sm-' ) > -1 ) {
        to.classList.remove( className );
      }
    } );

    from.classList.forEach( className => {
      if ( className.indexOf( 'sm-' ) > -1 ) {
        to.classList.add( className );
      }
    } );
  }
};
