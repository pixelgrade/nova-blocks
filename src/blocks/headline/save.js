/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	RichText
} = wp.blockEditor;

export default function save( props ) {

	const {
		attributes,
	} = props;

	const {
		align,
		primary,
		secondary,
		level,
	} = attributes;

	const TagName = `h${level}`;

	const className = classnames( 'c-headline', {
		[ `has-text-align-${ align }` ]: align,
	} );

	return (
		<TagName className={ className ? className : undefined }>
			<RichText.Content className="c-headline__secondary" value={ secondary } tagName="span" />
			{ ` ` }
			<RichText.Content className="c-headline__primary" value={ primary } tagName="span" />
		</TagName>
	);
}
