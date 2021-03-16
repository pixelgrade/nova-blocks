import InspectorControls from './inspector-controls';
import Debug from './debug';
import * as utils from './utils';
import withBlobsDecoration from './with-blobs-decoration';
import attributes from './attributes';

import './with-blob-controls';

const Blob = {
	attributes,
	InspectorControls,
	Debug,
	withBlobsDecoration,
	utils
};

export default Blob;
