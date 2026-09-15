import { createElement } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes = {}, clientId } ) {
	const fieldId = `nb-email-preview-${ clientId }`;
	const compact = attributes.compact === true;
	const label = __( 'Email address', 'nova-blocks' );
	return createElement( 'div', useBlockProps( { className: compact ? 'form-column is-compact' : 'form-column' } ),
		compact ? null : createElement( 'p', { className: 'h5' }, createElement( 'label', { htmlFor: fieldId }, label ) ),
		createElement( 'div', { className: 'form-inline' },
			createElement( 'input', { id: fieldId, type: 'email', value: '', placeholder: 'you@mail.com', readOnly: true, autoComplete: 'off', ...( compact ? { 'aria-label': label } : {} ) } ),
			createElement( 'div', { className: 'wp-block-button' }, createElement( 'button', { className: 'wp-block-button__link wp-element-button', type: 'button', 'aria-disabled': 'true' }, __( 'Subscribe', 'nova-blocks' ) ) )
		)
	);
}
