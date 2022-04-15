import HeaderBase from './header-base';
import HeaderColors from './header-colors';

class HeaderRow extends HeaderBase {

  constructor ( element ) {
    super();

    this.element = element;

    this.colors = new HeaderColors( this.element );
  }

}

export default HeaderRow;
