import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";
import { useCallback } from "@wordpress/element";

import { useScrollContainer } from "@novablocks/block-editor";

import { withScrollingEffectPreview } from '../components';

const PreviewScrollingButton = withScrollingEffectPreview( props => {

  const { clientId } = props;
  const scrollContainer = useScrollContainer();

  const onClick = useCallback( () => {
    const element = document.querySelector( `#block-${ clientId }` );

    if ( element && scrollContainer ) {
      const elementBox = element.getBoundingClientRect();
      const scrollContainerBox = scrollContainer.getBoundingClientRect();

      const start = scrollContainer.scrollTop + elementBox.top - scrollContainerBox.top - scrollContainer.offsetHeight;
      const end = start + scrollContainer.offsetHeight + element.offsetHeight;

      scrollContainer.scrollTo( { top: start } );
      scrollContainer.scrollTo( { top: end, behavior: 'smooth' } );
    }

  }, [ scrollContainer ] );

  return (
    <div>
      <Button
        islarge="true"
        isPrimary
        disabled={ false }
        onClick={ onClick }>{ __( 'Preview Scrolling', '__plugin_txtd' ) }</Button>
    </div>
  )
} );

export default PreviewScrollingButton;
