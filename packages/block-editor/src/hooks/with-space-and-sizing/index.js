import attributes from './attributes';

import {
	getControlsClasses,
	getRandomBetween,
	getRandomArrayFromArray,
  getSpacingCSSProps
} from "@novablocks/utils";

import {
	BlockVerticalAlignmentToolbar,
	ControlsGroup,
	ControlsSection,
	ControlsTab,
	PresetControl,
} from '../../components';

import { __ } from '@wordpress/i18n';

import {
	PanelRow,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';

import {
	createHigherOrderComponent
} from '@wordpress/compose';

import {
	Fragment
} from '@wordpress/element';

import {
	addFilter
} from '@wordpress/hooks';

import { select } from '@wordpress/data';

const getEmphasisAttributes = ( emphasis, overlap, contentPosition = 'center center' ) => {

  const actualEmphasis = ! overlap ? emphasis : -1 * emphasis;
  const alignment = contentPosition.split( ' ' );
  const verticalAlignment = alignment[0] || 'center';
  const horizontalAlignment = alignment[1] || 'center';

	return {
    emphasisBySpace: emphasis,
    enableOverlapping: overlap,
    blockTopSpacing: ( actualEmphasis < 0 && ['center', 'bottom'].includes( verticalAlignment ) ) ? actualEmphasis : 0,
    blockBottomSpacing: ( actualEmphasis < 0 && ['top', 'center'].includes( verticalAlignment ) ) ? actualEmphasis : 0,
    emphasisTopSpacing: ( verticalAlignment !== 'top' ) ? actualEmphasis : 1,
    emphasisBottomSpacing: ( verticalAlignment !== 'bottom' ) ? actualEmphasis : 1,
    contentPosition: `${ verticalAlignment } ${ horizontalAlignment }`
	};
};
const getRandomAttributes = () => {
	const getRandomSign = () => { return getRandomArrayFromArray( [ -1, 0, 1 ], 1 )[0] };
	const block = getRandomBetween( 0, 3 );
	const emphasis = getRandomBetween( 0, 3 );
	const blockTopSign = getRandomSign();
	const blockBottomSign = getRandomSign();
	const emphasisTopSign = getRandomSign();
	const emphasisBottomSign = getRandomSign();
	const verticalAlignment = getRandomArrayFromArray( [ 'top', 'center', 'bottom' ], 1 )[0];
	const enableOverlapping = getRandomArrayFromArray( [ true, false ], 1 )[0];

	return {
		blockTopSpacing: block * blockTopSign,
		blockBottomSpacing: block * blockBottomSign,
		emphasisTopSpacing: emphasis * emphasisTopSign,
		emphasisBottomSpacing: emphasis * emphasisBottomSign,
		enableOverlapping,
		verticalAlignment,
	};
};

const withSpaceAndSizingControlsAdvanced = createHigherOrderComponent( OriginalComponent => {

	return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( ! supports?.novaBlocks?.spaceAndSizing ) {
			return <OriginalComponent { ...props } />
		}

		const presetOptions = props?.settings?.modules?.spaceAndSizing?.presetOptions;
		const advancedPresetOptions = props?.settings?.modules?.spaceAndSizing?.advancedPresetOptions;

		const presets = [];

		if ( Array.isArray( presetOptions ) ) {
			presets.push( ...presetOptions );

			if ( Array.isArray( advancedPresetOptions ) && supports?.novaBlocks?.spaceAndSizing?.advancedSpacing ) {
				presets.push( ...advancedPresetOptions );
			}
		}

		return (
			<Fragment>
				<OriginalComponent { ...props } />
				<ControlsSection label={ __( 'Space and Sizing' ) } priority={ 30 }>
					{
						!! presetOptions &&
						<ControlsTab label={ __( 'General' ) }>
							<PresetControl
								key={ 'media-card-layout-preset' }
								label={ __( 'Choose a layout preset:', '__plugin_txtd' ) }
								options={ presets }
								randomize={ getRandomAttributes }
							/>
						</ControlsTab>
					}
				</ControlsSection>
			</Fragment>
		);
	};
});
addFilter( 'editor.BlockEdit', 'novablocks/with-space-and-sizing-advanced', withSpaceAndSizingControlsAdvanced );

