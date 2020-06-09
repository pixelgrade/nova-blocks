import { getNewAttributesFromPreset } from "../../utils";

const { RadioControl } = wp.components;

const PresetControl = ( props ) => {

	const noop = () => { return {} }
	const { randomize, attribute, setAttributes, ...passedProps } = props;
	const options = props.options || [];
	const randomizeAttributes = typeof randomize === "function" ? randomize : noop;

	options.concat({
		label: 'Just My Style',
		value: 'just-my-style',
		preset: {}
	});

	return (
		<RadioControl
			{ ...props }
			onChange={ preset => {

				if ( 'just-my-style' === preset ) {
					setAttributes( randomizeAttributes() );
					return;
				}

				const newAttributes = getNewAttributesFromPreset( attribute, preset, options );
				setAttributes( newAttributes );
			} }
		/>
	);
}


export default PresetControl;
