const Collection = ( props ) => {
  const { attributes } = props;
  const { align } = attributes;

  return (
    <div className={ `nb-collection align${ align } nb-block-spacing-container break-align-left break-align-right` }>
      { props.children }
    </div>
  )
};

export default Collection;
