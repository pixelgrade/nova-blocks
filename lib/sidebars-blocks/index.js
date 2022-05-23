/**
 * WordPress dependencies
 */
const registerBlockType = wp.blocks.registerBlockType;
const useBlockProps = wp.blockEditor.useBlockProps;
const ServerSideRender = wp.serverSideRender;

window.addEventListener( 'load', () => {

  Object.values( novaBlocksSidebarsBlocks?.sidebars ).forEach( function( sidebar, i ) {

    if ( ! sidebar?.blockName || ! sidebar?.sidebarId ) {
      return;
    }

    registerBlockType( sidebar.blockName, {
      title: sidebar?.title ?? '(No title)',
      description: sidebar?.description ?? '',
      category: novaBlocksSidebarsBlocks?.categoryName ?? '',
      keywords: [ 'sidebar', sidebar.sidebarId ],
      icon: sidebar?.icon ?? 'welcome-widgets-menus',
      save: () => {
        return false;
      },
      edit: ( props ) => {
        const blockProps = useBlockProps();

        return (
          <div { ...blockProps }>
            <ServerSideRender
              block={ sidebar.blockName }
              attributes={ props.attributes }
            />
          </div>
        );
      },
    } );
  } );

} );
