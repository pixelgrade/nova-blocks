const { __ } = wp.i18n;

const {
	Component,
	Fragment
} = wp.element;

const {
	Button,
	ButtonGroup,
	RangeControl,
} = wp.components;

export default class PaddingControls extends Component {
	render() {

		const {
			attributes: {
				contentPadding,
				contentPaddingCustom,
			},
			setAttributes
		} = this.props;

		const contentPaddingOptions = [
			{ label: __( 'Small', '__plugin_txtd' ), value: 'small' },
			{ label: __( 'Medium', '__plugin_txtd' ), value: 'medium' },
			{ label: __( 'Large', '__plugin_txtd' ), value: 'large' },
			{ label: __( 'Custom', '__plugin_txtd' ), value: 'custom' },
		];

		return <Fragment>
			<label>{ __( 'Content Padding', '__plugin_txtd') }</label>
			<ButtonGroup>
				{ contentPaddingOptions.map( option =>
					<Button key={ option.value }
							isDefault={ option.value !== contentPadding }
					        isPrimary={ option.value === contentPadding }
					        onClick={ () => { setAttributes( { contentPadding: option.value } ) } }>
						{ option.label }
					</Button>
				) }
			</ButtonGroup>
			{ 'custom' === contentPadding && <RangeControl
				value={ contentPaddingCustom }
				onChange={ contentPaddingCustom => setAttributes( { contentPaddingCustom } ) }
				min={0}
				max={25}
			/> }
		</Fragment>
	}
}
