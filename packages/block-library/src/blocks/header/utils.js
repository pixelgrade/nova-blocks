import { addClass } from "@novablocks/utils";

export const getColorSetClasses = ( element ) => {
  const classAttr = element?.getAttribute( 'class' );

  if ( ! classAttr ) {
    return [];
  }

  const classes = classAttr.split( /\s+/ );

  return classes.filter( classname => {
    return classname.includes( 'sm-color-signal-' ) ||
           classname.includes( 'sm-palette-' ) ||
           classname.includes( 'sm-variation-' ) ||
           classname.includes( 'sm-dark' ) ||
           classname.includes( 'sm-light' );
  } );
};

export const toggleClasses = ( element, classesToAdd = '' ) => {

  const prefixes = [
    'sm-palette-',
    'sm-variation-',
    'sm-color-signal-',
    'sm-dark',
    'sm-light',
  ];

  const classesToRemove = Array.from( element.classList ).filter( classname => {
    return prefixes.some( prefix => classname.indexOf( prefix ) > -1 );
  } );

  element.classList.remove( ...classesToRemove );

  addClass( element, classesToAdd );
};
