import { useDispatch } from "@wordpress/data";
import { BlockControls } from "@wordpress/block-editor";
import { IconButton, Toolbar } from "@wordpress/components";
import { useCallback } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

const HeaderBlockControls = ( props ) => {
  const { clientId } = props;
  const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
  const removeInnerBlocks = useCallback( () => { replaceInnerBlocks( clientId, [] ) }, [ clientId ] );

  return (
    <BlockControls>
      <Toolbar group={ 'block' }>
        <IconButton
          className="components-icon-button components-toolbar__control"
          label={ __( 'Change Layout', '__plugin_txtd' ) }
          onClick={ removeInnerBlocks }
          icon="edit"
        />
      </Toolbar>
    </BlockControls>
  )
}

export default HeaderBlockControls;
