import classnames from 'classnames';
import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment, createPortal, useContext } from "@wordpress/element";
import { BlockList } from "@wordpress/block-editor";

import { useSupports } from "../../hooks";
import Controls from "./controls";
import { getDuotoneFilterSvg } from "@novablocks/utils";


const DuotoneFilter = ( props ) => {
  const { attributes, clientId } = props;
  const { overlayFilterDuotoneConfig, overlayFilterType } = attributes;
  const from = overlayFilterDuotoneConfig?.from;
  const to = overlayFilterDuotoneConfig?.to;
  const element = useContext( BlockList.__unstableElementContext );
  const id = `novablocks-duotone-${ clientId }`;

  if ( ! from || ! to || overlayFilterType !== 'duotone' ) {
    return null;
  }

  const svgMarkup = `
        ${ getDuotoneFilterSvg( [ from.hex, to.hex ], id ) }
        <style> .${ id } .nb-supernova-item__media-wrapper :is(img, video) { filter: url( #${ id } ); }</style>
    `;

  return element ? createPortal( <div dangerouslySetInnerHTML={ { __html: svgMarkup } } />, element ) : null;
};

const withOverlayFilterControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {
    const { attributes, clientId } = props;
    const supports = useSupports( props.name );

    const className = classnames(
      props.className,
      `novablocks-duotone-${ clientId }`
    );

    if ( supports?.novaBlocks?.overlayFilter !== true && supports?.novaBlocks?.overlayFilter?.controls !== true ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <OriginalComponent { ...props } className={ className } />
        <Controls { ...props } />
        <DuotoneFilter { ...props } />
      </Fragment>
    )
  };
}, 'withOverlayFilterControls' );

export default withOverlayFilterControls;
