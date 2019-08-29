import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {Fragment} = wp.element;

const {TextControl, SelectControl, Button} = wp.components;

export default function Edit( props ) {
	const {
		attributes: {

		},
		className
	} = props;

	return (
		<div>
			<TextControl
				label="Date"
				value="8/29/2019"
				readonly="readonly"
				autocomplete="off"
			/>
			<SelectControl
				label="Time"
				value="13:00PM"
				options={ [
					{ label: '13:00', value: '13:00' }
				] }
			/>
			<SelectControl
				label="Party Size"
				value="13:00PM"
				options={ [
					{ label: '1', value: '1' },
					{ label: '2', value: '2' },
					{ label: '3', value: '3' }
				] }
			/>

			<Button>
				Find a table
			</Button>
		</div>
	)

}
