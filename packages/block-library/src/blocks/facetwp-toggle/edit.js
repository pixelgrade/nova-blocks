import ContentEditable from 'react-contenteditable';

import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { RadioControl } from "@wordpress/components";

import { ControlsSection, ControlsTab } from "@novablocks/block-editor";

const Edit = ( props ) => {
  const { attributes, setAttributes } = props;
  const { behavior, text, visibility } = attributes;

  const blockProps = useBlockProps( {
    className: `nb-facetwp-filter__item  nb-facetwp-filter__item--toggle nb-facetwp-toggle--${ behavior } nb-facetwp-toggle--visibility-${ visibility }`
  } );

  return (
    <div { ...blockProps }>
      <div className="nb-facetwp-filter__item-text">
        <ContentEditable html={ text } className="nb-facetwp-filter__item-label" onChange={ event => setAttributes( { text: event.target.value } ) } />
        <span className="nb-facetwp-filter__item-type">
          { behavior === 'mobile-panel' ? __( 'mobile filter button', '__plugin_txtd' ) : __( 'trigger button', '__plugin_txtd' ) }
        </span>
      </div>
      <ControlsSection id="setup" label={ __( 'Setup', '__plugin_txtd' ) } placement="settings">
        <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
          <RadioControl
            label={ __( 'Behavior', '__plugin_txtd' ) }
            selected={ behavior }
            options={ [
              { label: __( 'More Filters section', '__plugin_txtd' ), value: 'more-filters' },
              { label: __( 'Mobile filter panel', '__plugin_txtd' ), value: 'mobile-panel' },
            ] }
            onChange={ behavior => setAttributes( { behavior } ) }
          />
          <RadioControl
            label={ __( 'Visibility', '__plugin_txtd' ) }
            selected={ visibility }
            options={ [
              { label: __( 'Always', '__plugin_txtd' ), value: 'always' },
              { label: __( 'Mobile only', '__plugin_txtd' ), value: 'mobile' },
            ] }
            onChange={ visibility => setAttributes( { visibility } ) }
          />
        </ControlsTab>
      </ControlsSection>
    </div>
  )
}

export default Edit;
