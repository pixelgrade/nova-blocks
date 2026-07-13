import { getColorSignalClassnames } from "@novablocks/utils";

import { CollectionLayout } from '../index';
import { ExternalLayoutParticipant } from '../index';
import { ScrollIndicator } from '../index';

const CollectionBody = ( props ) => {
  const { attributes } = props;

  const contentClassNames = getColorSignalClassnames( {
    palette: attributes.palette,
    colorSignal: attributes.contentColorSignal,
    paletteVariation: attributes.contentPaletteVariation,
    useSourceColorAsReference: false,
  }, true );

  return (
    <div className={ `nb-collection__body` }>
      <CollectionLayout { ...props } key={ 'layout' }>
        <ExternalLayoutParticipant attributes={ attributes } recipes={ props.collectionLayoutRecipes } />
        { props.children }
      </CollectionLayout>
      <ScrollIndicator { ...props } className={ contentClassNames } key={ 'scroll' } />
    </div>
  );
};

export default CollectionBody;
