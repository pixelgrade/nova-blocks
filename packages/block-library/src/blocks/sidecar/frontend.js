import { debounce, below } from "@novablocks/utils";

const SIDECARS = document.querySelectorAll('.novablocks-sidecar:not(.ignore-block)');
const IS_EDITOR = document.getElementsByTagName('body')[0].classList.contains('block-editor-page');
const BREAK_LEFT_CLASS = 'stop-left';
const BREAK_RIGHT_CLASS = 'stop-right';
const CONTENT_CLASS = '.novablocks-content';
const SIDEBAR_CLASS = '.novablocks-sidebar';
const SIDECAR_CLASS = '.novablocks-sidecar';
const ALIGN_CLASSES = ['alignfull', 'alignwide', 'alignleft', 'alignright'];
const PULL_RIGHT_CLASS = '.pull-right';
const PULL_LEFT_CLASS = '.pull-left';

// There are 3 types of blocks in this system:
// content blocks, sidebar blocks and pulled blocks.
// Pulled blocks can be considered content blocks too,
// because they usually are found in content area.
// However, there are cases when a pulled block
// can overlap with a content block and this is the
// reason why we treat them differently.

const handleSidecarTransformations = function() {

  SIDECARS.forEach( sidecar => {

    // We don't need stop classes on mobiles.
    if ( below( 'lap' ) ) {
      return;
    }

    let content = sidecar.querySelector( CONTENT_CLASS ),
        sidebar = sidecar.querySelector( SIDEBAR_CLASS ),

        pulledBlocks = document.querySelectorAll("[class*='pull-']"),
        contentBlocks = content.children,
        sidebarBlocks = sidebar.children,

        pulledBlocksArray = Array.from(pulledBlocks),
        contentBlocksArray = Array.from(contentBlocks),
        sidebarBlocksArray = Array.from(sidebarBlocks),
        alignedBlocks = contentBlocksArray.filter ( (block) => ALIGN_CLASSES.some( ALIGN_CLASS => block.classList.contains(ALIGN_CLASS) && ! block.classList.contains( SIDECAR_CLASS ) )),
        breakingBlocks = alignedBlocks.concat(pulledBlocksArray),

        sidebarIsLeft = content.parentElement.classList.contains( 'novablocks-sidecar--sidebar-left' ),

        // Overlapping between content blocks and sidebar blocks.
        overlappingBlocks = generateOverlappingBlocks( breakingBlocks, sidebarBlocksArray );

    overlappingBlocks.forEach( block => {

      let noCollisionClass = sidebarIsLeft ? BREAK_LEFT_CLASS : BREAK_RIGHT_CLASS;

      if ( block.classList.contains( PULL_RIGHT_CLASS ) ) {
        noCollisionClass = BREAK_RIGHT_CLASS;
      }

      if ( block.classList.contains( PULL_LEFT_CLASS ) ) {
        noCollisionClass = BREAK_LEFT_CLASS;
      }

      block.classList.add( noCollisionClass );

    } )

    recalculateOverlappedBlocks( sidecar, overlappingBlocks);
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

// Helper function to generate overlapping blocks,
// based on two areas
// We will create an array with
// blocks from secondaryArea that are overlapping with
// blocks from primaryArea.

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


function recalculateOverlappedBlocks( sidecar, blocks ) {

  const hasBreakingClass = Array.from( sidecar.querySelectorAll( '.stop-left:not(.pull-left), .stop-right:not(.pull-right)' ) );

  hasBreakingClass.forEach( block => {

    if ( ! blocks.includes( block ) ) {
      block.classList.remove(BREAK_LEFT_CLASS, BREAK_RIGHT_CLASS);
    }
  } )
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

if ( ! IS_EDITOR ) {

  window.addEventListener( 'DOMContentLoaded', () => {
    moveImageClassesToBlock();
    handleSidecarTransformations();
    sidecarTransformationsInCustomizer();
  });

  window.addEventListener('resize', debouncedSidecarTransformations );
}
