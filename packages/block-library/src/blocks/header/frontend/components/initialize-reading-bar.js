import { above, clamp, onScrollRAF, removeClass, syncColorSignalClasses, hasClass, toggleClass } from "@novablocks/utils";

export const initializeReadingBar = ( header ) => {

  if ( ! hasClass( document.body, 'single-post' ) ) {
    return;
  }

  bindMenuLabelClick( header );

  const firstRow = header.querySelector( '.nb-header-row' );
  const readingBar = document.querySelector( '.js-reading-bar' );
  const progressBar = document.querySelector( '.js-reading-progress' );

  if ( firstRow && readingBar ) {
    readingBar.style.display = 'block';
    firstRow.appendChild( readingBar );
  }

  if ( progressBar ) {
    progressBar.style.display = 'block';
    header.appendChild( progressBar );
  }

  const [ min, max ] = getScrollTriggerBounds();
  let showingReading = false;
  let showingNext = false;

  onScrollRAF( ( newScrollY, oldScrollY ) => {
    const progress = clamp( ( newScrollY - min ) / ( max - min ), 0, 1 );
    const scrollingDown = newScrollY > oldScrollY;
    const showSomething = scrollingDown && newScrollY > min;
    const showReading = showSomething && progress < 0.75;
    const showNext = showSomething && ! showReading;

    if ( showingReading !== showReading ) {
      toggleClass( header, 'nb-header--reading', showReading && above( 'lap' ) );
      showingReading = showReading;
    }

    if ( showingNext !== showNext ) {
      toggleClass( header, 'nb-header--next', showNext && above( 'lap' ) );
      showingNext = showNext;
    }

    if ( progressBar ) {
      progressBar.style.setProperty( '--progress', progress );
    }
  } );
}

const bindMenuLabelClick = ( header ) => {
  const menuButton = document.querySelector( '.js-sticky-menu-trigger' );

  if ( menuButton ) {
    menuButton.addEventListener( 'click', () => {
      removeClass( header, 'nb-header--reading nb-header--next' )
    } );
  }
}

const getScrollTriggerBounds = () => {
  const title = document.querySelector( '.wp-block-post-title, .entry-title' );
  const content = document.querySelector( '.wp-block-post-content, .entry-content, #primary, main' );
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
