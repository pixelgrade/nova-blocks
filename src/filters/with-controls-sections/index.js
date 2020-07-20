import { ControlsSections } from "../../components/control-sections";

const { InspectorControls } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;

const withControlsSections = createHigherOrderComponent(OriginalComponent => {

	return ( props ) => {
		return (
			<Fragment>
				<InspectorControls>
					<ControlsSections { ...props } />
				</InspectorControls>
				<OriginalComponent { ...props } />
			</Fragment>
		);
	};

});
addFilter( 'editor.BlockEdit', 'novablocks/with-controls-sections', withControlsSections );
