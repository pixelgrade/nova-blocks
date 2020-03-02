import { Spring, animated } from 'react-spring/renderprops'
import BlobInspectorControls from '../../components/blob/inspector-controls';
import { generatePath } from "../../components/blob/util";

const { Fragment } = wp.element;

const Edit = ( props ) => {

	const {
		attributes: {
			preset,
			complexity,
			smoothness,
		}
	} = props;

	const path = generatePath( preset || 0, complexity || 0, smoothness || 0, 0 );

	return (
		<Fragment>
			<svg width="400" height="400" viewBox="0 0 20 20">
				<Spring to={ { path } }>
					{ props => <animated.path d={ props.path } /> }
				</Spring>
			</svg>
			<BlobInspectorControls { ...props } />
		</Fragment>
	);

};

export default Edit;
