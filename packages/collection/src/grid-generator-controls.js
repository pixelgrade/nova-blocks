import { isUndefined } from "lodash";

import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from '@wordpress/element';
import { dispatch, select, useSelect } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';

import {
	RadioControl,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';

import {
	ControlsGroup,
	ControlsSection,
	ControlsTab,
	PresetControl,
} from "@novablocks/block-editor";

import {
	getControlsClasses,
	getRandomBetween,
	getRandomBooleanValue,
} from "@novablocks/utils";

import { applyLayoutEngine } from './layout-engine';
import presets from './presets';

import {
	getOptimalHeaderPosition,
	getPostsCount
} from './utils';

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
	const gridcolumns = getRandomBetween( 2, 6 );
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
		flipcolsrows,
		headerPosition: getRandomBetween(0, 1),
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
		<ControlsSection label={ __( 'Grid Layout' ) } priority={ 100 }>
			<ControlsTab label={ __( 'General' ) }>
				<PresetControl
					key={ 'novablocks-collection-layout-preset' }
					label={ __( 'Choose a layout preset:', '__plugin_txtd' ) }
					options={ presets }
					randomize={ getRandomAttributes }
				/>
			</ControlsTab>
			<ControlsTab label={ __( 'Settings' ) }>
				<ControlsGroup title={ __( 'Grid Anatomy' ) }>
					<RadioControl
						key={ 'novablocks-collection-layout-style-controls' }
						selected={ layoutStyle }
						className={ 'novablocks-collection-layout' }
						onChange={ ( layoutStyle ) => {
							setAttributes( { layoutStyle } );
						} }
						options={ [
							{ label: 'Parametric Grid', value: 'parametric' },
							{ label: 'Classic Grid', value: 'classic' },
							{ label: 'Carousel', value: 'carousel' },
						] }
					/>
				</ControlsGroup>
				{ layoutStyle === 'parametric' && <ParametricLayoutControls { ...props } /> }
        { layoutStyle !== 'parametric' && <UniversalLayoutControls { ...props } /> }
        { layoutStyle === 'carousel' && <CarouselLayoutControls { ...props } /> }
			</ControlsTab>
		</ControlsSection>
	);
};

const UniversalLayoutControls = ( props ) => {

	const {
    name,
	} = props;

	return (
		<Fragment>
			<ControlsGroup title={ __( 'Cards Count' ) }>
        {
          name === 'novablocks/supernova' ?
            <SupernovaPostsCountControl { ...props } /> :
				    <PostsCountControl { ...props } />
        }
				<ItemsPerRowControl { ...props } />
			</ControlsGroup>
			<ControlsGroup title={ __( 'Card Layout' ) }>
        {
          name === 'novablocks/supernova' ?
            <CardLayoutControl { ...props } /> :
            <LegacyCardLayoutControl { ...props } />
        }
			</ControlsGroup>
		</Fragment>
	)
};

const SupernovaPostsCountControl = ( props ) => {

  const {
    attributes: {
      postsToShow,
      sourceType,
      cardLayout,
      contentPadding,
      layoutGutter,
    },
    setAttributes,
    clientId,
  } = props;

  const { itemsCount } = useSelect( ( select ) => {
    const itemsCount = select( 'core/block-editor' ).getBlockCount( clientId );

    return { itemsCount };
  }, [ clientId ] );

  useEffect( () => {
    setAttributes( { postsToShow: itemsCount } );
  }, [ itemsCount ] );

  return (
    <RangeControl
      key={ 'collection-items-count' }
      label={ __( 'Items Count', '__plugin_txtd' ) }
      value={ postsToShow }
      onChange={ newItemsCount => {
        const { replaceInnerBlocks } = dispatch( 'core/block-editor' );
        const { getBlock } = select( 'core/block-editor' );
        const { innerBlocks } = getBlock( clientId );
        const newInnerBlocks = innerBlocks.slice( 0, newItemsCount );

        if ( newItemsCount > postsToShow ) {
          for ( let i = 0; i < newItemsCount - postsToShow; i++ ) {
            newInnerBlocks.push( createBlock( 'novablocks/supernova-item', {
              sourceType,
              cardLayout,
              contentPadding,
              layoutGutter,
              title: 'Title',
              description: 'This is just an example of what a description for this card could look like',
              buttonText: 'Button',
            } ) );
          }
        }

        replaceInnerBlocks( clientId, newInnerBlocks );
      } }
      min={ 1 }
      max={ 20 }
      step={ 1 }
    />
  );
}

const ItemsPerRowControl = ( props ) => {

  const {
    attributes: {
      columns
    },
    setAttributes
  } = props;

  return (
    <RangeControl
      key={ 'posts-collection-display-controls' }
      value={ columns }
      onChange={ ( columns ) => {
        setAttributes( { columns } );
      } }
      label={ __( 'Number of Items per Row' ) }
      min={ 1 }
      max={ 4 }
    />
  )
}

