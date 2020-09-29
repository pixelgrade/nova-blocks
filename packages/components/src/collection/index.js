import classnames from 'classnames';
import { EditableText, GridGenerator } from "../index";
import InspectorControls from "./inspector-controls";

import { getCardMediaPaddingTop } from '@novablocks/utils'

import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { URLInput } from '@wordpress/block-editor';

import {
	BaseControl,
	ToggleControl,
} from '@wordpress/components';

// @todo this is bad mojo
const {
	getAreaClassnameByWidthRatio,
	getAreaClassnameByHeightRatio
} = GridGenerator.utils;

export const CollectionTitle = ( props ) => {

	const {
		attributes: {
			showCollectionTitle,
			collectionTitleLinkOpensInNewTab,
			collectionTitleLinkURL,
			title,

			collectionTitleLevel,
		},
		setAttributes,
		isSelected,
	} = props;

	if ( ! showCollectionTitle ) {
		return null;
	}

	return (
		<div className="block-editor-block-list__block wp-block novablocks-collection__title">
			<EditableText
				tagName={ `h${ collectionTitleLevel }` }
				value={ title }
				onChange={ title => {
					setAttributes( { title } );
				} }
			/>
			{
				isSelected &&
				<div className="novablocks-collection__title-url-field-wrapper">
					<BaseControl
						label={ __( 'Add a link to make the Collection Title clickable.', '__plugin_txtd' ) }
						className="wp-block-button__inline-link">
						<URLInput
							className="wp-block-button__inline-link-input"
							value={ collectionTitleLinkURL }
							autoFocus={ false }
							onChange={ ( value ) => setAttributes( { collectionTitleLinkURL: value } ) }
							disableSuggestions={ ! isSelected }
							isFullWidth
							hasBorder
						/>
					</BaseControl>
					<ToggleControl
						checked={ collectionTitleLinkOpensInNewTab }
						onChange={ ( collectionTitleLinkOpensInNewTab ) => {
							setAttributes( { collectionTitleLinkOpensInNewTab } );
						} }
						label={ __( 'Open in new tab', '__plugin_txtd' ) }
					/>
				</div>
			}
		</div>
	);
}

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
		`${ blockClassName }--align-${ contentAlign }`,
		`block-is-${ blockStyle }`,
		`content-is-${ contentStyle }`,
		{
			'has-appender': hasAppender,
		},
		//
		'novablocks-grid__area',
		{
			'novablocks-grid__area--portrait': ! isLandscape,
			'novablocks-grid__area--landscape': isLandscape,
		},
		getAreaClassnameByWidthRatio( widthRatio ),
		getAreaClassnameByHeightRatio( heightRatio ),
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

export default Collection;