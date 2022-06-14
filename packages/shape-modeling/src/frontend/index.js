import domReady from '@wordpress/dom-ready';

import {
  getAttributes,
  getColorSignalClassnames,
  IS_EDITOR,
  IS_CUSTOMIZER,
  addClass,
} from "@novablocks/utils";

import {
  generatePath,
  getBlobAttsFromAttributes,
  getBlobMaskStyles,
  getBlobStyles,
  getBlobMediaStyles,
  getBlobViewBox
} from "../utils";

import {
  getShapeDecorationSVG,
  wrapTarget,
} from "./utils";

domReady( () => {

  if ( IS_EDITOR || IS_CUSTOMIZER ) {
    return;
  }

  const targets = document.querySelectorAll( '[data-shape-modeling-target]' );

  targets.forEach( target => {
    const seedOffsetData = target.dataset.shapeModelingShapeOffset;
    const seedOffset = seedOffsetData ? parseInt( seedOffsetData, 10 ) : 0;
    const block = target.closest( '[data-blob-sides]' );
    const attributes = getAttributes( block );
    const { blobsEnableMask, blobsEnableDecoration } = attributes;

    const newAttributes = Object.assign( {}, attributes, {
      blobPatternSeed: attributes.blobPatternSeed + seedOffset,
      blobMaskPatternSeed: attributes.blobMaskPatternSeed + seedOffset
    } );

    const blobAtts = getBlobAttsFromAttributes( newAttributes, 'blob' );

    wrapTarget( target, attributes );

    const blobMix = target.closest( '.blob-mix' );
    const blobMixMedia = target.closest( '.blob-mix__media' );
    const blobMixMask = target.closest( '.blob-mix__mask' );

    const blobMixMediaStyles = getBlobMediaStyles( attributes );
    Object.assign( blobMixMedia.style, blobMixMediaStyles );

    if ( !! blobsEnableDecoration ) {
      const svg = getShapeDecorationSVG( blobAtts );
      blobMixMedia.insertAdjacentElement('beforebegin', svg );
    }

    if ( blobsEnableMask ) {
      const blobMaskAtts = getBlobAttsFromAttributes( newAttributes, 'blobMask' );
      const svgMaskPath = generatePath( blobMaskAtts );
      const blobMixMaskStyles = getBlobMaskStyles( svgMaskPath, getBlobViewBox( attributes ) );
      Object.assign( blobMixMask.style, blobMixMaskStyles );
    }

    const blobMixStyles = getBlobStyles( attributes );

    Object.keys( blobMixStyles ).forEach( key => {
      blobMix.style.setProperty( key, blobMixStyles[ key ] );
    } );

  } );

} );


