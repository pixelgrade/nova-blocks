const ITEM_SIZE = 20;

export class GridItemCollection {

	constructor( images, attributes ) {
		const { orientation } = attributes;

		this.gridItems = images.map( ( image, index ) => {
			const groupStart = Math.floor( index / 4 ) * 4;
			const groupEnd = Math.min( groupStart + 4, images.length );
			const isGroupOfThree = groupEnd - groupStart === 3;

			return new GridItem( image, index, attributes, isGroupOfThree );
		} );

		this.removeExtra();

		if ( orientation === 1 || orientation === 2 ) {
			this.flipX();
		}

		if ( orientation === 2 || orientation === 3 ) {
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

export default class GridItem {

	constructor( image, index, attributes, isGroupOfThree ) {

		this.scale = attributes.scale;
		this.rotate = attributes.rotate;
		this.offset = attributes.offset;
		this.objectPosition = attributes.objectPosition;
		this.aspect = attributes.aspect;

		this.image = image;
		this.index = index;

		this.idx = this.getIndex( index );
		this.col = this.idx % 2;
		this.row = Math.floor( index / 2 );

		if ( !! isGroupOfThree ) {

			if ( index === 0 ) {
				this.offset = Math.min( this.offset, 10 );
			}

			if ( index === 2 ) {
				this.offset = Math.max( this.offset, 10 );
			}

		}

		let { offsetX, offsetY } = this.getOffsets();
		const size = ITEM_SIZE - this.scale * ( index % 4 );

		this.x = ITEM_SIZE * this.col + 1 + offsetX;
		this.y = ITEM_SIZE * this.row + 1 + offsetY;

		this.width = size;
		this.height = size;
	}

	getOffsets() {
		const { row, col, index, scale, offset } = this;

		// offset for positioning
		let offsetX = ( 1 - col % 2 ) * ( index % 4 ) * scale;
		let offsetY = ( 1 - row % 2 ) * ( index % 4 ) * scale;

		// offset from offset
		// move 1st to right
		offsetX += ( 1 - col % 2 ) * ( 1 - row % 2 ) * offset;
		// move 3rd to left
		offsetX -= ( col % 2 ) * ( row % 2 ) * offset;
		// move 2nd down
		offsetY -= ( 1 - col % 2 ) * ( row % 2 ) * offset;
		// move 4th up
		offsetY += ( col % 2 ) * ( 1 - row % 2 ) * offset;

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
		const { index, x, y, width, height, rotate } = this;
		const rotation = `rotate(${ ( index % 2 - 0.5 ) * 2 * rotate }deg)`;

		return {
			gridColumnStart: x + '',
			gridColumnEnd: `span ${ width }`,
			gridRowStart: y + '',
			gridRowEnd: `span ${ height }`,
			transform: rotation,
		};
	}

	getImageStyle() {
		const { idx, row, col, objectPosition, aspect } = this;
		const positionY = row % 2 === 0 ? 100 - objectPosition : objectPosition;
		const positionX = col % 2 === 0 ? 100 - objectPosition : objectPosition;
		const objPos = aspect === 'original' ? `${ positionX }% ${ positionY }%` : '';

		return {
			objectFit: aspect === 'cropped' ? 'cover' : 'scale-down',
			objectPosition: aspect === 'original' ? `${ positionX }% ${ positionY }%` : '',
		}
	}
}
