import CardLayout from './card-layout';
import CardLayoutLegacy from './card-layout-legacy';

const CardElementsStacking = ( props ) => {

  const { name } = props;

  return (
    name === 'novablocks/supernova' ?
      <CardLayout { ...props } /> :
      <CardLayoutLegacy { ...props } />
  )
};

export default CardElementsStacking;
