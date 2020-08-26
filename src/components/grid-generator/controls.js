import { ControlsSection, ControlsTab } from "../control-sections";
import { getControlsClasses } from "../../utils";
import { prepareAttributes, getPostsCount } from "../../components/grid-generator/utils";
import { applyLayoutEngine } from "../../components/grid-generator/layoutEngine";
import ControlsGroup from "../controls-group";
import { PresetControl } from "../../components";
import { getRandomBetween, getRandomArrayFromArray, getRandomBooleanValue } from "../../utils";

const { __ } = wp.i18n;

const {
	Fragment
} = wp.element;

const {
	RadioControl,
	RangeControl,
	ToggleControl,
} = wp.components;


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

const getRandomAttributes = () => {

	const postsToShow = getRandomBetween( 3, 20 );
	const gridColumns = getRandomBetween( 2, 12 );
	const gridRows = getRandomBetween( 2, 12 );

	const minFeatureSize = Math.ceil( gridColumns * 0.25 );
	const maxFeatureSize = Math.ceil( gridColumns * 0.75 );
	const featureSize = getRandomBetween( minFeatureSize, maxFeatureSize );

	const minFeaturePosition = 1;
	const maxFeaturePosition = gridColumns - featureSize + 1;
	const featurePosition = getRandomBetween( minFeaturePosition, maxFeaturePosition );

	const minColumnsFragmentation = 0;
	const maxColumnsFragmentation = Math.max( 0, Math.pow( 2, gridColumns - featureSize - 1 ) - 1 );
	const columnsFragmentation = getRandomBetween( minColumnsFragmentation, maxColumnsFragmentation );

	const imageWeightLeft = getRandomBetween(0, 10);
	const imageWeightRight = getRandomBetween(0, 10);
	const metaWeightLeft = getRandomBetween(0, 10);
	const metaWeightRight = getRandomBetween(0, 10);

	const boostFeatureEmphasis = getRandomBooleanValue();
	const subFeature = getRandomBooleanValue();
	const balanceMDandIW = getRandomBooleanValue();
	const hierarchyCrossing = getRandomBetween(0, 200);
	const flipColsAndRows = getRandomBooleanValue();

	return {
		layoutStyle: 'parametric',
		postsToShow,
		gridColumns,
		gridRows,
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
		flipColsAndRows
	}
};

