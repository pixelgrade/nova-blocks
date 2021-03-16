import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';

import { SelectControl } from '@wordpress/components';

import {
  CardsManager,
  ControlsGroup,
  ControlsSection,
  ControlsTab,
  ToggleGroup
} from "../../components";

import { Fragment } from "@wordpress/element";
import { addFilter } from "@wordpress/hooks";

const { toggles } = CardsManager;

const ALLOWED_BLOCKS = [
  'novablocks/posts-collection',
  'novablocks/supernova',
]

const ElementsDisplaySection = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  return (
    <ControlsSection label={ __( 'Elements Visibility' ) } group={ __( 'Cards Manager' ) }>
      <ControlsTab label={ __( 'Settings' ) }>
        <ControlsGroup title={ __( 'Set up elements for this block', '__plugin_txtd' ) }>
          <ToggleGroup
            onChange={ setAttributes }
            toggles={ toggles.filter( toggle => {
              return toggle.attribute !== 'showSubtitle';
            } ).map( toggle => {
              return {
                ...toggle,
                value: attributes[ toggle.attribute ]
              }
            } ) }
          />
        </ControlsGroup>
        <MetaSource { ...props } />
      </ControlsTab>
    </ControlsSection>
  );
}

const MetaSource = ( props ) => {

  const {
    attributes: {
      primaryMetadata,
      secondaryMetadata,
    },
    setAttributes
  } = props;

  const metaSourceOptions = [
    { label: 'None', value: 'none' },
    { label: 'Author', value: 'author' },
    { label: 'Category', value: 'category' },
    { label: 'Comments', value: 'comments' },
    { label: 'Date', value: 'date' },
    { label: 'Tags', value: 'tags' },
    { label: 'Reading time', value:'reading-time'}
  ];

  return (
    <ControlsGroup title={ __( 'Additional Information', '__plugin_txtd' ) }>
      <SelectControl
        key={ 'primary-metadata-source' }
        label={ __( 'Primary Metadata' ) }
        value={ primaryMetadata }
        onChange={ primaryMetadata => {
          setAttributes( { primaryMetadata } )
        } }
        options={ metaSourceOptions }
      />
      <SelectControl
        key={ 'secondary-metadata-source' }
        label={ __( 'Secondary Metadata' ) }
        value={ secondaryMetadata }
        onChange={ secondaryMetadata => {
          setAttributes( { secondaryMetadata } )
        } }
        options={ metaSourceOptions }
      />
    </ControlsGroup>
  )
};


const withCardElmentsDisplay = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    if ( ! ALLOWED_BLOCKS.includes( props.name ) ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <OriginalComponent { ...props } />
        <ElementsDisplaySection { ...props } />
      </Fragment>
    );
  };
} );

addFilter( 'editor.BlockEdit', 'novablocks/with-card-elements-display', withCardElmentsDisplay );
