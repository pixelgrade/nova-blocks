import { useBlockProps, useInnerBlocksProps, Warning } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { Button, RadioControl, TextControl, ToggleControl } from "@wordpress/components";

import { ControlsSection, ControlsTab, useSettings } from "@novablocks/block-editor";

const Edit = ( props ) => {
  const { attributes } = props;
  const { mobilePanel, mobileTitle, orientation, sectionType } = attributes;
  const settings = useSettings();

  const blockProps = useBlockProps( {
    className: `nb-facetwp-filter  nb-facetwp-filter--${ sectionType } nb-facetwp-filter--orientation-${ orientation }${ mobilePanel ? ' nb-facetwp-filter--mobile-panel nb-facetwp-filter--editor' : '' }`
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

  if ( settings?.facetwp_available === false ) {
    return (
      <div { ...blockProps }>
        { mobilePanel &&
          <div className="nb-facetwp-filter__mobile-header">
            <div className="nb-facetwp-filter__mobile-title">{ mobileTitle }</div>
            <span className="nb-facetwp-filter__mobile-description">
              { __( 'Mobile filter panel', '__plugin_txtd' ) }
            </span>
          </div>
        }
        <Warning>
			<p>{ __( 'Advanced Filtering is unavailable because Pixelgrade Filters is not active. The filtering controls stay hidden from visitors while the project listing remains visible.', '__plugin_txtd' ) }</p>
          <Button href={ settings?.facetwp_setup_url } variant="primary">
            { __( 'Open Site Setup', '__plugin_txtd' ) }
          </Button>
        </Warning>
      </div>
    );
  }

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
  const { mobilePanel, mobileTitle, orientation, sectionType } = attributes;

  return (
    <ControlsSection id={ 'setup' } label={ __( 'Setup', '__plugin_txtd' ) } placement={ 'settings' }>
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
        <ToggleControl
          label={ __( 'Mobile filter panel', '__plugin_txtd' ) }
          help={ __( 'Show these controls in a full-screen panel opened by a mobile Filter Toggle.', '__plugin_txtd' ) }
          checked={ mobilePanel }
          onChange={ mobilePanel => setAttributes( { mobilePanel } ) }
        />
        { mobilePanel &&
          <TextControl
            label={ __( 'Mobile panel title', '__plugin_txtd' ) }
            value={ mobileTitle }
            onChange={ mobileTitle => setAttributes( { mobileTitle } ) }
          />
        }
      </ControlsTab>
    </ControlsSection>
  )
}

export default Edit;
