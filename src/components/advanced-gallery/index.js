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

	const styles = {};

	styles['--offset'] = offset;

	if ( scale !== 0 ) {
		styles['--scale'] = scale;

		if ( offset > 3 ) {
			styles['--padding-left'] = offset - 3;
		}

		if ( offset * 2 > 9 - scale ) {
			styles['--padding-left'] = offset * 2 + scale - 9;
		}

		if ( offset > 9 - scale ) {
			styles['--padding-top'] = offset + scale - 9;
		}
	} else {
		styles['--padding-left'] = 'var(--offset)';
	}

	return (
		<div className={ `novablocks-advanced-gallery` }>
			<div className={ `novablocks-advanced-gallery__grid` } style={ styles }>
				{ images.map( image => <AdvancedGalleryListItem { ...image } /> ) }
			</div>
		</div>
	);
}

const AdvancedGalleryListItem = ( image ) => {
	return (
		<div className={ `novablocks-advanced-gallery__grid-item` }>
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
					max={ maxOffset }
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
