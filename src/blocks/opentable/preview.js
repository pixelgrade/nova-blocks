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

						<input name="startDate" className="otb-date otb-input" type="text" value="8/30/2019" disabled/>

					</div>
					<div className="novablocks-opentable__time novablocks-opentable__input-wrap">
						<RichText
							tagName="label"
							value={timeLabel}
							onChange={( timeLabel ) => setAttributes( {timeLabel} )}
							allowedFormats={ [] }
						/>
						<select className="otb-time" name="ResTime" aria-label="Reservation Time" disabled>
							<option value="9:00am">9:00 am</option>
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
							className = "novablocks-opentable__button wp-block-button__link"
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
