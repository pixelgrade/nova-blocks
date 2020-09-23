const {
	Fragment
} = wp.element;

const {
	RangeControl,
} = wp.components;

const MinMaxControl = ( props ) => {

	const {
		attributes,
		setAttributes,

		attributeName,
		minAttributeName,
		maxAttributeName,
	} = props;

	const absMinValue = props?.min || 1;
	const absMaxValue = props?.max || 12;

	const value = attributes[attributeName];
	const minValue = attributes[minAttributeName];
	const maxValue = attributes[maxAttributeName];

	const label = props?.label || __( 'Value', '__plugin_txtd' );

	return (
		<Fragment>
			<RangeControl
				label={ __( `${ label }`, '__plugin_txtd' ) }
				value={ value }
				onChange={ value => {
					setAttributes( {
						[attributeName]: value
					} );
				} }
				min={ minValue }
				max={ maxValue }
			/>
			<RangeControl
				label={ __( `Min ${ label }`, '__plugin_txtd' ) }
				value={ minValue }
				onChange={ minValue => {
					setAttributes( {
						[minAttributeName]: minValue,
						[attributeName]: Math.min( Math.max( minValue, value ), maxValue )
					} );
				} }
				min={ absMinValue }
				max={ maxValue }
			/>
			<RangeControl
				label={ __( `Max ${ label }`, '__plugin_txtd' ) }
				value={ maxValue }
				onChange={ maxValue => {
					setAttributes( {
						[maxAttributeName]: maxValue,
						[attributeName]: Math.min( Math.max( minValue, value ), maxValue )
					} );
				} }
				min={ minValue }
				max={ absMaxValue }
			/>
		</Fragment>
	);
};
