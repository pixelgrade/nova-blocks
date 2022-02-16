import { __ } from '@wordpress/i18n';

import { ControlsGroup, ControlsSection, ControlsTab } from '../../components';

import { CardElementsVisibilityToggles } from './components';

const CardElementsDisplaySection = ( props ) => {

  return (
    <ControlsSection
      id={'elements-visibility'}
      label={__( 'Card Elements Visibility', '__plugin_txtd' )}
      group={__( 'Block Anatomy', '__plugin_txtd' )}
      order={50}>
      <ControlsTab label={__( 'Settings', '__plugin_txtd' )}>
        <ControlsGroup title={__( 'Setup what content elements to show for each card.', '__plugin_txtd' )}>
          <CardElementsVisibilityToggles {...props} />
        </ControlsGroup>
      </ControlsTab>
    </ControlsSection>
  );
};

export default CardElementsDisplaySection;
