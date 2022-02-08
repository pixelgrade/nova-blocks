import { __ } from '@wordpress/i18n';

import { ControlsGroup, ControlsSection, ControlsTab } from '../../components';

import { CardElementsVisibilityToggles } from './components';

const CardElementsDisplaySection = ( props ) => {

  return (
    <ControlsSection
      id={'elements-visibility'}
      label={__( 'Card Elements Visibility' )}
      group={__( 'Block Anatomy' )}
      order={50}>
      <ControlsTab label={__( 'Settings' )}>
        <ControlsGroup title={__( 'Setup what content elements to show for each card.', '__plugin_txtd' )}>
          <CardElementsVisibilityToggles {...props} />
        </ControlsGroup>
      </ControlsTab>
    </ControlsSection>
  );
};

export default CardElementsDisplaySection;
