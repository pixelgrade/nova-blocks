import { useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';

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

  const postType = useSelect( ( select ) => select( 'core/editor' ).getCurrentPostType(), [] );
  const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

  const blockToggles = useMemo( () => {

    const {
      align,
      columns,
      cardLayout,
      layoutStyle,
      postsToShow,
      sourceType,
    } = attributes;

    const toggles = [
      ...collectionToggles,
      ...mediaToggles,
    ];

    // A block is considered carousel when layoutStyle,
    // has been set to carousel, however we may extend that,
    // so the postsToShow is > 1.
    const IS_CAROUSEL = layoutStyle === 'carousel';

    // Card is stacked when cardLayout has been set to stacked.
    const CARD_IS_STACKED = cardLayout === 'stacked';

    // A block is considered hero when cardLayout is stacked,
    // and the postsToShow is equal with 1.
    const IS_HERO = cardLayout === 'stacked' && columns === 1 && align === 'full';

    if ( sourceType !== "blocks" ) {
      toggles.push( ...contentElementsToggle );
    } else {
      toggles.push( ...contentToggles );
    }

    if ( IS_HERO ) {
      toggles.push( ...heroToggles );
    }

    if ( IS_CAROUSEL ) {
      toggles.push( ...carouselToggles )
    }

    return toggles.filter( toggle => toggle.type !== "meta" || !! postType );

  }, [ attributes, postType ] );

  return (
    <ToggleGroup
      onChange={ setAttributes }
      toggles={ blockToggles.map( toggle => {
        return {
          ...toggle,
          value: attributes[ toggle.attribute ],
          onChange: ( newValue ) => {
            if ( toggle.type === 'meta' && !! postType ) {
              setMeta( { ...meta, [toggle.attribute]: newValue } )
            } else {
              setAttributes( { [toggle.attribute]: newValue } );
            }
          }
        }
      } ) }
    />
  )
}

export default ElementsVisibilityToggles;
