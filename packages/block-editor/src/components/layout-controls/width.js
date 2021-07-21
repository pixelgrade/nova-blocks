/**
 * Internal dependencies
 */
import { withSettings } from '../../filters';

/**
 * WordPress dependencies
 */
import { __  } from '@wordpress/i18n';

import {
	Fragment,
 } from '@wordpress/element';

import {
	Button,
	ButtonGroup,
	RangeControl
 } from '@wordpress/components';

const WidthControls = function( props ) {
	const {
		attributes: {
			contentWidth,
			contentWidthCustom,
		},
		setAttributes,
		settings: {
			contentWidthOptions,
		},
	} = props;

	return (
		<Fragment>
			<div className="components-base-control">
				<label className="components-base-control__label">{ __( 'Content Width', '__plugin_txtd' ) }</label>
				<ButtonGroup label="Content Width">
					{ contentWidthOptions.map( ( option ) =>
						<Button
							key={ option.value }
							isSecondary={ option.value !== contentWidth }
							isPrimary={ option.value === contentWidth }
							onClick={ () => {
								setAttributes( { contentWidth: option.value } );
							} }>
							{ option.label }
						</Button>
					) }
				</ButtonGroup>
			</div>
			{
				'custom' === contentWidth &&
				<RangeControl
					label={ __(' Custom Content Width', '__plugin_txtd' ) }
					value={ contentWidthCustom }
					onChange={ ( newContentWidth ) => setAttributes( { contentWidthCustom: newContentWidth } ) }
					min={ 20 }
					max={ 90 }
					step={ 10 }
				/>
			}
		</Fragment>
	);
};

export default withSettings( WidthControls );
