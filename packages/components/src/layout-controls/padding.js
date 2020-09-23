/**
 * Internal dependencies
 */
import { withSettings } from '@novablocks/utils';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
	Fragment
 } from '@wordpress/element';

import {
	Button,
	ButtonGroup,
	RangeControl
 } from '@wordpress/components';

const PaddingControls = function( props ) {
	const {
		attributes: {
			contentPadding,
			contentPaddingCustom,
		},
		setAttributes,
		settings: {
			contentPaddingOptions,
		},
	} = props;

	return (
		<Fragment>
			<div className="components-base-control">
				<label className="components-base-control__label">{ __( 'Content Padding', '__plugin_txtd' ) }</label>
				<ButtonGroup>
					{ contentPaddingOptions.map( ( option ) =>
						<Button
							key={ option.value }
							isSecondary={ option.value !== contentPadding }
							isPrimary={ option.value === contentPadding }
							onClick={ () => {
								setAttributes( { contentPadding: option.value } );
							} }>
							{ option.label }
						</Button>
					) }
				</ButtonGroup>
			</div>
			{
				'custom' === contentPadding &&
				<RangeControl
					label={ __(' Custom Content Padding', '__plugin_txtd' ) }
					value={ contentPaddingCustom }
					onChange={ ( newContentPadding ) => setAttributes( { contentPaddingCustom: newContentPadding } ) }
					min={ 0 }
					max={ 25 }
				/>
			}
		</Fragment>
	);
};

export default withSettings( PaddingControls );
