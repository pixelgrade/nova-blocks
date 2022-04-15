import { RadioControl } from '@wordpress/components';

const CardLayoutLegacy = ( props ) => {

  const {
    attributes: {
      isLandscape,
    },
    setAttributes
  } = props;

  return (
    <RadioControl
      selected={ isLandscape ? 'landscape' : 'portrait' }
      className={ 'nb-card-layout' }
      onChange={ ( value ) => {
        setAttributes( { isLandscape: value === 'landscape' } );
      } }
      options={ [
        { label: 'Vertical', value: 'portrait' },
        { label: 'Horizontal', value: 'landscape' }
      ] }
    />
  )
};

export default CardLayoutLegacy;
