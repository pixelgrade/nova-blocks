import { above, clamp, onScrollRAF, removeClass, syncColorSignalClasses, toggleClass } from "@novablocks/utils";

export const initializeReadingBar = ( header ) => {
  bindMenuLabelClick( header );

  const progressBar = header.querySelector( '.js-reading-progress' );
  const [ min, max ] = getScrollTriggerBounds();
  let showingReading = false;
  let showingNext = false;

  onScrollRAF( ( newScrollY, oldScrollY ) => {
    const scrollingDown = newScrollY > oldScrollY;
    const showSomething = scrollingDown && newScrollY > min;
    const showReading = showSomething && newScrollY < max;
    const showNext = showSomething && ! showReading;

    if ( showingReading !== showReading ) {
      toggleClass( header, 'site-header--reading', showReading && above( 'lap' ) );
      showingReading = showReading;
    }

    if ( showingNext !== showNext ) {
      toggleClass( header, 'site-header--next', showNext && above( 'lap' ) );
      showingNext = showNext;
    }

    // toggle overflow
//    if ( above( 'lap' ) ) {
//      if ( showSomething ) {
//        // overflow hidden allows animation between header states
//        header.style.overflow = 'hidden';
//      } else {
//        // allow overflow when menu is displayed for submenus to be visible
//        setTimeout( () => {
//          header.style.overflow = '';
//        }, 100 )
//      }
//    } else {
//      header.style.overflow = '';
//    }

    // update progress
    const progress = clamp( ( newScrollY - min ) / ( max - min ), 0, 1 );

    if ( progressBar ) {
      progressBar.style.setProperty( '--progress', progress );
    }
  } );
}

const bindMenuLabelClick = ( header ) => {
  const menuButton = header.querySelector( '.js-sticky-menu-trigger' );

  menuButton.addEventListener( 'click', () => {
    removeClass( header, 'site-header--reading site-header--next' )
  } );
}

const getScrollTriggerBounds = () => {
  const title = document.querySelector( '.entry-title' ); // @todo: too weak
  const content = document.querySelector( '.content-area, #primary, main' ); // @todo: too weak
  const titleBottom = title ? title.offsetTop + title.offsetHeight : content.offsetTop;
  const contentBottom = content ? content.offsetTop + content.offsetHeight : document.body.scrollHeight;

  const ignored = document.querySelector( '.article-header, .post-navigation, .novablocks-conversations' );
  const ignoredHeight = Array.from( ignored ?? [] ).reduce( ( total, element ) => {
    return total + element.offsetHeight;
  }, 0 );

  const min = titleBottom;
  const max = Math.max( min, contentBottom - ignoredHeight - window.innerHeight );

  return [ min, max ];
}
