import { ToggleGroup } from "../index";
import {
  collectionToggles,
  heroToggles,
  carouselToggles,
  cardToggles
} from "./toggles";

const CollectionManager = (props) => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    layoutStyle,
    cardLayout,
    postsToShow
  } = attributes;

  // @todo: Maybe we can find a better solution, for this checks.
  // A block is considered carousel when layoutStyle,
  // has been set to carousel, however we may extend that,
  // so the postsToShow is > 1.
  const IS_CAROUSEL = layoutStyle === 'carousel';

  // Card is stacked when cardLayout has been set to stacked.
  const CARD_IS_STACKED = cardLayout === 'stacked';
  // A block is considered hero when cardLayout is stacked,
  // and the postsToShow is equal with 1.
  const IS_HERO = CARD_IS_STACKED && postsToShow === 1;

  let blockToggles = [...collectionToggles, ...cardToggles];

  if ( IS_HERO ) {
    blockToggles.push( ...heroToggles );
  }

  if ( IS_CAROUSEL ) {
    blockToggles.push( ...carouselToggles )
  }

  return (
    <ToggleGroup
      onChange={ setAttributes }
      toggles={ blockToggles.filter( toggle => {
        return toggle.attribute !== 'showSubtitle';
      } ).map( toggle => {
        return {
          ...toggle,
          value: attributes[ toggle.attribute ]
        }
      } ) }
    />
  )
}

export default CollectionManager;
