import { __ } from '@wordpress/i18n';

import {
  RangeControl,
  SelectControl,
} from '@wordpress/components';

import {
  ControlsSection,
  ControlsTab,
  ControlsGroup,
} from "@novablocks/block-editor";

import { Fragment } from '@wordpress/element';

const Controls = ( props ) => {

  return (
    <Fragment>
      <CollectionControls { ...props } />
      <CardControls { ...props } />
    </Fragment>
  )
}

const CollectionControls = ( props ) => {

  const {
    attributes: {
      layout,
      itemsCount,
      itemsWidth,
      columnsCount,
    },
    setAttributes,
  } = props;

  return (
    <ControlsSection label={ __( 'Collection' ) }>
      <ControlsTab label={ __( 'Setting' ) }>
        <RangeControl
          key={ 'collection-items-count' }
          label={ __( 'Items Count', '__plugin_txtd' ) }
          value={ itemsCount }
          onChange={ itemsCount => {
            setAttributes( { itemsCount } )
          } }
          min={ 1 }
          max={ 20 }
          step={ 1 }
        />
        <ControlsGroup label={ __( 'Collection Layout', '__plugin_txtd' ) } >
          <SelectControl
            key={ 'collection-layout' }
            label={ __( 'Collection Layout', '__plugin_txtd' ) }
            value={ layout }
            options={ [
              { label: 'Grid', value: 'grid' },
              { label: 'Carousel', value: 'carousel' },
            ] }
            onChange={ layout => {
              setAttributes( { layout } );
            } }
          />
          <SelectControl
            key={ 'collection-item-width' }
            label={ __( 'Item Width', '__plugin_txtd' ) }
            value={ itemsWidth }
            options={ [
              { label: 'Fixed', value: 'fixed' },
              { label: 'Auto', value: 'auto' },
            ] }
            onChange={ itemsWidth => {
              setAttributes( { itemsWidth } );
            } }
          />
          <RangeControl
            key={ 'collection-columns-count' }
            label={ __( 'Columns Count', '__plugin_txtd' ) }
            value={ columnsCount }
            onChange={ columnsCount => {
              setAttributes( { columnsCount } )
            } }
            min={ 1 }
            max={ 4 }
            step={ 1 }
          />
        </ControlsGroup>
      </ControlsTab>
    </ControlsSection>
  )
}

const CardControls = ( props ) => {

  const {
    attributes: {
      cardLayout,
      cardMediaOpacity,
    },
    setAttributes,
  } = props;

  return (
    <ControlsSection label={ __( 'Card' ) }>
      <ControlsTab label={ __( 'Setting' ) }>
        <SelectControl
          key={ 'collection-card-layout' }
          label={ __( 'Card Layout', '__plugin_txtd' ) }
          value={ cardLayout }
          options={ [
            { label: 'Vertical', value: 'vertical' },
            { label: 'Vertical Reverse', value: 'vertical-reverse' },
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Horizontal Reverse', value: 'horizontal-reverse' },
            { label: 'Stacked', value: 'stacked' },
          ] }
          onChange={ cardLayout => {
            setAttributes( { cardLayout } );
          } }
        />
        <RangeControl
          key={ 'collection-card-media-opacity' }
          label={ __( 'Card Media Opacity', '__plugin_txtd' ) }
          value={ cardMediaOpacity }
          onChange={ cardMediaOpacity => {
            setAttributes( { cardMediaOpacity } )
          } }
          min={ 0 }
          max={ 100 }
          step={ 10 }
        />
      </ControlsTab>
    </ControlsSection>
  );
}

export default Controls;
