import Preview from "./preview";
import { ControlsSection, ControlsTab } from "../../components/control-sections";

const { Fragment } = wp.element;
const { RangeControl } = wp.components;
const { __ } = wp.i18n;

const PostsEdit = ( props ) => {

	const {
		attributes: {
			containerHeight
		},
		setAttributes
	} = props;

	return (
		<Fragment>
			<Preview { ...props } />
			<ControlsSection label={ __( 'Display' ) }>
				<ControlsTab label={ __( 'Settings' ) }>
					<RangeControl
						key={ 'collection-image-container-height' }
						label={ __( 'Image container height', '__plugin_txtd' ) }
						value={ containerHeight }
						onChange={ containerHeight => {
							setAttributes( { containerHeight } )
						} }
						min={ 0 }
						max={ 100 }
						step={ 5 }
					/>
				</ControlsTab>
			</ControlsSection>
		</Fragment>
	)
};

export default PostsEdit;
