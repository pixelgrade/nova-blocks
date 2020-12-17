import Preview from "./preview";
import { Fragment } from '@wordpress/element';

const CommentsEdit = (props) => {
	const {
		attributes,
		setAttributes,
		context
	} = props;

	const { } = attributes;

	return (
		<Fragment>
			<Preview { ...props } />
		</Fragment>
	)
}

export default CommentsEdit;
