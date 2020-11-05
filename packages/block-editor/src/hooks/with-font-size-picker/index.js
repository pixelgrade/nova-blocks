import classnames from 'classnames';

import { __ } from '@wordpress/i18n';

import {
	compose,
	createHigherOrderComponent
} from '@wordpress/compose';

import {
	Fragment,
	Component,
} from '@wordpress/element';

import {
	PanelBody,
	SelectControl,
} from '@wordpress/components';

import {
	InspectorControls,
} from '@wordpress/block-editor';

import {
	withSelect,
} from '@wordpress/data';

import {
	addFilter
} from '@wordpress/hooks';

const enableFontSizeControlOnBlocks = [
	'core/quote',
	'core/pullquote',
	'core/heading',
	'novablocks/headline'
];

const fontSizeOptions = [
	{ value: 'smallest', label: __( 'Smallest', '__plugin_txtd' ) },
	{ value: 'smaller', label: __( 'Smaller', '__plugin_txtd' ) },
	{ value: 'normal', label: __( 'Normal', '__plugin_txtd' ) },
	{ value: 'larger', label: __( 'Larger', '__plugin_txtd' ) },
	{ value: 'largest', label: __( 'Largest', '__plugin_txtd' ) },
];

const defaultFontSize = 'normal';

function replaceActiveFontSize( className, fontSize, nextFontSize ) {

	if ( className ) {
		const regex = new RegExp( 'has-[a-z]+-font-size', 'gi' );
		className = className.replace( regex, '' ).trim();
	}

	const nextClassName = 'has-' + nextFontSize + '-font-size';

	return className ? className + ' ' + nextClassName : nextClassName;
}

function withFontSizePicker( WrappedComponent ) {

	return ( props ) => {

		const {
			attributes: {
				className,
				fontSize,
				level,
			},
			setAttributes,
		} = props;

		const selectValue = fontSizeOptions.find( x => x.value === fontSize ) ? fontSize : defaultFontSize;

		return (
			<Fragment>
				<WrappedComponent { ...props } />
				<InspectorControls>
					<PanelBody title={ __( 'Text Settings', '__plugin_txtd' ) } className="blocks-custom-font-size">
						<SelectControl
							label={ __( 'Font Size', '__plugin_txtd' ) }
							value={ selectValue }
							options={ fontSizeOptions }
							onChange={ nextFontSize => {
								setAttributes( {
									fontSize: nextFontSize,
									className: replaceActiveFontSize( className, fontSize, nextFontSize )
								} );
							} }
						/>
					</PanelBody>
				</InspectorControls>
			 </Fragment>
		)
	}
}

const withFontSizeControl = createHigherOrderComponent(OriginalComponent => {

	const BetterComponent = withFontSizePicker(OriginalComponent);

	return ( props ) => {

		if ( ! enableFontSizeControlOnBlocks.includes( props.name ) ) {
			return <OriginalComponent { ...props } />
		}

		return <BetterComponent { ...props } />;
	};
});
addFilter( 'editor.BlockEdit', 'novablocks/with-inspector-controls', withFontSizeControl );

function addFontSizeAttribute( block ) {

	if ( ! enableFontSizeControlOnBlocks.includes( block.name ) ) {
		return block;
	}

	if ( typeof block.attributes === 'undefined' ) {
		block.attributes = {};
	}

	block.attributes = Object.assign( block.attributes, {
		fontSize: {
			type: 'string',
			default: defaultFontSize,
		}
	});

	return block;
}
addFilter( 'blocks.registerBlockType', 'novablocks/add-font-size-attribute', addFontSizeAttribute );
