import { useCallback, useState } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";

import { useScrollingEffect } from "../../index";
import { easeInOutCubic, easeOutQuart } from "@novablocks/easings";

import scrollFromTo from './scroll-from-to';

const withScrollingEffectPreview = createHigherOrderComponent( WrappedComponent => {

  return ( props ) => {

    const [ isScrolling, setIsScrolling ] = useState( false );
    const scrollingEffect = useScrollingEffect();

    const previewScrolling = useCallback( () => {

      const {
        scrollContainer,
        container,
        state: {
          containerBox,
          scrollContainerBox,
        }
      } = scrollingEffect;

      if ( ! container || ! scrollContainer ) {
        return;
      }

      const scrollTop = scrollContainer.scrollTop;

      let start = scrollTop + containerBox.top - scrollContainerBox.top - scrollContainerBox.height;
      let length = containerBox.height + scrollContainerBox.height;

      if ( start < 0 ) {
        length = length + start;
        start = 0;
      }

      let maxScroll = scrollContainer.scrollHeight - scrollContainerBox.height;
      let distanceToBottom = maxScroll - ( start + length );

      if ( distanceToBottom < 0 ) {
        length = length + distanceToBottom;
      }

      let end = start + length;

      const onStart = useCallback( () => {
        setIsScrolling( true );
      }, [] );

      const onEnd = useCallback( () => {
        setIsScrolling( false );
      }, [] );

      scrollFromTo( scrollContainer, scrollTop, start, easeOutQuart, 3000, onStart, () => {
        scrollFromTo( scrollContainer, start, end, easeInOutCubic, 1000, onStart, onEnd );
      } );
    }, [ scrollingEffect ] );

    return (
      <WrappedComponent isScrolling={ isScrolling } previewScrolling={ previewScrolling } { ...props } />
    )
  }
}, 'withScrollingEffectPreview' );

export default withScrollingEffectPreview;
