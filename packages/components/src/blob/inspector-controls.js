import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { RangeControl } from '@wordpress/components';

const getMinSkewedCorners = ( attributes, prefix ) => {
	return 0;
};

const getMaxSkewedCorners = ( attributes, prefix ) => {
	return attributes[ `${ prefix }Sides` ];
};

const getMinPatternLength = ( attributes, prefix ) => {
	return 1;
};

const getMaxPatternLength = ( attributes, prefix ) => {
	const maxSkewedCorners = attributes[ `${ prefix }Sides` ];
	const skewedCorners = attributes[ `${ prefix }SkewedCorners` ];
	return Math.min( skewedCorners, maxSkewedCorners );
};

const normalizeAttributes = ( attributes, prefix ) => {
	const newAttributes = {};

	const minSkewedCorners = getMinSkewedCorners( attributes, prefix );
	const maxSkewedCorners = getMaxSkewedCorners( attributes, prefix );
	const minPatternLength = getMinPatternLength( attributes, prefix );
	const maxPatternLength = getMaxPatternLength( attributes, prefix );

	newAttributes[ `${ prefix }SkewedCorners` ] = Math.max( minSkewedCorners, Math.min( maxSkewedCorners, attributes[ `${ prefix }SkewedCorners` ] ) );
	newAttributes[ `${ prefix }PatternLength` ] = Math.max( minPatternLength, Math.min( maxPatternLength, attributes[ `${ prefix }PatternLength` ] ) );

	return Object.assign( {}, attributes, newAttributes );
};

const InspectorControls = ( props ) => {

	const {
		attributes,
		setAttributes,
	} = props;

	const prefix = props.prefix || 'blob';

	return (
		<Fragment>
			<RangeControl
				value={ attributes[ `${ prefix }Sides` ] }
				onChange={ ( sides ) => {
					const newAttributes = {};
					newAttributes[`${ prefix }Sides`] = sides;
					setAttributes( normalizeAttributes( Object.assign( {}, attributes, newAttributes ), prefix ) );
				} }
				label={ __( 'Sides' ) }
				min={ 3 }
				max={ 20 }
				step={ 1 }
			/>
			<RangeControl
				value={ attributes[ `${ prefix }SkewedCorners` ] }
				onChange={ ( sides ) => {
					const newAttributes = {};
					newAttributes[`${ prefix }SkewedCorners`] = sides;
					setAttributes( normalizeAttributes( Object.assign( {}, attributes, newAttributes ), prefix ) );
				} }
				label={ __( 'Skewed Corners' ) }
				min={ getMinSkewedCorners( attributes, prefix ) }
				max={ getMaxSkewedCorners( attributes, prefix ) }
				step={ 1 }
			/>
			<RangeControl
				value={ attributes[ `${ prefix }PatternLength` ] }
				onChange={ ( sides ) => {
					const newAttributes = {};
					newAttributes[`${ prefix }PatternLength`] = sides;
					setAttributes( normalizeAttributes( Object.assign( {}, attributes, newAttributes ), prefix ) );
				} }
				label={ __( 'Pattern Length' ) }
				min={ getMinPatternLength( attributes, prefix ) }
				max={ getMaxPatternLength( attributes, prefix ) }
				step={ 1 }
			/>
			<RangeControl
				value={ attributes[ `${ prefix }PatternSeed` ] }
				onChange={ ( preset ) => {
					const newAttributes = {};
					newAttributes[`${ prefix }PatternSeed`] = preset;
					setAttributes( newAttributes );
				} }
				label={ __( 'Pattern Seed' ) }
				min={ 1 }
				max={ 10 }
				step={ 1 }
			/>
			<RangeControl
				value={ attributes[`${ prefix }Complexity`] }
				onChange={ ( complexity ) => {
					const newAttributes = {};
					newAttributes[`${ prefix }Complexity`] = complexity;
					setAttributes( newAttributes );
				} }
				label={ __( 'Variation' ) }
				min={ 0 }
				max={ 100 }
				step={ 1 }
			/>
			<RangeControl
				value={ attributes[`${ prefix }Smoothness`] }
				onChange={ ( smoothness ) => {
					const newAttributes = {};
					newAttributes[`${ prefix }Smoothness`] = smoothness;
					setAttributes( newAttributes );
				} }
				label={ __( 'Smoothness' ) }
				min={ 0 }
				max={ 100 }
				step={ 1 }
			/>
			<RangeControl
				value={ attributes[`${ prefix }Rotation`] }
				onChange={ ( rotation ) => {
					const newAttributes = {};
					newAttributes[`${ prefix }Rotation`] = rotation;
					setAttributes( newAttributes );
				} }
				label={ __( 'Rotation' ) }
				min={ 0 }
				max={ 360 }
				step={ 10 }
			/>
		</Fragment>
	);
};

export default InspectorControls;
