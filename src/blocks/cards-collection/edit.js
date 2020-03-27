import classnames from 'classnames';
import EditableText from "../../components/editable-text";
import HeadingToolbar from "../../components/heading-toolbar";

import blockAttributes from './attributes';
import { updateBlockAttributesWithDefaults } from '../../utils';

/**
 * WordPress dependencies
 */
const { Fragment } = wp.element;
const { __ } = wp.i18n;

const {
	PanelBody,
	RadioControl,
	RangeControl,
	ToggleControl,
} = wp.components;

const {
	InnerBlocks,
	InspectorControls,
} = wp.blockEditor;

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
		`block-is-${ blockStyle }`,
		`content-is-${ contentStyle }`
	);

	updateBlockAttributesWithDefaults( props, blockAttributes );

	const toggleAttribute = ( attribute ) => {
		const newAttributes = {
			[attribute]: ! attributes[attribute]
		};

		childrenBlocks.forEach( ( { clientId } ) => {
			wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, newAttributes );
		} );

		setAttributes( newAttributes );
	};

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
			<InspectorControls>
				<PanelBody initialOpen={ true } title={ __( 'Controls' ) }>
					<HeadingToolbar minLevel={ 2 } maxLevel={ 4 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
					<RadioControl
						label={ 'Image resizing' }
						selected={ imageResizing }
						onChange={ imageResizing => { setAttributes( { imageResizing } ) } }
						options={ [
							{ label: 'Stretch to fill the container', value: 'cropped' },
							{ label: 'Shrink to fit (no crop)', value: 'original' },
						] }
					/>
					<RangeControl
						label={ __( 'Image container height', '__plugin_txtd' ) }
						value={ containerHeight }
						onChange={ containerHeight => { setAttributes( { containerHeight } ) } }
						min={ 0 }
						max={ 100 }
						step={ 5 }
					/>
				</PanelBody>
				<PanelBody initialOpen={ true } title={ __( 'Elements Visibility', '__plugin_txtd' ) }>
					<ToggleControl
						label={ __( 'Collection Title' ) }
						checked={ !! showCollectionTitle }
						onChange={ showCollectionTitle => setAttributes( { showCollectionTitle } ) }
					/>
					<ToggleControl
						label={ __( 'Collection Subtitle' ) }
						checked={ !! showCollectionSubtitle }
						onChange={ showCollectionSubtitle => setAttributes( { showCollectionSubtitle } ) }
					/>
					<ToggleControl
						label={ __( 'Media' ) }
						checked={ !! showMedia }
						onChange={ () => { toggleAttribute( 'showMedia' ) } }
					/>
					<ToggleControl
						label={ __( 'Title' ) }
						checked={ !! showTitle }
						onChange={ () => { toggleAttribute( 'showTitle' ) } }
					/>
					<ToggleControl
						label={ __( 'Subtitle' ) }
						checked={ !! showSubtitle }
						onChange={ () => { toggleAttribute( 'showSubtitle' ) } }
					/>
					<ToggleControl
						label={ __( 'Description' ) }
						checked={ !! showDescription }
						onChange={ () => { toggleAttribute( 'showDescription' ) } }
					/>
					<ToggleControl
						label={ __( 'Buttons' ) }
						checked={ !! showButtons }
						onChange={ () => { toggleAttribute( 'showButtons' ) } }
					/>
					<ToggleControl
						label={ __( 'Meta' ) }
						checked={ !! showMeta }
						onChange={ () => { toggleAttribute( 'showMeta' ) } }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ className } style={ style }>
				{
					showCollectionTitle &&
					<EditableText
						tagName={ `h${level}` }
						value={title}
						onChange={title => {
							setAttributes( {title} )
						}}
					/>
				}
				{
					showCollectionSubtitle &&
					<EditableText
						tagName={ 'p' }
						className={ 'intro' }
						value={subtitle}
						onChange={subtitle => {
							setAttributes( {subtitle} )
						}}
					/>
				}
				<div className={ `${blockClassName}__layout` }>
					<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ CARDS_COLLECTION_TEMPLATE }
					/>
				</div>
			</div>
		</Fragment>
	);
}

const CardCollectionWithChildren = wp.data.withSelect( ( select, props ) => {
	const { clientId } = props;
	const parentBlock = select( 'core/block-editor' ).getBlock( clientId );
	const childrenBlocks = parentBlock.innerBlocks;

	return {
		childrenBlocks,
		...props
	}
} )( CardsCollectionEdit );

export default CardCollectionWithChildren;

