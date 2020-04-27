import AdvancedGallery from '../../components/advanced-gallery';

const Edit = ( props ) => {

	const {
		attributes: {
			className
		}
	} = props;

	return (
		<div className={ className }>
			<AdvancedGallery { ...props } />
		</div>
	);

};

export default Edit;
