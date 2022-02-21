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
      label={ __( 'Collection Content' ) }
      group={ __( 'Block Anatomy' ) }
      order={ 10 }>
      <ControlsTab label={ __( 'Settings' ) }>
        <SelectControl
          key={ 'collection-content-type' }
          label={ __( 'Content Type', '__plugin_txtd' ) }
          value={ contentType }
          options={ [
            { label: 'Automatic Blocks', value: 'auto' },
            { label: 'Blocks with pre-defined fields', value: 'fields' },
            { label: 'Custom Blocks', value: 'custom' },
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
