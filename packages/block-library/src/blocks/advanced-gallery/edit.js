import MediaComposition from '@novablocks/media-composition';
import { CardMediaWrapper } from "@novablocks/block-editor";

const Edit = ( props ) => {

	const {
		attributes: {
			className
		}
	} = props;

	return (
		<div className={ className }>
      <CardMediaWrapper { ...props }>
			  <MediaComposition { ...props } />
      </CardMediaWrapper>
		</div>
	);
};

export default Edit;
