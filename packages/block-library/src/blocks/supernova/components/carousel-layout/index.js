import Slider from "react-slick";

const CarouselLayout = ( props ) => {

  const {
    attributes: {
      columns,
      carouselLayout,
      showArrows,
      showPagination,
    },
  } = props;

  const settings = {
    arrows: showArrows,
    dots: showPagination,
    infinite: true,
    variableWidth: carouselLayout === 'variable' || carouselLayout === 'content',
  };

  if ( carouselLayout !== 'variable' && carouselLayout !== 'content' ) {
    settings.slidesToShow = columns;
  }

  return (
    <Slider { ...settings }>{ props.children }</Slider>
  );
}

export default CarouselLayout;
