import {
	ControlsSection,
	ControlsTab
} from "@novablocks/block-editor";

/**
 * WordPress dependencies
 */
import { Fragment, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { parseContent } from "./HoursParser";

import {
	RadioControl,
	TextControl,
	TextareaControl,
	ToggleControl,
	Modal,
	Button,
	ExternalLink
} from '@wordpress/components';

const OpenHoursInspectorControls = function( props ) {

	const {
		attributes: {
			openHoursStyle,
			text,
			timeFormat,
			openNote,
			closedNote,
			closedLabel,
			compressOpeningHours,
			hideClosedDays,
			useShortName
		},
		setAttributes,
	} = props;

	const timeFormattingUrl = 'https://wordpress.org/support/article/formatting-date-and-time/';

	const AvailableTagsModal = () => {
		const [ isOpen, setOpen ] = useState( false );
		const openModal = () => setOpen( true );
		const closeModal = () => setOpen( false );

		return (
			<Fragment>
				<Button className={'novablocks__label'} isLink onClick={ openModal }>See available tags</Button>
				{ isOpen && (
					<Modal
						onRequestClose={ closeModal }
						shouldCloseOnEsc = { true }
						shouldCloseOnClickOutside = { true }
						className = 'novablocks-openhours__modal'
					>
					</Modal>
				) }
			</Fragment>
		)
	};

	const timeFormattingInstructions = (
		<Fragment>
			<ExternalLink href={ timeFormattingUrl }>
				{ __( 'Learn more about time formatting', '__plugin_txtd' ) }
			</ExternalLink>
		</Fragment>
	);

	return (

		<Fragment>
			<ControlsSection id={ 'setup' } label={ __( 'Setup', '__plugin_txtd' ) }>
				<ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
					<TextareaControl
						key={ 'openhours-schedule-controls' }
						label={ __( 'Write your opening hours in a simple human readable format', '__plugin_txtd' ) }
						value={ text }
						className = 'original-text'
						onChange={( text ) => setAttributes( {
							text,
							parsedText: parseContent( text )
						} )}
					/>
					<div className="components-base-control__label novablocks__label novablocks__example novablocks__example--multi">
						{ __( 'Monday 10am - 3pm\n' +
						      'Tuesday to Friday 9 - 17\n' +
						      'Sat noon - 2am', '__plugin_txtd' ) }
					</div>
				</ControlsTab>
			</ControlsSection>
			<ControlsSection id={ 'display' } label={ __( 'Display', '__plugin_txtd' ) }>
				<ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
					<RadioControl
						key={ 'openhours-display-controls' }
						label={ __( 'Displaying the opening hours', '__plugin_txtd' ) }
						value={ openHoursStyle }
						selected={ openHoursStyle }
						options={ [
							{ label: __( 'Overview', '__plugin_txtd' ), value: 'overview' },
							{ label: __( 'Current Status', '__plugin_txtd' ), value: 'status' },
						] }
						onChange={ ( nextOpenHoursStyle ) => setAttributes( { openHoursStyle: nextOpenHoursStyle } ) }
					/>


					{ openHoursStyle === 'status' && <div className="components-base-control__label novablocks__label">
            {__('Write the "Open" and "Closed" messages using the tags displayed below.', '__plugin_txtd' )}
					</div> }

					{ openHoursStyle === 'status' && <AvailableTagsModal/> }

					{ openHoursStyle === 'status' && <TextControl
						label={__( 'Open Note', '__plugin_txtd' )}
						value={ openNote }
						onChange={( openNote ) => setAttributes( {openNote} )}
					/> }

					{ openHoursStyle === 'status' && <div className="components-base-control__label novablocks__label novablocks__example">
						{ __( 'It\'s {time} and we\'re Open until {today-closing-time}.', '__plugin_txtd' ) }
					</div> }

					{ openHoursStyle === 'status' && <div className="components-base-control__label novablocks__label novablocks__example">
						{ __( '{time} - It\'s today, we\'re Open.', '__plugin_txtd' ) }
					</div> }

					{ openHoursStyle === 'status' && <TextControl
						label={__( 'Closed Note', '__plugin_txtd' )}
						value={ closedNote }
						onChange={( closedNote ) => setAttributes( {closedNote} )}
					/> }

					{ openHoursStyle === 'status' && <div className="components-base-control__label novablocks__label novablocks__example">
						{ __( 'We\'re closed until {next-opening-day} at {next-opening-time}.', '__plugin_txtd' ) }
					</div> }

					{ openHoursStyle === 'status' && <div className="components-base-control__label novablocks__label novablocks__example">
						{ __( '{time} - it\'s closed now.', '__plugin_txtd' ) }
					</div> }


					{ openHoursStyle === 'overview' && <TextControl
						label={__( 'Closed Label', '__plugin_txtd' )}
						value={ closedLabel }
						onChange={( closedLabel ) => setAttributes( {closedLabel} )}
					/> }

					{ openHoursStyle === 'overview' && <ToggleControl
						label={ __( 'Compress Opening Hours', '__plugin_txtd' ) }
						checked={ compressOpeningHours }
						onChange={ () => setAttributes( { compressOpeningHours: ! compressOpeningHours } ) }
					/> }

					{ openHoursStyle === 'overview' && <ToggleControl
						label={ __( 'Hide Closed Days', '__plugin_txtd' ) }
						checked={ hideClosedDays }
						onChange={ () => setAttributes( { hideClosedDays: ! hideClosedDays } ) }
					/> }

					{ openHoursStyle === 'overview' && <ToggleControl
						label={ __( 'Use Short Day Name', '__plugin_txtd' ) }
						checked={ useShortName }
						onChange={ () => setAttributes( { useShortName: ! useShortName } ) }
					/> }

					<TextControl
						label={__( 'Time Format', '__plugin_txtd' )}
						value={ timeFormat }
						help = { timeFormattingInstructions }
						onChange={( timeFormat ) => setAttributes( {timeFormat} )}
					/>

				</ControlsTab>
			</ControlsSection>
		</Fragment>
	)
};

export default OpenHoursInspectorControls;
