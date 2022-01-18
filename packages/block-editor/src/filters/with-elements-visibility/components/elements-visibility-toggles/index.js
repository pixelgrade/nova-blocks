import { ToggleGroup } from '../../../../index';

import {
  carouselToggles,
  collectionToggles,
  contentElementsToggle,
  contentToggles,
  heroToggles,
  mediaToggles,
} from "./toggles";

const ElementsVisibilityToggles = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    align,
    columns,
    cardLayout,
    layoutStyle,
    postsToShow,
    sourceType,
  } = attributes;

  // A block is considered carousel when layoutStyle,
  // has been set to carousel, however we may extend that,
  // so the postsToShow is > 1.
  const IS_CAROUSEL = layoutStyle === 'carousel';

  // Card is stacked when cardLayout has been set to stacked.
  const CARD_IS_STACKED = cardLayout === 'stacked';

  // A block is considered hero when cardLayout is stacked,
  // and the postsToShow is equal with 1.
  const IS_HERO = cardLayout === 'stacked' && columns === 1 && align === 'full';

  const blockToggles = [];

  blockToggles.push( ...collectionToggles );
  blockToggles.push( ...mediaToggles );

  if ( sourceType !== "blocks" ) {
    blockToggles.push( ...contentElementsToggle );
  } else {
    blockToggles.push( ...contentToggles );
  }

  if ( IS_HERO ) {
    blockToggles.push( ...heroToggles );
  }

  if ( IS_CAROUSEL ) {
    blockToggles.push( ...carouselToggles )
  }

  return (
    <ToggleGroup
      onChange={ setAttributes }
      toggles={ blockToggles.map( toggle => {
        return {
          ...toggle,
          value: attributes[ toggle.attribute ]
        }
      } ) }
    />
  )
}

export default ElementsVisibilityToggles;
