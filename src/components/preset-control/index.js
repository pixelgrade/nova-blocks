const { __ } = wp.i18n;

const {
	Button,
	RadioControl,
} = wp.components;

const {
	Fragment
} = wp.element;

const PresetControl = ( props ) => {

	const noop = () => { return {} }
	const { randomize, attribute, setAttributes, ...passedProps } = props;
	const options = Array.isArray( props.options ) ? props.options.slice() : [];
	const randomizeAttributes = typeof randomize === "function" ? randomize : noop;

	options.push({
		label: 'Just My Style™',
		value: 'just-my-style',
		preset: {}
	});

	return (
		<Fragment>
			<RadioControl
				{ ...props }
				options={ options }
				onChange={ preset => {

					if ( 'just-my-style' === preset ) {
						setAttributes( Object.assign( {}, randomizeAttributes(), {
							[attribute]: 'just-my-style'
						} ) );

						return;
					}

					const newAttributes = getNewAttributesFromPreset( attribute, preset, options );
					setAttributes( newAttributes );
				} }
			/>
			{
				props.selected === 'just-my-style' &&
				<div key={ 'advanced-gallery-surprise-control' }>
					<Button
						isLarge
						isPrimary
						onClick={() => {
							setAttributes( randomizeAttributes() )
						}}>
						{ __( '💡 Surprise me!' ) }
					</Button>
				</div>
			}
		</Fragment>
	);
}

export const getNewAttributesFromPreset = ( attribute, preset, presets ) => {
	let newAttributes = { [attribute]: preset };
	let newOption = presets.find( option => preset === option.value );

	if ( newOption && newOption.preset ) {
		newAttributes = Object.assign( newOption.preset, newAttributes );
	}

	return newAttributes;
}

export default PresetControl;
