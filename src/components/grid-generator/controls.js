import { ControlsSection, ControlsTab } from "../control-sections";
import ControlsGroup from "../controls-group";

const { __ } = wp.i18n;

const {
	Fragment
} = wp.element;

const {
	RangeControl,
	ToggleControl,
} = wp.components;

const MinMaxControl = ( props ) => {

	const {
		attributes,
		setAttributes,

		attributeName,
		minAttributeName,
		maxAttributeName,
	} = props;

	const absMinValue = props?.min || 1;
	const absMaxValue = props?.max || 12;

	const value = attributes[attributeName];
	const minValue = attributes[minAttributeName];
	const maxValue = attributes[maxAttributeName];

	const label = props?.label || __( 'Value', '__plugin_txtd' );

	return (
		<Fragment>
			<RangeControl
				label={ __( `${ label }`, '__plugin_txtd' ) }
				value={ value }
				onChange={ value => {
					setAttributes( {
						[attributeName]: value
					} );
				} }
				min={ minValue }
				max={ maxValue }
			/>
			<RangeControl
				label={ __( `Min ${ label }`, '__plugin_txtd' ) }
				value={ minValue }
				onChange={ minValue => {
					setAttributes( {
						[minAttributeName]: minValue,
						[attributeName]: Math.min( Math.max( minValue, value ), maxValue )
					} );
				} }
				min={ absMinValue }
				max={ maxValue }
			/>
			<RangeControl
				label={ __( `Max ${ label }`, '__plugin_txtd' ) }
				value={ maxValue }
				onChange={ maxValue => {
					setAttributes( {
						[maxAttributeName]: maxValue,
						[attributeName]: Math.min( Math.max( minValue, value ), maxValue )
					} );
				} }
				min={ minValue }
				max={ absMaxValue }
			/>
		</Fragment>
	);
};

const getMinFeatureSize = ( attributes ) => {
	return Math.ceil( attributes.gridColumns * 0.25 );
};

const getMaxFeatureSize = ( attributes ) => {
	return Math.ceil( attributes.gridColumns * 0.75 );
};

const getMinFeaturePosition = ( attributes ) => {
	return 1;
};

const getMaxFeaturePosition = ( attributes ) => {
	return attributes.gridColumns - attributes.featureSize + 1;
};

const getMinColumnsFragmentation = ( attributes ) => {
	return 0;
};

const getMaxColumnsFragmentation = ( attributes ) => {
	return Math.max( 0, Math.pow( 2, attributes.gridColumns - attributes.featureSize - 1 ) - 1 );
};

const clamp = ( number, min, max ) => {
	return Math.min( Math.max( min, number ), max )
};

const normalizeAttributes = ( newAttributes, attributes ) => {

	const atts = {
		...attributes,
		...newAttributes
	};

	atts.featureSize = clamp( atts.featureSize, getMinFeatureSize( atts ), getMaxFeatureSize( atts ) );
	atts.featurePosition = clamp( atts.featurePosition, getMinFeaturePosition( atts ), getMaxFeaturePosition( atts ) );
	atts.columnsFragmentation = clamp( atts.columnsFragmentation, getMinColumnsFragmentation( atts ), getMaxColumnsFragmentation( atts ) );

	return atts;
};

