import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { Fragment, useCallback, useMemo } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { useDispatch } from "@wordpress/data";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { useInnerBlocks } from "@novablocks/block-editor";

import InspectorControls from "./inspector-controls";
import withMenuVisibilityAttributes from './with-menu-visibility-attributes';
import TEMPLATE from "./template";

const ALLOWED_BLOCKS = [ 'novablocks/menu-food-section' ];

const FoodMenuEdit = props => {

  const {
    attributes: {
      enableTwoColumns,
      showPrices,
      showDescription
    },
    clientId,
    className,
  } = props;

  const innerBlocks = useInnerBlocks( clientId );
  const index = useMemo( () => innerBlocks.length, [ innerBlocks ] );
  const { insertBlock } = useDispatch( 'core/block-editor' );

  const addFoodMenuSection = useCallback( () => {
    const block = createBlock( 'novablocks/menu-food-section' );

    insertBlock( block, index, clientId );
  }, [ index ] );

  const classNames = classnames(
    className,
    `nova-food-menu`,
    {
      'nova-food-menu--layout': enableTwoColumns === true,
      'price--is-hidden': showPrices === false
    }
  );

  const blockProps = useBlockProps( {
    className: classNames,
    style: props.style
  } );

  return (
    <Fragment>
      <div { ...blockProps }>
        <InnerBlocks
          allowedBlocks={ ALLOWED_BLOCKS }
          template={ TEMPLATE }
          renderAppender={ false }
        />

        <Button
          className="components-button block-editor-button-block-appender nova-blocks-appender"
          label={ __( 'Add New Section', '__plugin_txtd' ) }
          onClick={ addFoodMenuSection }
        >
          { __( 'Add Section', '__plugin_txtd' ) }
        </Button>
      </div>
      <InspectorControls { ...props } />
    </Fragment>
  );
};

addFilter( 'editor.BlockListBlock', 'novablocks/with-menu-visibility-attributes', withMenuVisibilityAttributes );

export default FoodMenuEdit;
