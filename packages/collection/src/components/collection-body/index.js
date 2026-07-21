import { getColorSignalClassnames } from "@novablocks/utils";

import { CollectionLayout } from '../index';
import { ExternalLayoutParticipant } from '../index';
import { ScrollIndicator } from '../index';
import { getExternalLayoutParticipant } from '../external-layout-participant';

const CollectionBody = ( props ) => {
  const { attributes } = props;

  const contentClassNames = getColorSignalClassnames( {
    palette: attributes.palette,
    colorSignal: attributes.contentColorSignal,
    paletteVariation: attributes.contentPaletteVariation,
    useSourceColorAsReference: false,
  }, true );

  // Mount the participant only when it is active; an always-mounted element
  // would be wrapped into a blank slide by the carousel layout.
  const externalLayoutParticipant = getExternalLayoutParticipant( attributes, props.collectionLayoutRecipes );

  return (
    <div className={ `nb-collection__body` }>
      <CollectionLayout { ...props } key={ 'layout' }>
        { !! externalLayoutParticipant &&
          <ExternalLayoutParticipant attributes={ attributes } recipes={ props.collectionLayoutRecipes } /> }
        { props.children }
      </CollectionLayout>
      <ScrollIndicator { ...props } className={ contentClassNames } key={ 'scroll' } />
    </div>
  );
};

export default CollectionBody;
