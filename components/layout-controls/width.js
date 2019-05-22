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

export default class WidthControls extends Component {
	render() {

		const {
			attributes: {
				contentWidth,
				contentWidthCustom,
			},
			setAttributes
		} = this.props;

		const contentWidthOptions = [
			{ label: __( 'Full', '__plugin_txtd' ), value: 'full' },
			{ label: __( 'Large', '__plugin_txtd' ), value: 'large' },
			{ label: __( 'Narrow', '__plugin_txtd' ), value: 'narrow' },
			{ label: __( 'Custom', '__plugin_txtd' ), value: 'custom' },
		];

		return <Fragment>
			<label>{ __( 'Content Width', '__plugin_txtd') }</label>
			<ButtonGroup label="Content Width">
				{ contentWidthOptions.map( option =>
					<Button isDefault={ option.value !== contentWidth }
					        isPrimary={ option.value === contentWidth }
					        onClick={ () => { setAttributes( { contentWidth: option.value} ) } }>
						{ option.label }
					</Button>
				) }
			</ButtonGroup>
			{ 'custom' === contentWidth && <RangeControl
				value={ contentWidthCustom }
				onChange={ contentWidthCustom => setAttributes( { contentWidthCustom } ) }
				min={20}
				max={90}
				step={10}
			/> }
		</Fragment>
	}
}
