import { generatePath } from "../utils";
import { addClass, getColorSignalClassnames } from "@novablocks/utils";

export const getShapeDecorationSVG = ( blobAtts ) => {
  const svgPath = generatePath( blobAtts );
  const svg = document.createElementNS( "http://www.w3.org/2000/svg", "svg" );
  const path = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
  addClass( svg, 'blob-mix__decoration' );
  svg.setAttribute( 'viewBox', '0 0 20 20' );
  path.setAttribute( 'd', svgPath );
  svg.appendChild( path );

  return svg;
}

export const getBlobMaskClassname = ( attributes ) => {
  const contentAttributes = Object.assign( {}, attributes, {
    colorSignal: attributes.contentColorSignal,
    paletteVariation: attributes.contentPaletteVariation,
    useSourceColorAsReference: false
  } );

  return `blob-mix__mask ${ getColorSignalClassnames( contentAttributes, true ) }`;
}

export const wrapTarget = ( target, attributes ) => {
  const wrapper1 = document.createElement( 'div' );
  const wrapper2 = document.createElement( 'div' );
  const wrapper3 = document.createElement( 'div' );

  const blobMaskClassname = getBlobMaskClassname( attributes );
  addClass( wrapper1, 'blob-mix' );
  addClass( wrapper2, 'novablocks-media-composition__grid-item-mask blob-mix__media' );
  addClass( wrapper3, blobMaskClassname );

  target.insertAdjacentElement( 'afterend', wrapper1 );
  wrapper1.appendChild( wrapper2 );
  wrapper2.appendChild( wrapper3 );
  wrapper3.appendChild( target );
}
