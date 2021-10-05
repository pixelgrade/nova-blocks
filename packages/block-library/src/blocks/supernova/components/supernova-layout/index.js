import { CollectionBody } from "@novablocks/collection";

const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;

const SupernovaLayout = props => {

  const { attributes } = props;
  const { preview } = attributes;

  const innerBlocksProps = useInnerBlocksProps( {
    className: props.className,
  }, {
    allowedBlocks: [ 'novablocks/supernova-item' ],
    renderAppender: false,
    templateInsertUpdatesSelection: false
  } );

  if ( preview ) {
    return (
      <CollectionBody { ...props } />
    )
  }

  return (
    <CollectionBody { ...props } { ...innerBlocksProps } />
  )
}

export default SupernovaLayout;
