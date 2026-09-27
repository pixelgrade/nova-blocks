import { registerFrontendModule } from '@novablocks/utils';

import { addSocialMenuClass } from './utils';

// A frontend module (nova-blocks#661): runs again for every AJAX page swap.
registerFrontendModule( 'novablocks/navigation', ( scope ) => {
  scope.ready( () => {
    addSocialMenuClass();
  } );
} );
