import { AdvancedGallery } from '@novablocks/components';

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
