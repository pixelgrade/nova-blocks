import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";

const PreviewScrollingButton = ( props ) => {

  const {
    isScrolling,
    previewScrolling,
  } = props;

  return (
    <div>
      <Button
        isLarge
        isPrimary
        disabled={ !! isScrolling }
        onClick={ previewScrolling }>{ __( 'Preview Scrolling', '__plugin_txtd' ) }</Button>
    </div>
  )
}

export default PreviewScrollingButton;
