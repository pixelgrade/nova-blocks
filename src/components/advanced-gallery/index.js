import withSettings from "../with-settings";
import AdvancedGalleryPreview from './preview';
import AdvancedGalleryPlaceholder from './placeholder';
import AdvancedGalleryInspectorControls from './inspector-controls';
import AdvancedGalleryBlockControls from './block-controls';
import { normalizeImages } from "../../utils/images";

const {
	Fragment
} = wp.element;

const AdvancedGallery = ( props ) => {

	const {
		setAttributes
	} = props;

	const onSelectImages = ( images ) => {
		normalizeImages( images ).then( newImages => {
			setAttributes( { images: newImages } );
		} )
	};

	const newProps = Object.assign( {}, props, { onSelectImages } );

	return (
		<Fragment>
			<AdvancedGalleryPlaceholder { ...newProps } />
			<AdvancedGalleryPreview { ...newProps } />
			<AdvancedGalleryInspectorControls { ...newProps } />
			<AdvancedGalleryBlockControls { ...newProps } />
		</Fragment>
	)
}

export default withSettings( AdvancedGallery );
