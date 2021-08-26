import { useCallback, useState } from "@wordpress/element";
import { easeInOutCubic, easeOutQuart } from "@novablocks/easings";
import { scrollFromTo } from '../utils';
import { createHigherOrderComponent } from "@wordpress/compose";

const withDopplerPreview = createHigherOrderComponent( WrappedComponent => {

  return ( props ) => {

    const [ isScrolling, setIsScrolling ] = useState( false );
    const { parallax } = props;

    const previewScrolling = useCallback( () => {

      const {
        scrollContainer,
        container,
        state: {
          containerBox,
          scrollContainerBox,
        }
      } = parallax;

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
    }, [ parallax ] );

    return (
      <WrappedComponent isScrolling={ isScrolling } previewScrolling={ previewScrolling } { ...props } />
    )
  }
}, 'withDopplerPreview' );

export default withDopplerPreview;
