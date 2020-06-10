import { CardsManager } from '../../components';

const { __ } = wp.i18n;

const {
	createHigherOrderComponent
} = wp.compose;

const {
	InspectorControls
} = wp.blockEditor;

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
	'novablocks/posts-collection',
];

const withCardsManager = createHigherOrderComponent(OriginalComponent => {

	return ( props ) => {

		if ( ! ALLOWED_BLOCKS.includes( props.name ) ) {
			return <OriginalComponent { ...props } />
		}

		return (
			<Fragment>
				<OriginalComponent { ...props } />
				<InspectorControls>
					<PanelBody title={ __( 'Cards Manager', '__plugin_txtd' ) }>
						<CardsManager { ...props } />
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};

});
addFilter( 'editor.BlockEdit', 'novablocks/with-cards-manager', withCardsManager );
