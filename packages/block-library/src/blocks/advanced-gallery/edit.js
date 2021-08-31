import MediaComposition from '@novablocks/media-composition';

const Edit = ( props ) => {

	const {
		attributes: {
			className
		}
	} = props;

	return (
		<div className={ className }>
			<MediaComposition { ...props } />
		</div>
	);

};

export default Edit;