const shouldShowVerticalAlignment = ( props ) => {
  const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

  return supports?.novaBlocks?.contentPositionMatrixToolbar;
}

const VerticalAnchoringCustomize = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    emphasisBySpace,
    enableOverlapping
  } = attributes;

  const contentPosition = typeof attributes.contentPosition === "string" ? attributes.contentPosition : 'center center';
  const alignment = contentPosition.split( ' ' );
  const verticalAlignment = alignment[0] || 'center';
  const horizontalAlignment = alignment[1] || 'center';

  return (
    <PanelRow>
      <span>{ __( 'Vertical Anchoring', '__plugin_txtd' ) }</span>
      <BlockVerticalAlignmentToolbar
        value={ verticalAlignment }
        onChange={ ( verticalAlignment ) => {
          const newAttributes = getEmphasisAttributes( emphasisBySpace, enableOverlapping, `${ verticalAlignment } ${ horizontalAlignment }` );
          setAttributes( newAttributes );
        } }
      />
    </PanelRow>
  )
}

const VerticalAnchoringSettings = ( props ) => {

  const {
    attributes: {
      contentPosition
    },
    setAttributes
  } = props;

  const alignment = contentPosition.split( ' ' );
  const verticalAlignment = alignment[0] || 'center';
  const horizontalAlignment = alignment[1] || 'center';

  return (
    <ControlsGroup>
      <PanelRow>
        <span>{ __( 'Vertical Anchoring', '__plugin_txtd' ) }</span>
        <BlockVerticalAlignmentToolbar
          value={ verticalAlignment }
          onChange={ ( verticalAlignment ) => {
            setAttributes( { contentPosition: `${ verticalAlignment } ${ horizontalAlignment }` } )
          } }
        />
      </PanelRow>
    </ControlsGroup>
  )
}

