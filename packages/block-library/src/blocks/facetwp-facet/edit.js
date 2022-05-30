import { useBlockProps } from "@wordpress/block-editor";
import ServerSideRender from "@wordpress/server-side-render";
import { IconButton, SelectControl, ToggleControl, Toolbar } from "@wordpress/components";
import { BlockControls } from "@wordpress/block-editor";
import { Fragment, useEffect, useMemo, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { ControlsSection, ControlsTab, useSettings } from "@novablocks/block-editor";

import meta from "./block.json";

const useActiveFacet = ( attributes ) => {
  const { facet } = attributes;
  const settings = useSettings();

  return useMemo( () => {
    const facets = settings?.facetwp_facets;
    return facets.find( currentFacet => currentFacet.name === facet );

  }, [ facet ] )
}

const Edit = ( props ) => {
  const { attributes, setAttributes } = props;
  const { facet } = attributes;
  const settings = useSettings();
  const facets = settings?.facetwp_facets;
  const options = [];
  const [ showDropdown, setShowdropdown ] = useState( false );

  const emptyFacet = {
    label: __( 'Select', '__plugin_txtd' ),
    name: ""
  };

  const activeFacet = facets.find( option => option.name === facet ) || emptyFacet;

  const blockProps = useBlockProps( {
    className: "nb-facetwp-filter__item"
  } );

  useEffect( () => {
    if ( facet === "" ) {
      setShowdropdown( true );
    }
  }, [ facet ] );

  return (
    <div { ...blockProps }>
      <div className="nb-facetwp-filter__item-text">
        <span className="nb-facetwp-filter__item-label">{ activeFacet.label }</span>
        <span className="nb-facetwp-filter__item-type">{ activeFacet.type }</span>
      </div>
      { showDropdown &&
        <div className={ 'nb-facetwp-filter__dropdown' }>
          { facets.map( current => {
            return (
              <div className={ 'nb-facetwp-filter__dropdown-item' } onClick={ () => {
                setShowdropdown( false );
                setAttributes( { facet: current.name } );
              } }>
                { current.label }
              </div>
            )
          } ) }
        </div>
      }
      <FacetInspectorControls { ...props } />
      <EditToolbarButton { ...props } />
    </div>
  )
}

const FacetInspectorControls = ( props ) => {
  const { attributes, setAttributes } = props;
  const { showLabels } = attributes;

  return (
    <ControlsSection id={ 'setup' } label={ __( 'Setup', '__plugin_txtd' ) }>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <ToggleControl
          label={__( 'Show Label', '__plugin_txtd' )}
          checked={ showLabels }
          onChange={ () => setAttributes( { showLabels: ! showLabels } ) }
        />
      </ControlsTab>
    </ControlsSection>
  )
}

const EditToolbarButton = ( props ) => {
  const { attributes, setAttributes } = props;
  const activeFacet = useActiveFacet( attributes );

  if ( ! activeFacet ) {
    return null;
  }

  return (
    <BlockControls>
      <Toolbar group={ 'block' }>
        <IconButton
          className="components-icon-button components-toolbar__control"
          label={ __( 'Change Facet', '__plugin_txtd' ) }
          onClick={ () => { setAttributes( { facet: "" } ) } }
          icon="edit"
        />
      </Toolbar>
    </BlockControls>
  )
}

export default Edit;
