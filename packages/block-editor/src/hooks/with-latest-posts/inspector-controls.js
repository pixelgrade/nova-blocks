import { __ } from "@wordpress/i18n";
import { createBlock } from "@wordpress/blocks";
import { SelectControl } from "@wordpress/components";
import { useSelect, dispatch } from "@wordpress/data";
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
    sourceType,
    sticky
  } = attributes;

  const itemsCount = useSelect( ( select ) => select( 'core/block-editor' ).getBlockCount( clientId ), [ clientId ] );
  const { innerBlocks } = useSelect( ( select ) => select( 'core/block-editor' ).getBlock( clientId ), [ clientId ] );

  return (
    <ControlsSection label={ __( 'Content Loader' ) } group={ __( 'Cards Manager' ) }>
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
        <QueryControls
          key={ 'query-controls' }
          enableSpecific={ true }
          preventDuplicatePosts={ preventDuplicatePosts }
          onPreventDuplicatePostsChange={ _preventDuplicatePosts => {
            setAttributes( { preventDuplicatePosts: _preventDuplicatePosts } )
          } }
          numberOfItems={ postsToShow }
          onNumberOfItemsChange={ _postsToShow => {
            const { replaceInnerBlocks } = dispatch( 'core/block-editor' );
            const newInnerBlocks = innerBlocks.slice( 0, _postsToShow );

            if ( _postsToShow > itemsCount ) {
              for ( let i = 0; i < _postsToShow - itemsCount; i++ ) {
                newInnerBlocks.push( createBlock( 'novablocks/supernova-item' ) );
              }
            }

            replaceInnerBlocks( clientId, newInnerBlocks );
            setAttributes( { postsToShow: _postsToShow } )
          } }
          loadingMode={ loadingMode }
          onLoadingModeChange={ _loadingMode =>
            setAttributes( { loadingMode: _loadingMode } )
          }
          sticky={ sticky }
          onStickyChange = { _sticky =>
            setAttributes( { sticky: _sticky } )
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
        />
      </ControlsTab>
    </ControlsSection>
  )
}

export default Controls;
