import { __ } from '@wordpress/i18n';

import {
	Button,
	RadioControl,
 } from '@wordpress/components';

import {
	Fragment,
 } from '@wordpress/element';

import {
	useBlockEditContext
 } from '@wordpress/block-editor';

import {
	withDispatch,
	withSelect,
 } from '@wordpress/data';

import {
	compose
 } from '@wordpress/compose';

const PresetControl = ( props ) => {

	const noop = () => { return {} };
	const { randomize, attributes, setAttributes } = props;
	const options = Array.isArray( props.options ) ? props.options.slice() : [];
	const randomizeAttributes = typeof randomize === "function" ? randomize : noop;

	options.push({
		label: 'Just My Style™',
		value: 'just-my-style',
		preset: {}
	});

	const selectedPreset = getSelectedPreset( options, attributes );

	return (
		<Fragment>
			<RadioControl
				{ ...props }
				options={ options }
				selected={ selectedPreset }
				onChange={ preset => {

					if ( 'just-my-style' === preset ) {
						setAttributes( Object.assign( {}, randomizeAttributes() ) );
						return;
					}

					const newAttributes = getNewAttributesFromPreset( preset, options );
					setAttributes( newAttributes );
				} }
			/>
			{
				selectedPreset === 'just-my-style' &&
				<div key={ 'advanced-gallery-surprise-control' }>
					<Button
						isLarge
						isPrimary
						onClick={ () => {
							setAttributes( randomizeAttributes() )
						} }>
						{ __( '💡 Surprise me!' ) }
					</Button>
				</div>
			}
		</Fragment>
	);
};

export const getNewAttributesFromPreset = ( preset, presets ) => {
	let newAttributes = {};
	let newOption = presets.find( option => preset === option.value );

	if ( newOption && newOption.preset ) {
		newAttributes = Object.assign( newOption.preset, newAttributes );
	}

	return newAttributes;
};

export const getSelectedPreset = ( presetOptions, attributes ) => {
	const activePresets = presetOptions.filter( presetOption => {
		const { preset } = presetOption;

		return Object.keys( preset ).every( key => {
			return preset[key] === attributes[key];
		} );
	} );

	if ( activePresets.length ) {
		return activePresets[0].value;
	}

	return null;
};

const applyWithSelect = withSelect( ( select, props ) => {
	const { clientId } = useBlockEditContext();
	const { getBlock } = select( 'core/block-editor' );
	const { attributes } = getBlock( clientId );

	return {
		...props,
		clientId,
		attributes,
	};
} );

const applyWithDispatch = withDispatch( ( dispatch, { clientId } ) => {
	const { updateBlockAttributes } = dispatch( 'core/block-editor' );
	const setAttributes = ( newAttributes ) => {
		return updateBlockAttributes( clientId, newAttributes );
	};

	return {
		setAttributes,
	};
} );

export default compose( [ applyWithSelect, applyWithDispatch ] )( PresetControl );
