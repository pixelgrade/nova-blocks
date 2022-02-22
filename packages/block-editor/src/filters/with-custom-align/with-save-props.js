import classnames from "classnames";

const withSaveProps = ( extraProps, blockType, attributes ) => {
  const { align } = attributes;

  if (align === undefined) {
    return extraProps;
  }

  return {
    ...extraProps,
    className: classnames(
      extraProps.className,
      `align${ align }`
    )
  }
};

export default withSaveProps;
