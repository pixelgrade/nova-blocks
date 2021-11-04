import { __ } from '@wordpress/i18n';
import { MediaUpload } from '@wordpress/block-editor';
import { useState, useEffect, useRef } from '@wordpress/element';

import { getCardMediaPaddingTop, isSafari } from "@novablocks/utils";

import {
  AdvancedGalleryItem,
  MediaCompositionPlaceholder
} from "./index";

import {
  getMediaCompositionCSSProps,
  GridItemCollection
} from "../utils";

const MediaCompositionPreview = ( props ) => {

	const {
		attributes,
		onSelectImages,
	} = props;

	const gallery = attributes?.images || [];
	const galleryValue = gallery.map( ( image ) => image.id );

	if ( ! gallery || ! gallery.length ) {
		return (
		  <MediaCompositionPlaceholder { ...props } />
    );
	}

	const [ height, setHeight ] = useState(0);
	const ref = useRef( null );

	useEffect(() => {
		setHeight( !! ref.current ? ref.current.clientHeight : 0 );
	});

	const gridItemsCollection = new GridItemCollection( gallery, attributes );
	const gridStyle = getMediaCompositionCSSProps( attributes );

	if ( !! isSafari ) {
		Object.assign( gridStyle, { height } );
	}

	return (
		<MediaUpload
			gallery
			allowedTypes={ [ 'image', 'video' ] }
			multiple
			onSelect={ onSelectImages }
			value={ galleryValue }
			render={ ( { open } ) => (
				<div className={ 'novablocks-media-composition' } ref={ ref }>
					<div className={ `novablocks-media-composition__media-edit novablocks-change-media-overlay` } onClick={ open }>
						<span>{ __( 'Change Media', '__plugin_txtd' ) }</span>
					</div>
					<div className={ `novablocks-media-composition__grid` } style={ gridStyle }>
						{ gridItemsCollection.gridItems.map( ( item, index ) => (
							<AdvancedGalleryItem gridItem={ item } key={ index } index={ index } { ...props } />
						) ) }
					</div>
				</div>
			) }
		/>
	);
};

export default MediaCompositionPreview;
