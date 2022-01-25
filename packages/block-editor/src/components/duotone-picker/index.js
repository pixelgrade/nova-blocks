import { ColorPicker } from '../index';

const CustomDuotoneSelect = ( props ) => {
  const { options } = props;

  return (
    <ColorPicker
      label={ 'Duotones' }
      options={ options }
      onChange={ value => {} }
      selected={ 1 }
      { ...props }
    />
  )
};

export default CustomDuotoneSelect;
