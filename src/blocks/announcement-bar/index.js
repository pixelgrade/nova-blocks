/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType, } = wp.blocks;
const { Fragment } = wp.element;

const {
	BaseControl,
	ToggleControl
} = wp.components;

const {
	URLInput,
	InnerBlocks
} = wp.blockEditor;

const ALLOWED_BLOCKS = [ 'novablocks/openhours', 'core/paragraph' ];
const ANNOUNCEMENT_BAR_TEMPLATE = [ [ 'novablocks/openhours', { openHoursStyle: 'status',  } ] ];

function init() {

	registerBlockType( 'novablocks/announcement-bar', {
		title: __( 'Announcement Bar', '__plugin_txtd' ),
		description: __( 'Display a featured message through a banner across the top of your site.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.announcement,
		keywords: [ __( 'Promo Bar', '__plugin_txtd' ), __( 'Welcome Header Bar', '__plugin_txtd' ), __( 'Top Bar', '__plugin_txtd' ) ],
		styles: [ {
			name: 'accent',
			label: __( 'Accent', '__plugin_txtd' ),
			isDefault: true
		}, {
			name: 'alternative',
			label: __( 'Alternative', '__plugin_txtd' )
		}, {
			name: 'alert',
			label: __( 'Alert', '__plugin_txtd' )
		} ],
		save: function() {},
		edit: function( props ) {

			const {
				className,
				attributes: {
					content,
					url,
					opensInNewTab
				},
				setAttributes,
				isSelected,
			} = props;


			const classNames = classnames(
				className,
				'novablocks-announcement-bar',
			);

			return (
				<Fragment>
					<div className={ classNames }>
						<InnerBlocks
							allowedBlocks={ ALLOWED_BLOCKS }
							template ={ANNOUNCEMENT_BAR_TEMPLATE}
							renderAppender={ () => (
								<InnerBlocks.ButtonBlockAppender />
							) }
						/>
						{/*<RichText*/}
						{/*	tagName="p"*/}
						{/*	className="novablocks-announcement-bar__content"*/}
						{/*	value={ content }*/}
						{/*	onChange={ content => {*/}
						{/*		setAttributes( { content } );*/}
						{/*	} }*/}
						{/*	allowedFormats={ ['core/link', 'core/bold', 'core/italic'] }*/}
						{/*/>*/}
					</div>
					{ isSelected &&
					  <div className="novablocks-announcement-bar__url-field-wrapper">
						  <BaseControl
							  label={ __( 'Add a link to make the whole Announcement Bar clickable.', '__plugin_txtd' ) }
							  className="wp-block-button__inline-link">
							  <URLInput
								  className="wp-block-button__inline-link-input"
								  value={ url }
								  autoFocus={ false }
								  onChange={ ( value ) => setAttributes( { url: value } ) }
								  disableSuggestions={ ! isSelected }
								  isFullWidth
								  hasBorder
							  />
						  </BaseControl>
						  <ToggleControl
							  checked={ opensInNewTab }
							  onChange={ ( opensInNewTab ) => {
								  setAttributes( { opensInNewTab } );
							  } }
							  label={ __( 'Open in new tab', '__plugin_txtd' ) }
						  />
					  </div> }

				</Fragment>
			)
		},
		getEditWrapperProps( attributes ) {
			return { 'data-align': 'full' };
		},
	} );
}

export default init;
