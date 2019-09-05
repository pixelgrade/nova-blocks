/**
 * WordPress dependencies
 */

const {__} = wp.i18n;

const {RichText} = wp.blockEditor;

const OpenTablePreview = function( props ) {
	const {
		attributes: {
			dateLabel,
			partySizeLabel,
			timeLabel,
			submitButtonText,
		},
		setAttributes,
	} = props;

	let currentTime = new Date(),
		month = currentTime.getMonth() + 1,
		day = currentTime.getDate(),
		year = currentTime.getFullYear();

	if ( day < 10) {
		day = '0' + day;
	}

	if ( month < 10 ) {
		month = '0' + month;
	}

	let today = day + "/" + month + "/" + year;

	return (

		<div className="novablocks-opentable">
			<form method="get" className="novablocks-opentable__form" action="//www.opentable.com/restaurant-search.aspx" target="_blank">
				<div className="novablocks-opentable__wrapper">
					<div className="novablocks-opentable__date novablocks-opentable__input-wrap">
						<RichText
							tagName="label"
							value={dateLabel}
							onChange={( dateLabel ) => setAttributes( {dateLabel} )}
							allowedFormats={ [] }
						/>

						<input name="startDate" className="otb-date otb-input" type="text" value={today} disabled/>

					</div>
					<div className="novablocks-opentable__time novablocks-opentable__input-wrap">
						<RichText
							tagName="label"
							value={timeLabel}
							onChange={( timeLabel ) => setAttributes( {timeLabel} )}
							allowedFormats={ [] }
						/>
						<select className="otb-time" name="ResTime" aria-label="Reservation Time" disabled>
							<option value="12:00am">12:00 AM</option>
						</select>
					</div>
					<div className="novablocks-opentable__size novablocks-opentable__input-wrap">
						<RichText
							tagName="label"
							value={partySizeLabel}
							onChange={( partySizeLabel ) => setAttributes( {partySizeLabel} )}
							allowedFormats={ [] }
						/>
						<select id="party-size" name="partySize" className="otb-people otb-input" disabled>
							<option value="1">1</option>
						</select>
					</div>
					<div className="novablocks-opentable__button-wrap wp-block-button">
						<RichText
							placeholder={ __( 'Find a table' ) }
							value={ submitButtonText }
							className = "wp-block-button__link novablocks-opentable__button"
							onChange={( submitButtonText ) => setAttributes( {submitButtonText} )}
							allowedFormats={ [] }
							keepPlaceholderOnFocus
						/>
					</div>
				</div>
			</form>
		</div>
	)

};

export default OpenTablePreview;
