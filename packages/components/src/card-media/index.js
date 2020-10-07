import * as icons from "@novablocks/icons";

import {
	withSelect,
 } from '@wordpress/data';

const Media = ( { src } ) => {

	if ( !! src ) {
		return <img className={`novablocks-card__media-image`} src={ src }/>
	}

	return null;
};

const MediaWithSelect = withSelect( ( select, ownProps ) => {
	const { getMedia } = select( 'core' );
	const { id } = ownProps;

	if ( ! id ) {
		return null;
	}

	const mediaObject = getMedia( id );
	const src = mediaObject?.source_url;

	return {
		src
	}
} )( Media );


const CardMedia = ( { id } ) => {

	return (
		<div className="novablocks-card__media-wrap">
			<div className="novablocks-card__media">
				<MediaWithSelect id={ id } />
			</div>
		</div>
	)
};

export default CardMedia;
