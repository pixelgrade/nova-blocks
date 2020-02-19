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

	if ( ! contentWidthOptions ) {
		return false;
	}

	return (
		<Fragment>
			<label>{ __( 'Content Width', '__plugin_txtd' ) }</label>
			<ButtonGroup label="Content Width">
				{ contentWidthOptions.map( ( option ) =>
					<Button
						key={ option.value }
						isDefault={ option.value !== contentWidth }
						isPrimary={ option.value === contentWidth }
						onClick={ () => {
							setAttributes( { contentWidth: option.value } );
						} }>
						{ option.label }
					</Button>
				) }
			</ButtonGroup>
			{ 'custom' === contentWidth && <RangeControl
				value={ contentWidthCustom }
				onChange={ ( newContentWidth ) => setAttributes( { contentWidthCustom: newContentWidth } ) }
				min={ 20 }
				max={ 90 }
				step={ 10 }
			/> }
		</Fragment>
	);
};

export default withSettings( WidthControls );