const LayoutControls = ( props ) => {

	const {
		attributes: {
			layoutStyle
		},
		setAttributes
	} = props;

	return (
		<ControlsSection label={ __( 'Layout' ) }>
			<ControlsTab label={ __( 'General' ) }>
				<PresetControl
					key={ 'novablocks-collection-layout-preset' }
					label={ __( 'Choose a layout preset:', '__plugin_txtd' ) }
					options={ [ {
						label: 'TR 03: Classic Triphasic',
						value: 'tear0down3',
						preset: {
							layoutStyle: 'classic',
							postsToShow: 6,
							columns: 3,
						}
					},  {
						label: 'TR 27: Figma 1',
						value: 'tear2down7',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 6,
							gridColumns: 6,
							gridRows: 6,
							featureSize: 4,
							featurePosition: 1,
							columnsFragmentation: 1,
							imageWeightLeft: 1,
							imageWeightRight: 2,
							metaWeightLeft: 10,
							metaWeightRight: 6,
							boostFeatureEmphasis: false,
							subFeature: true,
							balanceMDandIW: false,
							hierarchyCrossing: 30,
							flipColsAndRows: false
						}
					}, {
						label: 'TR 15: Figma 2',
						value: 'tear1down5',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 6,
							gridColumns: 6,
							gridRows: 6,
							featureSize: 2,
							featurePosition: 4,
							columnsFragmentation: 0,
							imageWeightLeft: 8,
							imageWeightRight: 2,
							metaWeightLeft: 7,
							metaWeightRight: 2,
							boostFeatureEmphasis: false,
							subFeature: false,
							balanceMDandIW: false,
							hierarchyCrossing: 0,
							flipColsAndRows: false
						}
					}, {
						label: 'TR 47: Circular',
						value: 'tear4down7',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 5,
							gridColumns: 12,
							gridRows: 8,
							featureSize: 7,
							featurePosition: 3,
							columnsFragmentation: 0,
							imageWeightLeft: 1,
							imageWeightRight: 0,
							metaWeightLeft: 0,
							metaWeightRight: 10,
							boostFeatureEmphasis: true,
							subFeature: true,
							balanceMDandIW: false,
							hierarchyCrossing: 153,
							flipColsAndRows: false
						}
					}, {
						label: 'TR 19: New Yorker',
						value: 'tear1down9',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 8,
							gridColumns: 6,
							gridRows: 8,
							featureSize: 3,
							featurePosition: 2,
							columnsFragmentation: 2,
							imageWeightLeft: 1,
							imageWeightRight: 0,
							metaWeightLeft: 0,
							metaWeightRight: 10,
							boostFeatureEmphasis: false,
							subFeature: true,
							balanceMDandIW: false,
							hierarchyCrossing: 0,
							flipColsAndRows: false
						}
					}, {
						label: 'TR 45: By the book',
						value: 'tear4down5',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 6,
							gridColumns: 8,
							gridRows: 6,
							featureSize: 4,
							featurePosition: 1,
							columnsFragmentation: 2,
							imageWeightLeft: 8,
							imageWeightRight: 8,
							metaWeightLeft: 7,
							metaWeightRight: 2,
							boostFeatureEmphasis: false,
							subFeature: false,
							balanceMDandIW: false,
							hierarchyCrossing: 120,
							flipColsAndRows: false
						}
					}, {
						label: 'TR 10: Abundance',
						value: 'tear1down0',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 10,
							gridColumns: 10,
							gridRows: 6,
							featureSize: 3,
							featurePosition: 6,
							columnsFragmentation: 0,
							imageWeightLeft: 1,
							imageWeightRight: 0,
							metaWeightLeft: 0,
							metaWeightRight: 0,
							boostFeatureEmphasis: false,
							subFeature: false,
							balanceMDandIW: false,
							hierarchyCrossing: 0,
							flipColsAndRows: false
						}
					}, {
						label: 'TR 12: Half in Half',
						value: 'tear1down2',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 7,
							gridColumns: 6,
							gridRows: 3,
							featureSize: 3,
							featurePosition: 1,
							columnsFragmentation: 3,
							imageWeightLeft: 10,
							imageWeightRight: 0,
							metaWeightLeft: 0,
							metaWeightRight: 0,
							boostFeatureEmphasis: false,
							subFeature: false,
							balanceMDandIW: false,
							hierarchyCrossing: 0,
							flipColsAndRows: false
						}
					}, {
						label: 'TR 30: Julia',
						value: 'tear3down0',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 5,
							gridColumns: 4,
							gridRows: 8,
							featureSize: 2,
							featurePosition: 2,
							columnsFragmentation: 0,
							imageWeightLeft: 1,
							imageWeightRight: 0,
							metaWeightLeft: 0,
							metaWeightRight: 3,
							boostFeatureEmphasis: false,
							subFeature: true,
							balanceMDandIW: false,
							hierarchyCrossing: 0,
							flipColsAndRows: false
						}
					}, {
						label: 'TR 32: Julia+',
						value: 'tear3down2',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 8,
							gridColumns: 4,
							gridRows: 8,
							featureSize: 2,
							featurePosition: 2,
							columnsFragmentation: 0,
							imageWeightLeft: 1,
							imageWeightRight: 0,
							metaWeightLeft: 0,
							metaWeightRight: 3,
							boostFeatureEmphasis: false,
							subFeature: true,
							balanceMDandIW: false,
							hierarchyCrossing: 0,
							flipColsAndRows: false
						}
					}, {
						label: 'TR 13: Julia X',
						value: 'tear1down3',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 6,
							gridColumns: 5,
							gridRows: 4,
							featureSize: 2,
							featurePosition: 2,
							columnsFragmentation: 0,
							imageWeightLeft: 1,
							imageWeightRight: 0,
							metaWeightLeft: 6,
							metaWeightRight: 3,
							boostFeatureEmphasis: false,
							subFeature: false,
							balanceMDandIW: false,
							hierarchyCrossing: 0,
							flipColsAndRows: false
						}
					} ] }
					randomize={ getRandomAttributes }
				/>
			</ControlsTab>
			<ControlsTab label={ __( 'Settings' ) }>
				<RadioControl
					key={ 'novablocks-collection-layout-style-controls' }
					selected={ layoutStyle }
					className={ 'novablocks-collection-layout' }
					onChange={ ( layoutStyle ) => {
						setAttributes( { layoutStyle } );
					} }
					options={ [
						{ label: 'Classic', value: 'classic' },
						{ label: 'Parametric', value: 'parametric' }
					] }
				/>
				{ layoutStyle === 'classic' && <ClassicLayoutControls { ...props } /> }
				{ layoutStyle === 'parametric' && <ParametricLayoutControls { ...props } /> }
			</ControlsTab>
		</ControlsSection>
	);
};

