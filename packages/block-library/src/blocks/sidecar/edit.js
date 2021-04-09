/**
 * WordPress dependencies
 */
import classnames from 'classnames';
import {
  Component,
  Fragment
} from '@wordpress/element';

import get from 'lodash/get';
import map from 'lodash/map';

import {__experimentalBlockVariationPicker, InnerBlocks} from "@wordpress/block-editor";
import {__} from "@wordpress/i18n";
import {select, withDispatch, withSelect} from "@wordpress/data";

import { createBlock, registerBlockVariation } from '@wordpress/blocks';
import { compose } from "@wordpress/compose";

import InspectorControls from "./inspector-controls";
import SidecarBlockControls from "./block-controls";

const TEMPLATE_OPTIONS = [
  {
    name: 'sidebar-left',
    title: __('Sidebar Left with Content on the right', '__plugin_txtd' ),
    icons: 'heart',
    innerBlocks: [
      ['novablocks/sidecar-area'],
      ['novablocks/sidecar-area'],
    ],
    scope: [ 'block' ],
  },
  {
    name: 'sidebar-right',
    title: __('Sidebar Right with Content on the left', '__plugin_txtd' ),
    icons: 'heart',
    innerBlocks: [
      ['novablocks/sidecar-area'],
      ['novablocks/sidecar-area'],
    ],
    scope: [ 'block' ],
  },
  {
    name: 'sidebar-left-right',
    title: __('Sidebar on Left and Right with Content on center', '__plugin_txtd' ),
    icons: 'heart',
    innerBlocks: [
      ['novablocks/sidecar-area'],
      ['novablocks/sidecar-area'],
      ['novablocks/sidecar-area'],
    ],
    scope: [ 'block' ],
  }
];

class Edit extends Component {

  constructor() {
    super (...arguments) ;
  }

  setTemplate( layout ) {
    this.setState( { template: layout } );
  }

  createBlocksFromInnerBlocksTemplate( innerBlocksTemplate ) {
    return map( innerBlocksTemplate, ( [ name, attributes, innerBlocks = [] ] ) => createBlock( name, attributes, this.createBlocksFromInnerBlocksTemplate( innerBlocks ) ) );
  }

  supportsInnerBlocksPicker() {
    return typeof InnerBlocks.prototype!=='undefined';
  }

  supportsBlockVariationPicker() {
    return !!registerBlockVariation;
  }

  blockVariationPicker() {
    return (
      <Fragment>
        <InnerBlocks
          renderAppender = { false }
          templateLock = 'all'
        />
      </Fragment>
    );
  }

  componentDidMount() {
    const { hasInnerBlocks, innerBlocks, defaultVariation } = this.props;
    if ( hasInnerBlocks ) {
      this.setState( { template: innerBlocks } );
    }

    if ( !this.supportsInnerBlocksPicker() && !this.supportsBlockVariationPicker() && hasInnerBlocks === false ) {
      this.setTemplate( defaultVariation );
    }
  }

  innerBlocksPicker() {
    const { hasInnerBlocks } = this.props;
    return (
      <Fragment>
        <InnerBlocks
          __experimentalTemplateOptions={ TEMPLATE_OPTIONS }
          __experimentalOnSelectTemplateOption={ ( chosenTemplate ) => {
            if ( chosenTemplate === undefined ) {
              chosenTemplate = TEMPLATE_OPTIONS[ 0 ].template;
            }
            this.setTemplate( chosenTemplate );
          } }
          __experimentalAllowTemplateOptionSkip
          template={ this.supportsInnerBlocksPicker() ? this.state.template : TEMPLATE_OPTIONS[ 0 ].template }
          templateInsertUpdatesSelection={ false }
        />
      </Fragment>
    );
  }

  render() {
    const {
      attributes: {
        layout,
        layoutType,
        sidebarWidth,
        sidebarPosition,
        lastItemIsSticky
      },
      clientId,
      blockType,
      defaultVariation,
      replaceInnerBlocks,
      hasInnerBlocks,
      variations,
      setAttributes,
      className
    } = this.props;

    const classNames = classnames(
      className,
      `novablocks-sidecar`,
      `novablocks-sidecar--sidebar-${sidebarPosition}`,
      `novablocks-sidebar--${sidebarWidth}`,
      {
        'last-block-is-sticky' : lastItemIsSticky === true
      }
    );

    const currentBlock = select( 'core/block-editor' ).getBlocksByClientId( clientId )[ 0 ];
    const childBlocks = currentBlock.innerBlocks;

    const clientIds = childBlocks.map( block => block.clientId );
    const removeInnerBlocks = () => wp.data.dispatch( 'core/block-editor' ).removeBlocks( clientIds );

    if ( hasInnerBlocks || !this.supportsBlockVariationPicker() ) {
      return (
        <Fragment>
          <SidecarBlockControls {...this.props} />
          <InspectorControls { ...this.props }/>
          <div className={ classNames }>
          { this.supportsBlockVariationPicker() ? this.blockVariationPicker(this.props) : this.innerBlocksPicker() }
          </div>
        </Fragment>
      );
    }

    const blockVariationPickerOnSelect = ( nextVariation = defaultVariation ) => {

      const nextVariationName = nextVariation.name;
      setAttributes( { layout: nextVariationName } );

      if ( nextVariation.attributes ) {
        this.props.setAttributes( nextVariation.attributes );
      }

      if ( nextVariation.innerBlocks ) {
        replaceInnerBlocks(
          this.props.clientId,
          this.createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks )
        );
      }
    };

    return (
      <Fragment>
        <__experimentalBlockVariationPicker
          icon={ get( blockType, [ 'icon', 'src' ] ) }
          label={ get( blockType, [ 'title' ] ) }
          instructions={ __( 'Select a variation to start with.', '__plugin_txtd' ) }
          variations={ variations }
          allowSkip
          onSelect={ ( nextVariation ) => blockVariationPickerOnSelect( nextVariation ) }
        />
      </Fragment>
    );
  }
}

const applyWithSelect = withSelect( ( select, props ) => {
  const { getBlocks } = select( 'core/block-editor' );
  const { getBlocksByClientId } = select( 'core/editor' );
  const { getBlockType, getBlockVariations, getDefaultBlockVariation } = select( 'core/blocks' );
  const innerBlocks = getBlocks( props.clientId );

  return {
    blockType: getBlockType( props.name ),
    defaultVariation: typeof getDefaultBlockVariation === 'undefined' ? null : getDefaultBlockVariation( props.name ),
    getBlocksByClientId,
    hasInnerBlocks: select( 'core/block-editor' ).getBlocks( props.clientId ).length > 0,
    innerBlocks,
    variations: typeof getBlockVariations === 'undefined' ? null : getBlockVariations( props.name ),
  };
} );

const applyWithDispatch = withDispatch( ( dispatch ) => {
  const {
    insertBlock,
    replaceInnerBlocks,
  } = dispatch( 'core/block-editor' );

  const {
    updateBlockAttributes,
  } = dispatch( 'core/editor' );

  return {
    insertBlock,
    replaceInnerBlocks,
    updateBlockAttributes,
  };
} );

export default compose( [ applyWithSelect, applyWithDispatch ] )( Edit );
