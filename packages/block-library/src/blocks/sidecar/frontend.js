import { debounce, below } from "@novablocks/utils";

const SIDECARS = document.querySelectorAll( '.novablocks-sidecar:not(.ignore-block)' );

const IS_EDITOR = document.getElementsByTagName( 'body' )[0].classList.contains( 'block-editor-page' );
const BREAK_LEFT_CLASS = 'stop-left';
const BREAK_RIGHT_CLASS = 'stop-right';
const CONTENT_CLASS = '.novablocks-content';
const SIDEBAR_CLASS = '.novablocks-sidebar';
const SIDECAR_CLASS = '.novablocks-sidecar';
const ALIGN_CLASSES = ['alignfull', 'alignwide', 'alignleft', 'alignright'];
const PULL_RIGHT_CLASS = '.pull-right';
const PULL_LEFT_CLASS = '.pull-left';
const SIDEBAR_LEFT_CLASS = 'novablocks-sidecar--sidebar-left';
const HIDDEN_BLOCK_CLASS = 'novablocks-hidden-block';

// There are 3 types of blocks in this system:
// content blocks, sidebar blocks and pulled blocks.
// Pulled blocks can be considered content blocks too,
// because they usually are found in content area.
// However, there are cases when a pulled block
// can overlap with a content block and this is the
// reason why we treat them differently.

const handleSidecarTransformations = function() {

  // We don't need stop classes on mobiles.
  if ( below( 'lap' ) ) {
    return;
  }

  SIDECARS.forEach( sidecar => {

    let content = sidecar.querySelector( CONTENT_CLASS ),
        sidebar = sidecar.querySelector( SIDEBAR_CLASS ),

        pulledBlocks = document.querySelectorAll("[class*='pull-']"),
        contentBlocks = content.children,
        sidebarBlocks = sidebar.children,

        pulledBlocksArray = Array.from(pulledBlocks),
        contentBlocksArray = Array.from(contentBlocks),
        sidebarBlocksArray = Array.from(sidebarBlocks),
        alignedBlocks = contentBlocksArray.filter ( (block) => ALIGN_CLASSES.some( CLASS => block.classList.contains(CLASS) && ! block.classList.contains( SIDECAR_CLASS ) )),
        breakingBlocks = alignedBlocks.concat(pulledBlocksArray),

        SIDEBAR_IS_LEFT = content.parentElement.classList.contains( SIDEBAR_LEFT_CLASS ),

        // Overlapping between content blocks and sidebar blocks.
        overlappingBlocks = generateOverlappingBlocks( breakingBlocks, sidebarBlocksArray );

    addStopClasses( overlappingBlocks, SIDEBAR_IS_LEFT );
  } )
}

const addStopClasses = ( overlappingBlocks, SIDEBAR_IS_LEFT ) => {

  overlappingBlocks.forEach( block => {

    let noCollisionClass = SIDEBAR_IS_LEFT ? BREAK_LEFT_CLASS : BREAK_RIGHT_CLASS;

    if ( block.classList.contains( PULL_RIGHT_CLASS ) ) {
      noCollisionClass = BREAK_RIGHT_CLASS;
    }

    if ( block.classList.contains( PULL_LEFT_CLASS ) ) {
      noCollisionClass = BREAK_LEFT_CLASS;
    }

      block.classList.add( noCollisionClass );
  } )
}

const debouncedSidecarTransformations = debounce(handleSidecarTransformations, 200)

// Helper function to check
// if two elements are overlapping
function doesOverlap( elem, collider ) {

  const elemBox = elem.getBoundingClientRect();
  const colliderBox = collider.getBoundingClientRect();

  const overlap = colliderBox.top + colliderBox.height <= elemBox.top ||
                  colliderBox.top >= elemBox.top + elemBox.height;

  return ! overlap;
}

// Helper function to check if two boxes
// are overlapping. This is different compared to doesOverlap()
// because in this case height is not important.
function doBoxesOverlap( box1, box2 ) {

  return ! ( box1.right < box2.left ||
          box1.left > box2.right ||
          box1.bottom < box2.top ||
          box1.top > box2.bottom );
}

// Helper function to generate overlapping blocks,
// based on two areas
// We will create an array with
// blocks from primaryArea that are overlapping with
// blocks from secondaryArea.

function generateOverlappingBlocks(primaryArea, secondaryArea) {

  let array = []

  primaryArea.forEach( primaryAreaBlock => {

    secondaryArea.forEach( secondaryAreaBlock => {

      // Avoid useless iterations.
      if ( array.includes( primaryAreaBlock ) ) {
        return;
      }

      if ( doesOverlap(primaryAreaBlock, secondaryAreaBlock)) {
        array.push(primaryAreaBlock);
      }
    })
  })

  return array;
}

// We want to listen to Content Width setting
// change inside Customizer Preview,
// so we can break wide and full elements
// if there is not enough available space.
function sidecarTransformationsInCustomizer() {

  if ( wp.customize !== undefined ) {
    wp.customize( `${customify.config.options_name}[content_wide_width_addon]`, ( setting ) => {
      setting.bind( value => {
        debouncedSidecarTransformations()
      } );
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
  let blockImages = Array.from(document.querySelectorAll(".novablocks-content > .wp-block-image:not([class*='align'])"));

  blockImages.forEach( block => {

    let image = block.querySelector('figure');
    let classList = image.classList;

    // Add classes to block.
    block.classList.add(...classList);

    // Remove classes from image.
    image.classList.remove(...classList);
  })

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
    if ( ! sidecar.classList.contains( 'last-block-is-sticky' ) ) {
      return;
    }

    const children = Array.from( sidecar.children );

    const content = children.filter( child => child.classList.contains( 'novablocks-content' ) );

    if ( content.length ) {
      const contentBlocks = content[0].children;
      contentBlocksArray = contentBlocksArray.concat( Array.from( contentBlocks ) );
    }

    const sidebar = children.filter( child => child.classList.contains( 'novablocks-sidebar' ) );

    if ( sidebar.length ) {
      const sidebarBlocks = sidebar[0].children;
      const partialSidebarBlocksArray = Array.from( sidebarBlocks );

      if ( partialSidebarBlocksArray.length ) {
        sidebarBlocksArray.push( partialSidebarBlocksArray.pop() );
      }
    }

  } );

  if ( ! sidebarBlocksArray.length ) {
    return;
  }

  const allBlocksArray = contentBlocksArray.concat( sidebarBlocksArray );

  updateBoxDataset( allBlocksArray );

  let scrollY = window.scrollY,
    lastScrollY = -1;

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

if ( ! IS_EDITOR ) {

  window.addEventListener( 'DOMContentLoaded', () => {
    moveImageClassesToBlock();
    handleSidecarTransformations();
    sidecarTransformationsInCustomizer();
    handleOverlappingOnScroll();
  });

  window.addEventListener('resize', debouncedSidecarTransformations );
}
