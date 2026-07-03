import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";

import { ControlsGroup, PlusBadge, withVisibility } from "../../../components";

const CollectionLayoutStyleControl = withVisibility( 'collection-layout-style' )( props => {

  const { attributes, setAttributes } = props;
  const { layoutStyle } = attributes;

  const layoutStyleOptions = [
    {
      label: <>{ __( 'Parametric Grid', '__plugin_txtd' ) }<PlusBadge gateId={ 'parametric-layout' } /></>,
      value: 'parametric',
    },
    { label: __( 'Classic Grid', '__plugin_txtd' ), value: 'classic' },
    { label: __( 'Masonry', '__plugin_txtd' ), value: 'masonry' },
    { label: __( 'Carousel', '__plugin_txtd' ), value: 'carousel' },
  ];

  return (
    <ControlsGroup title={ __( 'Collection Layout Style', '__plugin_txtd' ) }>
      <RadioControl
        selected={ layoutStyle }
        className={ 'nb-collection-layout' }
        onChange={ ( layoutStyle ) => {
          setAttributes( { layoutStyle } );
        } }
        options={ layoutStyleOptions }
      />
    </ControlsGroup>
  )
} );

export default CollectionLayoutStyleControl;
