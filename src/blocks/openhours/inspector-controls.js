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
			<>
				<Button isLink onClick={ openModal }>See available tags</Button>
				{ isOpen && (
					<Modal
						onRequestClose={ closeModal }
						shouldCloseOnEsc = { true }
						shouldCloseOnClickOutside = { true }
						className = 'novablocks-openhours__modal'
					>
					</Modal>
				) }
			</>
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
			<InspectorControls>
				<TextareaControl
					label="Open Hours"
					help="Write your opening hours in a simple human readable format:"
					value={ text }
					className = 'original-text'
					onChange={( text ) => setAttributes( {
						text,
						parsedText: parseContent( text )
					} )}
				/>
				<PanelBody title={ __( 'Layout', '__plugin_txtd' ) } initialOpen={ true }>
					<RadioControl
						label={ __( 'Displaying the opening hours', '__plugin_txtd' ) }
						value={ openHoursStyle }
						selected={ openHoursStyle }
						options={ [
							{ label: 'Overview', value: 'overview' },
							{ label: 'Current Status', value: 'status' },
						] }
						onChange={ ( nextOpenHoursStyle ) => setAttributes( { openHoursStyle: nextOpenHoursStyle } ) }
					/>

					{ openHoursStyle === 'status' && <TextControl
						label="Open Note"
						value={ openNote }
						onChange={( openNote ) => setAttributes( {openNote} )}
					/> }

					{ openHoursStyle === 'status' && <TextControl
						label="Closed Note"
						value={ closedNote }
						onChange={( closedNote ) => setAttributes( {closedNote} )}
					/> }

					{ openHoursStyle === 'status' && <AvailableTagsModal/> }

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
						label={ __( 'Use Short Name', '__plugin_txtd' ) }
						checked={ useShortName }
						onChange={ () => setAttributes( { useShortName: ! useShortName } ) }
					/> }

					<TextControl
						label="Time Format"
						value={ timeFormat }
						help = { timeFormattingInstructions }
						onChange={( timeFormat ) => setAttributes( {timeFormat} )}
					/>

				</PanelBody>
			</InspectorControls>
		</Fragment>
	)
};

export default OpenHoursInspectorControls;
