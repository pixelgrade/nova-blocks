const recursivelyRecoverInvalidBlockList = blocks => {
  const _blocks = [ ...blocks ]
  let recoveryCalled = false
  const recursivelyRecoverBlocks = willRecoverBlocks => {
    willRecoverBlocks.forEach( _block => {
      if ( isInvalid( _block ) ) {
        recoveryCalled = true
        const newBlock = recoverBlock( _block )
        for ( const key in newBlock ) {
          _block[ key ] = newBlock[ key ]
        }
      }

      if ( _block.innerBlocks.length ) {
        recursivelyRecoverBlocks( _block.innerBlocks )
      }
    } )
  }

  recursivelyRecoverBlocks( _blocks )
  return [ _blocks, recoveryCalled ]
}

const recoverBlock = ( { name, attributes, innerBlocks } ) =>
  wp.blocks.createBlock( name, attributes, innerBlocks );

const recoverBlocks = blocks => {
  return blocks.map( _block => {
    const block = _block

    // If the block is a reusable block, recover the Stackable blocks inside it.
    if ( _block.name === 'core/block' ) {
      const { attributes: { ref } } = _block
      const parsedBlocks = wp.blocks.parse( wp.data.select( 'core' ).getEntityRecords( 'postType', 'wp_block', { include: [ ref ] } )?.[ 0 ]?.content?.raw ) || []

      const [ recoveredBlocks, recoveryCalled ] = recursivelyRecoverInvalidBlockList( parsedBlocks )

      if ( recoveryCalled ) {
        console.log( 'Stackable notice: block ' + block.name + ' (' + block.clientId + ') was auto-recovered, you should not see this after saving your page.' ) // eslint-disable-line no-console
        return {
          blocks: recoveredBlocks,
          isReusable: true,
          ref,
        }
      }
    }

    if ( block.innerBlocks && block.innerBlocks.length ) {
      const newInnerBlocks = recoverBlocks( block.innerBlocks )
      if ( newInnerBlocks.some( block => block.recovered ) ) {
        block.innerBlocks = newInnerBlocks
        block.replacedClientId = block.clientId
        block.recovered = true
      }
    }

    if ( ! block.isValid ) {
      const newBlock = recoverBlock( block )
      newBlock.replacedClientId = block.clientId
      newBlock.recovered = true
      console.log( 'Stackable notice: block ' + block.name + ' (' + block.clientId + ') was auto-recovered, you should not see this after saving your page.' ) // eslint-disable-line no-console

      return newBlock
    }

    return block
  } )
}

export const recoverAllBlocks = () => {
  // Recover all the blocks that we can find.
  const mainBlocks = recoverBlocks( wp.data.select( 'core/editor' ).getEditorBlocks() )
  // Replace the recovered blocks with the new ones.
  mainBlocks.forEach( block => {
    if ( block.isReusable && block.ref ) {
      // Update the reusable blocks.
      wp.data.dispatch( 'core' ).editEntityRecord( 'postType', 'wp_block', block.ref, { content: wp.blocks.serialize( block.blocks ) } ).then( () => {
        // But don't save them, let the user do the saving themselves. Our goal is to get rid of the block error visually.
        // dispatch( 'core' ).saveEditedEntityRecord( 'postType', 'wp_block', block.ref )
      } )
    }

    if ( block.recovered && block.replacedClientId ) {
      wp.data.dispatch( 'core/block-editor' ).replaceBlock( block.replacedClientId, block )
    }
  } )
}
