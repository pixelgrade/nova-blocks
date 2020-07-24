import { ControlsSection, ControlsTab } from "../../components/control-sections";

const { __ } = wp.i18n;
const { RangeControl } = wp.components;

const Controls = ( props ) => {

	const {
		attributes: {
			columns
		},
		setAttributes,
	} = props;

	return (
		<ControlsSection label={ __( 'Display' ) } priority={ 10 }>
			<ControlsTab label={ __( 'Settings' ) }>
				<RangeControl
					key={ 'posts-collection-display-controls' }
					value={ columns }
					onChange={ ( columns ) => setAttributes( { columns } ) }
					label={ __( 'Columns' ) }
					min={ 2 }
					max={ 4 }
				/>
			</ControlsTab>
		</ControlsSection>
	)
};

export default Controls;
