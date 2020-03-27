/**
 * WordPress dependencies
 */

import EditableText from '../../components/editable-text';
import * as icons from "../../icons";

const {
	InnerBlocks,
	MediaUpload,
} = wp.blockEditor;

const CardEdit = ( props ) => {

	const blockClassName = 'novablocks-card';

	const {
		attributes: {
			level,
			title,
			subtitle,
			description,
			media,

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

	const CardMedia = ( props ) => {

		const {
			attributes: {
				media
			},
			open,
		} = props;

		if ( !! media && !! media.url ) {
			return <img className={ `${ blockClassName }__media-image` } src={ media.url } onClick={ open } />
		}

		return (
			<div className={ `${ blockClassName }__media-placeholder` } onClick={ open }>
				{ icons.placeholder }
			</div>
		);
	}

	return (
		<div className={ `${ blockClassName } ${ className }` }>
			{
				showMedia &&
				<div className={ `${ blockClassName }__media-wrap` }>
					<div className={ `${ blockClassName }__media` }>
						<MediaUpload
							type="image"
							value={ !! media && media.id }
							onSelect={ ( media ) => setAttributes( { media } ) }
							render={ ( { open } ) => (
								<CardMedia { ...props } open={ open } />
							) }
						/>
					</div>
				</div>
			}
			{
				showTitle &&
				<div className={`${blockClassName}__title`}>
					 <EditableText
						 tagName={`h${level + 1}`}
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
						tagName={ `h${level + 2}` }
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
						renderAppender={ false }
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
			level: parentBlockAttributes.level,
			showTitle: parentBlockAttributes.showTitle,
			showSubtitle: parentBlockAttributes.showSubtitle,
			showDescription: parentBlockAttributes.showDescription,
			showButtons: parentBlockAttributes.showButtons,
			showMeta: parentBlockAttributes.showMeta,
		}
	}

	return newProps;

} )( CardEdit );

export default CardWithVisibility;
