const Collection = ( props ) => {
  const { attributes } = props;
  const { align } = attributes;

  return (
    <div className={ `nb-collection align${ align } nb-block-spacing-container` }>
      { props.children }
    </div>
  )
};

export default Collection;
