import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { RangeControl } from '@wordpress/components';

const BlobControls = ( props ) => {

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
					setAttributes( newAttributes );
				} }
				label={ __( 'Sides' ) }
				min={ 1 }
				max={ 20 }
				step={ 1 }
			/>
			<RangeControl
				value={ attributes[ `${ prefix }SkewedCorners` ] }
				onChange={ ( sides ) => {
					const newAttributes = {};
					newAttributes[`${ prefix }SkewedCorners`] = sides;
					setAttributes( newAttributes );
				} }
				label={ __( 'Skewed Corners' ) }
				min={ 0 }
				max={ 20 }
				step={ 1 }
			/>
			<RangeControl
				value={ attributes[ `${ prefix }PatternLength` ] }
				onChange={ ( sides ) => {
					const newAttributes = {};
					newAttributes[`${ prefix }PatternLength`] = sides;
					setAttributes( newAttributes );
				} }
				label={ __( 'Pattern Length' ) }
				min={ 1 }
				max={ 20 }
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
		</Fragment>
	);
};

export default BlobControls;
