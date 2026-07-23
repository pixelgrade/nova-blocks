/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
import { cloneBlock, createBlock } from '@wordpress/blocks';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import { useInnerBlocks } from '@novablocks/block-editor';

import {
  applySidecarLayoutChange,
  doesSidecarSignatureConflictWithReservations,
  getSingleRailSide,
} from './layout-recipes';
import useAncestorRailReservations from './use-ancestor-rail-reservations';

const SIDEBAR_ALIGNMENTS_CONTROLS = {
  left: {
    icon: 'align-pull-left',
    label: __( 'Show Sidebar on Left Side', '__plugin_txtd' ),
    unavailableDescription: __(
      'Left sidebar unavailable because a parent Sidecar reserves this rail',
      '__plugin_txtd'
    ),
  },
  right: {
    icon: 'align-pull-right',
    label: __( 'Show Sidebar on Right Side', '__plugin_txtd' ),
    unavailableDescription: __(
      'Right sidebar unavailable because a parent Sidecar reserves this rail',
      '__plugin_txtd'
    ),
  },
};

const SidecarBlockControls = function( props ) {

  const { attributes, setAttributes, clientId } = props;
  const { sidebarPosition } = attributes;

  const innerBlocks = useInnerBlocks( clientId );
  const ancestorRailReservations = useAncestorRailReservations( clientId );
  const { replaceBlock } = useDispatch( 'core/block-editor' );

  // A single rail has an unambiguous mirror action. Its side comes from the
  // actual area structure (explicit sidebar-left/right wins; a legacy `sidebar`
  // follows sidebarPosition). Centered and dual-rail layouts stay with the full
  // Layout Recipe picker because Left/Right is ambiguous for them.
  const singleRailSide = getSingleRailSide( innerBlocks, sidebarPosition );

  if ( null === singleRailSide ) {
    return null;
  }

  return (
    <BlockControls>
      <ToolbarGroup>
        { Object.keys( SIDEBAR_ALIGNMENTS_CONTROLS ).map( ( control ) => {
          const targetSignature = {
            hasLeft: control === 'left',
            hasRight: control === 'right',
          };
          const isUnavailable =
            control !== singleRailSide &&
            doesSidecarSignatureConflictWithReservations(
              targetSignature,
              ancestorRailReservations
            );

          return (
            <ToolbarButton
              icon={ SIDEBAR_ALIGNMENTS_CONTROLS[ control ].icon }
              label={ SIDEBAR_ALIGNMENTS_CONTROLS[ control ].label }
              describedBy={
                isUnavailable
                  ? SIDEBAR_ALIGNMENTS_CONTROLS[ control ].unavailableDescription
                  : undefined
              }
              key={ control }
              isActive={ control === singleRailSide }
              isDisabled={ isUnavailable }
              __experimentalIsFocusable={ isUnavailable }
              onClick={ () => {
                applySidecarLayoutChange( {
                  attributes,
                  clientId,
                  innerBlocks,
                  patch: { sidebarPosition: control },
                  targetSignature: {
                    hasLeft: control === 'left',
                    hasRight: control === 'right',
                  },
                  cloneBlock,
                  createBlock,
                  replaceBlock,
                  setAttributes,
                } );
              } }
            />
          )
        } ) }
      </ToolbarGroup>
    </BlockControls>
  );
};

export default SidecarBlockControls;
