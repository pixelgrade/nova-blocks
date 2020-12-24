/**
 * Internal dependencies
 */
import { getIconSvg } from '../get-svg';
import { select, dispatch } from '@wordpress/data';
export { default as alignmentAttributes } from './attributes';

import {
	BlockHorizontalAlignmentToolbar,
	BlockVerticalAlignmentToolbar
} from '../index';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import {
	Dropdown,
	Button,
	PanelRow,
	Toolbar
 } from '@wordpress/components';

const AlignmentToolbar = function( props ) {
	return (
		<Toolbar className="pixelgrade-hero-block-toolbar">
			<Dropdown
				position="bottom"
				className="pixelgrade-hero-block-toolbar-dropdown"
				contentClassName="components-nova--popover"
				renderToggle={ ( { isOpen, onToggle } ) => (
					<Button
						onClick={ onToggle }
						icon={ getIconSvg( 'alignment' ) }
						aria-expanded={ isOpen }
						label={ __( 'Content Position', '__plugin_txtd' ) }
					/>
				) }
				focusOnMount={ false }
				renderContent={ () => <AlignmentControls { ...props } /> }
			/>
		</Toolbar>
	);
};

const AlignmentControls = function( props ) {
	const {
		attributes: {
			horizontalAlignment,
			verticalAlignment,
		},
		setAttributes,
	} = props;

	return (
		<Fragment>
			<PanelRow>
				<span>{ __( 'Horizontal', '__plugin_txtd' ) }</span>
				<BlockHorizontalAlignmentToolbar
					value={ horizontalAlignment }
					onChange={ ( nextHorizontalAlignment ) => {
						select( 'core/block-editor' ).getSelectedBlock().innerBlocks.map( ( block ) => {
							dispatch( 'core/block-editor' ).updateBlockAttributes( block.clientId, { align: nextHorizontalAlignment } );
							return true;
						} );
						setAttributes( { horizontalAlignment: nextHorizontalAlignment } );
					} }
				/>
			</PanelRow>
			<PanelRow>
				<span>{ __( 'Vertical', '__plugin_txtd' ) }</span>
				<BlockVerticalAlignmentToolbar
					value={ verticalAlignment }
					onChange={ ( nextVerticalAlignment ) => setAttributes( { verticalAlignment: nextVerticalAlignment } ) }
				/>
			</PanelRow>
		</Fragment>
	);
};

export {
	AlignmentControls,
	AlignmentToolbar,
};
