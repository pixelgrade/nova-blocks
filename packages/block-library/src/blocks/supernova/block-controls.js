import { __ } from '@wordpress/i18n';
import { cloneBlock, createBlock } from '@wordpress/blocks';
import { Fragment, useCallback, useMemo } from '@wordpress/element';
import { addCard, gallery, plus } from '@wordpress/icons';

import {
  BlockAlignmentControl,
  BlockControls,
  MediaUpload,
} from "@wordpress/block-editor";

import {
  Dropdown,
  NavigableMenu,
  MenuGroup,
  ToolbarGroup,
  ToolbarButton,
} from '@wordpress/components';

import { useDispatch } from '@wordpress/data';

import {
  CustomMenuItem,
  normalizeImage,
  useInnerBlocks
} from "@novablocks/block-editor";

import FlipMediaControls from './controls/flip-media-controls';
import { compileSupernovaItemAttributes } from './utils';

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const Controls = ( props ) => {
  return (
    <Fragment>
      <QueryControls { ...props } />
      <InnerBlocksControls { ...props } />
    </Fragment>
  )
}

const QueryControls = ( props ) => {
  const { attributes, setAttributes, inQuery } = props;
  const { postsToShow } = attributes;

  if ( ! inQuery ) {
    return null;
  }

  return (
    <BlockControls>
      <ToolbarGroup label={ __( 'Cards', '__plugin_txtd' ) }>
        <ToolbarButton onClick={ () => { setAttributes( { postsToShow: postsToShow + 1 } ); } }>
          { __( 'Add Cards', '__plugin_txtd' ) }
        </ToolbarButton>
      </ToolbarGroup>
    </BlockControls>
  )
}

const InnerBlocksControls = ( props ) => {

  const { attributes, setAttributes, clientId, inQuery } = props;
  const { align, postsToShow } = attributes;
  const innerBlocks = useInnerBlocks( clientId );
  const { replaceInnerBlocks, updateBlockAttributes } = useDispatch( 'core/block-editor' );

  const innerBlockAttributes = useMemo( () => {
    return compileSupernovaItemAttributes( attributes );
  }, [ attributes ] );

  const onSelectImages = useCallback( images => {
    const newInnerBlocks = innerBlocks.slice();

    const collection = images.map( image => {
      const block = createBlock( 'novablocks/supernova-item', {
        ...innerBlockAttributes,
        defaultsGenerated: true
      } );

      newInnerBlocks.push( block );

      return [ block.clientId, image ];
    } );

    replaceInnerBlocks( clientId, newInnerBlocks );

    collection.forEach( ( [ childClientId, image ] ) => {
      normalizeImage( image ).then( newImage => {
        updateBlockAttributes( childClientId, { images: [ newImage ] } );
      } );
    } );

  }, [ clientId, innerBlocks ] );

  const addNewCard = useCallback( () => {
    const newInnerBlocks = innerBlocks.slice();
    const lastBlock = innerBlocks[ innerBlocks.length - 1 ];
    const newBlock = cloneBlock( lastBlock );
    newInnerBlocks.push( newBlock );
    replaceInnerBlocks( clientId, newInnerBlocks );
  }, [ innerBlocks, postsToShow ] );

  if ( inQuery ) {
    return null;
  }

  return (
    <BlockControls>
      <ToolbarGroup label={ __( 'Layout', '__plugin_txtd' ) }>
        <BlockAlignmentControl value={ align } onChange={ nextAlign => {
          setAttributes( { align: nextAlign ?? 'none' } );
        } } />
        <FlipMediaControls { ...props } />
      </ToolbarGroup>
      <ToolbarGroup label={ __( 'Cards', '__plugin_txtd' ) }>
        <Dropdown
          position="bottom right"
          contentClassName="block-editor-media-replace-flow__options"
          renderToggle={ ( { isOpen, onToggle } ) => (
            <ToolbarButton onClick={ onToggle } aria-expanded={ isOpen }>
              { __( 'Add Cards', '__plugin_txtd' ) }
            </ToolbarButton>
          ) }
          renderContent={ ( { onClose } ) => (
            <NavigableMenu className={ 'novablocks-navigable-menu' }>
              <MenuGroup>
                <CustomMenuItem
                  onClick={ () => {
                    addNewCard();
                    onClose();
                  } }
                  help={ __( 'Insert a card that matches the same design and details as the last.', '__plugin_txtd' ) }
                  icon={ addCard }>
                  { __( 'Add New Card', '__plugin_txtd' ) }
                </CustomMenuItem>
                <CustomMenuItem
                  onClick={ () => {
                    setAttributes( { postsToShow: postsToShow + 1 } );
                    onClose();
                  } }
                  icon={ plus }
                >
                  { __( 'Add Blank Card', '__plugin_txtd' ) }
                </CustomMenuItem>
              </MenuGroup>
              <MenuGroup>
                <MediaUpload
                  allowedTypes={ ALLOWED_MEDIA_TYPES }
                  gallery
                  multiple
                  value={ [] }
                  onSelect={ onSelectImages }
                  onClose={ onClose }
                  render={ ( { open } ) => (
                    <CustomMenuItem
                      help={ __( 'Open the Media Library and insert new cards for each selected media item.', '__plugin_txtd' ) }
                      icon={ gallery }
                      onClick={ open }
                    >
                        { __( 'Add Cards Gallery', '__plugin_txtd' ) }
                    </CustomMenuItem>
                  ) }
                />
              </MenuGroup>
            </NavigableMenu>
          ) }
          >
        </Dropdown>
      </ToolbarGroup>
    </BlockControls>
  )
};



export default Controls;
