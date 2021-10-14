import { __ } from "@wordpress/i18n";
import { createBlock } from "@wordpress/blocks";
import { SelectControl } from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";
import { ControlsSection, ControlsTab, QueryControls } from "../../components";

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
    sourceType
  } = attributes;

  const loadPosts = sourceType === 'content';

  return (
    <ControlsSection id={ 'content-loader' } label={ __( 'Content Loader' ) } group={ __( 'Input' ) } order={ 10 }>
      <ControlsTab label={ __( 'Settings' ) }>
        <SelectControl
          key={ 'collection-source-type' }
          label={ __( 'Source Type', '__plugin_txtd' ) }
          value={ sourceType }
          options={ [
            { label: 'Content', value: 'content' },
            { label: 'Blocks', value: 'blocks' },
            { label: 'Fields', value: 'fields' },
          ] }
          onChange={ sourceType => {
            setAttributes( { sourceType } );
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
}

export default Controls;
