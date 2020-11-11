import { __ } from '@wordpress/i18n';
import { MediaUpload } from '@wordpress/block-editor';
import { Fragment, useState, useEffect, useRef } from '@wordpress/element';

import { isSafari } from "@novablocks/utils";
import Blob from "@novablocks/blob";

import { GridItemCollection } from "./grid-item";
import { getGalleryStyle, getGridStyle } from "./utils";

const AdvancedGalleryPreview = ( props ) => {

	const {
		attributes,
		onSelectImages,
	} = props;

	const gallery = attributes?.images;
	const [ height, setHeight ] = useState(0);
	const ref = useRef( null );

	useEffect(() => {
		setHeight( !! ref.current ? ref.current.clientHeight : 0 );
	});

	if ( ! gallery || ! gallery.length ) {
		return null;
	}

	const gridItemsCollection = new GridItemCollection( gallery, attributes );
	const gridStyle = getGridStyle( attributes );

	if ( !! isSafari ) {
		Object.assign( gridStyle, { height } );
	}

	return (
		<MediaUpload
			allowedTypes={ [ 'image', 'video' ] }
			multiple
			onSelect={ onSelectImages }
			render={ ( { open } ) => (
				<div onClick={ open } className={ 'novablocks-advanced-gallery' } style={ getGalleryStyle( attributes ) } ref={ ref }>
					<div className={ `novablocks-advanced-gallery__media-edit novablocks-change-media-overlay` }>
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

const AdvancedGalleryItemMedia = Blob.withBlobsDecoration(( props ) => {
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
});

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
				<AdvancedGalleryItemMedia { ...props } seedOffset={ props?.index } />
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
