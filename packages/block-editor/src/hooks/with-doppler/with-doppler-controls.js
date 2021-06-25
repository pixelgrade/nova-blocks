import { Component, Fragment } from "@wordpress/element";
import { easeInOutCubic, easeOutQuart } from "@novablocks/easings";
import InspectorControls from "./inspector-controls";

const withDopplerControls = function( WrappedComponent ) {

  return class extends Component {

    constructor() {
      super( ...arguments );

      this.state = {
        isScrolling: false,
      }

      this.previewScrolling = this.previewScrolling.bind( this );
    }

    scrollFromTo( start, end, easing = x => x, callback = () => {}, speed = 1000 ) {

      const {
        parallax: {
          scrollContainer
        }
      } = this.props;

      const length = end - start;
      const duration = Math.abs( length ) * 1000 / speed;
      const startTime = Date.now();

      function updateScrollTopLoop() {
        const currentTime = Date.now();
        const timePassed = currentTime - startTime;
        const progress = timePassed / duration;

        scrollContainer.scrollTop = start + length * easing( progress );
      }

      scrollContainer.style.pointerEvents = 'none';
      const interval = setInterval( updateScrollTopLoop, 0 );

      this.setState({
        isScrolling: true
      });

      setTimeout(() => {
        clearInterval( interval );
        this.setState({
          isScrolling: false
        });
        scrollContainer.scrollTop = start + length;
        scrollContainer.style.removeProperty( 'pointer-events' );

        if ( typeof callback === "function" ) {
          callback();
        }
      }, duration );
    }

    previewScrolling() {

      const {
        parallax: {
          scrollContainer,
          container,
          state: {
            containerBox,
            containerHeight,
            scrollContainerHeight,
            scrollContainerBox,
          }
        },
      } = this.props;

      if ( ! container || ! scrollContainer ) {
        return;
      }

      const scrollTop = scrollContainer.scrollTop;

      let start = scrollTop + containerBox.top - scrollContainerBox.top - scrollContainerHeight;
      let length = containerHeight + scrollContainerHeight;

      if ( start < 0 ) {
        length = length + start;
        start = 0;
      }

      let maxScroll = scrollContainer.scrollHeight - scrollContainer.offsetHeight;
      let distanceToBottom = maxScroll - ( start + length );

      if ( distanceToBottom < 0 ) {
        length = length + distanceToBottom;
      }

      let end = start + length;

      this.scrollFromTo( scrollTop, start, easeOutQuart, () => {
        this.scrollFromTo( start, end, easeInOutCubic, () => {}, 1000 );
      }, 3000 );
    }

    render() {
      return (
        <Fragment>
          <InspectorControls { ...this.props } isScrolling={ this.state.isScrolling } previewScrolling={ this.previewScrolling } />
          <WrappedComponent { ...this.props } />
        </Fragment>
      )
    }
  }
};

export default withDopplerControls;
