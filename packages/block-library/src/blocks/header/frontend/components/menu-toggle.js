const sharedEscapeControllerKey = '__novablocksMenuToggleEscapeController';

const registerCurrentMenuToggle = menuToggle => {
  if ( !window[ sharedEscapeControllerKey ] ) {
    const controller = {
      current: null,
      onKeyDown: event => {
        controller.current?.onEscape( event );
      }
    };

    document.addEventListener( 'keydown', controller.onKeyDown );
    window[ sharedEscapeControllerKey ] = controller;
  }

  window[ sharedEscapeControllerKey ].current = menuToggle;
};

class MenuToggle {

  constructor ( input, options ) {
    const id = input.getAttribute( 'id' );
    const toggleLabels = document.querySelectorAll( `[for="${ id }"]` );
    const toggleButtons = document.querySelectorAll( `[data-menu-toggle-checkbox="${ id }"]` );
    const defaults = {
      onChange: this.onChange
    };

    this.options = Object.assign( {}, defaults, options );
    this.input = input;
    this.element = toggleButtons.length ? toggleButtons[0] : toggleLabels[0] || null;

    this.bindEvents();
    this.syncExpandedState();
    registerCurrentMenuToggle( this );
  }

  bindEvents () {
    this.input.addEventListener( 'change', event => {
      this.syncExpandedState();
      this.options.onChange.call( this, event, this );
    } );

    if ( this.element?.tagName === 'BUTTON' ) {
      this.element.addEventListener( 'click', event => {
        event.preventDefault();
        this.setChecked( !this.input.checked );
      } );
    }

  }

  onEscape ( event ) {
    if ( event.key !== 'Escape' || !this.input.isConnected || !this.input.checked ) {
      return;
    }

    event.preventDefault();
    this.setChecked( false );
    this.element?.focus();
  }

  setChecked ( isChecked ) {
    this.input.checked = isChecked;
    this.input.dispatchEvent( new Event( 'change', { bubbles: true } ) );
  }

  syncExpandedState () {
    this.element?.setAttribute( 'aria-expanded', this.input.checked ? 'true' : 'false' );
  }

  onChange ( isChecked, menuToggle ) {

  }

  getHeight () {
    return this?.element?.offsetHeight || 0;
  }
}

export default MenuToggle;
