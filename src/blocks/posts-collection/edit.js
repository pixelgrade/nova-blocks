import Preview from "./preview";
import { ControlsDrawerContent, ControlsSection, ControlsTab } from "../../components/control-sections";
import toggles from "../../components/cards-manager/toggles";
import {ControlsGroup, HeadingToolbar, ToggleGroup} from "../../components";

const { __ } = wp.i18n;

const { Fragment } = wp.element;

const {
	RangeControl,
	PanelBody,
	PanelRow,
} = wp.components;

const PostsEdit = ( props ) => {

	const {
		attributes,
		setAttributes
	} = props;

	const {
		containerHeight,
		imagePadding,
		level,
	} = attributes;

	return (
		<Fragment>
			<Preview { ...props } />
			<ControlsSection label={ __( 'Display' ) }>
				<ControlsTab label={ __( 'Settings' ) }>
					<ControlsGroup title={ __( 'Card Media' ) }>
						<RangeControl
							key={ 'collection-image-container-height' }
							label={ __( 'Image container height', '__plugin_txtd' ) }
							value={ containerHeight }
							onChange={ containerHeight => {
								setAttributes( { containerHeight } )
							} }
							min={ 0 }
							max={ 100 }
							step={ 5 }
						/>
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
					<ControlsGroup title={ __( 'Card Text' ) }>
						<PanelRow>
							<span>{__( 'Title Level', '__plugin_txtd' )}</span>
							<HeadingToolbar
								minLevel={ 2 }
								maxLevel={ 4 }
								selectedLevel={ level }
								onChange={ level => {
									setAttributes( { level } );
								} }
							/>
						</PanelRow>
					</ControlsGroup>
				</ControlsTab>
			</ControlsSection>
			<ControlsDrawerContent>
				<PanelBody title={ __( 'Set up elements for this block', '__plugin_txtd' ) }>
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
				</PanelBody>
			</ControlsDrawerContent>
		</Fragment>
	)
};

export default PostsEdit;
