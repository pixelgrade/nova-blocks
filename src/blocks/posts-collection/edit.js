import Preview from "./preview";
import { ControlsSection, ControlsTab } from "../../components/control-sections";
import toggles from "../../components/cards-manager/toggles";
import { ControlsGroup, HeadingToolbar, ToggleGroup } from "../../components";
import { getControlsClasses } from "../../utils";

const { __ } = wp.i18n;

const { Fragment } = wp.element;

const {
	PanelRow,
	RadioControl,
	RangeControl,
	SelectControl,
	ToggleControl,
} = wp.components;

function getLevelAttributes( attributes ) {
	const { level } = attributes;

	return {
		level,
		collectionTitleLevel: level,
		cardTitleLevel: level + 1
	}
}

function getAspectRatioAttributes( attributes ) {
	const { thumbnailAspectRatioString } = attributes;
	let thumbnailAspectRatio = attributes.thumbnailAspectRatio;

	if ( thumbnailAspectRatioString === 'landscape' ) {
		thumbnailAspectRatio = 45;
	}

	if ( thumbnailAspectRatioString === 'portrait' ) {
		thumbnailAspectRatio = 65;
	}

	return {
		thumbnailAspectRatioString,
		thumbnailAspectRatio,
	}
}

const PostsEdit = ( props ) => {

	const {
		attributes,
		setAttributes
	} = props;

	const {

		level, // title starting level
		collectionTitleLevel,
		cardTitleLevel,

		metadataPosition,

		thumbnailAspectRatioString,
		thumbnailAspectRatio,

		imageResizing,
		imagePadding,
	} = attributes;

	return (
		<Fragment>
			<Preview { ...props } />
			<ControlsSection label={ __( 'Card Details' ) }>
				<ControlsTab label={ __( 'Customize' ) }>
					<ControlsGroup title={ __( 'Thumbnail Aspect Ratio' ) }>

						<div key={ 'thumbnail-aspect-ratio-customize-1' } className={ getControlsClasses( attributes, getAspectRatioAttributes ) }>
							<RadioControl
								key={ 'thumbnail-aspect-ratio' }
								selected={ thumbnailAspectRatioString }
								onChange={ thumbnailAspectRatioString => {
									const newAttributes = getAspectRatioAttributes( { ...attributes, thumbnailAspectRatioString } );
									setAttributes( newAttributes );
								} }
								options={ [
									{ label: 'Landscape', value: 'landscape' },
									{ label: 'Portrait', value: 'portrait' },
									{ label: 'Auto', value: 'auto' },
								] }
							/>
						</div>

						<div key={ 'title-level-customize-1' } className={ getControlsClasses( attributes, getLevelAttributes ) }>
							<PanelRow>
								<span>{__( 'Title Starting Size', '__plugin_txtd' )}</span>
								<HeadingToolbar
									minLevel={ 2 }
									maxLevel={ 4 }
									selectedLevel={ level }
									onChange={ level => {
										const newAttributes = getLevelAttributes( { ...attributes, level } );
										setAttributes( newAttributes );
									} }
								/>
							</PanelRow>
						</div>

					</ControlsGroup>
				</ControlsTab>
				<ControlsTab label={ __( 'Settings' ) }>
					<ControlsGroup title={ __( 'Thumbnail' ) }>
						<ToggleControl
							label={ __( 'Enable Image Container Editing' ) }
							checked={ thumbnailAspectRatioString !== 'auto' }
							onChange={ newValue => {
								let currentOrientation = thumbnailAspectRatio <= 50 ? 'portrait' : 'landscape';
								let thumbnailAspectRatioString = ! newValue ? 'auto' : currentOrientation;
								setAttributes( { thumbnailAspectRatioString } );
							} }
						/>
						{
							thumbnailAspectRatioString !== 'auto' &&
							<Fragment>
								<RangeControl
									key={ 'collection-image-container-height' }
									label={ __( 'Image container height', '__plugin_txtd' ) }
									value={ thumbnailAspectRatio }
									onChange={ thumbnailAspectRatio => {
										setAttributes( { thumbnailAspectRatio } )
									} }
									min={ 0 }
									max={ 100 }
									step={ 5 }
								/>
								<RadioControl
									key={ 'collection-image-resizing' }
									label={ __( 'Image resizing' ) }
									selected={ imageResizing }
									onChange={ imageResizing => {
										setAttributes( { imageResizing } )
									} }
									options={ [
										{ label: 'Stretch to fill the container', value: 'cropped' },
										{ label: 'Shrink to fit (no crop)', value: 'original' },
									] }
								/>
							</Fragment>
						}
						<RangeControl
							key={ 'collection-image-padding' }
							label={ __( 'Image padding', '__plugin_txtd' ) }
							value={ imagePadding }
							onChange={ imagePadding => {
								setAttributes( { imagePadding } )
							} }
							min={ 0 }
							max={ 100 }
							step={ 50 }
						/>
					</ControlsGroup>
					<ControlsGroup title={ __( 'Content' ) }>
						<div className="components-base-control">
							<div className="components-base-control__field">
								<label className={'components-base-control__label '}>{__( 'Collection Title Heading', '__plugin_txtd' )}</label>
								<HeadingToolbar
									minLevel={ 1 }
									maxLevel={ 5 }
									selectedLevel={ collectionTitleLevel }
									onChange={ collectionTitleLevel => {
										setAttributes( { collectionTitleLevel } );
									} }
								/>
							</div>
						</div>
						<div className="components-base-control">
							<div className="components-base-control__field">
								<label className={'components-base-control__label '}>{__( 'Card Title Heading', '__plugin_txtd' )}</label>
								<HeadingToolbar
									minLevel={ 1 }
									maxLevel={ 5 }
									selectedLevel={ cardTitleLevel }
									onChange={ cardTitleLevel => {
										setAttributes( { cardTitleLevel } );
									} }
								/>
							</div>
						</div>
					</ControlsGroup>
					<ControlsGroup title={ __( 'Metadata Position' ) }>
						<RadioControl
							key={ 'collection-image-resizing' }
							selected={ metadataPosition }
							onChange={ metadataPosition => {
								setAttributes( { metadataPosition } )
							} }
							options={ [
								{ label: 'Above Title', value: 'above-title' },
								{ label: 'Below Title', value: 'below-title' },
								{ label: 'Split (Above Title / Below Content)', value: 'split' },
							] }
						/>
					</ControlsGroup>
				</ControlsTab>
			</ControlsSection>
			<ControlsSection label={ __( 'Display' ) } group={ __( 'Block Modules' ) }>
				<ControlsTab label={ __( 'Settings' ) }>
					<ControlsGroup title={ __( 'Set up elements for this block', '__plugin_txtd' ) }>
						<ToggleGroup
							onChange={ setAttributes }
							toggles={ toggles.filter( toggle => {
								return toggle.attribute !== 'showSubtitle';
							} ).map( toggle => {
								return {
									...toggle,
									value: attributes[ toggle.attribute ]
								}
							} ) }
						/>
					</ControlsGroup>
					<MetaSource { ...props } />
				</ControlsTab>
			</ControlsSection>
		</Fragment>
	)
};

const MetaSource = ( props ) => {

	const {
		attributes: {
			primaryMetadata,
			secondaryMetadata,
		},
		setAttributes
	} = props;

	const metaSourceOptions = [
		{ label: 'Author', value: 'author' },
		{ label: 'Category', value: 'category' },
		{ label: 'Comments', value: 'comments' },
		{ label: 'Date', value: 'date' },
		{ label: 'Tags', value: 'tags' },
	];

	return (
		<ControlsGroup title={ __( 'Additional Information', '__plugin_txtd' ) }>
			<SelectControl
				key={ 'primary-metadata-source' }
				label={ __( 'Primary Metadata' ) }
				selected={ primaryMetadata }
				onChange={ primaryMetadata => {
					setAttributes( { primaryMetadata } )
				} }
				options={ metaSourceOptions }
			/>
			<SelectControl
				key={ 'secondary-metadata-source' }
				label={ __( 'Secondary Metadata' ) }
				selected={ secondaryMetadata }
				onChange={ secondaryMetadata => {
					setAttributes( { secondaryMetadata } )
				} }
				options={ metaSourceOptions }
			/>
		</ControlsGroup>
	)
}

export default PostsEdit;
