import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { PanelBody } from '@wordpress/components';

import {
  RichText,
  AlignmentToolbar,
  BlockControls,
  InspectorControls,
  useBlockProps,
} from '@wordpress/block-editor';

import { HeadingToolbar } from '@novablocks/block-editor';

const Controls = ( props ) => {

  const { attributes, setAttributes } = props;

  const {
    align,
    level,
    primary,
    secondary,
    textAlign,
  } = attributes;

  return (
    <Fragment>

      <BlockControls>
        <HeadingToolbar minLevel={ 2 } maxLevel={ 4 } selectedLevel={ level }
                        onChange={ ( level ) => setAttributes( { level } ) }/>
        <AlignmentToolbar value={ textAlign } onChange={ textAlign => {
          setAttributes( { textAlign } )
        } }/>
      </BlockControls>
      <InspectorControls>
        <PanelBody title={ __( 'Headline Settings', '__plugin_txtd' ) } initialOpen={ true }>
          <p>{ __( 'Level', '__plugin_txtd' ) }</p>
          <HeadingToolbar minLevel={ 1 } maxLevel={ 6 } selectedLevel={ level }
                          onChange={ ( level ) => setAttributes( { level } ) }/>
        </PanelBody>
      </InspectorControls>
    </Fragment>
  )
}

export default function HeadlineEdit( props ) {

	const { attributes, setAttributes } = props;

	const {
		align,
		level,
		primary,
		secondary,
    textAlign,
	} = attributes;

	const TagName = `h${level}`;

  const className = classnames(
    'c-headline',
    `has-text-align-${ textAlign }`,
    `align${ align }`
  );

  const blockProps = useBlockProps( { className } );

	return (
    <Fragment>
      <TagName { ...blockProps }>
        <RichText
          className="c-headline__secondary"
          identifier="secondary"
          tagName="span"
          value={ secondary }
          onChange={ ( value ) => setAttributes( { secondary: value } ) }
          placeholder={ __( 'Subtitle…', '__plugin_txtd' ) }
          keepPlaceholderOnFocus={ true }
          allowedFormats={ [] }
        />
        <RichText
          className="c-headline__primary"
          identifier="primary"
          tagName="span"
          value={ primary }
          onChange={ ( value ) => setAttributes( { primary: value } ) }
          placeholder={ __( 'Write title…', '__plugin_txtd' ) }
          keepPlaceholderOnFocus={ true }
          allowedFormats={ [] }
        />
      </TagName>
      <Controls { ...props } />
    </Fragment>
	)
}