const ClassicLayoutControls = ( props ) => {

	const {
		attributes: {
			columns,
			isLandscape
		},
		setAttributes
	} = props;

	return (
		<Fragment>
			<PostsCountControl { ...props } />
			<RangeControl
				key={ 'posts-collection-display-controls' }
				value={ columns }
				onChange={ ( columns ) => setAttributes( { columns } ) }
				label={ __( 'Columns' ) }
				min={ 2 }
				max={ 4 }
			/>
			<RadioControl
				key={ 'novablocks-card-layout-controls' }
				selected={ isLandscape ? 'landscape' : 'portrait' }
				className={ 'novablocks-card-layout' }
				onChange={ ( value ) => {
					setAttributes( { isLandscape: value === 'landscape' } );
				} }
				options={ [
					{ label: 'Portrait', value: 'portrait' },
					{ label: 'Landscape', value: 'landscape' }
				] }
			/>
		</Fragment>
	)
};

const PostsCountControl = ( props ) => {

	const {
		attributes: {
			postsToShow
		},
		setAttributes
	} = props;

	return (
		<RangeControl
			label={ __( `Posts to show`, '__plugin_txtd' ) }
			value={ postsToShow }
			onChange={ postsToShow => {
				setAttributes( {
					postsToShow,
					tempPostsToShow: postsToShow,
					automaticPostsNumber: false,
				} );
			} }
			min={ 1 }
			max={ 20 }
		/>
	);
}

const ParametricLayoutControls = ( props ) => {

	const {
		attributes,
	} = props;

	const {
		featureSize,
		featurePosition,
		columnsFragmentation,

		gridColumns,
		gridRows,

		imageWeightLeft,
		imageWeightRight,
		metaWeightLeft,
		metaWeightRight,

		boostFeatureEmphasis,
		subFeature,
		balanceMDandIW,
		hierarchyCrossing,
		flipColsAndRows,

		automaticPostsNumber,
		postsToShow,
	} = attributes;

	// used to store previous values of postsToShow
	const tempPostsToShow = attributes.tempPostsToShow || postsToShow;

	const setAttributes = ( newAttributes ) => {
		const normalizedAttributes = normalizeAttributes( newAttributes, attributes );
		props.setAttributes( normalizedAttributes );
	};

	const areaColumns = applyLayoutEngine( prepareAttributes( attributes ) );
	const autoPostsCount = getPostsCount( areaColumns );

	return (
		<Fragment>
			<DebugControls { ...props } />
			<ControlsGroup title={ __( 'Posts Count' ) }>
				<ToggleControl
					label={__( 'Automatic Posts Number', '__plugin_txtd' )}
					checked={ automaticPostsNumber }
					onChange={ ( automaticPostsNumber ) => {
						setAttributes( {
							postsToShow: automaticPostsNumber ? autoPostsCount : tempPostsToShow,
							tempPostsToShow: postsToShow,
							automaticPostsNumber
						} )
					} }
				/>
				<div className={ getControlsClasses( attributes, ( { automaticPostsNumber, postsToShow } ) => {
					return {
						postsToShow: automaticPostsNumber ? -1 : postsToShow
					}
				} ) }>
					<PostsCountControl { ...props } />
				</div>
			</ControlsGroup>
			<ControlsGroup title={ __( 'Grid Columns + Rows' ) }>
				<RangeControl
					label={ __( `Columns`, '__plugin_txtd' ) }
					value={ gridColumns }
					onChange={ gridColumns => {
						setAttributes( { gridColumns } );
					} }
					min={ 1 }
					max={ 12 }
				/>
				<RangeControl
					label={ __( `Rows`, '__plugin_txtd' ) }
					value={ gridRows }
					onChange={ gridRows => {
						setAttributes( { gridRows } );
					} }
					min={ 1 }
					max={ 12 }
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
		</Fragment>
	)
};

const DebugControls = ( props ) => {

	const {
		attributes: {
			toggleScale,
			toggleMask,
		},
		setAttributes
	} = props;


	return (
		<ControlsGroup title={ __( 'Debug Parameters' ) }>
			<ToggleControl
				label={__( 'Display Preview Scale', '__plugin_txtd' )}
				checked={ toggleScale }
				onChange={ () => setAttributes( { toggleScale : ! toggleScale } )}
			/>
			<ToggleControl
				label={__( 'Display Preview Mask', '__plugin_txtd' )}
				checked={ toggleMask }
				onChange={ () => setAttributes( { toggleMask : ! toggleMask } )}
			/>
		</ControlsGroup>

	);
};

export default LayoutControls;