const withSpaceAndSizingControls = createHigherOrderComponent( OriginalComponent => {

	return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

		if ( ! supports?.novaBlocks?.spaceAndSizing ) {
			return <OriginalComponent { ...props } />
		}

		const {
			attributes,
			setAttributes,
		} = props;

		const {
			blockTopSpacing,
			blockBottomSpacing,
			emphasisTopSpacing,
			emphasisBottomSpacing,

			emphasisBySpace,
			enableOverlapping,
      contentPosition,
    } = attributes;

    const showVerticalAlignment = shouldShowVerticalAlignment( props );

		const BLOCK_SPACING_MIN_VALUE = -3;
		const BLOCK_SPACING_MAX_VALUE = 3;

		const CONTENT_SPACING_MIN_VALUE = supports?.novaBlocks?.spaceAndSizing?.advancedSpacing ? -3 : 0;
		const CONTENT_SPACING_MAX_VALUE = 3;

		return (
			<Fragment>
				<div style={ getSpacingCSSProps( attributes ) }>
					<OriginalComponent { ...props } />
				</div>
				<ControlsSection label={ __( 'Space and Sizing' ) }>
					<ControlsTab label={ __( 'Customize' ) }>
						<div key={ 'space-and-sizing-customize-1' } className={ getControlsClasses( attributes, ( atts ) => {
						  return getEmphasisAttributes( atts.emphasisBySpace, atts.enableOverlapping, atts.contentPosition );
            } ) }>
							<RangeControl
								value={ emphasisBySpace }
								onChange={ ( emphasisBySpace ) => {
									const newAttributes = getEmphasisAttributes( emphasisBySpace, enableOverlapping, contentPosition );
									setAttributes( newAttributes );
								} }
								label={ __( 'Emphasis by Space' ) }
								min={ 0 }
								max={ 3 }
							/>
							<ToggleControl
								label={ __( 'Enable Overlapping' ) }
								checked={ enableOverlapping }
								onChange={ enableOverlapping => {
									const newAttributes = getEmphasisAttributes( emphasisBySpace, enableOverlapping, contentPosition );
									setAttributes( newAttributes );
								} }
							/>
              { showVerticalAlignment && <VerticalAnchoringCustomize { ...props } /> }
						</div>
					</ControlsTab>
					<ControlsTab label={ __( 'Settings' ) }>
						<div key={ 'space-and-sizing-settings-1' }>
              { showVerticalAlignment && <VerticalAnchoringSettings { ...props } /> }
							<ControlsGroup title={ __( 'Block Spacing' ) }>
								<RangeControl
									key={ 'media-card-block-top-spacing' }
									value={ blockTopSpacing }
									onChange={ ( blockTopSpacing ) => setAttributes( { blockTopSpacing } ) }
									label={ __( 'Top' ) }
									min={ BLOCK_SPACING_MIN_VALUE }
									max={ BLOCK_SPACING_MAX_VALUE }
								/>
								<RangeControl
									key={ 'media-card-block-bottom-spacing' }
									value={ blockBottomSpacing }
									onChange={ ( blockBottomSpacing ) => setAttributes( { blockBottomSpacing } ) }
									label={ __( 'Bottom' ) }
									min={ BLOCK_SPACING_MIN_VALUE }
									max={ BLOCK_SPACING_MAX_VALUE }
								/>
							</ControlsGroup>
							<ControlsGroup title={ __( 'Content Area Spacing' ) }>
								<div key={ 'space-and-sizing-settings-2' }>
									<RangeControl
										key={ 'media-card-content-top-spacing' }
										value={ emphasisTopSpacing }
										onChange={ ( emphasisTopSpacing ) => setAttributes( { emphasisTopSpacing } ) }
										label={ __( 'Top' ) }
										min={ CONTENT_SPACING_MIN_VALUE }
										max={ CONTENT_SPACING_MAX_VALUE }
									/>
									<RangeControl
										key={ 'media-card-content-bottom-spacing' }
										value={ emphasisBottomSpacing }
										onChange={ ( emphasisBottomSpacing ) => setAttributes( { emphasisBottomSpacing } ) }
										label={ __( 'Bottom' ) }
										min={ CONTENT_SPACING_MIN_VALUE }
										max={ CONTENT_SPACING_MAX_VALUE }
									/>
								</div>
							</ControlsGroup>
						</div>
					</ControlsTab>
				</ControlsSection>
			</Fragment>
		);
	};
});
addFilter( 'editor.BlockEdit', 'novablocks/with-space-and-sizing', withSpaceAndSizingControls );

function addSpaceAndSizingAttributes( block ) {

	if ( ! block?.supports?.novaBlocks?.spaceAndSizing ) {
		return block;
	}

	if ( typeof block.attributes !== 'undefined' ) {
		Object.assign( block.attributes, attributes );
	}

	return block;
}
addFilter( 'blocks.registerBlockType', 'novablocks/add-space-and-sizing-attributes', addSpaceAndSizingAttributes );

const addSpaceAndSizingStyle = ( extraProps, blockType, attributes ) => {

  const {
    blockTopSpacing,
    blockBottomSpacing,
    emphasisTopSpacing,
    emphasisBottomSpacing,
  } = attributes;

  let spaceAndSizingStyle = {};

  if ( ! extraProps.hasOwnProperty('style') ) {
    extraProps.style = {};
  }

  if ( blockType?.supports?.novaBlocks?.spaceAndSizing ) {

    spaceAndSizingStyle = {
      "--novablocks-block-top-spacing": blockTopSpacing + "",
      "--novablocks-block-bottom-spacing": blockBottomSpacing + "",
      "--novablocks-emphasis-top-spacing": emphasisTopSpacing + "",
      "--novablocks-emphasis-bottom-spacing": emphasisBottomSpacing + "",
    };

    extraProps.style = Object.assign( extraProps.style, spaceAndSizingStyle );
  }

  return extraProps;
};

addFilter(
  "blocks.getSaveContent.extraProps",
  "novablocks/add-space-and-sizing-style",
  addSpaceAndSizingStyle
);
