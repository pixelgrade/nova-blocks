import { ControlsSection, ControlsTab } from "../control-sections";
import { getControlsClasses } from "../../utils";
import { getPostsCount } from "../../components/grid-generator/utils";
import { applyLayoutEngine } from "../../components/grid-generator/layoutEngine";
import ControlsGroup from "../controls-group";
import { PresetControl, withSettings } from "../../components";
import { getRandomBetween, getRandomBooleanValue } from "../../utils";

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
	return 1;
};

const getMaxFeatureSize = ( attributes ) => {
	return attributes.gridcolumns;
};

const getMinFeaturePosition = ( attributes ) => {
	return 1;
};

const getMaxFeaturePosition = ( attributes ) => {
	return attributes.gridcolumns - attributes.featuresize + 1;
};

const getMinColumnsFragmentation = ( attributes ) => {
	return 0;
};

const getMaxColumnsFragmentation = ( attributes ) => {
	return Math.max( 0, Math.pow( 2, attributes.gridcolumns - attributes.featuresize - 1 ) - 1 );
};

const clamp = ( number, min, max ) => {
	return Math.min( Math.max( min, number ), max )
};

const normalizeAttributes = ( newAttributes, attributes ) => {

	const atts = {
		...attributes,
		...newAttributes
	};

	atts.featuresize = clamp( atts.featuresize, getMinFeatureSize( atts ), getMaxFeatureSize( atts ) );
	atts.featureposition = clamp( atts.featureposition, getMinFeaturePosition( atts ), getMaxFeaturePosition( atts ) );
	atts.fragmentation = clamp( atts.fragmentation, getMinColumnsFragmentation( atts ), getMaxColumnsFragmentation( atts ) );

	return atts;
};

