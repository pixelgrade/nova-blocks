export const addSocialMenuClass = ( container = document ) => {
  const doc = container?.ownerDocument || container || document;
  const win = doc.defaultView || window;

  const menuItem = container.querySelectorAll( '.nb-navigation .menu-item a' );
  const bodyStyle = win.getComputedStyle( doc.documentElement );
  const enableSocialIconsProp = bodyStyle.getPropertyValue( '--enable-social-icons' );
  const enableSocialIcons = !! parseInt( enableSocialIconsProp, 10 );

  if ( enableSocialIcons ) {

    menuItem.forEach( function( obj ) {
      const elementStyle = win.getComputedStyle( obj );
      const elementIsSocialProp = elementStyle.getPropertyValue( '--is-social' );
      const elementIsSocial = !! parseInt( elementIsSocialProp, 10 );

      if ( elementIsSocial ) {
        obj.parentElement.classList.add( 'social-menu-item' );
      }
    } );
  }
};
