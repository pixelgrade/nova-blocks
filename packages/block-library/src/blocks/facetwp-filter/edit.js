import { useBlockProps } from "@wordpress/block-editor";
import ServerSideRender from "@wordpress/server-side-render";
import { IconButton, Placeholder, SelectControl, ToggleControl, Toolbar } from "@wordpress/components";
import { BlockControls } from "@wordpress/block-editor";
import { Fragment, useMemo } from "@wordpress/element";
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
  const { attributes } = props;
  const blockProps = useBlockProps();

  return (
    <div { ...blockProps }>
      <Preview { ...props } />
      <FacetSelect { ...props } />
      <FacetInspectorControls { ...props } />
      <FacetBlockControls { ...props } />
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

const FacetBlockControls = ( props ) => {
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

const Preview = ( props ) => {
  const { attributes } = props;
  const activeFacet = useActiveFacet( attributes );

  if ( ! activeFacet ) {
    return null;
  }

  return (
    <ServerSideRender
      block={ meta.name }
      attributes={ props.attributes }
    />
  )
}

const FacetSelect = ( props ) => {
  const { attributes, setAttributes } = props;
  const { facet } = attributes;
  const settings = useSettings();
  const facets = settings?.facetwp_facets;
  const activeFacet = useActiveFacet( attributes );
  const options = [];

  if ( activeFacet ) {
    return null;
  }

  if ( Array.isArray( facets ) ) {

    options.push( ...facets.map( facet => {
      return {
        label: facet.label,
        value: facet.name,
      }
    } ) );

  }

  options.unshift( {
    label: __( 'Select', '__plugin_txtd' ),
    value: "",
  } );

  return (
    <Placeholder>
      <SelectControl
        key={ 'facetwp-facet-select' }
        label={ __( 'Facet Select', '__plugin_txtd' ) }
        value={ activeFacet }
        options={ options }
        onChange={ ( facet ) => setAttributes( { facet } ) }
      />
    </Placeholder>
  )
}

export default Edit;
