import classnames from 'classnames';

import { RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

import { getCardMediaPaddingTop } from '@novablocks/utils'

import attributes from './collection-attributes.json';
import InspectorControls from "./collection-controls";

import {
	getAreaClassnameByWidthRatio,
	getAreaClassnameByHeightRatio
} from './utils';

export const CollectionTitle = ( props ) => {

	const {
		attributes: {
			showCollectionTitle,
			title,
			collectionTitleLevel,
		},
		setAttributes,
	} = props;

	if ( ! showCollectionTitle ) {
		return null;
	}

	return (
		<div className="block-editor-block-list__block wp-block novablocks-collection__title" data-align="wide">
			<RichText
				tagName={ `h${ collectionTitleLevel }` }
				value={ title }
				onChange={ title => {
					setAttributes( { title } );
				} }
				allowedFormats = {[ 'core/link' ]}
			/>
		</div>
	);
};

export const CollectionSubtitle = ( props ) => {

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
		<div className="block-editor-block-list__block wp-block novablocks-collection__subtitle" data-align="wide">
			<RichText
				tagName={ 'p' }
				className={ 'is-style-lead' }
				value={ subtitle }
				onChange={ subtitle => {
					setAttributes( { subtitle } );
				} }
				allowedFormats={ [] }
			/>
		</div>
	)
};

export const CollectionPreview = ( props ) => {

	const {
		attributes,
		hasAppender
	} = props;

	const {
		blockStyle,
		contentStyle,

		contentAlign,
		imageResizing,
		containerHeight,
		imagePadding,

		columns,
		postsToShow,
		isLandscape,

    palette,
    paletteVariation

    layoutStyle,
    carouselLayout
	} = attributes;

	const blockClassName = 'novablocks-collection';
	const thumbnailAspectRatio = attributes.thumbnailAspectRatio || containerHeight;

	const style = {
		'--card-media-padding': imagePadding,
		'--card-media-padding-top': getCardMediaPaddingTop( thumbnailAspectRatio ),
		'--card-media-object-fit': imageResizing === 'cropped' ? 'cover' : 'scale-down',
	};

	const widthRatio = 1 / columns;
	const heightRatio = 1 / Math.ceil( postsToShow / columns );

	const className = classnames(
		props.className,
		blockClassName,
		'novablocks-block',
		'novablocks-block-spacing',
		`${ blockClassName }--align-${ contentAlign }`,
		`content-is-${ contentStyle }`,
		{
			'has-appender': hasAppender,
		},
    `novablocks-collection--${ layoutStyle }`,
    `novablocks-collection-carousel--${ carouselLayout }`,
		'novablocks-grid__area',
		{
			'novablocks-grid__area--portrait': ! isLandscape,
			'novablocks-grid__area--landscape': isLandscape,
		},
		getAreaClassnameByWidthRatio( widthRatio ),
		getAreaClassnameByHeightRatio( heightRatio ),
		`block-is-${ blockStyle }`,
    `sm-palette-${ palette }`,
    `sm-variation-${ paletteVariation }`,
	);

	return (
		<div className={ className } style={ style }>
			<div className="wp-block-group__inner-container">
				<CollectionHeader { ...props } />
				<div className="block-editor-block-list__block wp-block novablocks-collection__cards" data-align="wide">
					<div className={ `${ blockClassName }__layout` }>
						{ props.children }
					</div>
				</div>
			</div>
		</div>
	)
};

const Collection = ( props ) => {
	return (
		<Fragment>
			<InspectorControls { ...props } />
			<CollectionPreview { ...props } />
		</Fragment>
	)
};

export const CollectionHeader = ( props ) => {

	return (
		<Fragment>
			<CollectionTitle { ...props } />
			<CollectionSubtitle { ...props } />
		</Fragment>
	)
};

export default {
  Component: Collection,
  attributes
};
