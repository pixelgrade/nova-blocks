import { ControlsSection, ControlsTab } from "../../components/control-sections";

const { __ } = wp.i18n;

const {
	RadioControl,
	RangeControl
} = wp.components;

const Controls = ( props ) => {

	const {
		attributes: {
			columns,
			layoutStyle
		},
		setAttributes,
	} = props;

	return (
		<ControlsSection label={ __( 'Display' ) } priority={ 10 }>
			<ControlsTab label={ __( 'Settings' ) }>
				<RadioControl
					key={ 'novablocks-collection-layout-style-controls' }
					selected={ layoutStyle }
					className={ 'novablocks-collection-layout' }
					onChange={ ( layoutStyle ) => {
						setAttributes( { layoutStyle } );
					} }
					options={ [
						{ label: 'Classic', value: 'classic' },
						{ label: 'Parametric', value: 'parametric' }
					] }
				/>
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
