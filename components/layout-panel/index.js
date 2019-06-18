import PaddingControls from "./padding";
import WidthControls from "./width";
import "./style.scss";

const { __ } = wp.i18n;

const {
	Component,
} = wp.element;

const {
	PanelBody,
} = wp.components;

export default class LayoutPanel extends Component {
	render() {

		return <PanelBody
			className="pixelgrade-hero-button-group-wrapper"
			title={ __( 'Layout', '__plugin_txtd' ) }
			initialOpen={ false }>

			<PaddingControls { ...this.props } />
			<WidthControls { ...this.props } />

			{ this.props.children }
		</PanelBody>
	}
}
