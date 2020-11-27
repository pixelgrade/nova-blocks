import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { ControlsGroup, ControlsSection, ControlsTab, ToggleGroup } from "@novablocks/block-editor";
import services from './services';

const toggles = services.map( service => {
	const label = service.charAt( 0 ).toUpperCase() + service.slice( 1 );
	const attribute = `show${ label }`;

	return {
		label,
		attribute
	}
} );

const sectionToggles = [ {
	label: __( 'Copy Link' ),
	attribute: 'showCopy'
}, {
	label: __( 'Share Privately' ),
	attribute: 'showSharePrivately'
}, {
	label: __( 'Social Icons' ),
	attribute: 'showSocialIcons'
}, {
	label: __( 'Show Print' ),
	attribute: 'showShareInPerson'
} ];

const SharingEdit = ( props ) => {

	const {
		attributes,
		setAttributes
	} = props;

	return (
		<Fragment>
			<div className="wp-block-buttons">
				<div className="wp-block-button">
					<button className="wp-block-button__link">View sharing options</button>
				</div>
			</div>
			<ControlsSection label={ __( 'Display' ) }>
				<ControlsTab label={ __( 'Settings' ) }>
					<ControlsGroup title={ __( 'Set up sections for this block', '__plugin_txtd' ) }>
						<ToggleGroup
							onChange={ setAttributes }
							toggles={ sectionToggles.map( sectionToggle => {
								return {
									...sectionToggle,
									value: attributes[ sectionToggle.attribute ]
								}
							} ) }
						/>
					</ControlsGroup>
					{
						attributes.showSocialIcons &&
						<ControlsGroup title={ __( 'Set up social icons', '__plugin_txtd' ) }>
							<ToggleGroup
								onChange={ setAttributes }
								toggles={ toggles.map( toggle => {
									return {
										...toggle,
										value: attributes[ toggle.attribute ]
									}
								} ) }
							/>
						</ControlsGroup>
					}
				</ControlsTab>
			</ControlsSection>
		</Fragment>
	)
}

export default SharingEdit;