const LegacyCardLayoutControl = ( props ) => {

  const {
    attributes: {
      isLandscape,
    },
    setAttributes
  } = props;

  return (
    <RadioControl
      key={ 'novablocks-legacy-card-layout-controls' }
      selected={ isLandscape ? 'landscape' : 'portrait' }
      className={ 'novablocks-card-layout' }
      onChange={ ( value ) => {
        setAttributes( { isLandscape: value === 'landscape' } );
      } }
      options={ [
        { label: 'Vertical', value: 'portrait' },
        { label: 'Horizontal', value: 'landscape' }
      ] }
    />
  )
}

const CardLayoutControl = ( props ) => {

  const {
    attributes: {
      cardLayout
    },
    setAttributes
  } = props;

  return (
    <RadioControl
      key={ 'novablocks-collection-card-layout' }
      label={ __( 'Card Layout', '__plugin_txtd' ) }
      selected={ cardLayout }
      options={ [
        { label: 'Vertical', value: 'vertical' },
        { label: 'Vertical Reverse', value: 'vertical-reverse' },
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Horizontal Reverse', value: 'horizontal-reverse' },
        { label: 'Stacked', value: 'stacked' },
      ] }
      onChange={ cardLayout => { setAttributes( { cardLayout } ) } }
    />
  )
}

