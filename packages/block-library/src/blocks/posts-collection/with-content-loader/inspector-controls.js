import { __ } from "@wordpress/i18n";
import { SelectControl } from "@wordpress/components";
import { ControlsSection, ControlsTab } from "@novablocks/block-editor";
import QueryControls from "./query-controls";

const Controls = ( props ) => {

  const {
    attributes,
    setAttributes,
    clientId,
  } = props;

  const {
    postsToShow,
    loadingMode,
    specificPosts,
    authors,
    categories,
    tags,
    preventDuplicatePosts,
    contentType
  } = attributes;

  // Determine if we should be using posts from a query.
  const loadPosts = ('auto' === contentType);

  return (
    <ControlsSection
      id={ 'content-loader' }
      label={ __( 'Collection Content', '__plugin_txtd' ) }
      group={ __( 'Card Anatomy', '__plugin_txtd' ) }
      order={ 10 }>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <SelectControl
          key={ 'collection-content-type' }
          label={ __( 'Content Type', '__plugin_txtd' ) }
          value={ contentType }
          options={ [
            { label: __( 'Automatic Blocks', '__plugin_txtd' ), value: 'auto' },
            { label: __( 'Blocks with pre-defined fields', '__plugin_txtd' ), value: 'fields' },
            { label: __( 'Custom Blocks', '__plugin_txtd' ), value: 'custom' },
          ] }
          onChange={ contentType => {
            setAttributes( { contentType } );
          } }
        />
        { loadPosts && <QueryControls
          key={ 'query-controls' }
          enableSpecific={ true }
          preventDuplicatePosts={ preventDuplicatePosts }
          onPreventDuplicatePostsChange={ _preventDuplicatePosts => {
            setAttributes( { preventDuplicatePosts: _preventDuplicatePosts } )
          } }
          numberOfItems={ postsToShow }
          onNumberOfItemsChange={ _postsToShow => {
            setAttributes( { postsToShow: _postsToShow } )
          } }
          loadingMode={ loadingMode }
          onLoadingModeChange={ _loadingMode =>
            setAttributes( { loadingMode: _loadingMode } )
          }
          specificPosts={ specificPosts }
          onSpecificPostsChange={ _specificPosts =>
            setAttributes( { specificPosts: _specificPosts } )
          }
          authors={ authors }
          onAuthorsChange={
            _authors => setAttributes( { authors: _authors } )
          }
          categories={ categories }
          onCategoriesChange={
            _categories => setAttributes( { categories: _categories } )
          }
          tags={ tags }
          onTagsChange={ _tags => {
            setAttributes( { tags: _tags } );
          } }
        /> }
      </ControlsTab>
    </ControlsSection>
  )
};

export default Controls;
