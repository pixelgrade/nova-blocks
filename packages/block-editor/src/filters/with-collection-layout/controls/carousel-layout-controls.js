import { ControlsGroup } from "../../../components";

const CarouselLayoutControls = ( props ) => {

  const {
    attributes: {
      carouselLayout,
      columns,
      showPagination
    },
    setAttributes
  } = props;

  return (
    <Fragment>
      <ControlsGroup title={ __( 'Cards Count' ) }>
        <PostsCountControl { ...props } />
      </ControlsGroup>
      <ControlsGroup title={ __( 'Layout' ) }>
        <RadioControl
          key={ 'carousel-layout' }
          label={ __( 'Items Layout' ) }
          selected={ carouselLayout }
          onChange={ carouselLayout => {
            setAttributes( { carouselLayout } )
          } }
          options={ [
            { label: 'Fixed Width', value: 'fixed' },
            { label: 'Variable Width', value: 'variable' },
            { label: 'Content Width', value: 'content' },
          ] }
        />
        { carouselLayout === 'fixed' && <ItemsPerRowControl { ...props } /> }
        <ToggleControl
          label={__( 'Show Pagination', '__plugin_txtd' )}
          checked={ showPagination }
          onChange={ ( showPagination ) => {
            setAttributes( { showPagination } )
          } }
        />
      </ControlsGroup>
    </Fragment>
  )
};

export default CarouselLayoutControls;
