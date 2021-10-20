import { getColorSignalClassnames } from "@novablocks/color-signal";

import { CollectionLayout } from '../index';
import { ScrollIndicator } from '../index';

const CollectionBody = ( props ) => {

  const { attributes } = props;
  const { align } = attributes;

  const contentClassNames = getColorSignalClassnames( {
    palette: attributes.palette,
    colorSignal: attributes.contentColorSignal,
    paletteVariation: attributes.contentPaletteVariation,
    useSourceColorAsReference: false,
  }, true );

  return (
    <div className={ `nb-collection__body  align${ align }` }>
      <div className={ `nb-collection__inner-container` }>
        <CollectionLayout { ...props }>
          { props.children }
        </CollectionLayout>
        <ScrollIndicator { ...props } className={ contentClassNames } />
      </div>
    </div>
  );
}

export default CollectionBody;
