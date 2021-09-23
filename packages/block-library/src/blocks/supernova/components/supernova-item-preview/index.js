import { Fragment } from "@wordpress/element";
import { getSaveElement } from '@wordpress/blocks';

import {
  useInnerBlocks,
  Card,
  CardMediaWrapper,
  CardMeta,
  CardTitle,
  CardDescription,
  CardFooter,
  CardButton,
} from "@novablocks/block-editor";

import { MediaCompositionPreview } from "@novablocks/media-composition";

const SupernovaItemPreview = props => {

  const {
    attributes,
    colorSignal: {
      utils: {
        getColorSignalClassnames
      }
    }
  } = props;
  const className = getColorSignalClassnames( attributes, true );
  const { style, ...otherProps } = props;

  return (
    <Card { ...otherProps } className={ className }>
      <CardMediaWrapper { ...props }>
        <MediaCompositionPreview { ...props } />
      </CardMediaWrapper>
      { attributes.sourceType === 'fields' && <FieldsPreview { ...props } /> }
      { attributes.sourceType === 'blocks' && <InnerBlocksPreview { ...props } /> }
    </Card>
  )
}

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

const InnerBlocksPreview = props => {
  const { clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );

  return (
    innerBlocks.map( innerBlock => getSaveElement( innerBlock.name, innerBlock.attributes, innerBlock.innerBlocks ) )
  )
}

export default SupernovaItemPreview;
