import { Fragment } from "@wordpress/element";
import { __unstableStripHTML as stripHTML } from '@wordpress/dom';

import { CardButton, CardDescription, CardFooter, CardMeta, CardTitle, CardSubtitle } from "../../index";

const CardFieldsPreview = ( props ) => {

  const {
    attributes: {
      metaAboveTitle,
      title,
      subtitle,
      metaBelowTitle,
      description,
      showMeta,
      showTitle,
      showSubtitle,
      showDescription,

      buttonText,
      showButtons,
    }
  } = props;

  return (
    <Fragment>
      <CardMeta { ...props } show={ showMeta }>{ metaAboveTitle }</CardMeta>
      <CardTitle { ...props } show={ showTitle }>{ title }</CardTitle>
      <CardSubtitle { ...props } show={ showSubtitle }>{ subtitle }</CardSubtitle>
      <CardMeta { ...props } show={ showMeta }>{ metaBelowTitle }</CardMeta>
      <CardDescription { ...props } show={ showDescription }>{ stripHTML( description ) }</CardDescription>
      <CardFooter { ...props } show={ showButtons && !! buttonText }>
        <CardButton { ...props }>{ buttonText }</CardButton>
      </CardFooter>
    </Fragment>
  )
};

export default CardFieldsPreview;
