import apiFetch from '@wordpress/api-fetch';
import { useBlockProps } from '@wordpress/block-editor';
import { RadioControl, RangeControl, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';
import { addQueryArgs } from '@wordpress/url';

import { AutocompleteTokenField, ControlsGroup, ControlsSection, ControlsTab } from '@novablocks/block-editor';

const CONTENT_POSITION_OPTIONS = [
	{ label: __( 'Top Left', '__plugin_txtd' ), value: 'top left' },
	{ label: __( 'Top Center', '__plugin_txtd' ), value: 'top center' },
	{ label: __( 'Top Right', '__plugin_txtd' ), value: 'top right' },
	{ label: __( 'Center Left', '__plugin_txtd' ), value: 'center left' },
	{ label: __( 'Center Center', '__plugin_txtd' ), value: 'center center' },
	{ label: __( 'Center Right', '__plugin_txtd' ), value: 'center right' },
	{ label: __( 'Bottom Left', '__plugin_txtd' ), value: 'bottom left' },
	{ label: __( 'Bottom Center', '__plugin_txtd' ), value: 'bottom center' },
	{ label: __( 'Bottom Right', '__plugin_txtd' ), value: 'bottom right' },
];

const formatSuggestionLabel = ( item ) => {
	const title = item?.title || __( '(no title)', '__plugin_txtd' );
	const subtype = item?.subtype ? ` (${ item.subtype.split( '-' ).join( ' ' ) })` : '';

	return `${ title }${ subtype }`;
};

const fetchSearchResults = ( query = '', include = [] ) => {
	const path = addQueryArgs( '/wp/v2/search', {
		type: 'post',
		search: query || undefined,
		include: include.length ? include : undefined,
		per_page: include.length ? include.length : 20,
	});

	return apiFetch( { path } ).then( ( results ) =>
		results.map( ( item ) => ( {
			value: item.id,
			label: formatSuggestionLabel( item ),
		} ) )
	);
};

const ManualPostControl = ( { manualPostId, setAttributes } ) => {
	return (
		<AutocompleteTokenField
			label={ __( 'Selected Post', '__plugin_txtd' ) }
			help={ __( 'Search for the post or project that this card should link to.', '__plugin_txtd' ) }
			tokens={ manualPostId ? [ manualPostId ] : [] }
			onChange={ ( values ) => setAttributes( { manualPostId: Number( values[0] ) || 0 } ) }
			fetchSuggestions={ ( input ) => fetchSearchResults( input ) }
			fetchSavedInfo={ ( values ) => fetchSearchResults( '', values ) }
		/>
	);
};

const InspectorControls = ( props ) => {
	const { attributes, setAttributes } = props;
	const {
		source,
		direction,
		loopToFirst,
		manualPostId,
		headingText,
		buttonText,
		contentPosition,
		minHeight,
	} = attributes;

	return (
		<Fragment>
			<ControlsSection id="contextual-post-card-setup" label={ __( 'Setup', '__plugin_txtd' ) }>
				<ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
					<ControlsGroup>
						<RadioControl
							label={ __( 'Source', '__plugin_txtd' ) }
							selected={ source }
							options={ [
								{ label: __( 'Adjacent Post', '__plugin_txtd' ), value: 'auto' },
								{ label: __( 'Manual Selection', '__plugin_txtd' ), value: 'manual' },
							] }
							onChange={ ( nextSource ) => setAttributes( { source: nextSource } ) }
						/>
						{ source === 'auto' && (
							<Fragment>
								<RadioControl
									label={ __( 'Direction', '__plugin_txtd' ) }
									selected={ direction }
									options={ [
										{ label: __( 'Next', '__plugin_txtd' ), value: 'next' },
										{ label: __( 'Previous', '__plugin_txtd' ), value: 'previous' },
									] }
									onChange={ ( nextDirection ) => setAttributes( { direction: nextDirection } ) }
								/>
								<ToggleControl
									label={ __( 'Loop at the edge', '__plugin_txtd' ) }
									help={ __( 'When there is no adjacent post in that direction, wrap to the first item in the cycle.', '__plugin_txtd' ) }
									checked={ loopToFirst }
									onChange={ ( nextLoopToFirst ) => setAttributes( { loopToFirst: nextLoopToFirst } ) }
								/>
							</Fragment>
						) }
						{ source === 'manual' && (
							<ManualPostControl
								manualPostId={ manualPostId }
								setAttributes={ setAttributes }
							/>
						) }
					</ControlsGroup>
				</ControlsTab>
			</ControlsSection>

			<ControlsSection id="contextual-post-card-content" label={ __( 'Content', '__plugin_txtd' ) }>
				<ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
					<ControlsGroup>
						<TextControl
							label={ __( 'Heading Text', '__plugin_txtd' ) }
							help={ __( 'Leave empty to use the block’s contextual default heading.', '__plugin_txtd' ) }
							value={ headingText }
							onChange={ ( nextHeadingText ) => setAttributes( { headingText: nextHeadingText } ) }
						/>
						<TextControl
							label={ __( 'Button Text', '__plugin_txtd' ) }
							value={ buttonText }
							onChange={ ( nextButtonText ) => setAttributes( { buttonText: nextButtonText } ) }
						/>
						<SelectControl
							label={ __( 'Content Position', '__plugin_txtd' ) }
							value={ contentPosition }
							options={ CONTENT_POSITION_OPTIONS }
							onChange={ ( nextContentPosition ) => setAttributes( { contentPosition: nextContentPosition } ) }
						/>
						<RangeControl
							label={ __( 'Minimum Height', '__plugin_txtd' ) }
							value={ minHeight }
							onChange={ ( nextMinHeight ) => setAttributes( { minHeight: nextMinHeight } ) }
							min={ 25 }
							max={ 100 }
							step={ 1 }
						/>
					</ControlsGroup>
				</ControlsTab>
			</ControlsSection>
		</Fragment>
	);
};

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: props.className,
		style: props.style,
	} );

	return (
		<Fragment>
			<InspectorControls { ...props } />
			<div { ...blockProps }>
				<ServerSideRender
					block="novablocks/contextual-post-card"
					attributes={ props.attributes }
				/>
			</div>
		</Fragment>
	);
};

export default Edit;
