let mockLayoutProps;

jest.mock( '../index', () => ( {
  CollectionLayout: props => {
    mockLayoutProps = props;
    return null;
  },
  ExternalLayoutParticipant: () => null,
  ScrollIndicator: () => null,
} ) );
jest.mock( '@novablocks/utils', () => ( { getColorSignalClassnames: () => '' } ) );

import { Children } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { ExternalLayoutParticipant } from '../index';
import CollectionBody from './index';

const renderBody = ( attributes, collectionLayoutRecipes ) => {
  renderToStaticMarkup(
    <CollectionBody attributes={ attributes } collectionLayoutRecipes={ collectionLayoutRecipes }>
      <div className={ 'card' } />
    </CollectionBody>
  );

  return Children.toArray( mockLayoutProps.children );
};

describe( 'CollectionBody external layout participant', () => {
  const recipes = [ {
    id: 'anima-collage',
    baseLayout: 'masonry',
    capabilities: { headerIntegration: true },
  } ];

  test( 'keeps the participant out of the layout children when inactive', () => {
    const children = renderBody( { layoutStyle: 'carousel', headerIntegration: 'grid-item' }, recipes );

    expect( children ).toHaveLength( 1 );
    expect( children.some( child => child.type === ExternalLayoutParticipant ) ).toBe( false );
  } );

  test( 'mounts the participant for an active grid-item header integration', () => {
    const children = renderBody( {
      layoutStyle: 'masonry',
      layoutRecipe: 'anima-collage',
      headerIntegration: 'grid-item',
    }, recipes );

    expect( children ).toHaveLength( 2 );
    expect( children[ 0 ].type ).toBe( ExternalLayoutParticipant );
  } );
} );
