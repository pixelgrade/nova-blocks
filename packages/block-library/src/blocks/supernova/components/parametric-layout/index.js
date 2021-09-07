import classnames from 'classnames';
import { Children, useCallback } from "@wordpress/element";
import { GridGenerator } from "@novablocks/collection";
const { ParametricGrid } = GridGenerator;

const ParametricLayout = props => {
  const children = Children.toArray( props.children );

  const { attributes } = props;
  const { cardLayout } = attributes;

  const getContent = useCallback( index => {
    return children[ index ];
  }, [ children ] );

  const landscapeLayouts = [
    'horizontal',
    'horizontal-reverse',
  ];


  const layoutClassName = classnames(
    GridGenerator.utils.getAreaClassnameByWidthRatio( 1 / columns ),
    `novablocks-grid__area--${ landscapeLayouts.includes( cardLayout ) ? 'landscape' : 'portrait' }`,
  )

  return (
    <ParametricGrid
      getContent={ getContent }
      cardsCount={ children.length }
      { ...props }
    />
  )
}

export default ParametricLayout;
