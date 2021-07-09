import { __ } from '@wordpress/i18n';
import { MediaUpload } from '@wordpress/block-editor';
import { Fragment, useState, useEffect, useRef } from '@wordpress/element';

import { getCardMediaPaddingTop, isSafari } from "@novablocks/utils";
import { withBlobsDecoration } from "@novablocks/block-editor";

import { GridItemCollection } from "./grid-item";
import { getGridStyle } from "./utils";

const AdvancedGalleryPreview = ( props ) => {

	const {
		attributes,
		onSelectImages,
	} = props;

	const gallery = attributes?.images || [];
	const galleryValue = gallery.map( ( image ) => image.id );

	if ( ! gallery || ! gallery.length ) {
		return null;
	}

	const [ height, setHeight ] = useState(0);
	const ref = useRef( null );

	useEffect(() => {
		setHeight( !! ref.current ? ref.current.clientHeight : 0 );
	});

	const gridItemsCollection = new GridItemCollection( gallery, attributes );
	const gridStyle = getGridStyle( attributes );

	if ( !! isSafari ) {
		Object.assign( gridStyle, { height } );
	}

	const galleryStyle = {
    '--novablocks-advanced-gallery-aspect-ratio': getCardMediaPaddingTop( attributes.containerHeight )
  }

	return (
		<MediaUpload
			gallery
			allowedTypes={ [ 'image', 'video' ] }
			multiple
			onSelect={ onSelectImages }
			value={ galleryValue }
			render={ ( { open } ) => (
				<div className={ 'novablocks-advanced-gallery' } ref={ ref } style={ galleryStyle }>
					<div className={ `novablocks-advanced-gallery__media-edit novablocks-change-media-overlay` } onClick={ open }>
						<span>{ __( 'Change Media', '__plugin_txtd' ) }</span>
					</div>
					<div className={ `novablocks-advanced-gallery__grid` } style={ gridStyle }>
						{ gridItemsCollection.gridItems.map( ( item, index ) => (
							<AdvancedGalleryItem gridItem={ item } key={ index } index={ index } { ...props } />
						) ) }
					</div>
				</div>
			) }
		/>
	);
};

const AdvancedGalleryItemMedia = ( props ) => {
	const { gridItem } = props;
	const image = gridItem?.image;
	const imageURL = image?.sizes?.novablocks_medium?.url || image?.url;
	const styles = gridItem.getImageStyle();

	return (
		<Fragment>
			{ image.type !== 'video' &&
			  <img className={ `novablocks-advanced-gallery__image` } src={ imageURL } alt={ image?.alt } style={ styles } /> }
			{ image.type === 'video' &&
			  <video muted autoPlay loop playsInline className={ `novablocks-advanced-gallery__image` } style={ styles } src={ image.url } /> }
		</Fragment>
	)
}

const AdvancedGalleryItemMediaWithBlobs = withBlobsDecoration( AdvancedGalleryItemMedia );

const AdvancedGalleryItem = ( props ) => {

	const { gridItem } = props;

	const image = gridItem?.image;
	const imageCaption = image?.caption;
	const imageDescription = image?.description;

	if ( ! image ) {
		return;
	}

	const hasCaption = typeof imageCaption === 'string' && !! imageCaption;
	const hasDescription = typeof imageDescription === 'string' && !! imageDescription;

	return (
		<div className={ `novablocks-advanced-gallery__grid-item` } style={ gridItem.getStyle() }>
			<div className={ `novablocks-advanced-gallery__grid-item-media` }>
				<AdvancedGalleryItemMediaWithBlobs { ...props } seedOffset={ props?.index } />
			</div>
			{
				( hasCaption || hasDescription ) &&
				<div className="novablocks-advanced-gallery__grid-item-info">
					{
						hasCaption &&
						<div className={ `novablocks-advanced-gallery__grid-item-caption` }
						     dangerouslySetInnerHTML={ { __html: imageCaption } }>
						</div>
					}
					{
						typeof hasDescription &&
						<div className={ `novablocks-advanced-gallery__grid-item-description` }
						     dangerouslySetInnerHTML={ { __html: imageDescription } }>
						</div>
					}
				</div>
			}
		</div>
	);
};

export default AdvancedGalleryPreview;
