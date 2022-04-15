import { Fragment } from "@wordpress/element";
import { __unstableStripHTML as stripHTML } from '@wordpress/dom';

import { CardButton, CardDescription, CardFooter, CardMeta, CardTitle } from "../../index";

const CardFieldsPreview = ( props ) => {

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
      <CardDescription show={ showDescription }>{ stripHTML( description ) }</CardDescription>
      <CardFooter show={ showButtons && !! buttonText }>
        <CardButton>{ buttonText }</CardButton>
      </CardFooter>
    </Fragment>
  )
};

export default CardFieldsPreview;
