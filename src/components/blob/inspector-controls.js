/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	Fragment,
} = wp.element;

const {
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	RangeControl,
} = wp.components;

const BlobInspectorControls = ( props ) => {
	const {
		attributes: {
			preset,
			complexity,
			smoothness,
		},
		setAttributes,
	} = props;

	return (
		<Fragment>
			<InspectorControls>

				<PanelBody title={ __( 'Blobs', '__plugin_txtd' ) }>
					<RangeControl
						value={ preset }
						onChange={ ( preset ) => setAttributes( { preset } ) }
						label={ __( 'Preset' ) }
						min={ 0 }
						max={ 1000 }
						step={ 1 }
					/>
					<RangeControl
						value={ complexity }
						onChange={ ( complexity ) => setAttributes( { complexity } ) }
						label={ __( 'Complexity' ) }
						min={ 0 }
						max={ 100 }
						step={ 1 }
					/>
					<RangeControl
						value={ smoothness }
						onChange={ ( smoothness ) => setAttributes( { smoothness } ) }
						label={ __( 'Smoothness' ) }
						min={ 0 }
						max={ 100 }
						step={ 1 }
					/>
				</PanelBody>

			</InspectorControls>
		</Fragment>
	);
};

export default BlobInspectorControls;
