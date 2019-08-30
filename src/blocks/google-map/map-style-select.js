import classnames from 'classnames';
import { compileStyles, getMarkersCenter } from "./utils";
import defualtMapCenter from './default-map-center';

const {
	Component
} = wp.element;

import styles from './styles';

class MapStyleSelect extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			active: this.props.value
		}
	}

	getStaticStyle( styles ) {
		var result = [];
		styles.forEach( function( v, i, a ) {
			var style = '';
			if ( v.stylers ) {
				if ( v.stylers.length > 0 ) {
					style += ( v.hasOwnProperty( 'featureType' ) ? 'feature:' + v.featureType : 'feature:all' ) + '|';
					style += ( v.hasOwnProperty( 'elementType' ) ? 'element:' + v.elementType : 'element:all' ) + '|';
					v.stylers.forEach( function( val, i, a ) {
						var prop = Object.keys( val )[0];
						var propertyval = val[ prop ].toString().replace( '#', '0x' );
						style += prop + ':' + propertyval + '|';
					} );
				}
			}
			result.push( 'style=' + encodeURIComponent( style ) );
		} );
		return result.join( '&' );
	}

	render() {
		const {
			attributes,
			options,
			value,
			onChange,
			apiKey,
		} = this.props;

		const { markers, zoom } = attributes;

		const center = markers.length ? getMarkersCenter( markers ) : defualtMapCenter;
		const compileTheseStyles = compileStyles.bind( this );

		return (
			<div className="components-base-control c-map-style-select">
				{ options.map( option => {
					const style = this.getStaticStyle( compileTheseStyles( option.styles ) );
					const size = '200x200';
					const mapType = 'roadmap';
					const url = 'https://maps.googleapis.com/maps/api/staticmap';
					const src = `${url}?center=${center.lat},${center.lng}&zoom=${zoom}&size=${size}&maptype=${mapType}&${style}&key=${apiKey}`;

					const className = classnames( 'c-map-style-select__item', {
						'c-map-style-select__item--active': option.slug === this.state.active,
					} );

					return (
						<div
							key={ option.slug }
							className={ className }>
							<img
								src={ src }
								alt={ `${ option.label } map style preview` }
								onClick={ () => {
									this.setState( { active: option.slug } )
									onChange( option.slug );
								} }
							/>
						</div>
					)
				} ) }
			</div>
       )
	}
}

export default MapStyleSelect;
