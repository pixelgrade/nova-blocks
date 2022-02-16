import { addClass, hasClass, getFirstChild, getColorSetClasses, toggleClasses, toggleLightClasses } from '@novablocks/utils';

class HeaderColors {

  constructor( element, initialColorsSource, transparentColorsSource ) {
    this.element = element;
    this.initialColorsSource = initialColorsSource ? initialColorsSource : element;
    this.transparentColorsSource = transparentColorsSource ? transparentColorsSource : this.getFirstUsefulBlock();

    console.log( element, this.initialColorsSource, this.transparentColorsSource );

    this.initializeColors();
  }

  getFirstBlock() {
    const content = document.querySelector( '.site-main .hentry' );

    if ( !content ) {
      return null;
    }

    const firstBlock = getFirstChild( content );

    if ( hasClass( firstBlock, 'nb-sidecar' ) ) {
      const wrapper = firstBlock.querySelector( '.nb-sidecar-area--content' );

      if ( !wrapper ) {
        return firstBlock;
      }

      return getFirstChild( wrapper );
    }

    return null;
  }

  getFirstUsefulBlock() {
    const firstBlock = this.getFirstBlock();

    if ( !firstBlock ) {
      return null;
    }

    const attributes = firstBlock.dataset;

    if ( !hasClass( firstBlock, 'alignfull' ) ) {
      return null;
    }

    if ( hasClass( firstBlock, 'supernova' ) &&
         parseInt( attributes.imagePadding, 10 ) === 0 &&
         attributes.cardLayout === 'stacked' &&
         !firstBlock.querySelector( '.nb-collection__header' ) ) {
      return firstBlock.querySelector( '.supernova-item' );
    }

    return firstBlock;
  }

  initializeColors() {
    this.initialColorClasses = getColorSetClasses( this.initialColorsSource ).join( ' ' );
    this.transparentColorClasses = this.initialColorClasses;

    if ( this.transparentColorsSource ) {
      this.transparentColorClasses = getColorSetClasses( this.transparentColorsSource ).join( ' ' );
    } else {
      this.transparentColorClasses = 'sm-palette-1 sm-variation-1';
    }

    this.transparentColorClasses = `${ this.transparentColorClasses }`;
  }

  toggleColors( isTransparent ) {
    toggleClasses( this.element, isTransparent ? this.transparentColorClasses : this.initialColorClasses );
    console.log( this.element, isTransparent, this.transparentColorClasses, this.initialColorClasses );
//    toggleLightClasses( this.element );
  }
}

export default HeaderColors;
