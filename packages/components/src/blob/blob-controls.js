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
				value={ attributes[ `${ prefix }Preset` ] }
				onChange={ ( preset ) => {
					const newAttributes = {};
					newAttributes[`${ prefix }Preset`] = preset;
					setAttributes( newAttributes );
				} }
				label={ __( 'Preset' ) }
				min={ 1 }
				max={ 100 }
				step={ 1 }
			/>
			<RangeControl
				value={ attributes[`${ prefix }Complexity`] }
				onChange={ ( complexity ) => {
					const newAttributes = {};
					newAttributes[`${ prefix }Complexity`] = complexity;
					setAttributes( newAttributes );
				} }
				label={ __( 'Complexity' ) }
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
