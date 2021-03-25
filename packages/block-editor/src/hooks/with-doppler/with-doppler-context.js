import { Component } from "@wordpress/element";

import DopplerContext from "./context";

const withDopplerContext = function( WrappedComponent ) {

  return class extends Component {

    render() {
      return (
        <DopplerContext.Consumer>
          { context => <WrappedComponent parallax={ context } { ...this.props } /> }
        </DopplerContext.Consumer>
      )
    }
  }
};

export default withDopplerContext;
