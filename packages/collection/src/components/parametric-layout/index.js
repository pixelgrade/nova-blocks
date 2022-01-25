import { Children, useCallback } from "@wordpress/element";
import { ParametricGrid } from "@novablocks/block-editor";

const ParametricLayout = props => {
  const children = Children.toArray( props.children );

  const getContent = useCallback( index => {
    return children[ index ];
  }, [ children ] );

  return (
    <ParametricGrid
      getContent={ getContent }
      cardsCount={ children.length }
      { ...props }
    />
  )
};

export default ParametricLayout;
