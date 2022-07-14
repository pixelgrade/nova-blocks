import {
	ControlsSection,
	ControlsTab
} from "@novablocks/block-editor";

/**
 * WordPress dependencies
 */
import { Fragment, useCallback, useState } from '@wordpress/element';
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

const OpenHoursInspectorControls = props => {

	const { attributes, setAttributes } = props;
  const {
    openHoursStyle,
    text,
    timeFormat,
    openNote,
    closedNote,
    closedLabel,
    compressOpeningHours,
    hideClosedDays,
    useShortName
  } = attributes;

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
						selected={ openHoursStyle }
						options={ [
							{ label: __( 'Overview', '__plugin_txtd' ), value: 'overview' },
							{ label: __( 'Current Status', '__plugin_txtd' ), value: 'status' },
						] }
						onChange={ ( openHoursStyle ) => {
              setAttributes( { openHoursStyle } )
            } }
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
            label={ __( 'Time Format', '__plugin_txtd' ) }
            value={ timeFormat }
            help={ <ExternalLink href={ 'https://wordpress.org/support/article/formatting-date-and-time/' }>
              { __( 'Learn more about time formatting', '__plugin_txtd' ) }
            </ExternalLink> }
            onChange={ ( timeFormat ) => setAttributes( { timeFormat } ) }
          />

				</ControlsTab>
			</ControlsSection>
		</Fragment>
	)
};

const AvailableTagsModal = () => {
  const [ isOpen, setOpen ] = useState( false );
  const openModal = useCallback( () => setOpen( true ), [] );
  const closeModal = useCallback( () => setOpen( false ), [] );

  return (
    <Fragment>
      <Button className={ 'novablocks__label' } isLink onClick={ openModal }>See available tags</Button>
      { isOpen && (
        <Modal
          onRequestClose={ closeModal }
          shouldCloseOnEsc={ true }
          shouldCloseOnClickOutside={ true }
          className='novablocks-openhours__modal'
        >
          <table className={ 'novablocks-openhours__tags-table' }>
            <tbody>
            <tr>
              <th>Tag</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>{ "{ time }" }</td>
              <td>Will be replaced by&nbsp;the current WordPress installation time.</td>
            </tr>
            <tr>
              <td>{ "{ today }" }</td>
              <td>Will be replaced by the name of the current day.</td>
            </tr>
            <tr>
              <td>{ "{ today - opening - time }" }</td>
              <td>Will be replaced by the current day’s opening time.</td>
            </tr>
            <tr>
              <td>{ "{ today - closing - time }" }</td>
              <td>Will be replaced by the current day’s closing time.</td>
            </tr>
            <tr>
              <td>{ "{ today - timeframe }" }</td>
              <td>Will be replaced by the current day’s open-closed timeframe.</td>
            </tr>
            <tr>
              <td>{ "{ next - opening - day }" }</td>
              <td>Will be replaced by the next day’s (in which you will be open) name.</td>
            </tr>
            <tr>
              <td>{ "{ next - opening - time }" }</td>
              <td>Will be replaced by the opening time of your next open day.</td>
            </tr>
            <tr>
              <td>{ "{ next - closing - time }" }</td>
              <td>Will be replaced by the closing time of your next open day.</td>
            </tr>
            <tr>
              <td>{ "{ next - opening - timeframe }" }</td>
              <td>Will be replaced by the open-closed timeframe of your next open day.</td>
            </tr>
            </tbody>
          </table>
        </Modal>
      ) }
    </Fragment>
  )
};

export default OpenHoursInspectorControls;
