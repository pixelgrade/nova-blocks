import {
	CardsManager,
	ControlsDrawerContent,
} from '@novablocks/components';

import { __ } from '@wordpress/i18n';

import {
	createHigherOrderComponent
} from '@wordpress/compose';

import {
	addFilter
} from '@wordpress/hooks';

import {
	Fragment
} from '@wordpress/element';

import {
	PanelBody
} from '@wordpress/components';

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
