import { useBlockProps } from "@wordpress/block-editor";
import { SelectControl, TextControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ControlsSection, ControlsTab, useSettings } from "@novablocks/block-editor";

const Edit = ( props ) => {
  const { attributes, setAttributes } = props;
  const { resetFacet, resultLabelPlural, resultLabelSingular, showCounts } = attributes;
  const settings = useSettings();
  const resetFacets = ( settings?.facetwp_facets || [] ).filter( currentFacet => currentFacet.type === 'reset' );
  const resetOptions = [
    { label: __( 'No clear action', '__plugin_txtd' ), value: '' },
    ...resetFacets.map( currentFacet => ( { label: currentFacet.label, value: currentFacet.name } ) ),
  ];
  const blockProps = useBlockProps( {
    className: 'nb-facetwp-filter__item'
  } );

  return (
    <div { ...blockProps }>
      <strong>{ __( 'Filter summary', '__plugin_txtd' ) }</strong>
      <span>{ showCounts ? __( 'Result count and active selections', '__plugin_txtd' ) : __( 'Active selections', '__plugin_txtd' ) }</span>
      <ControlsSection id="setup" label={ __( 'Setup', '__plugin_txtd' ) } placement="settings">
        <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
          <ToggleControl
            label={ __( 'Show result count', '__plugin_txtd' ) }
            checked={ showCounts }
            onChange={ showCounts => setAttributes( { showCounts } ) }
          />
          { showCounts &&
            <>
              <TextControl
                label={ __( 'Singular result label', '__plugin_txtd' ) }
                help={ __( 'Defaults to “result”.', '__plugin_txtd' ) }
                value={ resultLabelSingular }
                onChange={ resultLabelSingular => setAttributes( { resultLabelSingular } ) }
              />
              <TextControl
                label={ __( 'Plural result label', '__plugin_txtd' ) }
                help={ __( 'Defaults to “results”.', '__plugin_txtd' ) }
                value={ resultLabelPlural }
                onChange={ resultLabelPlural => setAttributes( { resultLabelPlural } ) }
              />
            </>
          }
          <SelectControl
            label={ __( 'Clear filters action', '__plugin_txtd' ) }
            value={ resetFacet }
            options={ resetOptions }
            onChange={ resetFacet => setAttributes( { resetFacet } ) }
          />
        </ControlsTab>
      </ControlsSection>
    </div>
  )
}

export default Edit;
