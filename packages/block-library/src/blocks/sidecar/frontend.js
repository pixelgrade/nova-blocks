import { debounce, below } from "@novablocks/utils";

const getContentBlocksArray = () => {
  const selector = '.nb-sidecar-area--content > :is( .alignfull, .alignwide, .alignleft, .alignright )';
  const nodelist = document.querySelectorAll( selector );
  return Array.from( nodelist );
}

const SIDECARS = document.querySelectorAll( '.nb-sidecar:not(.ignore-block)' );
const contentBlocks = getContentBlocksArray();

const IS_EDITOR = document.getElementsByTagName( 'body' )[ 0 ].classList.contains( 'block-editor-page' );
const BREAK_LEFT_CLASS = 'break-align-left';
const BREAK_RIGHT_CLASS = 'break-align-right';
const SIDEBAR_LEFT_CLASS = 'nb-sidecar--sidebar-left';
const HIDDEN_BLOCK_CLASS = 'novablocks-hidden-block';

// There are 3 types of blocks in this system:
// content blocks, sidebar blocks and pulled blocks.
// Pulled blocks can be considered content blocks too,
// because they usually are found in content area.
// However, there are cases when a pulled block
// can overlap with a content block and this is the
// reason why we treat them differently.
const handleSidecarTransformations = function() {
  cleanupBreakClasses();

  // We don't need stop classes on mobiles.
  if ( below( 'lap' ) ) {
    return;
  }

  contentBlocks.forEach( block => {
    const sidebarBlocks = getRelevantSidebarBlocks( block );
    const leftSidebarBlocks = sidebarBlocks.filter( obj => obj.side === 'left' ).map( obj => obj.element );
    const rightSidebarBlocks = sidebarBlocks.filter( obj => obj.side === 'right' ).map( obj => obj.element );

    if ( ! leftSidebarBlocks.some( sidebarBlock => wouldOverlap( sidebarBlock, block ) ) ) {
      block.classList.add( BREAK_LEFT_CLASS );
    }

    if ( ! rightSidebarBlocks.some( sidebarBlock => wouldOverlap( sidebarBlock, block ) ) ) {
      block.classList.add( BREAK_RIGHT_CLASS );
    }
  } );
}

const cleanupBreakClasses = () => {
  const breakSelector = `${ BREAK_LEFT_CLASS }, ${ BREAK_RIGHT_CLASS }`;
  const breakNodeList = document.querySelectorAll( breakSelector );
  const breakElementsArray = Array.from( breakNodeList );
  breakElementsArray.forEach( element => element.classList.remove( BREAK_LEFT_CLASS, BREAK_RIGHT_CLASS ) );
}

const getRelevantSidebarBlocks = ( block, sidebarBlocks = [] ) => {
  const sidecar = block.closest( '.nb-sidecar' );

  if ( ! sidecar ) {
    return sidebarBlocks;
  }

  const sidebar = Array.from( sidecar.children ).filter( child => child.classList.contains( 'nb-sidecar-area--sidebar' ) );

  if ( ! sidebar.length ) {
    return sidebarBlocks;
  }

  const newSidebarBlocks = Array.from( sidebar[0].children ).map( element => {
    return {
      element,
      side: sidecar.classList.contains( SIDEBAR_LEFT_CLASS ) ? 'left' : 'right'
    }
  } );

  return getRelevantSidebarBlocks( sidecar.parentNode, sidebarBlocks.concat( newSidebarBlocks ) );
}

const debouncedSidecarTransformations = debounce( handleSidecarTransformations, 200 )

// Helper function to check
// if two elements are overlapping
function wouldOverlap( elem, collider ) {

  const elemBox = elem.getBoundingClientRect();
  const colliderBox = collider.getBoundingClientRect();

  const overlap = colliderBox.top + colliderBox.height <= elemBox.top ||
                  colliderBox.top >= elemBox.top + elemBox.height;

  return !overlap;
}

// Helper function to check if two boxes
// are overlapping. This is different compared to wouldOverlap()
// because in this case height is not important.
function doBoxesOverlap( box1, box2 ) {

  return !( box1.right < box2.left ||
            box1.left > box2.right ||
            box1.bottom < box2.top ||
            box1.top > box2.bottom );
}

// We want to listen to Content Width setting
// change inside Customizer Preview,
// so we can break wide and full elements
// if there is not enough available space.
function sidecarTransformationsInCustomizer() {

  const options = [
    'sm_site_container_width',
    'sm_content_inset',
    'sm_spacing_level'
  ];

  if ( wp.customize !== undefined ) {

    options.forEach( option => {
      wp.customize( option, ( setting ) => {
        setting.bind( value => {
          debouncedSidecarTransformations()
        } );
      } )
    } )
  }
}

