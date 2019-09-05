/**
 * WordPress dependencies.
 */
const {__} = wp.i18n;

const OpenTableSave = function( props ) {
	const {
		attributes: {
			restaurantId,
			dateLabel,
			timeLabel,
			partySizeLabel,
			submitButtonText
		},
	} = props;

	const partySize = ( Array.from( Array( 11 ).keys() ) ).slice( 1 );

	const partySizeOptions = partySize.map( option => <option value={option}> {option} </option> );

	const arrayTimes = Array.from( {length: 24 * 60 / 30}, ( v, i ) => {
		let hours = Math.floor( i * 30 / 60 );
		let minutes = i * 30 - hours * 60;
		let label = 'AM';

		if ( minutes < 10 ) {
			minutes = '0' + minutes;
		}

		if ( hours > 12 ) {
			label = 'PM';
			hours -= 12;
		}

		if ( hours === 0 ) {
			hours = 12;
		}

		return <option value={hours + ':' + minutes + ' ' + label}> {hours + ':' + minutes + ' ' + label} </option>

	} );


	return (

		<div className="novablocks-opentable">
			<form method="get" className="novablocks-opentable__form"
			      action="//www.opentable.com/restaurant-search.aspx" target="_blank">
				<div className="novablocks-opentable__wrapper">
					<div className="novablocks-opentable__date novablocks-opentable__input-wrap">
						<label>{dateLabel}</label>
						<input name="startDate" type="date" className="otb-date otb-input startdate-picker" value=""/>
					</div>
					<div className="novablocks-opentable__time novablocks-opentable__input-wrap">
						<label>{timeLabel}</label>
						<select className="otb-time" name="ResTime" aria-label="Reservation Time">
							{arrayTimes}
						</select>
					</div>
					<div className="novablocks-opentable__size novablocks-opentable__input-wrap">
						<label>{partySizeLabel}</label>
						<select id="party-size" name="partySize" className="otb-people otb-input">
							{partySizeOptions}
						</select>
					</div>
					<div className="novablocks-opentable__button-wrap wp-block-button">
						<button type="submit" className="wp-block-button__link novablocks-opentable__button">
							<span>{submitButtonText}</span>
						</button>
					</div>
				</div>
				<input type="hidden" name="RestaurantID" className="RestaurantID" value={restaurantId}/>
				<input type="hidden" name="rid" className="rid" value={restaurantId}/>
				<input type="hidden" name="GeoID" className="GeoID" value="15"/>
				<input type="hidden" name="txtDateFormat" className="txtDateFormat" value="YYYY-MM-DD"/>
				<input type="hidden" name="RestaurantReferralID" className="RestaurantReferralID" value={restaurantId}/>
			</form>
		</div>

	);
};

export default OpenTableSave;
