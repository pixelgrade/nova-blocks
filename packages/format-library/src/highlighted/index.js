/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { toggleFormat } = wp.richText;
const { RichTextToolbarButton } = wp.blockEditor;

/**
 * Block constants
 */
const name = 'novablocks/highlighted';

export const highlighted = {
	name,
	title: __( 'Highlighted', 'nova-blocks' ),
	tagName: 'span',
	className: 'novablocks-highlighted',
	edit( { isActive, value, onChange } ) {

		const onToggle = () => {
			onChange(
				toggleFormat( value, {
					type: name
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
				/>
			</Fragment>
		);
	},
};
