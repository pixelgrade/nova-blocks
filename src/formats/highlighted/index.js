/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { toggleFormat } = wp.richText;
const { RichTextToolbarButton, RichTextShortcut } = wp.blockEditor;

/**
 * Block constants
 */
const name = 'novablocks/highlighted';

export const highlighted = {
	name,
	title: __( 'Highlighted', 'nova-blocks' ),
	tagName: 'span',
	className: 'novablocks-highlighted',
	attributes: {
		style: 'style',
	},
	edit( { isActive, value, onChange } ) {

		const onToggle = () => {
			onChange(
				toggleFormat( value, {
					type: name,
					attributes: {
						style: 'background-color: var(----novablocks-color-1, #000); color: var(--novablocks-dark-1, #FFF); padding: 3px 6px;',
					},
				} )
			);
		};

		return (
			<Fragment>
				<RichTextToolbarButton
					icon="star-filled"
					title={ __( 'Highlighted', 'nova-blocks' ) }
					onClick={ onToggle }
					isActive={ isActive }
				/> )
			</Fragment>
		);
	},
};
