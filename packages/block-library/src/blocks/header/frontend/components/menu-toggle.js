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
    this.onInputChange = event => {
      this.syncExpandedState();
      this.options.onChange.call( this, event, this );
    };

    this.input.addEventListener( 'change', this.onInputChange );

    if ( this.element?.tagName === 'BUTTON' ) {
      this.onButtonClick = event => {
        event.preventDefault();
        this.setChecked( !this.input.checked );
      };

      this.element.addEventListener( 'click', this.onButtonClick );
    }

  }

  // Unbind before an AJAX page swap (nova-blocks#661): the toggle persists
  // when it lives outside the swapped container.
  destroy () {
    this.input.removeEventListener( 'change', this.onInputChange );

    if ( this.onButtonClick ) {
      this.element.removeEventListener( 'click', this.onButtonClick );
    }

    const controller = window[ sharedEscapeControllerKey ];

    if ( controller?.current === this ) {
      controller.current = null;
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
