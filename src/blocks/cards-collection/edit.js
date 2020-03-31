import classnames from 'classnames';
import EditableText from "../../components/editable-text";
import InspectorControls from "./inspector-controls";

/**
 * WordPress dependencies
 */
const { Fragment } = wp.element;
const { __ } = wp.i18n;

const {
	InnerBlocks,
} = wp.blockEditor;

const {
	withSelect,
} = wp.data;

const ALLOWED_BLOCKS = [ 'novablocks/card' ];
const CARDS_COLLECTION_TEMPLATE = [ [ 'novablocks/card' ] ];

const CardsCollectionEdit = ( props ) => {

	const {
		attributes,
		childrenBlocks,
		setAttributes,
		clientId,
	} = props;

	const {
		blockStyle,
		contentStyle,

		title,
		subtitle,

		contentAlign,
		level,
		imageResizing,
		containerHeight,

		showCollectionTitle,
		showCollectionSubtitle,

		showMedia,
		showTitle,
		showSubtitle,
		showDescription,
		showButtons,
		showMeta,
	} = attributes;

	const blockClassName = 'novablocks-cards-collection';

	const className = classnames(
		props.className,
		blockClassName,
		'novablocks-block',
		`${ blockClassName }--align-${ contentAlign }`,
		`block-is-${ blockStyle }`,
		`content-is-${ contentStyle }`,
		{
			'has-background': blockStyle !== 'basic'
		}
	);

	const getCardMediaPaddingTop = ( containerHeight ) => {
		let compiledHeight = containerHeight / 50 - 1;
		let numerator = 1;
		let denominator = 1;

		compiledHeight = Math.min( Math.max( -1, compiledHeight ), 1 );

		if ( compiledHeight > 0 ) {
			numerator = 1 + compiledHeight;
		}

		if ( compiledHeight < 0 ) {
			denominator = 1 + Math.abs( compiledHeight );
		}

		return `${ numerator * 100 / denominator }%`;
	}

	const style = {
		'--card-media-padding-top': getCardMediaPaddingTop( containerHeight ),
		'--card-media-object-fit': imageResizing === 'cropped' ? 'cover' : 'scale-down',
	};

	return (
		<Fragment>
			<div className={ className } style={ style }>
				<div className="wp-block-group__inner-container">
					{
						showCollectionTitle &&
						<div className="wp-block" data-align="wide">
							<EditableText
								tagName={ `h${level}` }
								value={title}
								onChange={title => {
									setAttributes( {title} )
								}}
							/>
						</div>
					}
					{
						showCollectionSubtitle &&
						<div className="wp-block" data-align="wide">
							<EditableText
								tagName={ 'p' }
								className={ 'intro' }
								value={subtitle}
								onChange={subtitle => {
									setAttributes( {subtitle} )
								}}
							/>
						</div>
					}
					<div className="wp-block" data-align="wide">
						<div className={ `${blockClassName}__layout` }>
							<InnerBlocks
								allowedBlocks={ ALLOWED_BLOCKS }
								template={ CARDS_COLLECTION_TEMPLATE }
							/>
						</div>
					</div>
				</div>
			</div>
			<InspectorControls { ...props } />
		</Fragment>
	);
}

const CardCollectionWithChildren = withSelect( ( select, props ) => {
	const { clientId } = props;
	const { getBlock } = select( 'core/block-editor' );
	const parentBlock = getBlock( clientId );
	const childrenBlocks = parentBlock.innerBlocks;

	return {
		childrenBlocks,
		...props
	}
} )( CardsCollectionEdit );

export default CardCollectionWithChildren;

