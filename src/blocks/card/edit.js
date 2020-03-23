/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.blockEditor;

const CardEdit = ( props ) => {

	const blockClassName = 'novablocks-card';
	const { className } = props;

	return (
		<div className={ `${ blockClassName } ${ className }` }>
			<div className={ `${ blockClassName }__media` }>Media</div>
			<div className={ `${ blockClassName }__title` }>Title</div>
			<div className={ `${ blockClassName }__subtitle` }>Subtitle</div>
			<div className={ `${ blockClassName }__description` }>Description</div>
			<div className={ `${ blockClassName }__buttons` }>Buttons</div>
			<div className={ `${ blockClassName }__meta` }>Meta</div>
		</div>
	);
}

const CardWithVisibility = wp.data.withSelect( ( select, props ) => {
	const { clientId } = props;
	const parentClientId = select( 'core/editor' ).getBlockHierarchyRootClientId( clientId );
	const parentBlock = select( 'core/editor' ).getBlock( parentClientId );

	return {
		...props
	}
} )( CardEdit );

export default CardWithVisibility;
