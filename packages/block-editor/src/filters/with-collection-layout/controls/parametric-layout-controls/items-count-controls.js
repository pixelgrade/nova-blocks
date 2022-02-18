import { __ } from "@wordpress/i18n";
import { useMemo } from "@wordpress/element";
import { ToggleControl } from '@wordpress/components';

import { getControlsClasses, getPostsCount } from "@novablocks/utils";

import { ControlsGroup } from "../../../../components";

import ItemsCountControl from "../items-count-control";

const ItemsCountControls = ( props ) => {

  const {
    attributes,
    setAttributes,
    areaColumns
  } = props;

  const {
    automaticPostsNumber,
    postsToShow,
  } = attributes;

  const autoPostsCount = useMemo( () => getPostsCount( areaColumns ), [ areaColumns ] );
  if ( automaticPostsNumber && postsToShow !== autoPostsCount ) {
    setAttributes({
      "postsToShow": autoPostsCount,
    });
  }

  // Used to store previous values of postsToShow.
  const tempPostsToShow = useMemo( () => attributes.tempPostsToShow || postsToShow, [ attributes ] );

  return (
    <ControlsGroup title={ __( 'Items Count', '__plugin_txtd' ) }>
      <div className={ getControlsClasses( attributes, ( { automaticPostsNumber, postsToShow } ) => {
        return {
          postsToShow: automaticPostsNumber ? -1 : postsToShow
        }
      } ) }>
        <ItemsCountControl postsToShow={automaticPostsNumber ? autoPostsCount : postsToShow} setAttributes={setAttributes} />
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
  )
};

export default ItemsCountControls;
