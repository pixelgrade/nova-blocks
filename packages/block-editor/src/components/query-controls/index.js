/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import { RadioControl, SelectControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

import ManualControls from "./manual-controls";
import AutomatedControls from "./automated-controls";

const QueryControls = ( props ) => {

	const {
		enableSpecific,
		loadingMode,
    sticky,

		onLoadingModeChange,
    onStickyChange,
	} = props;

	return (
	  <Fragment>
      { enableSpecific && (
        <RadioControl
          label={ __( 'Posts loading type', '__plugin_txtd' ) }
          selected={ loadingMode }
          onChange={ onLoadingModeChange }
          options={ [
            { label: __( 'Automated (latest posts)' ), value: 'automated' },
            { label: __( 'Manual (specific posts)' ), value: 'manual' },
            { label: __( 'Inherited (current query)' ), value: 'inherited' },
          ] }
        />
      ) }
      { 'inherited' === loadingMode && (
        <SelectControl
          label={ __( 'Sticky posts' ) }
          options={ [
            { label: __( 'Include' ), value: '' },
            { label: __( 'Exclude' ), value: 'exclude' },
            { label: __( 'Only' ), value: 'only' },
          ] }
          value={ sticky }
          onChange={ onStickyChange }
          help={ __( 'Blog posts can be "stickied", a feature that places them at the top of the front page of posts, keeping it there until new sticky posts are published.' ) }
        />
      ) }
      <AutomatedControls { ...props } />
      <ManualControls { ...props } />
    </Fragment>
  )
};

export default QueryControls;
