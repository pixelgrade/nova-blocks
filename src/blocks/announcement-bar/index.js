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
	RichText,
	URLInput,
} = wp.blockEditor;

export default registerBlockType( 'novablocks/announcement-bar',
	{
		title: __( 'Announcement Bar', '__plugin_txtd' ),
		description: __( 'Display a featured message through a banner across the top of your site.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.announcement,
		keywords: [ __( 'Promo Bar' ), __( 'Welcome Header Bar' ), __( 'Top Bar' ) ],
		styles: [ {
			name: 'accent',
			label: __( 'Accent' ),
			isDefault: true
		}, {
			name: 'alternative',
			label: __( 'Alternative' )
		}, {
			name: 'alert',
			label: __( 'Alert' )
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
						<RichText
							tagName="p"
							className="novablocks-announcement-bar__content"
							value={ content }
							onChange={ content => {
								setAttributes( { content } );
							} }
						/>
					</div>
					{ isSelected &&
					  <div className="novablocks-announcement-bar__url-field-wrapper">
						  <BaseControl
							  label={ __( 'Add a link to make the whole Announcement Bar clickable.' ) }
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
							  label={ __( 'Open in new tab' ) }
						  />
					  </div> }

				</Fragment>
			)
		},
		getEditWrapperProps( attributes ) {
			return { 'data-align': 'full' };
		},
	}
)
