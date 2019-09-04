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

		this.compileStyles = compileStyles.bind( this );
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

		const center = markers.length ? getMarkersCenter.call( this ) : new google.maps.LatLng( defualtMapCenter );
		const latitude = center.lat();
		const longitude = center.lng();

		return (
			<div className="components-base-control">
				<div className="editor-block-styles block-editor-block-styles novablocks-block-editor-map-styles">
					{ options.map( option => {
						const style = this.getStaticStyle( this.compileStyles( option.styles ) );
						const size = '200x200';
						const mapType = 'roadmap';
						const url = 'https://maps.googleapis.com/maps/api/staticmap';
						const src = `${url}?center=${latitude},${longitude}&zoom=${zoom}&size=${size}&maptype=${mapType}&${style}&key=${apiKey}`;

						return (
							<div
								key={ option.slug }
								className={ classnames( 'editor-block-styles__item block-editor-block-styles__item', {
									'is-active': option.slug === this.state.active,
								} ) }
								onClick={ () => {
									this.setState( { active: option.slug } )
									onChange( option.slug );
								} }
								role="button"
								tabIndex="0"
								aria-label={ option.label }>

								<div className="editor-block-styles__item-preview block-editor-block-styles__item-preview">
									<img
										src={ src }
										alt={ `${ option.label } map style preview` }
									/>
								</div>
								<div className="editor-block-styles__item-label block-editor-block-styles__item-label">
									{ option.label }
								</div>

							</div>
						)
					} ) }
				</div>
			</div>
		)
	}
}

export default MapStyleSelect;
