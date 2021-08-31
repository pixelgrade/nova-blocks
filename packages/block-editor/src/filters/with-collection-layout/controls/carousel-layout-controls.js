import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { RadioControl, ToggleControl } from '@wordpress/components';

import { ControlsGroup } from "../../../components";

import PostsCountControl from "./posts-count-control";
import ItemsPerRowControl from "./items-per-row-control";

const CarouselLayoutControls = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    layoutStyle,
    carouselLayout,
    showPagination
  } = attributes;

  if ( layoutStyle !== "carousel" ) {
    return null;
  }

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
          label={ __( 'Show Pagination', '__plugin_txtd' ) }
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
