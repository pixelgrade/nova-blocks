/**
 * WordPress dependencies
 */

import EditableText from '../../components/editable-text';

const {
	InnerBlocks,
	PlainText,
} = wp.blockEditor;

const CardEdit = ( props ) => {

	const blockClassName = 'novablocks-card';

	const {
		attributes: {
			title,
			subtitle,
			description,

			showMedia,
			showTitle,
			showSubtitle,
			showDescription,
			showButtons,
			showMeta,
		},
		className,
		setAttributes,
	} = props;

	return (
		<div className={ `${ blockClassName } ${ className }` }>
			{
				showMedia &&
				<div className={ `${ blockClassName }__media` }></div>
			}
			{
				showTitle &&
				<div className={`${blockClassName}__title`}>
					 <EditableText
						 tagName={'h2'}
						 value={title}
						 onChange={title => {
							 setAttributes( {title} )
						 }}
					 />
				 </div>
			}
			{
				showSubtitle &&
				<div className={ `${ blockClassName }__subtitle` }>
					<EditableText
						tagName={ 'h3' }
						value={subtitle}
						onChange={subtitle => {
							setAttributes( {subtitle} )
						}}
					/>
				</div>
			}
			{
				showDescription &&
				<div className={ `${ blockClassName }__description` }>
					<EditableText
						tagName={ 'p' }
						value={description}
						onChange={description => {
							setAttributes( {description} )
						}}
					/>
				</div>
			}
			{
				showButtons &&
				<div className={ `${ blockClassName }__buttons` }>
					<InnerBlocks
						allowedBlocks={ [ 'core/buttons' ] }
						template={ [
							[ 'core/buttons', {},
								[ [ 'core/button', { text: 'Button' } ] ]
							]
						] }
					/>
				</div>
			}
			{
				showMeta &&
				<div className={ `${ blockClassName }__meta` }>Meta</div>
			}
		</div>
	);
}

const CardWithVisibility = wp.data.withSelect( ( select, props ) => {
	const { clientId } = props;
	const parentClientId = select( 'core/editor' ).getBlockHierarchyRootClientId( clientId );
	const parentBlock = select( 'core/editor' ).getBlock( parentClientId );
	const parentBlockAttributes = parentBlock.attributes;

	const newProps = {
		...props,
		attributes: {
			...props.attributes,
			showTitle: parentBlockAttributes.showTitle,
			showSubtitle: parentBlockAttributes.showSubtitle,
			showDescription: parentBlockAttributes.showDescription,
			showButtons: parentBlockAttributes.showButtons,
			showMeta: parentBlockAttributes.showMeta,
		}
	}

	console.log( newProps );

	return newProps;
} )( CardEdit );

export default CardWithVisibility;
