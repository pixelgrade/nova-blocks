import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;

const {
	registerBlockType,
	Gallery
} = wp.blocks;

const {
	RichText,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
	BlockVerticalAlignmentToolbar,
	MediaUpload,
	MediaPlaceholder,
	InnerBlocks
} = wp.blockEditor;

const {
	Fragment
} = wp.element;

const {
	IconButton,
	PanelBody,
	PanelRow,
	RangeControl,
	RadioControl,
	ToggleControl,
	Toolbar
} = wp.components;

import icon from './icon';

export default registerBlockType(
	'pixelgrade/hero',
	{
		title: __( 'Pixelgrade Hero', '__plugin_txtd' ),
		description: __( 'Some sort of description for the hero block', '__plugin_txtd' ),
		category: 'common',
		icon,
		attributes: {
			horizontalAlignment: {
				type: 'string',
				default: 'center',
			},
			verticalAlignment: {
				type: 'string',
				default: 'center',
			},
			contentSpacing: {
				type: 'string',
				default: 'm',
			},
			enableParallax: {
				type: 'boolean',
				default: true,
			},
			parallaxAmount: {
				type: 'number',
				default: 50,
			},
			enableMinHeight: {
				type: 'boolean',
				default: true,
			},
			minHeight: {
				type: 'number',
				default: 100,
			},
			backgroundColor: {
				type: 'string',
				default: 'dark',
			},
			overlayColor: {
				type: 'string',
				default: 'light',
			},
			backgroundOpacity: {
				type: 'number',
				default: 70,
			},
			images: {
				type: 'array',
				default: []
			}
		},
		getEditWrapperProps() {
			return {
				'data-align': 'full'
			}
		},
		edit: props => {
			const {
				attributes: {
					contentSpacing,
					enableParallax,
					parallaxAmount,
					verticalAlignment,
					horizontalAlignment,
					enableMinHeight,
					minHeight,
					backgroundColor,
					overlayColor,
					backgroundOpacity,
					images
				},
				className,
				setAttributes
			} = props;

			const styles = {
				hero: {
					minHeight: enableMinHeight ? minHeight + 'vh' : 0
				},
				image: {
					opacity: backgroundOpacity / 100
				}
			}

			const onSelectImages = images => {
				setAttributes( { images } );
			}

			const getImages = () => {
				return images.map( image => {
					return <img src={ image.sizes.large.url } />;
				});
			}

			const classes = [
				className,
				'c-hero',
				`c-hero--align-${verticalAlignment}`,
				`c-hero--align-${horizontalAlignment}`,
				`c-hero--spacing-${contentSpacing}`,
				`c-hero--content-${overlayColor}`,
				`c-hero--background-${backgroundColor}`
			]

			return [
				<div className={classes.join(' ')} style={styles.hero}>
					<div className="c-hero__background-mask c-hero__layer">
						<div className="c-hero__layer c-hero__background">
							{ !! images.length && <img className="c-hero__image" src={images[0].sizes.large.url} style={styles.image}/> }
						</div>
						<div className="c-hero__layer c-hero__content-wrapper">
							<div className="c-hero__content">
								<InnerBlocks />
							</div>
						</div>
					</div>
				</div>,
				<InspectorControls>

					<PanelBody>
						<RadioControl
							label={ __( 'Spacing Content', '__plugin_txtd' ) }
							selected={ contentSpacing }
							options={ [
								{ label: 'Small', value: 's' },
								{ label: 'Medium', value: 'm' },
								{ label: 'Large', value: 'l' }
							] }
							onChange={ contentSpacing => setAttributes( { contentSpacing } ) }
						/>
					</PanelBody>

					<PanelBody title={ __( 'Content Alignment', '__plugin_txtd' ) }>
						<PanelRow>
							<label htmlFor='pixelgrade-hero-horizontal-alignment'>{ __( 'Horizontal Alignment', '__plugin_txtd' ) }</label>
							<AlignmentToolbar
								value={ horizontalAlignment }
								onChange={ horizontalAlignment => setAttributes( { horizontalAlignment } ) }
							/>
						</PanelRow>
						<PanelRow>
							<label htmlFor='pixelgrade-hero-verical-alignment'>{ __( 'Vertical Alignment', '__plugin_txtd' ) }</label>
							<BlockVerticalAlignmentToolbar
								value={ verticalAlignment }
								onChange={ verticalAlignment => setAttributes( { verticalAlignment } ) }
							/>
						</PanelRow>
					</PanelBody>

					<PanelBody>
						<ToggleControl
							label={ __( "Enable Parallax", "__plugin_txtd" ) }
							checked={ enableParallax }
							onChange={ () => setAttributes( { enableParallax: ! enableParallax } ) }
						/>
						{ enableParallax && <RangeControl
							beforeIcon="arrow-left-alt2"
							afterIcon="arrow-right-alt2"
							label={ __( "Parallax Amount", "__plugin_txtd" ) }
							value={ parallaxAmount }
							onChange={ parallaxAmount => setAttributes( { parallaxAmount } ) }
							min={0}
							max={100}
						/> }
					</PanelBody>

					<PanelBody>
						<ToggleControl
							label={ __( "Enable Minimum Height", "__plugin_txtd" ) }
							checked={ enableMinHeight }
							onChange={ () => setAttributes( { enableMinHeight: ! enableMinHeight } ) }
						/>
						{ enableMinHeight && <RangeControl
							beforeIcon="arrow-left-alt2"
							afterIcon="arrow-right-alt2"
							label={ __( "Minimum Height", "__plugin_txtd" ) }
							value={ minHeight }
							onChange={ minHeight => setAttributes( { minHeight } ) }
							min={50}
							max={100}
						/> }
					</PanelBody>

					<PanelBody title={ __( 'Background Color', '__plugin_txtd' ) }>
						<RadioControl
							label={ __( 'Overlay Color', '__plugin_txtd' ) }
							selected={ overlayColor }
							options={ [
								{ label: 'Color', value: 'color' },
								{ label: 'Dark', value: 'dark' },
								{ label: 'Light', value: 'light' }
							] }
							onChange={ overlayColor => setAttributes( { overlayColor } ) }
						/>

						<RadioControl
							label={ __( 'Background Color', '__plugin_txtd' ) }
							selected={ backgroundColor }
							options={ [
								{ label: 'Color', value: 'color' },
								{ label: 'Dark', value: 'dark' },
								{ label: 'Light', value: 'light' }
							] }
							onChange={ backgroundColor => setAttributes( { backgroundColor } ) }
						/>

						<RangeControl
							beforeIcon="arrow-left-alt2"
							afterIcon="arrow-right-alt2"
							label={ __( "Background Opacity", "__plugin_txtd" ) }
							value={ backgroundOpacity }
							onChange={ backgroundOpacity => setAttributes( { backgroundOpacity } ) }
							min={0}
							max={100}
						/>
					</PanelBody>

				</InspectorControls>,

				<BlockControls>
					<Toolbar>
						<MediaUpload
							allowedTypes={["images"]}
							multiple
							gallery
							value={images.map(img => img.id)}
							onSelect={onSelectImages}
							render={({ open }) => {
								return <IconButton
									label={ __( 'Edit Gallery', '__plugin_txtd' ) }
									icon="images-alt2"
									onClick={open}
								/>
							}}
						/>
					</Toolbar>
				</BlockControls>
			]
		},
		save: props => {
			const {
				attributes: {
					contentSpacing,
					parallaxAmount,
					enableParallax,
					verticalAlignment,
					horizontalAlignment,
					enableMinHeight,
					minHeight,
					overlayColor,
					backgroundColor,
					backgroundOpacity,
					images
				},
				className,
				setAttributes
			} = props;

			const styles = {
				hero: {
					minHeight: enableMinHeight ? minHeight + 'vh' : 0
				},
				image: {
					opacity: backgroundOpacity / 100
				}
			}

			const classes = [
				'c-hero',
				`c-hero--align-${verticalAlignment}`,
				`c-hero--align-${horizontalAlignment}`,
				`c-hero--spacing-${contentSpacing}`,
				`c-hero--content-${overlayColor}`,
				`c-hero--background-${backgroundColor}`
			]

			if ( !! enableParallax ) {
				classes.push( 'c-hero--parallax' );
			}

			const actualParallaxAmount = Math.max( Math.min(1, parallaxAmount / 100 ), 0 );

			return (
				<div className={classes.join( ' ' )} style={styles.hero}>

					{ images.length > 1 && <div className="c-hero__slider c-hero__layer">
						{ images.map( ( image, index ) => {
							return <div class="c-hero__slide">
								<div className="c-hero__background-mask c-hero__layer">
									<div class="c-hero__background c-hero__layer">
										<img className="c-hero__image" src={image.sizes.large.url} style={styles.image} />
									</div>
								</div>
								{ index === 0 && <div className="c-hero__layer c-hero__content-wrapper">
									<div className="c-hero__content">
								        <InnerBlocks.Content />
									</div>
								</div> }
							</div>
						} ) }
					</div> }

					{images.length <= 1 && <Fragment>
						<div className="c-hero__background-mask c-hero__layer">
							<div className="c-hero__background c-hero__layer" data-rellax-amount={actualParallaxAmount}>
								{ !! images.length &&
								 <img className="c-hero__image" src={images[0].sizes.large.url} style={styles.image}/> }
							</div>
							<div className="c-hero__layer c-hero__content-wrapper">
								<div className="c-hero__content">
									<InnerBlocks.Content/>
								</div>
							</div>
						</div>
					</Fragment>}

				</div>
			)
		}
	}
)