const PostsCountControl = ( props ) => {

	const {
		attributes: {
			postsToShow
		},
		setAttributes
	} = props;

	return (
		<RangeControl
			label={ __( `Number of Items`, '__plugin_txtd' ) }
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
};

const getAttributesByHeaderColumn = ( attributes ) => {

	const { headerColumn } = attributes;
	const areaColumns = applyLayoutEngine( attributes );
	const headerOptimalPositions = getOptimalHeaderPosition( areaColumns );

	return {
		...attributes,
		headerPosition: headerOptimalPositions[ headerColumn ],
	}
};

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
		headerPosition,
		headerColumn,

		showCollectionTitle,
		showCollectionSubtitle,
	} = attributes;

	// used to store previous values of postsToShow
	const tempPostsToShow = attributes.tempPostsToShow || postsToShow;

	const setAttributes = ( newAttributes ) => {
		const normalizedAttributes = normalizeAttributes( newAttributes, attributes );
		props.setAttributes( normalizedAttributes );
	};

	const areaColumns = applyLayoutEngine( attributes );
	const autoPostsCount = getPostsCount( areaColumns );
	const headerOptimalPositions = getOptimalHeaderPosition( areaColumns );

	return (
		<Fragment>
			<DebugControls { ...props } />
			<ControlsGroup title={ __( 'Grid Anatomy' ) }>
				<RangeControl
					label={ __( `Columns`, '__plugin_txtd' ) }
					value={ gridcolumns }
					onChange={ gridcolumns => {
						if ( ! isUndefined( gridcolumns ) ) {
							setAttributes( { gridcolumns } );
						}
					} }
					min={ 1 }
					max={ 12 }
				/>
				<RangeControl
					label={ __( `Rows`, '__plugin_txtd' ) }
					value={ gridrows }
					onChange={ gridrows => {
						if ( ! isUndefined( gridrows ) ) {
							setAttributes( { gridrows } );
						}
					} }
					min={ 1 }
					max={ 12 }
				/>
			</ControlsGroup>
			<ControlsGroup title={ __( 'Breaking the Grid' ) }>
				<RangeControl
					label={ __( `Featured Area Size`, '__plugin_txtd' ) }
					value={ featuresize }
					onChange={ featuresize => {
						if ( ! isUndefined( featuresize ) ) {
							setAttributes( { featuresize } );
						}
					} }
					min={ getMinFeatureSize( attributes ) }
					max={ getMaxFeatureSize( attributes ) }
				/>
				<RangeControl
					label={ __( `Featured Area Position`, '__plugin_txtd' ) }
					value={ featureposition }
					onChange={ featureposition => {
						if ( ! isUndefined( featureposition ) ) {
							setAttributes( { featureposition } );
						}
					} }
					min={ getMinFeaturePosition( attributes ) }
					max={ getMaxFeaturePosition( attributes ) }
				/>
				<RangeControl
					label={ __( `Grid Areas Fragmentation`, '__plugin_txtd' ) }
					value={ fragmentation }
					onChange={ fragmentation => {
						if ( ! isUndefined( fragmentation ) ) {
							setAttributes( { fragmentation } );
						}
					} }
					min={ getMinColumnsFragmentation( attributes ) }
					max={ getMaxColumnsFragmentation( attributes ) }
				/>
				<RangeControl
					label={ __( `Grid Areas Crossing`, '__plugin_txtd' ) }
					value={ hierarchycrossing }
					onChange={ hierarchycrossing => {
						if ( ! isUndefined( hierarchycrossing ) ) {
							setAttributes( { hierarchycrossing } );
						}
					} }
					min={ 0 }
					max={ 200 }
				/>
			</ControlsGroup>
			<ControlsGroup title={ __( 'Items Count' ) }>
				<div className={ getControlsClasses( attributes, ( { automaticPostsNumber, postsToShow } ) => {
					return {
						postsToShow: automaticPostsNumber ? -1 : postsToShow
					}
				} ) }>
					<PostsCountControl { ...props } />
				</div>
				<ToggleControl
					label={__( 'Auto-count Items Number', '__plugin_txtd' )}
					checked={ automaticPostsNumber }
					onChange={ ( automaticPostsNumber ) => {
						setAttributes( {
							postsToShow: automaticPostsNumber ? autoPostsCount : tempPostsToShow,
							tempPostsToShow: postsToShow,
							automaticPostsNumber
						} )
					} }
				/>
			</ControlsGroup>
			<ControlsGroup title={ __( 'Items Regularity' ) }>
				<RangeControl
					label={ __( `Start of Image Variance`, '__plugin_txtd' ) }
					value={ imageweightleft }
					onChange={ imageweightleft => {
						if ( ! isUndefined( imageweightleft ) ) {
							setAttributes( { imageweightleft } )
						}
					} }
					min={ 0 }
					max={ 10 }
				/>
				<RangeControl
					label={ __( `End of Image Variance`, '__plugin_txtd' ) }
					value={ imageweightright }
					onChange={ imageweightright => {
						if ( ! isUndefined( imageweightright ) ) {
							setAttributes( { imageweightright } )
						}
					} }
					min={ 0 }
					max={ 10 }
				/>
				<RangeControl
					label={ __( `Start of Meta Fidelity`, '__plugin_txtd' ) }
					value={ metadetailsleft }
					onChange={ metadetailsleft => {
						if ( ! isUndefined( metadetailsleft ) ) {
							setAttributes( { metadetailsleft } )
						}
					} }
					min={ 0 }
					max={ 10 }
				/>
				<RangeControl
					label={ __( `End of Meta Fidelity`, '__plugin_txtd' ) }
					value={ metadetailsright }
					onChange={ metadetailsright => {
						if ( ! isUndefined( metadetailsright ) ) {
							setAttributes( { metadetailsright } )
						}
					} }
					min={ 0 }
					max={ 10 }
				/>
			</ControlsGroup>
			<ControlsGroup title={ __( 'Miscellanous Parameters' ) }>
				<ToggleControl
					label={__( 'Boost Featured Area Emphasis', '__plugin_txtd' )}
					checked={ boostfeature }
					onChange={ () => {
						setAttributes( { boostfeature : ! boostfeature } )
					} }
				/>
				<ToggleControl
					label={__( 'Display Sub-featured Area', '__plugin_txtd' )}
					checked={ subfeature }
					onChange={ () => {
						setAttributes( { subfeature : ! subfeature } )
					} }
				/>
				<ToggleControl
					label={__( 'Balance Meta and Image', '__plugin_txtd' )}
					checked={ balancemdandiw }
					onChange={ () => {
						setAttributes( { balancemdandiw : ! balancemdandiw } )
					} }
				/>
				<ToggleControl
					label={__( 'Flip Cols and Rows', '__plugin_txtd' )}
					checked={ flipcolsrows }
					onChange={ () => {
						setAttributes( { flipcolsrows : ! flipcolsrows } )
					} }
				/>
			</ControlsGroup>
			{
				( showCollectionTitle || showCollectionSubtitle ) &&
				<ControlsGroup title={ __( 'Block Header' ) }>
					<RangeControl
						label={ __( `Header Placement Area`, '__plugin_txtd' ) }
						value={ headerPosition }
						onChange={ headerPosition => {
							setAttributes( { headerPosition } );
						} }
						min={ 0 }
						max={ postsToShow + 1 }
					/>
					<div key={ 'header-position-customize-1' } className={ getControlsClasses( attributes, getAttributesByHeaderColumn ) }>
						<RangeControl
							value={ headerColumn }
							onChange={ ( headerColumn ) => {
								const newAttributes = getAttributesByHeaderColumn( { ...attributes, headerColumn } );
								setAttributes( newAttributes );
							} }
							label={ __( 'Header Item Location' ) }
							min={ 0 }
							max={ headerOptimalPositions.length - 1 }
						/>
					</div>
				</ControlsGroup>
			}
		</Fragment>
	)
};

const CarouselLayoutControls = ( props ) => {
  const {
    attributes: {
      carouselLayout,
      columns,
      showPagination
    },
    setAttributes
  } = props;

  return (
    <Fragment>
      <ControlsGroup title={ __( 'Cards Count' ) }>
        <PostsCountControl { ...props } />
      </ControlsGroup>
      <ControlsGroup title={ __( 'Layout' ) }>
        <RadioControl
          key={ 'carousel-layout' }
          label={ __( 'Items Layout' ) }
          selected={ carouselLayout }
          onChange={ carouselLayout => {
            setAttributes( { carouselLayout } )
          } }
          options={ [
            { label: 'Fixed Width', value: 'fixed' },
            { label: 'Variable Width', value: 'variable' },
            { label: 'Content Width', value: 'content' },
          ] }
        />
        { carouselLayout === 'fixed' && <ItemsPerRowControl { ...props } /> }
        <ToggleControl
          label={__( 'Show Pagination', '__plugin_txtd' )}
          checked={ showPagination }
          onChange={ ( showPagination ) => {
            setAttributes( { showPagination } )
          } }
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
}

export default LayoutControls;
