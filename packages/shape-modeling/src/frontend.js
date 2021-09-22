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

	$( '.novablocks-media-composition' ).each( ( i, gallery ) => {
		const $gallery = $( gallery );
		const $gridItems = $gallery.find( '.novablocks-media-composition__grid-item' );
		const $block = $gallery.closest( '[data-blobs-enable-mask], [data-blobs-enable-decoration]' );
		const attributes = $block.data();

		$gridItems.each( ( j, gridItem ) => {
			const $gridItem = $( gridItem );
			const $mediaWrap = $gridItem.find( '.novablocks-media-composition__grid-item-media' );
			const $media = $mediaWrap.children();

			const newAttributes = Object.assign( {}, attributes, {
				blobPatternSeed: attributes.blobPatternSeed + j,
				blobMaskPatternSeed: attributes.blobMaskPatternSeed + j
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

			$media.wrap( '<div class="blob-mix">' );
			$media.wrap( '<div class="novablocks-media-composition__grid-item-mask blob-mix__media"> ');
			$media.wrap( '<div class="' + blobMaskClassname + '">' );

			const $blobMix = $media.closest( '.blob-mix' );
			const $blobMixMedia = $media.closest( '.blob-mix__media' );
			const $blobMixMask = $media.closest( '.blob-mix__mask' );

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

} );
