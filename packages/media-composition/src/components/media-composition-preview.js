import { __ } from '@wordpress/i18n';
import { MediaUpload } from '@wordpress/block-editor';
import { useState, useEffect, useRef } from '@wordpress/element';

import { getCardMediaPaddingTop, isSafari } from "@novablocks/utils";

import { AdvancedGalleryItem } from "./index";

import {
  getGridStyle,
  GridItemCollection
} from "../utils";

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

export default AdvancedGalleryPreview;
