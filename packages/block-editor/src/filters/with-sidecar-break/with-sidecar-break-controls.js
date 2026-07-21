import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { isSidecarBreakEligible, isInsideSidecarContent } from './utils';

const SidecarBreakControls = ( { attributes, setAttributes } ) => {
	const value = attributes?.sidecarBreak || 'auto';

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Sidecar Layout', '__plugin_txtd' ) } initialOpen={ true }>
				<ToggleGroupControl
					label={ __( 'Extend over sidebar', '__plugin_txtd' ) }
					value={ value }
					onChange={ ( sidecarBreak ) => setAttributes( { sidecarBreak } ) }
					isBlock
					help={ __( 'Auto measures the available room next to the sidebar. Always and Never decide it, with no layout shift.', '__plugin_txtd' ) }
				>
					<ToggleGroupControlOption value="auto" label={ __( 'Auto', '__plugin_txtd' ) } />
					<ToggleGroupControlOption value="always" label={ __( 'Always', '__plugin_txtd' ) } />
					<ToggleGroupControlOption value="never" label={ __( 'Never', '__plugin_txtd' ) } />
				</ToggleGroupControl>
			</PanelBody>
		</InspectorControls>
	);
};

/**
 * The control renders only for target blocks with a breakable alignment
 * INSIDE a Sidecar content area. The HOC always renders the same root with
 * the original component first, and only conditionally renders the control
 * child — a gate that swaps the whole tree remounts the block subtree
 * (napkin: Editor Performance #1).
 */
const withSidecarBreakControls = createHigherOrderComponent( ( OriginalComponent ) => {
	return ( props ) => {
		const { name, attributes, clientId } = props;
		const eligible = isSidecarBreakEligible( name, attributes );

		const inSidecarContent = useSelect( ( select ) => {
			if ( ! eligible ) {
				return false;
			}

			const { getBlockParents, getBlockName, getBlockAttributes } = select( 'core/block-editor' );
			const parentChain = ( getBlockParents( clientId ) || [] ).map( ( parentClientId ) => ( {
				name: getBlockName( parentClientId ),
				attributes: getBlockAttributes( parentClientId ),
			} ) );

			return isInsideSidecarContent( parentChain );
		}, [ clientId, eligible ] );

		return (
			<Fragment>
				<OriginalComponent { ...props } />
				{ eligible && inSidecarContent && props.isSelected && (
					<SidecarBreakControls { ...props } />
				) }
			</Fragment>
		);
	};
}, 'withSidecarBreakControls' );

export default withSidecarBreakControls;
