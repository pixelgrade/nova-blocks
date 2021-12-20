import { colord } from 'colord';

export const getValuesFromColors = ( colors = [] ) => {
  const values = { r: [], g: [], b: [], a: [] };

  colors.forEach( ( color ) => {
    const rgbColor = colord( color ).toRgb();
    values.r.push( rgbColor.r / 255 );
    values.g.push( rgbColor.g / 255 );
    values.b.push( rgbColor.b / 255 );
    values.a.push( rgbColor.a );
  } );

  return values;
}

export const getDuotoneFilterSvg = ( colors, id ) => {
  const values = getValuesFromColors( colors );

  return (
    `<svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 0 0"
      width="0"
      height="0"
      focusable="false"
      role="none"
    >
      <defs>
        <filter id="${ id }" color-interpolation-filters="sRGB">
          <feColorMatrix type="matrix" values="
              .33 .33 .33 0 0
              .33 .33 .33 0 0
              .33 .33 .33 0 0
              .33 .33 .33 1 0" 
          />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="${ values.r.join( ' ' ) }" />
            <feFuncG type="table" tableValues="${ values.g.join( ' ' ) }" />
            <feFuncB type="table" tableValues="${ values.b.join( ' ' ) }" />
            <feFuncA type="table" tableValues="${ values.a.join( ' ' ) }" />
          </feComponentTransfer>
          <feComposite
            in2="SourceGraphic"
            operator="in"
          />
        </filter>
      </defs>
    </svg>`
  )
}
