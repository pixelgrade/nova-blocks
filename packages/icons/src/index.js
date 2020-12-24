import * as library from './icons';

export { library };

export const getIcon = ( iconName ) => {
	const svg = library[ iconName ];
  return svg ? `<svg viewBox="${ svg.viewBox }"><use xlink:href="#${ svg.id }" /></svg>` : '';
}
