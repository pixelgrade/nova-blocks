import AdvancedGallery from '@novablocks/advanced-gallery';

const Edit = ( props ) => {

	const {
		attributes: {
			className
		}
	} = props;

	return (
		<div className={ className }>
			<AdvancedGallery.Component { ...props } />
		</div>
	);

};

export default Edit;
