import Slider from "react-slick";

const CollectionLayout = ( props ) => {

  const {
    attributes: {
      layout
    }
  } = props;

  if ( layout === 'carousel' ) {
    return <CarouselLayout { ...props } />
  }

  return <ClassicLayout { ...props } />
}

const ClassicLayout = ( props ) => {
  return props.children;
}

const CarouselLayout = ( props ) => {

  const {
    attributes: {
      showPagination,
      columnsCount,
      itemsWidth,
    }
  } = props;

  const settings = {
    dots: showPagination,
    infinite: true,
    variableWidth: itemsWidth === 'variable',
  };

  if ( itemsWidth !== 'variable' ) {
    settings.slidesToShow = columnsCount;
  }

  return (
    <Slider { ...settings }>{ props.children }</Slider>
  );
}

export default CollectionLayout;
