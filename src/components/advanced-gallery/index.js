import * as icons from "../../icons";

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
	RangeControl,
	Toolbar,
	IconButton,
} = wp.components;

const {
	MediaPlaceholder,
	BlockIcon,
} = wp.blockEditor;

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

const AdvancedGalleryList = ( props ) => {

	const {
		attributes: {
			images,
			offset,
			scale,
		}
	} = props;

	if ( ! images || ! images.length ) {
		return false;
	}

	return (
		<div className={ `novablocks-advanced-gallery` }>
			<div className={ `novablocks-advanced-gallery__grid` }>
				{ images.map( ( image, index ) => {

					let idx = index;

					if ( index === 3 ) idx = 2;
					if ( index === 2 ) idx = 3;

					const maxSize = 20;
					const col = idx % 2;
					const row = Math.floor( idx / 2 );
					const size = maxSize - scale * ( index % 4 );
					const x = maxSize * col + 1;
					const y = maxSize * row + 1;

					// offset for positioning
					let offsetX = ( 1 - col % 2 ) * ( row % 2 ) * index * scale;
					let offsetY = ( col % 2 ) * ( 1 - row % 2 ) * index * scale;

					// offset from offset
					// move 1st to right
					offsetX += ( 1 - col % 2 ) * ( 1 - row % 2 ) * offset;
					// move 2nd down
					offsetY -= ( 1 - col % 2 ) * ( row % 2 ) * offset;
					// move 3rd to left
					offsetX -= ( col % 2 ) * ( row % 2 ) * offset;
					// move 4th up
					offsetY += ( col % 2 ) * ( 1 - row % 2 ) * offset;

					let extraLeft = Math.min( offset, 20 - offset );

					if ( images.length > 3 ) {
						extraLeft = Math.min( extraLeft, 3 * scale );
					}

					const style = {
						gridColumnStart: x + offsetX - extraLeft,
						gridColumnEnd: `span ${size}`,
						gridRowStart: y + offsetY,
						gridRowEnd: `span ${size}`,
					};

					const props = {
						image,
						style,
					}

					return <AdvancedGalleryListItem { ...props } />
				} ) }
			</div>
		</div>
	);
}

const AdvancedGalleryListItem = ( props ) => {

	const {
		image,
		style
	} = props;

	return (
		<div className={ `novablocks-advanced-gallery__grid-item` } style={ style }>
			<img className={ `novablocks-advanced-gallery__image` } src={ image.url } />
		</div>
	);
}

const AdvancedGalleryInspectorControls = ( props ) => {

	const {
		setAttributes,
		attributes: {
			scale,
			offset,
		}
	} = props;

	const maxOffset = 9 - scale;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Advanced Gallery Controls', '__plugin_txtd' ) } initialOpen={ true }>
				<RangeControl
					label={ __( 'Scale', '__plugin_txtd' ) }
					value={ scale }
					onChange={ newScale => {
						const newMaxOffset = 9 - newScale;
						const newOffset = offset > newMaxOffset ? newMaxOffset : offset;

						setAttributes( {
							offset: newOffset,
							scale: newScale,
						} );
					} }
					min={ 0 }
					max={ 5 }
				/>
				<RangeControl
					label={ __( 'Offset', '__plugin_txtd' ) }
					value={ offset }
					onChange={ offset => setAttributes( { offset } ) }
					min={ 0 }
					max={ 20 }
				/>
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
			<AdvancedGalleryList { ...props } />
			<AdvancedGalleryInspectorControls { ...props } />
			<AdvancedGalleryBlockControls { ...props } />
		</Fragment>
	)
}

const { addFilter } = wp.hooks;

const enableBlockIdAttributeOnBlocks = [ 'novablocks/advanced-gallery' ];

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
		});
	}

	return block;
}
addFilter( 'blocks.registerBlockType', 'novablocks/add-blockId-attribute', addAdvancedGalleryAttributes );

export default AdvancedGallery;
