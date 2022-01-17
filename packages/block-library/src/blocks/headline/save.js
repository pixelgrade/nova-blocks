/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText
 } from '@wordpress/block-editor';

export default function save( props ) {

	const { attributes } = props;

	const {
		align,
		level,
		primary,
		secondary,
    textAlign,
    fontSize,
	} = attributes;

  const TagName = `h${ level }`;

  const className = classnames(
    'c-headline',
    `has-text-align-${ textAlign }`,
    `align${ align }`,
    attributes.className,
  );

	return (
		<TagName className={ className }>
			<RichText.Content className="c-headline__secondary" value={ secondary } tagName="span" />
			{ ` ` }
			<RichText.Content className="c-headline__primary" value={ primary } tagName="span" />
		</TagName>
	);
}
