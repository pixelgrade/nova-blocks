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

import {
	isSidecarBreakEligible,
	isSidecarWrapEligible,
	isDirectSidecarContentChild,
	replaceSidecarBreakClass,
	replaceSidecarWrapClass,
} from './utils';

const SidecarBreakControls = ( { attributes, setAttributes, showBreak, showWrap } ) => {
	const breakValue = attributes?.sidecarBreak || 'auto';
	const wrapValue = attributes?.sidecarWrap || 'none';

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Sidecar Layout', '__plugin_txtd' ) } initialOpen={ true }>
				{ showBreak && (
					<ToggleGroupControl
						label={ __( 'Extend over sidebar', '__plugin_txtd' ) }
						value={ breakValue }
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
				) }
				{ showWrap && (
					<ToggleGroupControl
						label={ __( 'Text wrap', '__plugin_txtd' ) }
						value={ wrapValue }
						onChange={ ( sidecarWrap ) => setAttributes( {
							sidecarWrap,
							className: replaceSidecarWrapClass( attributes?.className, sidecarWrap ),
						} ) }
						isBlock
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						help={ __( 'Around wraps the text beside and under the image; Extend pulls it over the sidebar toward the page edge. The editor previews the beside layout — the published page renders the full wrap.', '__plugin_txtd' ) }
					>
						<ToggleGroupControlOption value="none" label={ __( 'None', '__plugin_txtd' ) } />
						<ToggleGroupControlOption value="around" label={ __( 'Around', '__plugin_txtd' ) } />
						<ToggleGroupControlOption value="extend" label={ __( 'Extend', '__plugin_txtd' ) } />
					</ToggleGroupControl>
				) }
			</PanelBody>
		</InspectorControls>
	);
};

/**
 * The panel renders for target blocks whose DIRECT parent is a Sidecar content
 * area — matching what the CSS and the measurement layer act on today (Phase 5's
 * Group pass-through will revisit the depth of this gate). Two independent
 * controls share the panel:
 *
 * - "Extend over sidebar" (break): any breakable alignment (wide/full/left/right).
 * - "Text wrap" (pull-out): side-floatable blocks aligned left/right only.
 *
 * Each control ALSO renders whenever its attribute carries a non-default value
 * regardless of context, so a block can never strand an active decision without
 * the UI to reset it (e.g. after being moved out of the sidecar or unaligned).
 *
 * The HOC always renders the same root with the original component first, and
 * only conditionally renders the control child — a gate that swaps the whole
 * tree remounts the block subtree (napkin: Editor Performance #1).
 */
const withSidecarBreakControls = createHigherOrderComponent( ( OriginalComponent ) => {
	return ( props ) => {
		const { name, attributes, clientId } = props;
		const breakEligible = isSidecarBreakEligible( name, attributes );
		const wrapEligible = isSidecarWrapEligible( name, attributes );
		const hasActiveBreak = [ 'always', 'never' ].includes( attributes?.sidecarBreak );
		const hasActiveWrap = [ 'around', 'extend' ].includes( attributes?.sidecarWrap );

		const inSidecarContent = useSelect( ( select ) => {
			if ( ! breakEligible && ! wrapEligible ) {
				return false;
			}

			const { getBlockRootClientId, getBlockName, getBlockAttributes } = select( 'core/block-editor' );
			const parentClientId = getBlockRootClientId( clientId );

			return !! parentClientId && isDirectSidecarContentChild( {
				name: getBlockName( parentClientId ),
				attributes: getBlockAttributes( parentClientId ),
			} );
		}, [ clientId, breakEligible, wrapEligible ] );

		const showBreak = ( breakEligible && inSidecarContent ) || hasActiveBreak;
		const showWrap = ( wrapEligible && inSidecarContent ) || hasActiveWrap;
		const showPanel = showBreak || showWrap;

		return (
			<Fragment>
				<OriginalComponent { ...props } />
				{ showPanel && props.isSelected && (
					<SidecarBreakControls { ...props } showBreak={ showBreak } showWrap={ showWrap } />
				) }
			</Fragment>
		);
	};
}, 'withSidecarBreakControls' );

export default withSidecarBreakControls;
