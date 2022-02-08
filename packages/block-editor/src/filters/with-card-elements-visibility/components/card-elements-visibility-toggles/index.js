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
  mediaToggles
} from './toggles';

const CardElementsVisibilityToggles = ( props ) => {

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
      contentType,
    } = attributes;

    const toggles = [
      ...collectionToggles,
      ...mediaToggles,
    ];

    // A block is considered carousel when layoutStyle,
    // has been set to carousel, however we may extend that,
    // so the postsToShow is > 1.
    const IS_CAROUSEL = 'carousel' === layoutStyle;

    // Card is stacked when cardLayout has been set to stacked.
    const CARD_IS_STACKED = 'stacked' === cardLayout;

    // A block is considered hero when cardLayout is stacked,
    // and the postsToShow is equal with 1.
    const IS_HERO = 'stacked' === cardLayout && 1 === columns && 'full' === align;

    if ( 'custom' !== contentType ) {
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

    return toggles.filter( toggle => "meta" !== toggle.type || !! postType );

  }, [ attributes, postType ] );

  return (
    <ToggleGroup
      onChange={ setAttributes }
      toggles={ blockToggles.map( toggle => {
        return {
          ...toggle,
          value: attributes[ toggle.attribute ],
          onChange: ( newValue ) => {
            if ( 'meta' === toggle.type && !! postType ) {
              setMeta( { ...meta, [toggle.attribute]: newValue } )
            } else {
              setAttributes( { [toggle.attribute]: newValue } );
            }
          }
        }
      } ) }
    />
  )
};

export default CardElementsVisibilityToggles;
