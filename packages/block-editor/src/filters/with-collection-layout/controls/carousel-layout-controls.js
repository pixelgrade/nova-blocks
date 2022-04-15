import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { RadioControl } from '@wordpress/components';

import { ControlsGroup } from "../../../components";

import ItemsCountControl from "./items-count-control";
import ItemsPerRowControl from "./items-per-row-control";
import ItemsGapControls from "./items-gap-control";

const CarouselLayoutControls = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    layoutStyle,
    carouselLayout,
    postsToShow,
  } = attributes;

  if ( layoutStyle !== "carousel" ) {
    return null;
  }

  return (
    <Fragment>
      <ControlsGroup title={ __( 'Number of Cards and Distribution', '__plugin_txtd' ) }>
        <ItemsCountControl postsToShow={postsToShow} setAttributes={setAttributes} />
        { carouselLayout === 'fixed' && <ItemsPerRowControl { ...props } /> }
        <ItemsGapControls { ...props } />
      </ControlsGroup>
      <ControlsGroup title={ __( 'Layout', '__plugin_txtd' ) }>
        <RadioControl
          key={ 'carousel-layout' }
          label={ __( 'Items Layout', '__plugin_txtd' ) }
          selected={ carouselLayout }
          onChange={ carouselLayout => {
            setAttributes( { carouselLayout } )
          } }
          options={ [
            { label: __( 'Fixed Width', '__plugin_txtd' ), value: 'fixed' },
            { label: __( 'Variable Width', '__plugin_txtd' ), value: 'variable' },
            { label: __( 'Content Width', '__plugin_txtd' ), value: 'content' },
          ] }
        />
      </ControlsGroup>
    </Fragment>
  )
};

export default CarouselLayoutControls;
