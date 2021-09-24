import Slider from "react-slick";

const SliderArrow = ( props ) => {

  const {
    attributes,
    onClick,
    isNext
  } = props;

  const {
    palette,
    contentPaletteVariation,
    contentColorSignal
  } = attributes;

  const PALETTE_CLASS = `sm-palette-${palette}`;
  const PALETTE_VARIATION_CLASS = `sm-variation-${contentPaletteVariation}`;
  const CONTENT_SIGNAL_CLASS = `sm-color-signal-${contentColorSignal}`;

  let BUTTON_LABEL = isNext ? 'Next' : 'Previous'
  let BUTTON_DIRECTION_CLASS = isNext ? 'slick-next' : 'slick-prev'

  return (
    <button
      className={`slick-arrow ${BUTTON_DIRECTION_CLASS} ${PALETTE_CLASS} ${PALETTE_VARIATION_CLASS} ${CONTENT_SIGNAL_CLASS}`}
      aria-label={BUTTON_LABEL} onClick={onClick}>{BUTTON_LABEL}</button>
  )
}

const generateDotsClasses = (props) => {

  const { attributes } = props;

  const {
    palette,
    contentPaletteVariation,
    contentColorSignal
  } = attributes;

  const PALETTE_CLASS = `sm-palette-${palette}`;
  const PALETTE_VARIATION_CLASS = `sm-variation-${contentPaletteVariation}`;
  const CONTENT_SIGNAL_CLASS = `sm-color-signal-${contentColorSignal}`;

  return `slick-dots ${PALETTE_CLASS} ${PALETTE_VARIATION_CLASS} ${CONTENT_SIGNAL_CLASS}`
}

const CarouselLayout = ( props ) => {

  const { attributes } = props;

  const {
    columns,
    carouselLayout,
    showArrows,
    showPagination
  } = attributes;

  const settings = {
    arrows: showArrows,
    dots: showPagination,
    dotsClass: generateDotsClasses(props),
    infinite: true,
    variableWidth: carouselLayout === 'variable' || carouselLayout === 'content',
    prevArrow: <SliderArrow {...props} />,
    nextArrow: <SliderArrow isNext={true} {...props}  />,
  };

  if ( carouselLayout !== 'variable' && carouselLayout !== 'content' ) {
    settings.slidesToShow = columns;
  }

  return (
    <Slider {...settings}>{props.children}</Slider>
  );
}

export default CarouselLayout;
