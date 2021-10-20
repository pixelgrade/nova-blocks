import $ from 'jquery';

import { getColorSignalClassnames } from "@novablocks/utils";

import {
	generatePath,
	getBlobAttsFromAttributes,
	getBlobMaskStyles,
	getBlobStyles,
	getBlobViewBox
} from "./utils";

$( function() {

//  .js-shape-modeling-target
  $( '[data-shape-modeling-target]' ).each( ( i, target ) => {
    const $target = $( target );
    const seedOffsetData = $target.data( 'shape-modeling-shape-offset' );
    const seedOffset = seedOffsetData ? parseInt( seedOffsetData, 10 ) : 0;
		const $block = $target.closest( '[data-blob-sides]' );
		const attributes = $block.data();

		if ( ! attributes ) {
		  return;
    }

    const newAttributes = Object.assign( {}, attributes, {
      blobPatternSeed: attributes.blobPatternSeed + seedOffset,
      blobMaskPatternSeed: attributes.blobMaskPatternSeed + seedOffset
    } );

    const { blobsEnableMask, blobsEnableDecoration } = attributes;

    const blobAtts = getBlobAttsFromAttributes( newAttributes, 'blob' );
    const svgPath = generatePath( blobAtts );

    const blobMaskAtts = getBlobAttsFromAttributes( newAttributes, 'blobMask' );
    const svgMaskPath = generatePath( blobMaskAtts );

    const contentAttributes = Object.assign( {}, attributes, {
      colorSignal: attributes.contentColorSignal,
      paletteVariation: attributes.contentPaletteVariation,
      useSourceColorAsReference: false
    } );

    const blobMaskClassname = `blob-mix__mask ${ getColorSignalClassnames( contentAttributes, true ) }`;

    $target.wrap( '<div class="blob-mix">' );
    $target.wrap( '<div class="novablocks-media-composition__grid-item-mask blob-mix__media"> ');
    $target.wrap( '<div class="' + blobMaskClassname + '">' );

    const $blobMix = $target.closest( '.blob-mix' );
    const $blobMixMedia = $target.closest( '.blob-mix__media' );
    const $blobMixMask = $target.closest( '.blob-mix__mask' );

    const $svg = $( '<svg class="blob-mix__decoration" viewBox="0 0 20 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" version="1.1">' );
    const path = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
    path.setAttribute( 'd', svgPath );
    $svg[0].appendChild( path );

    if ( !! blobsEnableDecoration ) {
      $svg.insertBefore( $blobMixMedia );
    }

    $blobMixMask.css( blobsEnableMask ? getBlobMaskStyles( svgMaskPath, getBlobViewBox( attributes ) ) : {} );

    const blobMixStyles = getBlobStyles( attributes );

    Object.keys( blobMixStyles ).forEach( key => {
      $blobMix[0].style.setProperty( key, blobMixStyles[ key ] );
    } );
  } );

} );
