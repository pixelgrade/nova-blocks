const ITEM_SIZE = 20;

export const getGridItemStyle = ( index, chunkWithMeta, attributes ) => {

	const {
		aspect,
		aspectRatio,
		orientation,
		rotate,
		offset,
		scale,
	} = attributes;

	index = index % 4;

	const { idx, col, row, size, x, y } = chunkWithMeta[ index ];
	const rotation = `rotate(${ ( index % 2 - 0.5 ) * 2 * rotate }deg)`;

	// offset for positioning
	let offsetX = ( 1 - col % 2 ) * index * scale;
	let offsetY = ( 1 - row % 2 ) * index * scale;

	// offset from offset
	// move 1st to right
	offsetX += ( 1 - col % 2 ) * ( 1 - row % 2 ) * offset;
	// move 2nd down
	offsetY -= ( 1 - col % 2 ) * ( row % 2 ) * offset;
	// move 3rd to left
	offsetX -= ( col % 2 ) * ( row % 2 ) * offset;
	// move 4th up
	offsetY += ( col % 2 ) * ( 1 - row % 2 ) * offset;

	let extraLeft = getExtra( chunkWithMeta, offset, 'left' );
	let extraTop = getExtra( chunkWithMeta, offset, 'top' );

	let style = {
		gridColumnStart: x + offsetX - extraLeft + '',
		gridColumnEnd: `span ${size}`,
		gridRowStart: y + offsetY - extraTop + '',
		gridRowEnd: `span ${size}`,
		transform: rotation,
	};

	return style;
}

export const addMetaToImagesArray = ( imagesArray, attributes ) => {

	const {
		scale,
		offset,
		orientation,
	} = attributes;

	return imagesArray.map( ( image, index ) => {
		const idx = getIndex( index, orientation );
		const col = idx % 2;
		const row = Math.floor( idx / 2 );
		const size = ITEM_SIZE - scale * index;
		const x = ITEM_SIZE * col + 1;
		const y = ITEM_SIZE * row + 1;

		return Object.assign( {}, { idx, col, row, size, x, y, index, offset, scale, image } );
	} )
}

export const getStructuredImagesArray = ( images ) => {

	let i, j, temparray, chunkSize = 4, chunks = [];

	// split into groups of 4
	for ( i = 0, j = images.length; i < j; i += chunkSize ) {
		chunks.push( images.slice( i, i + chunkSize ) );
	}

	return chunks;

}


export const getIndex = ( index, orientation = 0 ) => {

	if ( orientation === 0 ) {
		if ( index % 4 === 3 ) return index - 1;
		if ( index % 4 === 2 ) return index + 1;
		return index;
	}

	if ( orientation === 1 ) {
		if ( index % 4 === 0 ) return index + 1;
		if ( index % 4 === 1 ) return index - 1;
		return index;
	}

	if ( orientation === 2 ) {
		if ( index % 4 === 0 ) return index + 3;
		if ( index % 4 === 1 ) return index + 1;
		if ( index % 4 === 2 ) return index - 2;
		if ( index % 4 === 3 ) return index - 2;
	}

	if ( orientation === 3 ) {
		if ( index % 4 === 0 ) return index + 2;
		if ( index % 4 === 1 ) return index + 2;
		if ( index % 4 === 2 ) return index - 1;
		if ( index % 4 === 3 ) return index - 3;
	}
}

export const getExtra = ( chunk, offset, direction ) => {
	const topLeftImage = chunk.find( image => image.idx === 0 );
	const topRightImage = chunk.find( image => image.idx === 1 );
	const bottomLeftImage = chunk.find( image => image.idx === 2 );
	const bottomRightImage = chunk.find( image => image.idx === 3 );

	const topLeftImageExtra = topLeftImage ? topLeftImage.scale * topLeftImage.index : ITEM_SIZE;
	const topRightImageExtra = topRightImage ? topRightImage.scale * topRightImage.index : ITEM_SIZE;
	const bottomLeftImageExtra = bottomLeftImage ? bottomLeftImage.scale * bottomLeftImage.index : ITEM_SIZE;
	const bottomRightImageExtra = bottomRightImage ? bottomRightImage.scale * bottomRightImage.index : ITEM_SIZE;

	const extra = ITEM_SIZE - offset;

	if ( direction === 'left' ) {
		// minimum distance to left margin between first and second image
		let extraLeft = Math.min( offset + topLeftImageExtra, ITEM_SIZE );

		// adding third image in equation
		if ( chunk.length > 2 ) {
			extraLeft = Math.min( extraLeft, ITEM_SIZE - offset );
		}

		// adding forth image in equation
		if ( chunk.length > 3 ) {
			extraLeft = Math.min( extraLeft, bottomLeftImageExtra );
		}

		return extraLeft;
	}

	if ( direction === 'top' ) {
		let extraTop = Math.min( topLeftImageExtra, offset + topRightImageExtra );

		if ( chunk.length > 3 ) {
			extraTop = Math.min( extraTop, ITEM_SIZE - offset );
		}

		return extraTop;
	}

	return 0;
}

export const getGalleryStyle = ( attributes ) => {
	let { aspectRatio } = attributes;
	let numerator = 1;
	let denominator = 1;

	aspectRatio = Math.min( Math.max( 0, aspectRatio ), 1 );

	if ( aspectRatio > 0 ) {
		numerator = 1 + aspectRatio;
	}

	if ( aspectRatio < 0 ) {
		denominator = 1 + Math.abs( aspectRatio );
	}

	return {
		paddingTop: `${ numerator * 100 / denominator }%`,
	}
}

export const getGridStyle = ( attributes ) => {
	const { gridGap } = attributes;
	return {
		'--novablocks-advanced-gallery-grid-gap': `${ gridGap }px`
	}
}


export const getImageStyle = ( index, chunkWithMeta, attributes ) => {
	const { aspect, objectPosition } = attributes;
	const { idx, row, col } = chunkWithMeta[ index % 4 ];

	const positionY = row % 2 === 0 ? 100 - objectPosition : objectPosition;
	const positionX = col % 2 === 0 ? 100 - objectPosition : objectPosition;

	console.log( row, col, `${ positionX }% ${ positionY }%` );
	return {
		objectFit: aspect === 'cropped' ? 'cover' : 'contain',
		objectPosition: aspect === 'original' ? `${ positionX }% ${ positionY }%` : '',
	}
}
