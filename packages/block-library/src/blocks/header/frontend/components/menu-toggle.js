class MenuToggle {

  constructor ( input, options ) {
    const id = input.getAttribute( 'id' );
    const toggleLabels = document.querySelectorAll( `[for="${ id }"]` );
    const defaults = {
      onChange: this.onChange
    };

    this.options = Object.assign( {}, defaults, options );
    this.input = input;
    this.element = toggleLabels.length ? toggleLabels[0] : null;

    this.bindEvents();
  }

  bindEvents () {
    this.input.addEventListener( 'change', event => {
      this.options.onChange.call( this, event, this );
    } );
  }

  onChange ( isChecked, menuToggle ) {

  }

  getHeight () {
    return this?.element?.offsetHeight || 0;
  }
}

export default MenuToggle;
