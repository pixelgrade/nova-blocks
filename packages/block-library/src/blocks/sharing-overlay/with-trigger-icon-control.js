import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import {
	getSharingTriggerIconClassName,
} from './trigger';

const SHARING_BLOCK = 'novablocks/sharing-overlay';

const isSharingTriggerButton = ( name, parentIds = [], getBlockName = () => undefined ) => (
	name === 'core/button' && parentIds.some( clientId => getBlockName( clientId ) === SHARING_BLOCK )
);

const withSharingTriggerIconControl = createHigherOrderComponent( BlockEdit => {
	return props => {
		const {
			attributes,
			clientId,
			isSelected,
			name,
			setAttributes,
		} = props;
		const isSharingTrigger = useSelect( select => {
			if ( name !== 'core/button' || ! clientId ) {
				return false;
			}

			const editor = select( 'core/block-editor' );
			return isSharingTriggerButton(
				name,
				editor.getBlockParents( clientId ),
				editor.getBlockName
			);
		}, [ clientId, name ] );
		const showIcon = ! attributes?.className?.split( /\s+/ ).includes( 'is-sharing-icon-hidden' );

		return (
			<Fragment>
				<BlockEdit { ...props } />
				{ isSelected && isSharingTrigger && (
					<InspectorControls>
						<PanelBody title={ __( 'Sharing', '__plugin_txtd' ) } initialOpen={ true }>
							<ToggleControl
								label={ __( 'Show sharing icon', '__plugin_txtd' ) }
								checked={ showIcon }
								onChange={ nextShowIcon => setAttributes( {
									className: getSharingTriggerIconClassName( attributes?.className, nextShowIcon ),
								} ) }
							/>
						</PanelBody>
					</InspectorControls>
				) }
			</Fragment>
		);
	};
}, 'withSharingTriggerIconControl' );

export {
	isSharingTriggerButton,
};

export default withSharingTriggerIconControl;
