import classnames from 'classnames';

import { RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import {
  getCardMediaPaddingTop,
  getColorSignalClassnames
} from '@novablocks/utils';

import attributes from './collection-attributes.json';
import './with-collection-attributes';
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
		<div className="block-editor-block-list__block wp-block novablocks-collection__title">
			<RichText
				tagName={ `h${ collectionTitleLevel }` }
				value={ title }
        placeholder={ __( 'Collection title', '__plugin_txtd' ) }
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
		<div className="block-editor-block-list__block wp-block novablocks-collection__subtitle">
			<RichText
				tagName={ 'p' }
				className={ 'is-style-lead' }
				value={ subtitle }
        placeholder={ __( 'Collection subtitle', '__plugin_txtd' ) }
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
		hasAppender,
	} = props;

	const {
		blockStyle,
		contentStyle,

		contentAlign,
		imageResizing,
		containerHeight,
		imagePadding,
    contentPadding,

		columns,
		postsToShow,
		isLandscape,

    layoutStyle,
    carouselLayout
	} = attributes;

	const blockClassName = 'novablocks-collection';
	const thumbnailAspectRatio = attributes.thumbnailAspectRatio || containerHeight;

	const style = {
		'--card-media-padding': imagePadding,
    '--card-content-padding': contentPadding,
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
    {
      'novablocks-collection-carousel--variable': layoutStyle === 'carousel' && carouselLayout === 'variable',
    },
		'novablocks-grid__area',
		{
			'novablocks-grid__area--portrait': ! isLandscape,
			'novablocks-grid__area--landscape': isLandscape,
		},
		getAreaClassnameByWidthRatio( widthRatio ),
		getAreaClassnameByHeightRatio( heightRatio ),
		`block-is-${ blockStyle }`,
    getColorSignalClassnames( attributes, true )
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
