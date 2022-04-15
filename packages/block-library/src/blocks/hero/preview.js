import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { Fragment } from "@wordpress/element";
import { useSelect, select } from '@wordpress/data';
import { useInnerBlocksProps } from "@wordpress/block-editor";

import HeroBackground from './background';

const HeroPreview = props => {

	const {
		attributes,
		clientId,
	} = props;

	const {
		scrollIndicatorBlock,
		displayInnerContent,
    minHeightFallback,
    scrollingEffect,
	} = attributes;

  const novablocksSettings = select( 'novablocks' ).getSettings();

	const heroHeight = scrollingEffect !== 'doppler' ? minHeightFallback : minHeightFallback * 2;
	const heroBlocks = useSelect( select => select( 'core/block-editor' ).getBlocks().filter( block => block.name === 'novablocks/hero' ), [] );
	const index = heroBlocks.findIndex( ( block ) => block.clientId === clientId );
	const scrollIndicatorFallback = index === 0 && heroHeight >= 100;
	const scrollIndicator = novablocksSettings.usePostMetaAttributes ? scrollIndicatorBlock : scrollIndicatorFallback;

  const innerBlocksProps = useInnerBlocksProps( {
    className: classnames( [
      "novablocks-hero__inner-container",
      "wp-block-group__inner-container",
    ] ),
  }, );

	return (
	  <Fragment>
			<HeroBackground { ...props } />
			<div className="novablocks-hero__foreground novablocks-u-content-padding novablocks-u-content-align">
				{ displayInnerContent && <div { ...innerBlocksProps } /> }
				{ scrollIndicator && <div className="nb-scroll-indicator"></div> }
			</div>
    </Fragment>
	);
};

export default HeroPreview;
