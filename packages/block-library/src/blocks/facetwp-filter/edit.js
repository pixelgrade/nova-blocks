import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";

import { ControlsSection, ControlsTab } from "@novablocks/block-editor";

const Edit = ( props ) => {
  const { attributes } = props;
  const { sectionType } = attributes;

  const blockProps = useBlockProps( {
    className: `nb-facetwp-filter  nb-facetwp-filter--${ sectionType }`
  } );

  const innerBlocksProps = useInnerBlocksProps( {
    className: 'nb-facetwp-filter__list'
  }, {
    allowedBlocks: [
      'novablocks/facetwp-facet',
      'novablocks/facetwp-selections',
      'novablocks/facetwp-toggle',
      'novablocks/facetwp-title',
    ]
  } );

  return (
    <Fragment>
      <div { ...blockProps }>
        { sectionType === 'hidden' &&
          <div className={ 'nb-facetwp-filter__header' }>
            <div className={ 'nb-facetwp-filter__title' }>
              { __( 'More Filters section', '__plugin_txtd' ) }
            </div>
            <div className={ 'nb-facetwp-filter__description' }>
              { __( 'Filtering controls placed below will be shown using a "More Filters" button.', '__plugin_txtd' ) }
            </div>
          </div>
        }
        <div { ...innerBlocksProps } />
      </div>
      <FilterInspectorControls { ...props } />
    </Fragment>
  )
}

const FilterInspectorControls = ( props ) => {
  const { attributes, setAttributes } = props;
  const { orientation, sectionType } = attributes;

  return (
    <ControlsSection id={ 'setup' } label={ __( 'Setup', '__plugin_txtd' ) }>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <RadioControl
          label={ __( 'Filter Section Type', '__plugin_txtd' ) }
          selected={ sectionType }
          options={ [
            { label: 'Primary Filters (visible)', value: 'visible' },
            { label: 'More Filters (hidden)', value: 'hidden' },
          ] }
          onChange={ sectionType => setAttributes( { sectionType } ) }
        />
        <RadioControl
          label={ __( 'Orientation', '__plugin_txtd' ) }
          selected={ orientation }
          options={ [
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Vertical', value: 'vertical' },
          ] }
          onChange={ orientation => setAttributes( { orientation } ) }
        />
      </ControlsTab>
    </ControlsSection>
  )
}

export default Edit;
