import classnames from 'classnames';
import { kebabCase } from 'lodash';
import EditableText from "../editable-text";
import InspectorControls from "./inspector-controls";
import toggles from "../../components/cards-manager-panel/toggles";

const { Fragment } = wp.element;

const CollectionTitle = ( props ) => {

	const {
		attributes: {
			showCollectionTitle,
			title,
			level,
		},
		setAttributes,
	} = props;

	if ( ! showCollectionTitle ) {
		return null;
	}

	return (
		<div className="block-editor-block-list__block wp-block novablocks-collection__title">
			<EditableText
				tagName={ `h${ level }` }
				value={ title }
				onChange={ title => {
					setAttributes( { title } );
				} }
			/>
		</div>
	);
}

const CollectionSubtitle = ( props ) => {

	const {
		attributes: {
			showCollectionSubtitle,
			subtitle,
		},
		setAttributes,
	} = props;

	if ( ! showCollectionSubtitle ) {
		return null;
	}

	return (
		<div className="block-editor-block-list__block wp-block novablocks-collection__subtitle">
			<EditableText
				tagName={ 'p' }
				className={ 'is-style-lead' }
				value={ subtitle }
				onChange={ subtitle => {
					setAttributes( { subtitle } );
				} }
			/>
		</div>
	)
}

const Collection = ( props ) => {

	const {
		attributes,
		setAttributes,
		clientId,
		innerBlocks,
		hasAppender
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

	const blockClassName = 'novablocks-collection';

	const getCardMediaPaddingTop = ( containerHeight ) => {
		let compiledHeight = containerHeight / 50 - 1;

		if ( compiledHeight < 0 ) {
			compiledHeight *= 3;
		}

		let numerator = 1;
		let denominator = 1;

		compiledHeight = Math.min( Math.max( -3, compiledHeight ), 1 );

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

	const cardsClassNames = toggles.map( toggle => {
		let toggleClass = kebabCase( toggle.attribute );

		if ( ! attributes[ toggle.attribute ] ) {
			toggleClass = toggleClass.replace( 'show', 'hide' );
		}

		return toggleClass;
	} );

	const className = classnames(
		props.className,
		blockClassName,
		'novablocks-block',
		`${ blockClassName }--align-${ contentAlign }`,
		`block-is-${ blockStyle }`,
		`content-is-${ contentStyle }`,
		{
			'has-background': blockStyle !== 'basic',
			'has-appender': hasAppender,
		},
		...cardsClassNames
	);

	return (
		<Fragment>
			<InspectorControls { ...props } />
			<div className={ className } style={ style }>
				<div className="wp-block-group__inner-container">
					<CollectionTitle { ...props } />
					<CollectionSubtitle { ...props } />
					<div className="block-editor-block-list__block wp-block novablocks-collection__cards" data-align="wide">
						<div className={ `${ blockClassName }__layout` }>
							{ props.children }
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Collection;
