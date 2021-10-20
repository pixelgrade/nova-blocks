import classnames from "classnames";

const ScrollIndicator = ( props ) => {

  const { attributes } = props;
  const { scrollIndicatorBlock } = attributes;

  if ( ! scrollIndicatorBlock ) {
    return null;
  }

  const className = classnames(
    `nb-scroll-indicator`,
    props.className,
  );

  return (
    <div className={ className } />
  )
}

export default ScrollIndicator;
