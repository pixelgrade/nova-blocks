(
  function( $, window, undefined ) {

    bulletsInit();

    function bulletsInit() {

      const BLOCK = $( '.supernova' ),
            POSITION_INDICATORS_IS_ENABLED = BLOCK.length > 1 && BLOCK.data( 'position-indicators' ) === 1;

      if ( POSITION_INDICATORS_IS_ENABLED && typeof $.fn.bully !== 'undefined' ) {
        BLOCK.bully();
      }
    }

  }
)( jQuery, window );
