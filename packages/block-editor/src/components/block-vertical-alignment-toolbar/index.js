/**
 * Internal dependencies
 */
import { getIconSvg } from '../get-svg';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Toolbar } from '@wordpress/components';
import { withViewportMatch } from '@wordpress/viewport';
import { withSelect } from '@wordpress/data';
import { compose, createHigherOrderComponent } from '@wordpress/compose';
import { createContext } from '@wordpress/element';

const { Consumer } = createContext( {
	name: '',
	isSelected: false,
	focusedElement: null,
	setFocusedElement: () => {},
	clientId: null,
} );

const BLOCK_ALIGNMENTS_CONTROLS = {
	top: {
    icon: getIconSvg( 'alignTop' ),
    title: __( 'Align Top', '__plugin_txtd' ),
	},
	center: {
		icon: getIconSvg( 'alignCenter' ),
    title: __( 'Align Center', '__plugin_txtd' ),
	},
	bottom: {
		icon: getIconSvg( 'alignBottom' ),
    title: __( 'Align Bottom', '__plugin_txtd' ),
	},
};

const DEFAULT_CONTROLS = [ 'top', 'center', 'bottom' ];
const DEFAULT_CONTROL = 'top';

export function BlockVerticalAlignmentToolbar( { isCollapsed, value, onChange, controls = DEFAULT_CONTROLS } ) {
	function applyOrUnset( align ) {
		return () => onChange( value === align ? undefined : align );
	}

	const activeAlignment = BLOCK_ALIGNMENTS_CONTROLS[ value ];
	const defaultAlignmentControl = BLOCK_ALIGNMENTS_CONTROLS[ DEFAULT_CONTROL ];

	return (
		<Toolbar
			isCollapsed={ isCollapsed }
			icon={ activeAlignment ? activeAlignment.icon : defaultAlignmentControl.icon }
			controls={
				controls.map( ( control ) => {
					return {
						...BLOCK_ALIGNMENTS_CONTROLS[ control ],
						isActive: value === control,
						onClick: applyOrUnset( control ),
					};
				} )
			}
		/>
	);
}

// @todo remove function declaration and use core method when exposed through the api
const withBlockEditContext = ( mapContextToProps ) => createHigherOrderComponent( ( OriginalComponent ) => {
	return ( props ) => (
		<Consumer>
			{ ( context ) => (
				<OriginalComponent
					{ ...props }
					{ ...mapContextToProps( context, props ) }
				/>
			) }
		</Consumer>
	);
}, 'withBlockEditContext' );

/**
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/block-vertical-alignment-toolbar/README.md
 */
export default compose(
	withBlockEditContext( ( { clientId } ) => {
		return { clientId };
	} ),
	withViewportMatch( { isLargeViewport: 'medium' } ),
	withSelect( ( select, { clientId, isLargeViewport, isCollapsed } ) => {
		const { getBlockRootClientId, getSettings } = select( 'core/block-editor' );
		return {
			isCollapsed: isCollapsed || ! isLargeViewport || (
				! getSettings().hasFixedToolbar &&
				getBlockRootClientId( clientId )
			),
		};
	} ),
)( BlockVerticalAlignmentToolbar );
