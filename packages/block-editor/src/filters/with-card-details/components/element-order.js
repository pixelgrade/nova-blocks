import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";
import { chevronUp, chevronDown } from "@wordpress/icons";

import { ControlsGroup, withVisibility } from "../../../components";

import {
  ELEMENT,
  getVisibleOrder,
  metasAreAdjacent,
  moveItem,
} from './element-order-utils';

const LABELS = {
  [ ELEMENT.META_PRIMARY ]:   __( 'Primary Metadata',   '__plugin_txtd' ),
  [ ELEMENT.META_SECONDARY ]: __( 'Secondary Metadata', '__plugin_txtd' ),
  [ ELEMENT.MEDIA ]:          __( 'Media',              '__plugin_txtd' ),
  [ ELEMENT.TITLE ]:          __( 'Title',              '__plugin_txtd' ),
  [ ELEMENT.SUBTITLE ]:       __( 'Subtitle',           '__plugin_txtd' ),
  [ ELEMENT.DESCRIPTION ]:    __( 'Description',        '__plugin_txtd' ),
  [ ELEMENT.BUTTONS ]:        __( 'Buttons',            '__plugin_txtd' ),
};

const ElementOrder = ( props ) => {

  const { attributes, setAttributes } = props;
  const order = getVisibleOrder( attributes );

  if ( ! order.length ) {
    return null;
  }

  const metasAdjacent = metasAreAdjacent( order );

  return (
    <ControlsGroup title={ __( 'Element Order', '__plugin_txtd' ) }>
      <ul className="novablocks-element-order">
        { order.map( ( id, index ) => {

          const prevId = index > 0 ? order[ index - 1 ] : null;
          const nextId = index < order.length - 1 ? order[ index + 1 ] : null;

          // Visual adjacency markers for meta rows: connect neighbouring
          // meta-primary + meta-secondary rows so the UI mirrors the rendered
          // card (both metadatas on the same line).
          const isMetaRow      = id === ELEMENT.META_PRIMARY || id === ELEMENT.META_SECONDARY;
          const adjacentTop    = isMetaRow && metasAdjacent && ( prevId === ELEMENT.META_PRIMARY || prevId === ELEMENT.META_SECONDARY );
          const adjacentBottom = isMetaRow && metasAdjacent && ( nextId === ELEMENT.META_PRIMARY || nextId === ELEMENT.META_SECONDARY );

          const classes = [
            'novablocks-element-order__item',
            `novablocks-element-order__item--${ id }`,
          ];
          if ( adjacentTop )    classes.push( 'is-meta-adjacent-top' );
          if ( adjacentBottom ) classes.push( 'is-meta-adjacent-bottom' );

          const upDisabled   = index === 0;
          const downDisabled = index === order.length - 1;

          const handleMove = ( direction ) => {
            const nextOrder = moveItem( order, index, direction );
            if ( nextOrder ) setAttributes( { elementOrder: nextOrder } );
          };

          return (
            <li key={ id } className={ classes.join( ' ' ) }>
              <span className="novablocks-element-order__handle" aria-hidden="true">≡</span>
              <span className="novablocks-element-order__label">{ LABELS[ id ] }</span>
              <span className="novablocks-element-order__actions">
                <Button
                  icon={ chevronUp }
                  isSmall
                  disabled={ upDisabled }
                  onClick={ () => handleMove( 'up' ) }
                  aria-label={ __( 'Move up', '__plugin_txtd' ) }
                />
                <Button
                  icon={ chevronDown }
                  isSmall
                  disabled={ downDisabled }
                  onClick={ () => handleMove( 'down' ) }
                  aria-label={ __( 'Move down', '__plugin_txtd' ) }
                />
              </span>
            </li>
          );
        } ) }
      </ul>
    </ControlsGroup>
  );
};

export default withVisibility( 'element-order' )( ElementOrder );
