import {AlignmentToolbar} from "../../components/alignment-controls";

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { BlockControls } = wp.editor;
const { IconButton, Toolbar } = wp.components;

class Controls extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {
		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			mediaPosition
		} = attributes;

		const toolbarControls = (
			<BlockControls>
				<Toolbar>
					<IconButton
						label = {__('Show Media on Left Side', '__plugin_txtd')}
						icon = 'align-pull-left'
						isActive= { mediaPosition === 'left' }
						onClick={ () => setAttributes({ mediaPosition: 'left' }) }
					/>
					<IconButton
						label = {__('Show Media on Right Side', '__plugin_txtd')}
						icon = 'align-pull-right'
						isActive = { mediaPosition === 'right' }
						onClick = { () => setAttributes({ mediaPosition: 'right' }) }
					/>
				</Toolbar>
				<AlignmentToolbar {...this.props} />
			</BlockControls>
		);

		return (
			<Fragment>
				{ toolbarControls }
			</Fragment>
		);
	}
}

export default Controls;
