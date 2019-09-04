/**
 * WordPress dependencies
 */

const {__} = wp.i18n;

const {RichText} = wp.blockEditor;

const OpenTablePreview = function( props ) {
	const {
		attributes: {
			restaurantId,
			dateLabel,
			partySizeLabel,
			timeLabel,
			submitButtonText,
		},
		setAttributes,
	} = props;

	return (

		<div className="nova-opentable">
			<form method="get" className="nova-opentable__form" action="//www.opentable.com/restaurant-search.aspx" target="_blank">
				<div className="nova-opentable__wrapper">
					<div className="nova-opentable__date nova-opentable__input-wrap">
						<RichText
							tagName="label"
							value={dateLabel}
							onChange={( dateLabel ) => setAttributes( {dateLabel} )}
							allowedFormats={ [] }
						/>

						<input name="startDate" className="otb-date otb-input" type="text" value="8/30/2019" readOnly="" autoComplete="off"/>

					</div>
					<div className="nova-opentable__time nova-opentable__input-wrap">
						<RichText
							tagName="label"
							value={timeLabel}
							onChange={( timeLabel ) => setAttributes( {timeLabel} )}
							allowedFormats={ [] }
						/>
						<select className="otb-time" name="ResTime" aria-label="Reservation Time">
							<option value="9:00am">9:00 am</option>
							<option value="9:30am">9:30 am</option>
							<option value="10:00am">10:00 am</option>
							<option value="10:30am">10:30 am</option>
							<option value="11:00am">11:00 am</option>
							<option value="11:30am">11:30 am</option>
							<option value="12:00pm">12:00 pm</option>
							<option value="12:30pm">12:30 pm</option>
							<option value="1:00pm">1:00 pm</option>
							<option value="1:30pm">1:30 pm</option>
							<option value="2:00pm">2:00 pm</option>
							<option value="2:30pm">2:30 pm</option>
							<option value="3:00pm">3:00 pm</option>
							<option value="3:30pm">3:30 pm</option>
							<option value="4:00pm">4:00 pm</option>
							<option value="4:30pm">4:30 pm</option>
							<option value="5:00pm">5:00 pm</option>
							<option value="5:30pm">5:30 pm</option>
							<option value="6:00pm">6:00 pm</option>
							<option value="6:30pm">6:30 pm</option>
							<option value="7:00pm" selected="">7:00 pm</option>
							<option value="7:30pm">7:30 pm</option>
							<option value="8:00pm">8:00 pm</option>
							<option value="8:30pm">8:30 pm</option>
							<option value="9:00pm">9:00 pm</option>
							<option value="9:30pm">9:30 pm</option>
							<option value="10:00pm">10:00 pm</option>
							<option value="10:30pm">10:30 pm</option>
							<option value="11:00pm">11:00 pm</option>
							<option value="11:30pm">11:30 pm</option>
						</select>
					</div>
					<div className="nova-opentable__size nova-opentable__input-wrap">
						<RichText
							tagName="label"
							value={partySizeLabel}
							onChange={( partySizeLabel ) => setAttributes( {partySizeLabel} )}
							allowedFormats={ [] }
						/>
						<select id="party-size" name="partySize" className="otb-people otb-input">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
							<option value="13">13</option>
							<option value="14">14</option>
							<option value="15">15</option>
						</select>
					</div>
					<div className="nova-opentable__button-wrap wp-block-button">
						<RichText
							placeholder={ __( 'Find a table' ) }
							value={ submitButtonText }
							className = "nova-opentable__button wp-block-button__link"
							onChange={( submitButtonText ) => setAttributes( {submitButtonText} )}
							allowedFormats={ [] }
							keepPlaceholderOnFocus
						/>
					</div>
				</div>
				<input type="hidden" name="RestaurantID" className="RestaurantID" value={restaurantId}/>
				<input type="hidden" name="rid" className="rid" value={restaurantId}/>
				<input type="hidden" name="GeoID" className="GeoID" value="15"/>
				<input type="hidden" name="txtDateFormat" className="txtDateFormat" value="MM/dd/yyyy"/>
				<input type="hidden" name="RestaurantReferralID" className="RestaurantReferralID" value={restaurantId}/>
			</form>
		</div>
	)

};

export default OpenTablePreview;
