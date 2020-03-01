import BlobInspectorControls from "./inspector-controls";

const Blob = props => {

	const {
		attributes: {
			complexity,
			preset,
			smoothness,
		},
		presetOffset
	} = props;

	return (
		<BlobInspectorControls { ...props } />
	);
}
