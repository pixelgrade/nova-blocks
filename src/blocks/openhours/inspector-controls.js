import {ControlsSection, ControlsTab} from "../../components/control-sections";

/**
 * WordPress dependencies
 */
const {Fragment, useState} = wp.element;
const {__} = wp.i18n;

import { parseContent } from "./hoursparser";

const {
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	RadioControl,
	TextControl,
	TextareaControl,
	ToggleControl,
	Modal,
	Button,
	ExternalLink
} = wp.components;

const OpenHoursInspectorControls = function( props ) {
	const {
		attributes: {
			openHoursStyle,
			text,
			parsedText,
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
			<ExternalLink href={timeFormattingUrl}>
				{ __( 'Learn more about time formatting', '__plugin_txtd' ) }
			</ExternalLink>
		</Fragment>
	);

	return (

		<Fragment>
			<ControlsSection label={ __( 'Setup' ) }>
				<ControlsTab label={ __( 'Settings' ) }>
					<TextareaControl
						key={ 'openhours-schedule-controls' }
						label={ __( 'Write your opening hours in a simple human readable format' ) }
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
			<ControlsSection label={ __( 'Display' ) }>
				<ControlsTab label={ __( 'Settings' ) }>
					<RadioControl
						key={ 'openhours-display-controls' }
						label={ __( 'Displaying the opening hours', '__plugin_txtd' ) }
						value={ openHoursStyle }
						selected={ openHoursStyle }
						options={ [
							{ label: 'Overview', value: 'overview' },
							{ label: 'Current Status', value: 'status' },
						] }
						onChange={ ( nextOpenHoursStyle ) => setAttributes( { openHoursStyle: nextOpenHoursStyle } ) }
					/>


					{ openHoursStyle === 'status' && <div className="components-base-control__label novablocks__label">
						Write the "Open" and "Closed" messages using the tags displayed below.
					</div> }

					{ openHoursStyle === 'status' && <AvailableTagsModal/> }

					{ openHoursStyle === 'status' && <TextControl
						label="Open Note"
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
						label="Closed Note"
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
						label="Closed Label"
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

					{  openHoursStyle === 'overview' && <ToggleControl
						label={ __( 'Use Short Day Name', '__plugin_txtd' ) }
						checked={ useShortName }
						onChange={ () => setAttributes( { useShortName: ! useShortName } ) }
					/> }

					<TextControl
						label="Time Format"
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
