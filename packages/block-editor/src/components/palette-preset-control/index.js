import classnames from 'classnames';

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
import {getColorSetClassnames} from "@novablocks/utils";

const PalettePresetControl = ( props ) => {
	const { attributes, setAttributes, label } = props;
	const options = Array.isArray( props.options ) ? props.options.slice() : [];
	const selectedPreset = getSelectedPreset( options, attributes );

	return (
	  <div className={ `components-base-control novablocks-palette-control` }>
      { label && <label className="components-base-control__label novablocks-palette-control__label">{ label }</label> }
      <div className={ 'novablocks-palette-control__field' }>
        { options.map( option => {
          const { label, value } = option;
          const newAttributes = Object.assign( {}, attributes, getNewAttributesFromPreset( value, options ) );

          const className = classnames(
            'novablocks-palette-control__option',
            getColorSetClassnames( newAttributes ),
            {
              'novablocks-palette-control__option--selected': value === selectedPreset
            }
          );

          return (
            <div className={ className } onClick={ () => {
              const newAttributes = Object.assign( {}, attributes, getNewAttributesFromPreset( value, options ) )
              setAttributes( newAttributes );
            } }>{ label }</div>
          )
        } ) }
      </div>
    </div>
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

export default compose( [ applyWithSelect, applyWithDispatch ] )( PalettePresetControl );