const GridGenerator = ( props ) => {

	const {
		attributes,
	} = props;

	const {
		featureSize,
		featurePosition,
		columnsFragmentation,

		imageWeightLeft,
		imageWeightRight,
		metaWeightLeft,
		metaWeightRight,

		boostFeatureEmphasis,
		subFeature,
		balanceMDandIW,
		hierarchyCrossing,
		flipColsAndRows,

		toggleScale,
		toggleMask,
	} = attributes;

	const setAttributes = ( newAttributes ) => {
		const normalizedAttributes = normalizeAttributes( newAttributes, attributes );
		props.setAttributes( normalizedAttributes );
	};

	return (
		<ControlsSection label={ __( 'Grid Layout' ) }>
			<ControlsTab label={ __( 'Settings' ) }>
				<ControlsGroup title={ __( 'Debug Parameters' ) }>
					<ToggleControl
						label={__( 'Display Preview Scale', '__plugin_txtd' )}
						checked={ ! toggleScale }
						onChange={ () => setAttributes( { toggleScale : ! toggleScale } )}
					/>
					<ToggleControl
						label={__( 'Display Preview Mask', '__plugin_txtd' )}
						checked={ ! toggleMask }
						onChange={ () => setAttributes( { toggleMask : ! toggleMask } )}
					/>
				</ControlsGroup>
				<ControlsGroup title={ __( 'Grid Columns + Rows' ) }>
					<MinMaxControl
						{ ...props }
						setAttributes={ setAttributes }
						label={ 'Columns' }
						attributeName={ 'gridColumns' }
						minAttributeName={ 'minGridColumns' }
						maxAttributeName={ 'maxGridColumns' }
					/>
					<MinMaxControl
						{ ...props }
						setAttributes={ setAttributes }
						label={ 'Rows' }
						attributeName={ 'gridRows' }
						minAttributeName={ 'minGridRows' }
						maxAttributeName={ 'maxGridRows' }
					/>
				</ControlsGroup>
				<ControlsGroup title={ __( 'Main Parameters' ) }>
					<RangeControl
						label={ __( `Feature Size`, '__plugin_txtd' ) }
						value={ featureSize }
						onChange={ featureSize => {
							setAttributes( { featureSize } );
						} }
						min={ getMinFeatureSize( attributes ) }
						max={ getMaxFeatureSize( attributes ) }
					/>
					<RangeControl
						label={ __( `Feature Position`, '__plugin_txtd' ) }
						value={ featurePosition }
						onChange={ featurePosition => {
							setAttributes( { featurePosition } );
						} }
						min={ getMinFeaturePosition( attributes ) }
						max={ getMaxFeaturePosition( attributes ) }
					/>
					<RangeControl
						label={ __( `Columns Fragmentation`, '__plugin_txtd' ) }
						value={ columnsFragmentation }
						onChange={ columnsFragmentation => {
							setAttributes( { columnsFragmentation } );
						} }
						min={ getMinColumnsFragmentation( attributes ) }
						max={ getMaxColumnsFragmentation( attributes ) }
					/>
				</ControlsGroup>
				<ControlsGroup title={ __( 'Elements Granularity' ) }>
					<RangeControl
						label={ __( `Image Weight Left`, '__plugin_txtd' ) }
						value={ imageWeightLeft }
						onChange={ imageWeightLeft => { setAttributes( { imageWeightLeft } ) } }
						min={ 0 }
						max={ 10 }
					/>
					<RangeControl
						label={ __( `Image Weight Right`, '__plugin_txtd' ) }
						value={ imageWeightRight }
						onChange={ imageWeightRight => { setAttributes( { imageWeightRight } ) } }
						min={ 0 }
						max={ 10 }
					/>
					<RangeControl
						label={ __( `Meta Weight Left`, '__plugin_txtd' ) }
						value={ metaWeightLeft }
						onChange={ metaWeightLeft => { setAttributes( { metaWeightLeft } ) } }
						min={ 0 }
						max={ 10 }
					/>
					<RangeControl
						label={ __( `Meta Weight Right`, '__plugin_txtd' ) }
						value={ metaWeightRight }
						onChange={ metaWeightRight => { setAttributes( { metaWeightRight } ) } }
						min={ 0 }
						max={ 10 }
					/>
				</ControlsGroup>
				<ControlsGroup title={ __( 'Playful parameters' ) }>
					<ToggleControl
						label={__( 'Boost Feature Emphasis', '__plugin_txtd' )}
						checked={ boostFeatureEmphasis }
						onChange={ () => setAttributes( { boostFeatureEmphasis : ! boostFeatureEmphasis } )}
					/>
					<ToggleControl
						label={__( 'Sub Feature', '__plugin_txtd' )}
						checked={ subFeature }
						onChange={ () => setAttributes( { subFeature : ! subFeature } )}
					/>
					<ToggleControl
						label={__( 'Balance MD and IW', '__plugin_txtd' )}
						checked={ balanceMDandIW }
						onChange={ () => setAttributes( { balanceMDandIW : ! balanceMDandIW } )}
					/>
					<RangeControl
						label={ __( `Hierarchy Crossing`, '__plugin_txtd' ) }
						value={ hierarchyCrossing }
						onChange={ hierarchyCrossing => {
							setAttributes( { hierarchyCrossing } );
						} }
						min={ 0 }
						max={ 200 }
					/>
					<ToggleControl
						label={__( 'Flip Cols and Rows', '__plugin_txtd' )}
						checked={ flipColsAndRows }
						onChange={ () => setAttributes( { flipColsAndRows : ! flipColsAndRows } )}
					/>
				</ControlsGroup>
			</ControlsTab>
		</ControlsSection>
	);
};

export default GridGenerator;
