import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";
import { useCallback } from "@wordpress/element";

import { easeInOutCubic } from "@novablocks/easings";
import { useScrollContainer } from "@novablocks/block-editor";
import { scrollTo } from "@novablocks/utils";

const PreviewScrollingButton = props => {

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
      scrollTo( scrollContainer, end, 2000, easeInOutCubic );
    }

  }, [ scrollContainer ] );

  return (
    <div className={ 'nb-scrolling-preview-control' }>
      <Button
        islarge="true"
        isPrimary
        disabled={ false }
        onClick={ onClick }>{ __( 'Preview Scrolling', '__plugin_txtd' ) }</Button>
    </div>
  )
};

export default PreviewScrollingButton;
