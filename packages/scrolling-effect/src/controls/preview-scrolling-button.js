import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";

import { withScrollingEffectPreview } from '../components';

const PreviewScrollingButton = withScrollingEffectPreview( props => {

  const {
    isScrolling,
    previewScrolling,
  } = props;

  return (
    <div>
      <Button
        islarge="true"
        isPrimary
        disabled={ !! isScrolling }
        onClick={ previewScrolling }>{ __( 'Preview Scrolling', '__plugin_txtd' ) }</Button>
    </div>
  )
} );

export default PreviewScrollingButton;
