import { ControlsSections } from "../../components/control-sections";

import {
	Drawer,
	Drawers,
	DrawerList,
	DrawerPanel
} from "../../components/drawer";

const { InspectorControls } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;

const DrawerPanelContent = ( props ) => {

	return (
		<Fragment>
			<button onClick={ props.goBack }>Back</button>
			{ props.children }
		</Fragment>
	)
}

const withControlsSections = createHigherOrderComponent(OriginalComponent => {

	return ( props ) => {
		return (
			<Fragment>
				<InspectorControls>
					<Drawers>
						<DrawerList>
							<Drawer title={ 'Unu' } />
							<Drawer title={ 'Doi' } />
						</DrawerList>
						<DrawerPanel>
							<DrawerPanelContent>
								<p>Continut x1</p>
							</DrawerPanelContent>
						</DrawerPanel>
						<DrawerPanel>
							<DrawerPanelContent>
								<p>Continut x2</p>
								<p>Continut x2</p>
							</DrawerPanelContent>
						</DrawerPanel>
					</Drawers>
				</InspectorControls>
				<OriginalComponent { ...props } />
			</Fragment>
		);
	};

});
addFilter( 'editor.BlockEdit', 'novablocks/with-controls-sections', withControlsSections );
