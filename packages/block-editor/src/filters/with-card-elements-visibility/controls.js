import { __ } from '@wordpress/i18n';

import { ControlsGroup, ControlsSection, ControlsTab } from '../../components';

import { CardElementsVisibilityToggles } from './components';

const CardElementsDisplaySection = ( props ) => {

  return (
    <ControlsSection
      id={'elements-visibility'}
      label={__( 'Elements Visibility', '__plugin_txtd' )}
      group={__( 'Card Anatomy', '__plugin_txtd' )}
      order={10}>
      <ControlsTab label={__( 'Settings', '__plugin_txtd' )}>
        <ControlsGroup title={__( 'Setup what content elements to show for each card.', '__plugin_txtd' )}>
          <CardElementsVisibilityToggles {...props} />
        </ControlsGroup>
      </ControlsTab>
    </ControlsSection>
  );
};

export default CardElementsDisplaySection;
