/**
 * Internal dependencies
 */
import withSettings from '../with-settings';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	Fragment,
} = wp.element;

const {
	Button,
	ButtonGroup,
	RangeControl,
} = wp.components;

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
