import DopplerContext from "./context";

const withDopplerContext = ( WrappedComponent ) => {

  return ( props ) => {
    return (
      <DopplerContext.Consumer>
        { context => <WrappedComponent parallax={ context } { ...props } /> }
      </DopplerContext.Consumer>
    )
  }
};

export default withDopplerContext;
