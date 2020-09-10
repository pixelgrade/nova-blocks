import Preview from "./preview";
import { ControlsDrawerContent, ControlsSection, ControlsTab } from "../../components/control-sections";
import toggles from "../../components/cards-manager/toggles";
import { ToggleGroup } from "../../components";

const { __ } = wp.i18n;

const { Fragment } = wp.element;

const {
	RangeControl,
	PanelBody
} = wp.components;

const PostsEdit = ( props ) => {

	const {
		attributes,
		setAttributes
	} = props;

	const {
		containerHeight,
		imagePadding,
	} = attributes;

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
					<RangeControl
						key={ 'collection-image-padding' }
						label={ __( 'Image padding', '__plugin_txtd' ) }
						value={ imagePadding }
						onChange={ imagePadding => {
							setAttributes( { imagePadding } )
						} }
						min={ 0 }
						max={ 100 }
						step={ 50 }
					/>
				</ControlsTab>
			</ControlsSection>
			<ControlsDrawerContent>
				<PanelBody title={ __( 'Set up elements for this block', '__plugin_txtd' ) }>
					<ToggleGroup
						onChange={ setAttributes }
						toggles={ toggles.filter( toggle => {
							return toggle.attribute !== 'showSubtitle';
						} ).map( toggle => {
							return {
								...toggle,
								value: attributes[ toggle.attribute ]
							}
						} ) }
					/>
				</PanelBody>
			</ControlsDrawerContent>
		</Fragment>
	)
};

export default PostsEdit;
