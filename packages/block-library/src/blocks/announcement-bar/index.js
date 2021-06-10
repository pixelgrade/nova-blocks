/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';

import {
	BaseControl,
	ToggleControl
 } from '@wordpress/components';

import {
  URLInput,
  InnerBlocks
} from '@wordpress/block-editor';

import { getSvg } from "@novablocks/block-editor";

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import iconSvg from './announcement-bar-block.svg';

const ALLOWED_BLOCKS = [ 'novablocks/openhours', 'core/paragraph' ];
const ANNOUNCEMENT_BAR_TEMPLATE = [ [ 'novablocks/openhours', { openHoursStyle: 'status',  } ] ];

registerBlockType( 'novablocks/announcement-bar', {
	title: __( 'Announcement Bar', '__plugin_txtd' ),
	description: __( 'Display a featured message through a banner across the top of your site.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: getSvg( iconSvg ),
	keywords: [ __( 'Promo Bar', '__plugin_txtd' ), __( 'Welcome Header Bar', '__plugin_txtd' ), __( 'Top Bar', '__plugin_txtd' ) ],
	attributes: {
		align: {
			type: 'string',
			default: 'full'
		},
		url: {
			type: 'string',
			default: ''
		},
		opensInNewTab: {
			type: 'boolean',
			default: false
		},
		content: {
			type: 'string',
			default: '<b>Find me on Instagram!</b> New photos and interesting facts every day.',
		}
	},
  supports: {
	  html: false,
    novaBlocks: {
	    colorSignal: true,
    }
  },
	save() {
		return <InnerBlocks.Content />;
	},
	edit: function( props ) {

		const {
			className,
			attributes: {
				url,
				opensInNewTab,
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
						template={ ANNOUNCEMENT_BAR_TEMPLATE }
					/>
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
	deprecated
} );