const getRandomAttributes = () => {

	const postsToShow = getRandomBetween( 3, 20 );
	const gridcolumns = getRandomBetween( 2, 12 );
	const gridrows = getRandomBetween( 2, 12 );

	const minFeatureSize = 1;
	const maxFeatureSize = Math.ceil( gridcolumns * 0.75 );
	const featuresize = getRandomBetween( minFeatureSize, maxFeatureSize );

	const minFeaturePosition = 1;
	const maxFeaturePosition = gridcolumns - featuresize + 1;
	const featureposition = getRandomBetween( minFeaturePosition, maxFeaturePosition );

	const minColumnsFragmentation = 0;
	const maxColumnsFragmentation = Math.max( 0, Math.pow( 2, gridcolumns - featuresize - 1 ) - 1 );
	const fragmentation = getRandomBetween( minColumnsFragmentation, maxColumnsFragmentation );

	const imageweightleft = getRandomBetween(0, 10);
	const imageweightright = getRandomBetween(0, 10);
	const metadetailsleft = getRandomBetween(0, 10);
	const metadetailsright = getRandomBetween(0, 10);

	const boostfeature = getRandomBooleanValue();
	const subfeature = getRandomBooleanValue();
	const balancemdandiw = getRandomBooleanValue();
	const hierarchycrossing = getRandomBetween(0, 200);
	const flipcolsrows = getRandomBooleanValue();

	return {
		layoutStyle: 'parametric',
		postsToShow,
		automaticPostsNumber: true,
		gridcolumns,
		gridrows,
		featuresize,
		featureposition,
		fragmentation,
		imageweightleft,
		imageweightright,
		metadetailsleft,
		metadetailsright,
		boostfeature,
		subfeature,
		balancemdandiw,
		hierarchycrossing,
		flipcolsrows
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
							gridcolumns: 6,
							gridrows: 6,
							featuresize: 4,
							featureposition: 1,
							fragmentation: 1,
							imageweightleft: 1,
							imageweightright: 2,
							metadetailsleft: 10,
							metadetailsright: 6,
							boostfeature: false,
							subfeature: true,
							balancemdandiw: false,
							hierarchycrossing: 30,
							flipcolsrows: false
						}
					}, {
						label: 'TR 15: Figma 2',
						value: 'tear1down5',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 6,
							gridcolumns: 6,
							gridrows: 6,
							featuresize: 2,
							featureposition: 4,
							fragmentation: 0,
							imageweightleft: 8,
							imageweightright: 2,
							metadetailsleft: 7,
							metadetailsright: 2,
							boostfeature: false,
							subfeature: false,
							balancemdandiw: false,
							hierarchycrossing: 0,
							flipcolsrows: false
						}
					}, {
						label: 'TR 47: Circular',
						value: 'tear4down7',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 5,
							gridcolumns: 12,
							gridrows: 8,
							featuresize: 7,
							featureposition: 3,
							fragmentation: 0,
							imageweightleft: 1,
							imageweightright: 0,
							metadetailsleft: 0,
							metadetailsright: 10,
							boostfeature: true,
							subfeature: true,
							balancemdandiw: false,
							hierarchycrossing: 153,
							flipcolsrows: false
						}
					}, {
						label: 'TR 19: New Yorker',
						value: 'tear1down9',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 9,
							gridcolumns: 6,
							gridrows: 5,
							featuresize: 3,
							featureposition: 2,
							fragmentation: 2,
							imageweightleft: 1,
							imageweightright: 0,
							metadetailsleft: 0,
							metadetailsright: 0,
							boostfeature: false,
							subfeature: true,
							balancemdandiw: false,
							hierarchycrossing: 0,
							flipcolsrows: false
						}
					}, {
						label: 'TR 19: New Yorker+',
						value: 'tear1down9bis',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 9,
							gridcolumns: 7,
							gridrows: 5,
							featuresize: 3,
							featureposition: 3,
							fragmentation: 2,
							imageweightleft: 1,
							imageweightright: 0,
							metadetailsleft: 0,
							metadetailsright: 0,
							boostfeature: false,
							subfeature: true,
							balancemdandiw: false,
							hierarchycrossing: 0,
							flipcolsrows: false,
							containerHeight: 45,
						}
					}, {
						label: 'TR 45: By the book',
						value: 'tear4down5',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 6,
							gridcolumns: 8,
							gridrows: 6,
							featuresize: 4,
							featureposition: 1,
							fragmentation: 2,
							imageweightleft: 8,
							imageweightright: 8,
							metadetailsleft: 7,
							metadetailsright: 2,
							boostfeature: false,
							subfeature: false,
							balancemdandiw: false,
							hierarchycrossing: 120,
							flipcolsrows: false
						}
					}, {
						label: 'TR 10: Abundance',
						value: 'tear1down0',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 10,
							gridcolumns: 10,
							gridrows: 6,
							featuresize: 3,
							featureposition: 6,
							fragmentation: 0,
							imageweightleft: 1,
							imageweightright: 0,
							metadetailsleft: 0,
							metadetailsright: 0,
							boostfeature: false,
							subfeature: false,
							balancemdandiw: false,
							hierarchycrossing: 0,
							flipcolsrows: false
						}
					}, {
						label: 'TR 12: Half in Half',
						value: 'tear1down2',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 7,
							gridcolumns: 6,
							gridrows: 4,
							featuresize: 3,
							featureposition: 1,
							fragmentation: 3,
							imageweightleft: 1,
							imageweightright: 0,
							metadetailsleft: 7,
							metadetailsright: 0,
							boostfeature: false,
							subfeature: false,
							balancemdandiw: false,
							hierarchycrossing: 0,
							flipcolsrows: false
						}
					}, {
						label: 'TR 30: Julia',
						value: 'tear3down0',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 5,
							gridcolumns: 4,
							gridrows: 8,
							featuresize: 2,
							featureposition: 2,
							fragmentation: 0,
							imageweightleft: 1,
							imageweightright: 0,
							metadetailsleft: 0,
							metadetailsright: 3,
							boostfeature: false,
							subfeature: true,
							balancemdandiw: false,
							hierarchycrossing: 0,
							flipcolsrows: false
						}
					}, {
						label: 'TR 32: Julia+',
						value: 'tear3down2',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 8,
							gridcolumns: 4,
							gridrows: 8,
							featuresize: 2,
							featureposition: 2,
							fragmentation: 0,
							imageweightleft: 1,
							imageweightright: 0,
							metadetailsleft: 0,
							metadetailsright: 3,
							boostfeature: false,
							subfeature: true,
							balancemdandiw: false,
							hierarchycrossing: 0,
							flipcolsrows: false
						}
					}, {
						label: 'TR 13: Julia X',
						value: 'tear1down3',
						preset: {
							layoutStyle: 'parametric',
							postsToShow: 6,
							gridcolumns: 5,
							gridrows: 4,
							featuresize: 2,
							featureposition: 2,
							fragmentation: 0,
							imageweightleft: 1,
							imageweightright: 0,
							metadetailsleft: 6,
							metadetailsright: 3,
							boostfeature: false,
							subfeature: false,
							balancemdandiw: false,
							hierarchycrossing: 0,
							flipcolsrows: false
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
		featuresize,
		featureposition,
		fragmentation,

		gridcolumns,
		gridrows,

		imageweightleft,
		imageweightright,
		metadetailsleft,
		metadetailsright,

		boostfeature,
		subfeature,
		balancemdandiw,
		hierarchycrossing,
		flipcolsrows,

		automaticPostsNumber,
		postsToShow,
	} = attributes;

	// used to store previous values of postsToShow
	const tempPostsToShow = attributes.tempPostsToShow || postsToShow;

	const setAttributes = ( newAttributes ) => {
		const normalizedAttributes = normalizeAttributes( newAttributes, attributes );
		props.setAttributes( normalizedAttributes );
	};

	const areaColumns = applyLayoutEngine( attributes );
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
					value={ gridcolumns }
					onChange={ gridcolumns => {
						setAttributes( { gridcolumns } );
					} }
					min={ 1 }
					max={ 12 }
				/>
				<RangeControl
					label={ __( `Rows`, '__plugin_txtd' ) }
					value={ gridrows }
					onChange={ gridrows => {
						setAttributes( { gridrows } );
					} }
					min={ 1 }
					max={ 12 }
				/>
			</ControlsGroup>
			<ControlsGroup title={ __( 'Main Parameters' ) }>
				<RangeControl
					label={ __( `Feature Size`, '__plugin_txtd' ) }
					value={ featuresize }
					onChange={ featuresize => {
						setAttributes( { featuresize } );
					} }
					min={ getMinFeatureSize( attributes ) }
					max={ getMaxFeatureSize( attributes ) }
				/>
				<RangeControl
					label={ __( `Feature Position`, '__plugin_txtd' ) }
					value={ featureposition }
					onChange={ featureposition => {
						setAttributes( { featureposition } );
					} }
					min={ getMinFeaturePosition( attributes ) }
					max={ getMaxFeaturePosition( attributes ) }
				/>
				<RangeControl
					label={ __( `Columns Fragmentation`, '__plugin_txtd' ) }
					value={ fragmentation }
					onChange={ fragmentation => {
						setAttributes( { fragmentation } );
					} }
					min={ getMinColumnsFragmentation( attributes ) }
					max={ getMaxColumnsFragmentation( attributes ) }
				/>
			</ControlsGroup>
			<ControlsGroup title={ __( 'Elements Granularity' ) }>
				<RangeControl
					label={ __( `Image Weight Left`, '__plugin_txtd' ) }
					value={ imageweightleft }
					onChange={ imageweightleft => { setAttributes( { imageweightleft } ) } }
					min={ 0 }
					max={ 10 }
				/>
				<RangeControl
					label={ __( `Image Weight Right`, '__plugin_txtd' ) }
					value={ imageweightright }
					onChange={ imageweightright => { setAttributes( { imageweightright } ) } }
					min={ 0 }
					max={ 10 }
				/>
				<RangeControl
					label={ __( `Meta Weight Left`, '__plugin_txtd' ) }
					value={ metadetailsleft }
					onChange={ metadetailsleft => { setAttributes( { metadetailsleft } ) } }
					min={ 0 }
					max={ 10 }
				/>
				<RangeControl
					label={ __( `Meta Weight Right`, '__plugin_txtd' ) }
					value={ metadetailsright }
					onChange={ metadetailsright => { setAttributes( { metadetailsright } ) } }
					min={ 0 }
					max={ 10 }
				/>
			</ControlsGroup>
			<ControlsGroup title={ __( 'Playful parameters' ) }>
				<ToggleControl
					label={__( 'Boost Feature Emphasis', '__plugin_txtd' )}
					checked={ boostfeature }
					onChange={ () => setAttributes( { boostfeature : ! boostfeature } )}
				/>
				<ToggleControl
					label={__( 'Sub Feature', '__plugin_txtd' )}
					checked={ subfeature }
					onChange={ () => setAttributes( { subfeature : ! subfeature } )}
				/>
				<ToggleControl
					label={__( 'Balance MD and IW', '__plugin_txtd' )}
					checked={ balancemdandiw }
					onChange={ () => setAttributes( { balancemdandiw : ! balancemdandiw } )}
				/>
				<RangeControl
					label={ __( `Hierarchy Crossing`, '__plugin_txtd' ) }
					value={ hierarchycrossing }
					onChange={ hierarchycrossing => {
						setAttributes( { hierarchycrossing } );
					} }
					min={ 0 }
					max={ 200 }
				/>
				<ToggleControl
					label={__( 'Flip Cols and Rows', '__plugin_txtd' )}
					checked={ flipcolsrows }
					onChange={ () => setAttributes( { flipcolsrows : ! flipcolsrows } )}
				/>
			</ControlsGroup>
		</Fragment>
	)
};

const DebugControls = withSettings(( props ) => {

	const {
		attributes: {
			toggleScale,
			toggleMask,
		},
		setAttributes,
		settings
	} = props;

	if ( ! settings?.debug ) {
		return null;
	}

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
});

export default LayoutControls;
