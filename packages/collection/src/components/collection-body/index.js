import { CollectionLayout } from '../index';
import { ScrollIndicator } from '../index';

const CollectionBody = ( props ) => {

  const { attributes } = props;
  const { align } = attributes;

  return (
    <div className={ `align${ align }` }>
      <div className="nb-collection__inner-container">
        <CollectionLayout { ...props }>
          { props.children }
        </CollectionLayout>
        <ScrollIndicator {...props}/>
      </div>
    </div>
  );
}

export default CollectionBody;
