import {
	CardsManager,
	ControlsDrawerContent,
} from '../../components';

const { __ } = wp.i18n;

const {
	createHigherOrderComponent
} = wp.compose;

const {
	addFilter
} = wp.hooks;

const {
	Fragment
} = wp.element;

const {
	PanelBody
} = wp.components;

const ALLOWED_BLOCKS = [
	'novablocks/cards-collection',
];

const withCardsManager = createHigherOrderComponent(OriginalComponent => {

	return ( props ) => {

		if ( ! ALLOWED_BLOCKS.includes( props.name ) ) {
			return <OriginalComponent { ...props } />
		}

		return (
			<Fragment>
				<OriginalComponent { ...props } />
				<ControlsDrawerContent>
					<PanelBody title={ __( 'Set up elements for this block', '__plugin_txtd' ) }>
						<CardsManager { ...props } />
					</PanelBody>
				</ControlsDrawerContent>
			</Fragment>
		);
	};

});
addFilter( 'editor.BlockEdit', 'novablocks/with-cards-manager', withCardsManager );
