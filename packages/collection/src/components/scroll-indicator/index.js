const ScrollIndicator = ( props ) => {
  const {
    attributes,
  } = props;

  const { scrollIndicator } = attributes;

  if ( ! scrollIndicator ) {
    return null;
  }

  return (
    <div className="nb-collection__scroll-indicator"/>
  )
}

export default ScrollIndicator;
