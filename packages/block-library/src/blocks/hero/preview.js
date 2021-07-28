/**
 * Internal dependencies
 */
import HeroBackground from './background';

/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;


import { select } from '@wordpress/data';

import {
  getAlignmentClassnames,
  getColorSetClassnames
} from "@novablocks/utils";

const HeroPreview = function( props ) {

	const {
		attributes,
		className,
		clientId,
		settings,
	} = props;

	const {
		// layout
		contentPadding,
		contentPaddingCustom,
		contentWidth,
		contentWidthCustom,
		// height
		minHeightFallback,
		// indicators
		scrollIndicatorBlock,
		// colors
		contentColor,
		overlayFilterStyle,

		scrollingEffect,
		displayInnerContent,
	} = attributes;

	const classes = [
		className,
		'novablocks-hero',
		`novablocks-u-spacing-${ contentPadding }`,
		`novablocks-u-content-width-${ contentWidth }`,
		`novablocks-u-background`,
		`novablocks-u-background-${ overlayFilterStyle }`,
    getAlignmentClassnames( attributes )
	];

	const styles = {
		hero: {
			'--novablocks-hero-text-color': contentColor,
		},
		foreground: {},
		content: {},
	};

	if ( contentColor !== '#FFF' ) {
		styles.hero['--theme-dark-primary'] = '#FFF'
	}

	const heroBlocks = select( 'core/block-editor' ).getBlocks().filter( ( block ) => {
		return block.name === 'novablocks/hero';
	} );

	let heroHeight = minHeightFallback;
	let contentHeight = heroHeight;

	if ( scrollingEffect === 'doppler' ) {
		heroHeight = minHeightFallback * 2;
		contentHeight = 100;
		styles.hero.alignItems = 'flex-start';
	}

	styles.hero.minHeight = heroHeight + 'vh';
	styles.foreground.minHeight = contentHeight + 'vh';

	if ( contentPadding === 'custom' ) {
		styles.foreground.paddingTop = `${ contentPaddingCustom }%`;
		styles.foreground.paddingBottom = `${ contentPaddingCustom }%`;
	}

	if ( contentWidth === 'custom' ) {
		styles.content.maxWidth = `${ contentWidthCustom }%`;
	}

	const index = heroBlocks.findIndex( ( block ) => block.clientId === clientId );
	const scrollIndicatorFallback = index === 0 && heroHeight >= 100;
	const scrollIndicator = settings.usePostMetaAttributes ? scrollIndicatorBlock : scrollIndicatorFallback;

  const innerContainerClasses = [
    "novablocks-hero__inner-container",
    "wp-block-group__inner-container",
    "novablocks-u-content-width",
  ];

  const innerContainerStyle = styles.content;

  let innerBlocksProps;

  if ( useInnerBlocksProps !== undefined) {

    innerBlocksProps = useInnerBlocksProps(
      {
        className: innerContainerClasses,
        style: innerContainerStyle,
      },
    );

  }

	return (
		<div className={ classes.join( ' ' ) } style={ styles.hero }>
			<HeroBackground { ...props } />
			<div className="novablocks-hero__foreground novablocks-doppler__foreground novablocks-u-content-padding novablocks-u-content-align" style={ styles.foreground }>
				{ displayInnerContent && innerBlocksProps !== undefined && <div style={ styles.content } { ...innerBlocksProps } /> }
        { displayInnerContent && innerBlocksProps === undefined &&
          <div className="novablocks-hero__inner-container wp-block-group__inner-container novablocks-u-content-width" style={ styles.content }>
          <InnerBlocks />
          </div>
        }
				{ scrollIndicator && <div className="novablocks-hero__indicator"></div> }
			</div>
		</div>
	);
};

export default HeroPreview;
