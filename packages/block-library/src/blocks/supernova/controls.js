import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
import { select, dispatch, useSelect } from '@wordpress/data';
import { Fragment, useEffect } from '@wordpress/element';

import {
  RangeControl,
  SelectControl,
} from '@wordpress/components';

import {
  __experimentalBlockAlignmentMatrixToolbar as BlockAlignmentMatrixToolbar,
  BlockControls,
} from "@wordpress/block-editor";

import {
  ControlsSection,
  ControlsTab,
  ControlsGroup,
} from "@novablocks/block-editor";

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
      itemsWidth,
      columnsCount,
      sourceType,
    },
    setAttributes,
    clientId,
  } = props;

  const { itemsCount } = useSelect( ( select ) => {
    const itemsCount = select( 'core/block-editor' ).getBlockCount( clientId );

    return { itemsCount };
  }, [ clientId ] );

  useEffect( () => {
    setAttributes( { postsToShow: itemsCount } );
  }, [ itemsCount ] )

  return (
    <Fragment>
      <ControlsSection label={ __( 'Collection' ) }>
        <ControlsTab label={ __( 'Setting' ) }>
          <SelectControl
            key={ 'collection-source-type' }
            label={ __( 'Source Type', '__plugin_txtd' ) }
            value={ sourceType }
            options={ [
              { label: 'Custom', value: 'custom' },
              { label: 'Auto', value: 'auto' },
            ] }
            onChange={ sourceType => {
              setAttributes( { sourceType } );
            } }
          />
          <RangeControl
            key={ 'collection-items-count' }
            label={ __( 'Items Count', '__plugin_txtd' ) }
            value={ itemsCount }
            onChange={ newItemsCount => {
              const { replaceInnerBlocks } = dispatch( 'core/block-editor' );
              const { getBlock } = select( 'core/block-editor' );
              const { innerBlocks } = getBlock( clientId );
              const newInnerBlocks = innerBlocks.slice( 0, newItemsCount );

              if ( newItemsCount > itemsCount ) {
                for ( let i = 0; i < newItemsCount - itemsCount; i++ ) {
                  newInnerBlocks.push( createBlock( 'novablocks/supernova-item' ) );
                }
              }

              replaceInnerBlocks( clientId, newInnerBlocks );
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
                { label: 'Variable', value: 'variable' },
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
    </Fragment>
  )
}

const CardControls = ( props ) => {

  const {
    attributes: {
      cardContentAlign,
      cardLayout,
      cardMediaOpacity,
      cardMediaAspectRatio,
    },
    setAttributes,
    clientId,
  } = props;

  const { getBlock } = select( 'core/block-editor' );
  const block = getBlock( clientId );

  useEffect( () => {
    setAttributes( { thumbnailAspectRatio: cardMediaAspectRatio } )
  }, [] );

  return (
    <Fragment>
      <BlockControls>
        <BlockAlignmentMatrixToolbar
          label={ __( 'Change content position' ) }
          value={ cardContentAlign }
          onChange={ ( cardContentAlign ) => {
            setAttributes( { cardContentAlign } )
          } }
        />
      </BlockControls>
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
            key={ 'card-media-aspect-ratio' }
            label={ __( 'Card Media Aspect Ratio', '__plugin_txtd' ) }
            value={ cardMediaAspectRatio }
            onChange={ cardMediaAspectRatio => setAttributes( { cardMediaAspectRatio } ) }
            min={ 0 }
            max={ 100 }
            step={ 5 }
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
    </Fragment>
  );
}

export default Controls;
