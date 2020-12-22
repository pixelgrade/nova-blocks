export * from './components';
export * from './hooks';

export const getSvg = ( svg ) => {
  if ( svg.viewBox && svg.id ) {
    return (
      <svg viewBox={ svg.viewBox }><use xlinkHref={ `#${ svg.id }` } /></svg>
    )
  }
  return '';
}
