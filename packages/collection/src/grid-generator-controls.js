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
		<ControlsSection label={ __( 'Collection Layout' ) } group={ __( 'Block Anatomy', '__plugin_txtd' ) }>
			<ControlsTab label={ __( 'General' ) }>
				<PresetControl
					label={ __( 'Choose a layout preset:', '__plugin_txtd' ) }
					options={ presets }
					randomize={ getRandomAttributes }
				/>
			</ControlsTab>
			<ControlsTab label={ __( 'Settings' ) }>
				<ControlsGroup title={ __( 'Grid Anatomy' ) }>
					<RadioControl
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

  const itemsCount = useSelect( select => select( 'core/block-editor' ).getBlockCount( clientId ), [ clientId ] );

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
