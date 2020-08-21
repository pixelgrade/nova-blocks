import { ControlsSection, ControlsTab } from "../control-sections";
import { getControlsClasses } from "../../utils";
import { prepareAttributes, getPostsCount } from "../../components/grid-generator/utils";
import { applyLayoutEngine } from "../../components/grid-generator/layoutEngine";
import ControlsGroup from "../controls-group";

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

const LayoutControls = ( props ) => {

	const {
		attributes: {
			layoutStyle
		},
		setAttributes
	} = props;

	return (
		<ControlsSection label={ __( 'Layout' ) }>
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
			columns
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
					min={ 0 }
					max={ 12 }
				/>
				<RangeControl
					label={ __( `Rows`, '__plugin_txtd' ) }
					value={ gridRows }
					onChange={ gridRows => {
						setAttributes( { gridRows } );
					} }
					min={ 0 }
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
		}
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
