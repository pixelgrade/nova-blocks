import {__} from "@wordpress/i18n";

import { getMeta } from './utils';

import {
  Card,
  CardMediaWrapper,
  CardMeta,
  CardTitle,
  CardDescription,
  CardFooter,
  CardButton
} from "../card";

export const CardPreview = ( props ) => {

  const {
    attributes,
    post
  } = props;

  const {
    showMeta,
    showTitle,
    showDescription,
    showButtons,
  } = attributes;

  const {
    metaAboveTitle,
    metaBelowTitle,
  } = getMeta( props );

  return (
    <Card {...props} >
      <CardMeta show={showMeta}>{metaAboveTitle}</CardMeta>
      <CardTitle show={showTitle}>{post.title.raw}</CardTitle>
      <CardMeta show={showMeta}>{metaBelowTitle}</CardMeta>
      <CardDescription show={showDescription}>{post.excerpt.raw}</CardDescription>
      <CardFooter show={showButtons}>
        <CardButton>{__( 'Read More' )}</CardButton>
      </CardFooter>
    </Card>
  )
}