// Image Block Current Markup
// <div><figure><img></img></figure</div>
// For Image Block, the align class
// is on figure element, inside the div.
// We need that class to be on div,
// so we are going to alter the markup.
function moveImageClassesToBlock() {

  // Select all Block Images inside Content.
  let blockImages = Array.from( document.querySelectorAll( ".nb-sidecar-area--content > .wp-block-image:not([class*='align'])" ) );

  blockImages.forEach( block => {

    let image = block.querySelector( 'figure' );

    if ( !image ) {
      return;
    }

    let classList = image.classList;

    // Add classes to block.
    block.classList.add( ...classList );

    // Remove classes from image.
    image.classList.remove( ...classList );
  } );

}

// This function will handle sticky block
// behaviour on scroll.

// We are comparing sticky block top and bottom
// with all content blocks, and if overlaps on scroll,
// we are adding a class, which we will use to add opacity.
const handleOverlappingOnScroll = () => {

  // We don't need sticky behaviour on mobiles.
  if ( below( 'lap' ) ) {
    return;
  }

  let contentBlocksArray = [];
  let sidebarBlocksArray = [];

  SIDECARS.forEach( sidecar => {

    // If option for sticky block is not enabled we should stop.
    if ( !sidecar.classList.contains( 'last-block-is-sticky' ) ) {
      return;
    }

    const children = Array.from( sidecar.children );

    const content = children.filter( child => child.classList.contains( 'nb-sidecar-area--content' ) );

    if ( content.length ) {

      let contentBlocks = content[ 0 ].children;
      let contentItemsArray = Array.from( contentBlocks );

      /*
       * We don't want to consider Supernova as overlapping block,
       * but the blocks inside of Supernova. This is because Supernova
       * is always full, to always match the site grid.
       */
      contentItemsArray.forEach( block => {
        if ( block.classList.contains( 'supernova' ) ) {
          const supernovaInsideBlocks = block.children;
          contentBlocksArray = contentBlocksArray.concat( Array.from( supernovaInsideBlocks ) );
        }
      } )

      /*
       * Filter initial array of blocks
       * and remove Supernova from that array.
       */
      const filteredItems = contentItemsArray.filter( block => !block.classList.contains( 'supernova' ) );

      contentBlocksArray = contentBlocksArray.concat( Array.from( filteredItems ) );
    }

    const sidebar = children.filter( child => child.classList.contains( 'nb-sidecar-area--sidebar' ) );

    if ( sidebar.length ) {
      const sidebarBlocks = sidebar[ 0 ].children;
      const partialSidebarBlocksArray = Array.from( sidebarBlocks );

      if ( partialSidebarBlocksArray.length ) {
        sidebarBlocksArray.push( partialSidebarBlocksArray.pop() );
      }
    }

  } );

  if ( !sidebarBlocksArray.length ) {
    return;
  }

  const allBlocksArray = contentBlocksArray.concat( sidebarBlocksArray );

  updateBoxDataset( allBlocksArray );

  let scrollY = window.scrollY,
    lastScrollY = - 1;

  window.addEventListener( 'scroll', () => {
    scrollY = window.scrollY;
  } );

  const updateLoop = () => {

    if ( lastScrollY !== scrollY ) {

      updateBoxDataset( allBlocksArray );

      sidebarBlocksArray.forEach( sidebarBlock => {

        const overlap = contentBlocksArray.some( block => {
          const box1 = JSON.parse( sidebarBlock.dataset.box );
          const box2 = JSON.parse( block.dataset.box );

          return doBoxesOverlap( box1, box2 );
        } );

        if ( overlap ) {
          sidebarBlock.classList.add( HIDDEN_BLOCK_CLASS );
        } else {
          sidebarBlock.classList.remove( HIDDEN_BLOCK_CLASS );
        }

      } );
    }

    lastScrollY = scrollY;

    requestAnimationFrame( updateLoop );
  }

  requestAnimationFrame( updateLoop );
}

const updateBoxDataset = ( blocks ) => {
  blocks.forEach( block => {
    block.dataset.box = JSON.stringify( block.getBoundingClientRect() );
  } );
}

if ( !IS_EDITOR ) {

  window.addEventListener( 'DOMContentLoaded', () => {
    moveImageClassesToBlock();
    handleSidecarTransformations();
    sidecarTransformationsInCustomizer();
    handleOverlappingOnScroll();
  } );

  window.addEventListener( 'resize', debouncedSidecarTransformations );
}
