/**
 * Internal dependencies
 */
import withSettings from '../with-settings';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { Button, ButtonGroup, RangeControl } from '@wordpress/components';

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

	if ( ! contentPaddingOptions ) {
		return false;
	}

	return (
		<Fragment>
			<label>{ __( 'Content Padding', '__plugin_txtd') }</label>
			<ButtonGroup>
				{ contentPaddingOptions.map( ( option ) =>
					<Button
						key={ option.value }
						isDefault={ option.value !== contentPadding }
						isPrimary={ option.value === contentPadding }
						onClick={ () => {
							setAttributes( { contentPadding: option.value } );
						} }>
						{ option.label }
					</Button>
				) }
			</ButtonGroup>
			{ 'custom' === contentPadding && <RangeControl
				value={ contentPaddingCustom }
				onChange={ ( newContentPadding ) => setAttributes( { contentPaddingCustom: newContentPadding } ) }
				min={ 0 }
				max={ 25 }
			/> }
		</Fragment>
	);
};

export default withSettings( PaddingControls );
