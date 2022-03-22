/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

const SIDEBAR_ALIGNMENTS_CONTROLS = {
  left: {
    value: 'horizontal',
    icon: 'align-pull-left',
    label: __( 'Show Media on Left Side', '__plugin_txtd' ),
  },
  right: {
    value: 'horizontal-reverse',
    icon: 'align-pull-right',
    label: __( 'Show Media on Right Side', '__plugin_txtd' ),
  },
};

const FlipMediaControls = function( props ) {

  const { attributes, setAttributes } = props;
  const { cardLayout } = attributes;

  if ( ! [ 'horizontal', 'horizontal-reverse' ].includes( cardLayout ) ) {
    return null;
  }

  return (
    <BlockControls>
      <ToolbarGroup>
        { Object.keys( SIDEBAR_ALIGNMENTS_CONTROLS ).map( ( control ) => {
          const config = SIDEBAR_ALIGNMENTS_CONTROLS[ control ];
          return (
            <ToolbarButton
              icon={ config.icon }
              label={ config.label }
              key={ control }
              isActive={ config.value === cardLayout }
              onClick={ () => {
                setAttributes( { cardLayout: config.value } )
              } }
            />
          )
        } ) }
      </ToolbarGroup>
    </BlockControls>
  );
};

export default FlipMediaControls;
