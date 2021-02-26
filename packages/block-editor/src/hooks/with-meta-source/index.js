import {
  compose,
  createHigherOrderComponent
} from '@wordpress/compose';

import {
  Fragment
} from '@wordpress/element';

import {
  ControlsSection,
  ControlsTab
} from '../../components';

import {
  SelectControl,
} from '@wordpress/components';


import {__} from "@wordpress/i18n";
import {addFilter} from "@wordpress/hooks";

const ALLOWED_BLOCKS = [
  'novablocks/slideshow',
];

const withMetaSourceControls = createHigherOrderComponent( OriginalComponent => {
  return ( props ) => {

    if ( !ALLOWED_BLOCKS.includes( props.name ) ) {
      return <OriginalComponent {...props} />
    }

    const {
      attributes: {
        primaryMetadata,
        secondaryMetadata,
      },
      setAttributes
    } = props;

    const metaSourceOptions = [
      {label: 'None', value: 'none'},
      {label: 'Author', value: 'author'},
      {label: 'Category', value: 'category'},
      {label: 'Comments', value: 'comments'},
      {label: 'Date', value: 'date'},
      {label: 'Tags', value: 'tags'},
      {label: 'Reading time', value: 'reading-time'}
    ];

    return (
      <Fragment>
        <OriginalComponent {...props} />
        <ControlsSection label={__( 'Meta Source' )} group={__( 'Block Modules' )}>
          <ControlsTab label={__( 'Meta Settings' )}>
            <SelectControl
              key={'primary-metadata-source'}
              label={__( 'Primary Metadata' )}
              value={primaryMetadata}
              onChange={primaryMetadata => {
                setAttributes( {primaryMetadata} )
              }}
              options={metaSourceOptions}
            />
            <SelectControl
              key={'secondary-metadata-source'}
              label={__( 'Secondary Metadata' )}
              value={secondaryMetadata}
              onChange={secondaryMetadata => {
                setAttributes( {secondaryMetadata} )
              }}
              options={metaSourceOptions}
            />
          </ControlsTab>
        </ControlsSection>
      </Fragment>
    )
  }
} );

const componentWithSettings = compose( [
  withMetaSourceControls
] );

addFilter( 'editor.BlockEdit', 'novablocks/with-space-and-sizing-advanced', componentWithSettings );


