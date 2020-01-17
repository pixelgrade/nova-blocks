/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	Fragment,
} = wp.element;

const {
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	ToggleControl,
	RadioControl,
	QueryControls,
	RangeControl
} = wp.components;

const PostsInspectorControls = function( props ) {
	const {
		attributes: {
			displayFeaturedImage,
			displayDate,
			displayContent,
			layoutStyle,
			displayReadMore,
			order,
			orderBy,
			numberOfPosts
		},
		categoriesList,
		setAttributes,
	} = props;

	const postsCountOnChange = ( selectedPosts ) => {
		const changedAttributes = { numberOfPosts: selectedPosts };
		setAttributes( changedAttributes );
	};

	return(
		<Fragment>
			<InspectorControls>
				<PanelBody title={__( 'Design', '__plugin_txtd' ) } initialOpen={ true }>
					<RadioControl
						label={ __( 'Layout style', '__plugin_txtd' ) }
						value={ layoutStyle }
						selected={ layoutStyle }
						onChange={ ( nextLayoutStyle ) => setAttributes( { layoutStyle: nextLayoutStyle } ) }
						options={ [
							{ label: 'Rosa2', value: 'rosa2' },
						] }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Display', '__plugin_txtd' ) } initialOpen={ true }>
					<ToggleControl
						label={__( 'Display Image', '__plugin_txtd' )}
						checked={ displayFeaturedImage }
						onChange={() => setAttributes( {displayFeaturedImage: ! displayFeaturedImage} )}
					/>
					<ToggleControl
						label={__( 'Display Date', '__plugin_txtd' )}
						checked={displayDate}
						onChange={() => setAttributes( {displayDate: ! displayDate} )}
					/>
					<ToggleControl
						label={__( 'Display Content', '__plugin_txtd' )}
						checked={displayContent}
						onChange={() => setAttributes( {displayContent: ! displayContent} )}
					/>
					<ToggleControl
						label={__( 'Display Read More', '__plugin_txtd' )}
						checked={displayReadMore}
						onChange={() => setAttributes( {displayReadMore: ! displayReadMore} )}
					/>
				</PanelBody>

				<PanelBody title={ __( 'Sorting', '__plugin_txtd' ) } initialOpen={ true }>
					<QueryControls
						{ ...{ order, orderBy } }
						categoriesList={ categoriesList }
						selectedCategoryId={ categoriesList.categories }
						onOrderChange={ ( value ) => setAttributes( { order: value } ) }
						onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
						onCategoryChange={ ( value ) => setAttributes( { categories: '' !== value ? value : undefined } ) }
					/>

					<RangeControl
						label={ __( 'Number of posts', '__plugin_txtd' ) }
						value={ numberOfPosts }
						onChange={ ( value ) => postsCountOnChange( value ) }
						min={ 1 }
						max={ 100 }
					/>

				</PanelBody>
			</InspectorControls>
		</Fragment>
	);
};

export default PostsInspectorControls;
