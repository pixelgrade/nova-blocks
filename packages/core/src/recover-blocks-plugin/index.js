import { __ } from "@wordpress/i18n";
import { PluginSidebar } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';
import { Fragment } from "@wordpress/element";
import { more } from '@wordpress/icons';
import { Button, PanelBody } from "@wordpress/components";

import { recoverAllBlocks } from "./recover-blocks";

import { tool } from '@wordpress/icons';

const NovaBlocksToolsPlugin = () => (
  <PluginSidebar name="novablocks-tools" title={ __( 'Nova Blocks Tools', '__plugin_txtd' ) } icon={ tool }>
    <PanelBody title={ __( 'Blocks', '__plugin_txtd' ) }>
      <Button isPrimary onClick={ recoverAllBlocks }>Recover Blocks</Button>
    </PanelBody>
  </PluginSidebar>
);

registerPlugin( 'novablocks-tools', { render: NovaBlocksToolsPlugin } );
