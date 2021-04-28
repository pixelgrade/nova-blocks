import { debounce, below } from "@novablocks/utils";

const sidecars = document.querySelectorAll(".novablocks-sidecar");
const BREAK_LEFT_CLASS = "stop-left";
const BREAK_RIGHT_CLASS = "stop-right";

const IS_WORDPRESS_CUSTOMIZE_PREVIEW = wp !== undefined && wp.customize !== undefined;

// Select all block inside the sidebar and create array,
// to avoid doing that for every block inside the content.
const sidebarBlocks = Array.from(document.querySelectorAll( ".novablocks-sidebar" )).flatMap(sideBlock => Array.from(sideBlock.children));

const handleSidecarTransformations  = function() {

  sidecars.forEach( sidecar => {

    let content = sidecar.querySelector( ".novablocks-content" ),
      sidebars = sidecar.querySelectorAll( ".novablocks-sidebar" ),
      layoutIsComplex = sidecar.classList.contains( 'novablocks-sidecar--complex' ),
      pulledBlocks = Array.from(content.children).filter(block => block.classList.contains('align-pull-right') || block.classList.contains('align-pull-left')),
      alignedBlocks = Array.from(content.children).filter(block => (block.classList.contains('alignfull') || block.classList.contains('alignwide')) && ! block.classList.contains('novablocks-sidecar'));

    // We don't need break classes on mobiles,
    // on sidecars without sidebar,
    // or on sidecars which are ignoring breaking.
    if ( below( 'lap' ) ) {
      return;
    }

    let contentBlocks = alignedBlocks.concat(pulledBlocks),
      sidebarIsLeft = content.parentElement.classList.contains( 'novablocks-sidecar--sidebar-left' ),
      sidecarIsNested = sidecar.parentElement.classList.contains( 'novablocks-content' ) && ! sidecar.parentElement.parentElement.classList.contains('ignore-block'),
      noCollisionClass = sidebarIsLeft && !sidecarIsNested ? BREAK_LEFT_CLASS : BREAK_RIGHT_CLASS;

    contentBlocks.forEach( block => {

      sidebarBlocks.forEach( ( sidebarBlock, index ) => {

        if ( layoutIsComplex && index === 0 ) {
          noCollisionClass = BREAK_LEFT_CLASS;
        }

        if ( block.classList.contains('align-pull-right')) {
          noCollisionClass = BREAK_RIGHT_CLASS;
        }

        if ( block.classList.contains('align-pull-left')) {
          noCollisionClass = BREAK_LEFT_CLASS;
        }

        const overlap = doesOverlap( block, sidebarBlock );

        if ( overlap ) {
          block.classList.add( noCollisionClass );
        }

        if ( ! overlap && block.classList.contains(noCollisionClass) ) {
          block.classList.remove(noCollisionClass);
        }
      } )
    } )

    // When sidebar does not exist,
    // we are going to give priority to pulled blocks,
    // in front of wide and aligned blocks.
    // If a pulled block will overlap with a full or wide block,
    // the pulled block will take the space, while the full or wide block,
    // will stop right before the pulled block.
    if ( ! sidebars.length ) {

      alignedBlocks.forEach( block => {

        pulledBlocks.forEach( (pulledBlock, index) => {

          let noCollisionClass = pulledBlock.classList.contains('align-pull-left') ? BREAK_LEFT_CLASS : BREAK_RIGHT_CLASS;

          const overlap = doesOverlap( block, pulledBlock );

          if ( overlap ) {
            block.classList.add( noCollisionClass );
          }

          if ( ! overlap && block.classList.contains(noCollisionClass) ) {
            block.classList.remove(noCollisionClass);
          }
        })
      })
    }
  } )
}

const debouncedSidecarTransformations = debounce(handleSidecarTransformations, 200)

window.addEventListener('DOMContentLoaded', handleSidecarTransformations);
window.addEventListener('resize', debouncedSidecarTransformations );

// Helper function to check
// if two elements are overlapping
function doesOverlap( elem, collider ) {

  const elemBox = elem.getBoundingClientRect();
  const colliderBox = collider.getBoundingClientRect();

  const overlap = colliderBox.top + colliderBox.height <= elemBox.top ||
                  colliderBox.top >= elemBox.top + elemBox.height;

  return ! overlap;
}

if ( IS_WORDPRESS_CUSTOMIZE_PREVIEW ) {
  // We want to listen to Content Width setting change,
  // so we can break wide and full elements
  // if there is not enough available space.
  wp.customize( `${customify.config.options_name}[content_width]`, ( setting ) => {
    setting.bind( value => {
      debouncedSidecarTransformations()
    } );
  } )
}

