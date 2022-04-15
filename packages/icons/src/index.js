import * as library from './icons';

export { library };

export const getIcon = ( iconName ) => {
	const svg = library[ iconName ];
  return svg ? `<svg class="novablocks-icon" viewBox="${ svg.viewBox }"><use class="novablocks-icon-symbol" xlink:href="#${ svg.id }" /></svg>` : '';
};
