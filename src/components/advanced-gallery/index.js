import * as icons from "../../icons";
import withSettings from "../with-settings";

const { __ } = wp.i18n;

const {
	Fragment
} = wp.element;

const {
	BlockControls,
	InspectorControls,
	MediaUpload,
} = wp.blockEditor;

const {
	PanelBody,
	RadioControl,
	RangeControl,
	Toolbar,
	IconButton,
} = wp.components;

const {
	MediaPlaceholder,
	BlockIcon,
} = wp.blockEditor;

const ITEM_SIZE = 20;
const MAX_ROTATION = 15;

const AdvancedGalleryPlaceholder = ( props ) => {

	const {
		setAttributes,
		attributes: {
			images
		}
	} = props;

	if ( !! images && !! images.length ) {
		return false;
	}

	return (
		<MediaPlaceholder
			icon={ <BlockIcon icon='format-gallery' /> }
			onSelect={ images => {
				setAttributes( { images } );
			} }
			accept="image/*"
			allowedTypes={ [ 'image' ] }
			multiple
		/>
   )
}

const getIndex = ( index, orientation = 0 ) => {

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

const getExtra = ( chunk, offset, direction ) => {
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

const AdvancedGalleryGrid = ( props ) => {

	const {
		attributes: {
			images,
			offset,
			scale,
			rotate,
			orientation,
		}
	} = props;

	if ( ! images || ! images.length ) {
		return false;
	}

	let i, j, temparray, chunkSize = 4, chunks = [];

	// split into groups of 4
	for ( i = 0, j = images.length; i < j; i += chunkSize ) {
		chunks.push( images.slice( i, i + chunkSize ) );
	}

	return (
		<div className={ `novablocks-advanced-gallery` }>
			{ chunks.map( ( chunk, chunkIndex ) => {

				const chunkWithMeta = chunk.map( ( image, index ) => {
					const idx = getIndex( index, orientation );
					const col = idx % 2;
					const row = Math.floor( idx / 2 );
					const size = ITEM_SIZE - scale * index;
					const x = ITEM_SIZE * col + 1;
					const y = ITEM_SIZE * row + 1;

					return { idx, col, row, size, x, y, image, index, offset, scale };
				} );

				return (
					<div className={ `novablocks-advanced-gallery__grid` } key={ chunkIndex }>
						{ chunkWithMeta.map( meta => {
							const { idx, col, row, size, x, y, image, index } = meta;
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

							const style = {
								gridColumnStart: x + offsetX - extraLeft,
								gridColumnEnd: `span ${size}`,
								gridRowStart: y + offsetY - extraTop,
								gridRowEnd: `span ${size}`,
								transform: rotation,
							};

							const passedProps = Object.assign( {}, props, { image, style } );

							return <AdvancedGalleryListItem { ...passedProps } key={ index }/>
						} ) }
					</div>
				)
			} ) }
		</div>
	);
}

const AdvancedGalleryListItem = ( props ) => {

	let {
		attributes: {
			aspect,
			aspectRatio,
		},
		image,
		style,
	} = props;

	const paddingTopValues = [ 16/9, 4/3, 1, 3/4, 9/16 ];

	style = Object.assign( {}, style, {
		paddingTop: aspect === 'cropped' ? `${ paddingTopValues[ aspectRatio ] * 100 }%` : '',
		minHeight: aspect === 'cropped' ? 0 : '',
	} );

	let imageStyle = {
		objectFit: aspect === 'cropped' ? 'cover' : 'contain',
	};

	return (
		<div className={ `novablocks-advanced-gallery__grid-item` } style={ style }>
			<img className={ `novablocks-advanced-gallery__image` } src={ image.url } style={ imageStyle } />
		</div>
	);
}

const AdvancedGalleryInspectorControls = ( props ) => {

	const {
		setAttributes,
		attributes: {
			scale,
			offset,
			rotate,
			stylePreset,
			orientation,
			aspect,
			aspectRatio,
		},
		settings: {
			advancedGalleryPresetOptions
		}
	} = props;

	const maxOffset = 9 - scale;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Advanced Gallery Presets', '__plugin_txtd' ) } initialOpen={ true }>
				<RadioControl
					label={ 'Style Presets' }
					selected={ stylePreset }
					onChange={ ( stylePreset ) => {
						let newAttributes = { stylePreset };
						let newOption = advancedGalleryPresetOptions.find( option => stylePreset === option.value );

						if ( newOption && newOption.preset ) {
							newAttributes = Object.assign( newOption.preset, newAttributes );
						}

						setAttributes( newAttributes );
					} }
					options={ advancedGalleryPresetOptions }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Advanced Gallery Controls', '__plugin_txtd' ) } initialOpen={ true }>
				<RangeControl
					label={ __( 'Scale', '__plugin_txtd' ) }
					value={ scale }
					onChange={ scale => setAttributes( { scale, stylePreset: 'custom' } ) }
					min={ 0 }
					max={ 5 }
				/>
				<RangeControl
					label={ __( 'Offset', '__plugin_txtd' ) }
					value={ offset }
					onChange={ offset => setAttributes( { offset, stylePreset: 'custom' } ) }
					min={ 0 }
					max={ 20 }
				/>
				<RangeControl
					label={ __( 'Rotate', '__plugin_txtd' ) }
					value={ rotate }
					onChange={ rotate => setAttributes( { rotate, stylePreset: 'custom' } ) }
					min={ 0 }
					max={ MAX_ROTATION }
				/>
				<RangeControl
					label={ __( 'Orientation', '__plugin_txtd' ) }
					value={ orientation }
					onChange={ orientation => setAttributes( { orientation } ) }
					min={ 0 }
					max={ 3 }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Images Controls', '__plugin_txtd' ) } initialOpen={ true }>
				<RadioControl
					label={ 'Aspect' }
					selected={ aspect }
					onChange={ aspect => setAttributes( { aspect } ) }
					options={ [
						{ label: 'Original', value: 'original' },
						{ label: 'Cropped', value: 'cropped' },
					] }
				/>
				{ aspect === 'cropped' &&
					<RangeControl
						label={ __( 'Aspect Ratio', '__plugin_txtd' ) }
						value={ aspectRatio }
						onChange={ aspectRatio => setAttributes( { aspectRatio, stylePreset: 'custom' } ) }
						min={ 0 }
						max={ 4 }
					/>
				}
			</PanelBody>
		</InspectorControls>
	);
}

const AdvancedGalleryBlockControls = ( props ) => {

	const {
		setAttributes,
		attributes: {
			images,
		}
	} = props;

	if ( ! images || ! images.length ) {
		return false;
	}

	return (
		<BlockControls>
			<Toolbar>
	            <MediaUpload
		            type="image"
		            multiple
		            gallery
		            value={ images.map( ( image ) => image.id ) }
		            onSelect={ ( images ) => {
			            setAttributes( { images } );
		            } }
		            render={ ( { open } ) => (
			            <IconButton
				            className="components-icon-button components-toolbar__control"
				            label={ __( 'Change Media', '__plugin_txtd' ) }
				            icon={ icons.swap }
				            onClick={ open }
			            />
		            ) }
	            />
	        </Toolbar>
		</BlockControls>
	)
}

const AdvancedGallery = ( props ) => {

	return (
		<Fragment>
			<AdvancedGalleryPlaceholder { ...props } />
			<AdvancedGalleryGrid { ...props } />
			<AdvancedGalleryInspectorControls { ...props } />
			<AdvancedGalleryBlockControls { ...props } />
		</Fragment>
	)
}

const { addFilter } = wp.hooks;

const enableBlockIdAttributeOnBlocks = [ 'novablocks/media' ];

function addAdvancedGalleryAttributes( block ) {

	if ( ! enableBlockIdAttributeOnBlocks.includes( block.name ) ) {
		return block;
	}

	if ( typeof block.attributes !== 'undefined' ){
		block.attributes = Object.assign( block.attributes, {
			images: {
				type: 'array',
				default: [],
			},
			scale: {
				type: 'number',
				default: 0,
			},
			offset: {
				type: 'number',
				default: 0,
			},
			rotate: {
				type: 'number',
				default: 0,
			},
			stylePreset: {
				type: 'string',
				default: 'clean',
			},
			orientation: {
				type: 'number',
				default: 0,
			},
			aspect: {
				type: 'string',
				default: 'cropped',
			},
			aspectRatio: {
				type: 'number',
				default: 2,
			},
		});
	}

	return block;
}
addFilter( 'blocks.registerBlockType', 'novablocks/add-blockId-attribute', addAdvancedGalleryAttributes );

export default withSettings( AdvancedGallery );
