import classnames from 'classnames';

const { __ } = wp.i18n;

const {
	compose,
	createHigherOrderComponent
} = wp.compose;

const {
	Fragment,
	Component,
} = wp.element;

const {
	PanelBody,
	withFallbackStyles,
} = wp.components;

const {
	InspectorControls,
	FontSizePicker,
	getFontSizeClass,
	withFontSizes
} = wp.blockEditor;

const {
	withSelect,
} = wp.data;

const {
	addFilter
} = wp.hooks;

const applyFallbackStyles = withFallbackStyles( ( node, ownProps ) => {
	const { fontSize, customFontSize } = ownProps.attributes;
	const editableNode = node.querySelector( '[contenteditable="true"]' );
	//verify if editableNode is available, before using getComputedStyle.
	const computedStyles = editableNode ? getComputedStyle( editableNode ) : null;
	return {
		fallbackFontSize: fontSize || customFontSize || ! computedStyles ? undefined : parseInt( computedStyles.fontSize ) || undefined,
	};
} );

const enableFontSizeControlOnBlocks = [
	'core/heading',
	'core/quote',
	'core/list',
];

function withFontSizePicker( WrappedComponent ) {
	return ( props ) => {

		const {
			fallbackFontSize,
			fontSize,
			setFontSize,
			setAttributes,
			fontSizes,
		} = props;

		return [
			<WrappedComponent { ...props } />,
			<InspectorControls>
				<PanelBody title={ __( 'Text Settings', '__plugin_txtd' ) } className="blocks-font-size">
					<FontSizePicker
						fallbackFontSize={ fallbackFontSize }
						value={ fontSize.size }
						onChange={ nextFontSize => {
							const fontSizeObject = fontSizes.find( fontSizeObj => {
								return fontSizeObj.size === nextFontSize
							} );
							setAttributes( { className: `has-${fontSizeObject.slug}-font-size` } );
							setFontSize( nextFontSize );
						} }
					/>
				</PanelBody>
			</InspectorControls>
		]
	}
}

const withBetterFontSizes = compose( [
	withFontSizes( 'fontSize' ),
	applyFallbackStyles,
	withSelect( select => {
		const {
			disableCustomFontSizes,
			fontSizes,
		} = select( 'core/block-editor' ).getSettings();

		return {
			disableCustomFontSizes,
			fontSizes,
		};
	} ),
	withFontSizePicker,
] );

const withFontSizeControl = createHigherOrderComponent(OriginalComponent => {

	const BetterComponent = withBetterFontSizes(OriginalComponent);

	return ( props ) => {

		if ( ! enableFontSizeControlOnBlocks.includes( props.name ) ) {
			return <OriginalComponent { ...props } />
		}

		return <BetterComponent { ...props } />;
	};
});
addFilter( 'editor.BlockEdit', 'novablocks/with-inspector-controls', withFontSizeControl );

function addFontSizeClass( props, block, attributes ) {
	if ( ! enableFontSizeControlOnBlocks.includes( block.name ) ) {
		return props;
	}

	return lodash.assign( props, {
		className: getFontSizeClass( attributes.fontSize )
	} );
}
addFilter( 'blocks.getSaveContent.extraProps', 'novablocks/add-font-size-class', addFontSizeClass );

function addFontSizeAttribute( settings ) {

	if ( typeof settings.attributes !== 'undefined' ){

		settings.attributes = Object.assign( settings.attributes, {
			fontSize: {
				type: 'string',
				default: '',
			}
		});

	}

	return settings;
}
addFilter( 'blocks.registerBlockType', 'novablocks/add-font-size-attribute', addFontSizeAttribute );
