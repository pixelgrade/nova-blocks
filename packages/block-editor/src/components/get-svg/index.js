import { library } from "@novablocks/icons";

const getSvg = ( svg ) => {
  if ( svg?.viewBox && svg?.id ) {
    return (
      <svg viewBox={ svg.viewBox }><use xlinkHref={ `#${ svg.id }` } /></svg>
    )
  }
  return '';
}

const getIconSvg = ( iconName ) => {
  const svg = library[ iconName ];
  return getSvg( svg );
}

export {
  getSvg,
  getIconSvg
};
