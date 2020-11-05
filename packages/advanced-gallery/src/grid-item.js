const ITEM_SIZE = 20;

export class GridItemCollection {

	constructor( images, attributes ) {
		const placementVariation = attributes.placementVariation / 25 - 1;

		this.gridItems = images.map( ( image, index ) => {
			const groupStart = Math.floor( index / 4 ) * 4;
			const groupEnd = Math.min( groupStart + 4, images.length );
			const isGroupOfThree = groupEnd - groupStart === 3;

			return new GridItem( image, index, attributes, isGroupOfThree );
		} );

		this.removeExtra();

		if ( placementVariation === 1 || placementVariation === 2 ) {
			this.flipX();
		}

		if ( placementVariation === 2 || placementVariation === 3 ) {
			this.flipY();
		}
	}

	removeExtra() {
		const extraLeft = this.getExtraLeft();
		const extraTop = this.getExtraTop();
		const extraBetween = this.getExtraBetween();

		this.gridItems = this.gridItems.map( ( gridItem, index ) => {
			const groupIndex = Math.floor( index / 4 );

			gridItem.x = gridItem.x - extraLeft;
			gridItem.y = gridItem.y - extraTop - groupIndex * extraBetween;

			return gridItem;
		} );
	}

	flipX() {
		const maxX = Math.max( ...this.gridItems.map( gridItem => gridItem.x + gridItem.width ) );

		this.gridItems = this.gridItems.map( ( gridItem, index ) => {
			gridItem.x = maxX - gridItem.x - gridItem.width + 1;
			return gridItem;
		} );
	}

	flipY() {
		const maxY = Math.max( ...this.gridItems.map( gridItem => gridItem.y + gridItem.height ) );

		this.gridItems = this.gridItems.map( ( gridItem, index ) => {
			gridItem.y = maxY - gridItem.y - gridItem.height + 1;
			return gridItem;
		} );
	}

	getExtraLeft() {
		return Math.min( ...this.gridItems.map( gridItem => gridItem.x ) ) - 1;
	}

	getExtraTop() {
		return Math.min( ...this.gridItems.map( gridItem => gridItem.y ) ) - 1;
	}

	getExtraBetween() {
		const firstGroup = this.gridItems.slice( 0, 4 );
		const maxBottom = Math.max( ...firstGroup.map( gridItem => gridItem.y + gridItem.height ) );

		return ITEM_SIZE * 2 - maxBottom + 1;
	}
}

export class GridItem {

	constructor( image, index, attributes, isGroupOfThree ) {

		this.sizeContrast = attributes.sizeContrast / 20;
		this.positionShift = attributes.positionShift / 5;
		this.objectPosition = attributes.objectPosition;
		this.imageResizing = attributes.imageResizing;
		this.imageRotation = attributes.imageRotation;

		this.image = image;
		this.index = index;

		this.idx = this.getIndex( index );
		this.col = this.idx % 2;
		this.row = Math.floor( index / 2 );

		if ( !! isGroupOfThree ) {

			if ( index === 0 ) {
				this.positionShift = Math.min( this.positionShift, 10 );
			}

			if ( index === 2 ) {
				this.positionShift = Math.max( this.positionShift, 10 );
			}

		}

		let { offsetX, offsetY } = this.getOffsets();
		const size = ITEM_SIZE - this.sizeContrast * ( index % 4 );

		this.x = ITEM_SIZE * this.col + 1 + offsetX;
		this.y = ITEM_SIZE * this.row + 1 + offsetY;

		this.width = size;
		this.height = size;
	}

	getOffsets() {
		const { row, col, index, sizeContrast, positionShift } = this;

		// offset for positioning
		let offsetX = ( 1 - col % 2 ) * ( index % 4 ) * sizeContrast;
		let offsetY = ( 1 - row % 2 ) * ( index % 4 ) * sizeContrast;

		// offset from offset
		// move 1st to right
		offsetX += ( 1 - col % 2 ) * ( 1 - row % 2 ) * positionShift;
		// move 3rd to left
		offsetX -= ( col % 2 ) * ( row % 2 ) * positionShift;
		// move 2nd down
		offsetY -= ( 1 - col % 2 ) * ( row % 2 ) * positionShift;
		// move 4th up
		offsetY += ( col % 2 ) * ( 1 - row % 2 ) * positionShift;

		return {
			offsetX,
			offsetY,
		}
	}

	// reoder to display items clockwise
	getIndex( index ) {
		if ( index % 4 === 3 ) return index - 1;
		if ( index % 4 === 2 ) return index + 1;

		return index;
	}

	getStyle() {
		const { index, x, y, width, height, imageRotation } = this;
		const rotation = `rotate(${ ( index % 2 - 0.5 ) * imageRotation / 10 }deg)`;

		return {
			gridColumnStart: x + '',
			gridColumnEnd: `span ${ width }`,
			gridRowStart: y + '',
			gridRowEnd: `span ${ height }`,
			transform: rotation,
		};
	}

	getImageStyle() {
		const { row, col, objectPosition, imageResizing } = this;
		const positionY = row % 2 === 0 ? 100 - objectPosition : objectPosition;
		const positionX = col % 2 === 0 ? 100 - objectPosition : objectPosition;

		return {
			objectFit: imageResizing === 'cropped' ? 'cover' : 'scale-down',
			objectPosition: `${ positionX }% ${ positionY }%`,
		}
	}
}
