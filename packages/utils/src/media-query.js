class mqServiceClass {

  constructor() {

    this.breakpoints = {
      mobile: '480px',
      tablet: '768px',
      lap: '1024px',
      desktop: '1440px',
    };

    this.above = {};
    this.below = {};

    Object.keys( this.breakpoints ).forEach( key => {
      const breakpoint = this.breakpoints[ key ];
      const query = window.matchMedia( `(min-width: ${ breakpoint })` );
      const check = ( event ) => {
        this.above[ key ] = event.matches;
        this.below[ key ] = ! event.matches;
      }
      check( query );
      query.addEventListener('change', check );
    } );
  }
}

const mqService = new mqServiceClass();

export const below = ( breakpoint ) => {
  return mqService.below[ breakpoint ];
};

export const above = ( breakpoint ) => {
  return mqService.above[ breakpoint ];
};

export { mqService };
