import AdvancedGallery from './index';

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
