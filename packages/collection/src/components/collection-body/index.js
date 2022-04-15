import { getColorSignalClassnames } from "@novablocks/utils";

import { CollectionLayout } from '../index';
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
      <CollectionLayout { ...props } key={'layout'}/>
      <ScrollIndicator { ...props } className={ contentClassNames } key={'scroll'}/>
    </div>
  );
};

export default CollectionBody;
