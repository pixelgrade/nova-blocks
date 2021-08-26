import DopplerContext from "../context";
import { createHigherOrderComponent } from "@wordpress/compose";

const withDopplerContext = createHigherOrderComponent( WrappedComponent => {

  return ( props ) => {
    return (
      <DopplerContext.Consumer>
        { context => <WrappedComponent doppler={ context } { ...props } /> }
      </DopplerContext.Consumer>
    )
  }
}, 'withDopplerContext' );

export default withDopplerContext;
