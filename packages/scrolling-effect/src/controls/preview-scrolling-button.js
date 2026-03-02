import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";
import { useCallback } from "@wordpress/element";

import { easeInOutCubic } from "@novablocks/easings";
import { useScrollContainer } from "@novablocks/block-editor";
import { scrollFromTo } from "@novablocks/utils";

const PreviewScrollingButton = props => {

  const { clientId } = props;
  const scrollContainer = useScrollContainer();

  const onClick = useCallback( () => {
    if ( ! scrollContainer ) return;

    // Query in the scroll container's document (may be inside an iframe).
    const doc = scrollContainer.ownerDocument;
    const element = doc.querySelector( `#block-${ clientId }` );

    if ( element ) {
      const elementBox = element.getBoundingClientRect();
      const scrollContainerBox = scrollContainer.getBoundingClientRect();

      const start = scrollContainer.scrollTop + elementBox.top - scrollContainerBox.top - scrollContainer.offsetHeight;
      const end = start + scrollContainer.offsetHeight + element.offsetHeight;

      scrollFromTo( scrollContainer, start, end, 2000, easeInOutCubic );
    }

  }, [ scrollContainer, clientId ] );

  return (
    <div className={ 'nb-scrolling-preview-control' }>
      <Button
        size="default"
        variant="primary"
        disabled={ false }
        onClick={ onClick }>{ __( 'Preview Scrolling', '__plugin_txtd' ) }</Button>
    </div>
  )
};

export default PreviewScrollingButton;
