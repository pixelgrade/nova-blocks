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

import { isSidecarBreakEligible, isDirectSidecarContentChild, replaceSidecarBreakClass } from './utils';

const SidecarBreakControls = ( { attributes, setAttributes } ) => {
	const value = attributes?.sidecarBreak || 'auto';

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Sidecar Layout', '__plugin_txtd' ) } initialOpen={ true }>
				<ToggleGroupControl
					label={ __( 'Extend over sidebar', '__plugin_txtd' ) }
					value={ value }
					onChange={ ( sidecarBreak ) => setAttributes( {
						sidecarBreak,
						// The class serializes through the block's own
						// className attribute (see utils.js — sync policy:
						// attribute wins, re-synced only here).
						className: replaceSidecarBreakClass( attributes?.className, sidecarBreak ),
					} ) }
					isBlock
					__nextHasNoMarginBottom
					__next40pxDefaultSize
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
 * The control renders for target blocks with a breakable alignment whose
 * DIRECT parent is a Sidecar content area — matching what the CSS and the
 * measurement layer act on today (Phase 5's Group pass-through will revisit
 * the depth of this gate). It ALSO renders whenever sidecarBreak carries a
 * non-default value regardless of context, so a block can never strand an
 * active decision without the UI to reset it (e.g. after being moved out of
 * the sidecar or unaligned).
 *
 * The HOC always renders the same root with the original component first,
 * and only conditionally renders the control child — a gate that swaps the
 * whole tree remounts the block subtree (napkin: Editor Performance #1).
 */
const withSidecarBreakControls = createHigherOrderComponent( ( OriginalComponent ) => {
	return ( props ) => {
		const { name, attributes, clientId } = props;
		const eligible = isSidecarBreakEligible( name, attributes );
		const hasActiveDecision = [ 'always', 'never' ].includes( attributes?.sidecarBreak );

		const inSidecarContent = useSelect( ( select ) => {
			if ( ! eligible ) {
				return false;
			}

			const { getBlockRootClientId, getBlockName, getBlockAttributes } = select( 'core/block-editor' );
			const parentClientId = getBlockRootClientId( clientId );

			return !! parentClientId && isDirectSidecarContentChild( {
				name: getBlockName( parentClientId ),
				attributes: getBlockAttributes( parentClientId ),
			} );
		}, [ clientId, eligible ] );

		const showControl = ( eligible && inSidecarContent ) || hasActiveDecision;

		return (
			<Fragment>
				<OriginalComponent { ...props } />
				{ showControl && props.isSelected && (
					<SidecarBreakControls { ...props } />
				) }
			</Fragment>
		);
	};
}, 'withSidecarBreakControls' );

export default withSidecarBreakControls;
