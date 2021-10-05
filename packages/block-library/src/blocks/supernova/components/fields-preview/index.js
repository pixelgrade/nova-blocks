import { Fragment } from "@wordpress/element";
import { CardButton, CardDescription, CardFooter, CardMeta, CardTitle } from "@novablocks/block-editor";

const FieldsPreview = ( props ) => {

  const {
    attributes: {
      metaAboveTitle,
      title,
      metaBelowTitle,
      description,
      showMeta,
      showTitle,
      showDescription,

      buttonText,
      showButtons,
    }
  } = props;

  return (
    <Fragment>
      <CardMeta show={ showMeta }>{ metaAboveTitle }</CardMeta>
      <CardTitle show={ showTitle }>{ title }</CardTitle>
      <CardMeta show={ showMeta }>{ metaBelowTitle }</CardMeta>
      <CardDescription show={ showDescription }>{ description }</CardDescription>
      <CardFooter show={ showButtons && !! buttonText }>
        <CardButton>{ buttonText }</CardButton>
      </CardFooter>
    </Fragment>
  )
}

export default FieldsPreview;
