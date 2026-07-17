import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';

import { ControlsGroup, ControlsSection, ControlsTab } from '../../components';

import { CardElementsVisibilityToggles } from './components';

const CardElementsDisplaySection = ( props ) => {

  const { attributes, setAttributes } = props;

  return (
    <ControlsSection
      id={'elements-visibility'}
      label={__( 'Elements Visibility', '__plugin_txtd' )}
      group={__( 'Card Anatomy', '__plugin_txtd' )}
      placement={'settings'}
      order={10}>
      <ControlsTab label={__( 'Settings', '__plugin_txtd' )}>
        <ControlsGroup title={__( 'Setup what content elements to show for each card.', '__plugin_txtd' )}>
          <CardElementsVisibilityToggles {...props} />
        </ControlsGroup>
        <ControlsGroup title={__( 'Interaction', '__plugin_txtd' )}>
          <SelectControl
            key={ 'card-hover-effect' }
            __next40pxDefaultSize
            label={__( 'Card Hover Effect', '__plugin_txtd' )}
            help={__( 'Reveal metadata or buttons when they sit at the first or last edge of a card. The active theme controls the motion.', '__plugin_txtd' )}
            value={attributes.cardHoverEffect || 'none'}
            onChange={( value ) => {
              setAttributes( { cardHoverEffect: value } );
            }}
            options={[
              { label: __( 'None', '__plugin_txtd' ), value: 'none' },
              { label: __( 'Meta Reveal', '__plugin_txtd' ), value: 'reveal' },
            ]}
          />
        </ControlsGroup>
      </ControlsTab>
    </ControlsSection>
  );
};

export default CardElementsDisplaySection;
