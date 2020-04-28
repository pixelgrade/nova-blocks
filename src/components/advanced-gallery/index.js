import withSettings from "../with-settings";
import AdvancedGalleryPreview from './preview';
import AdvancedGalleryPlaceholder from './placeholder';
import AdvancedGalleryInspectorControls from './inspector-controls';
import AdvancedGalleryBlockControls from './block-controls';

const {
	Fragment
} = wp.element;

const AdvancedGallery = ( props ) => {

	return (
		<Fragment>
			<AdvancedGalleryPlaceholder { ...props } />
			<AdvancedGalleryPreview { ...props } />
			<AdvancedGalleryInspectorControls { ...props } />
			<AdvancedGalleryBlockControls { ...props } />
		</Fragment>
	)
}

export default withSettings( AdvancedGallery );
