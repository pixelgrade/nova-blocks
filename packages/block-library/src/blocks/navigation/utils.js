export const addSocialMenuClass = ( container = document ) => {
  const menuItem = container.querySelectorAll( '.novablocks-navigation .menu-item a' );
  const bodyStyle = window.getComputedStyle( document.documentElement );
  const enableSocialIconsProp = bodyStyle.getPropertyValue( '--enable-social-icons' );
  const enableSocialIcons = !! parseInt( enableSocialIconsProp, 10 );

  if ( enableSocialIcons ) {

    menuItem.forEach( function( obj, index ) {
      const elementStyle = window.getComputedStyle( obj );
      const elementIsSocialProp = elementStyle.getPropertyValue( '--is-social' );
      const elementIsSocial = !! parseInt( elementIsSocialProp, 10 );

      if ( elementIsSocial ) {
        obj.parentElement.classList.add( 'social-menu-item' );
      }
    } );
  }
};
