import classnames from 'classnames';
import { getIcon } from "@novablocks/icons";
import {
  getComputedVariationFromParents,
  getSiteColorVariation,
  normalizeVariationValue,
  getPaletteConfig,
} from "@novablocks/utils";

const ColorGradesControl = ( props ) => {

  const {
    attributes,
    label,
    signal,
    clientId,
  } = props;

  const onChange = props.onChange || (() => {});
  const siteVariation = getSiteColorVariation();

  const {
    palette,
    useSourceColorAsReference,
  } = attributes;

  const currentPalette = getPaletteConfig( palette );
  const { sourceIndex } = currentPalette;

  const iconClassName = classnames(
    `nb-signal-icon`,
    {
      [ `nb-signal-icon--none` ]: signal === 0,
      [ `nb-signal-icon--low` ]: signal === 1,
      [ `nb-signal-icon--medium` ]: signal === 2,
      [ `nb-signal-icon--high` ]: signal === 3,
    }
  );

  const parents = wp.data.select( 'core/block-editor' ).getBlockParents( clientId );

  let offset = 0;

  if ( Array.isArray( parents ) && parents.length ) {
    offset = getComputedVariationFromParents( parents[ parents.length - 1 ] ) - 1;
  }

  return (
    <div className={ 'components-base-control components-nb-color-grades-control' }>
      <div className="components-base-control__field">
        <div className="components-base-control__label">{ label }</div>
        <div className="components-base-control__label-icon">
          <div className={ iconClassName }>
            <div className="nb-signal-icon__bar" />
            <div className="nb-signal-icon__bar" />
            <div className="nb-signal-icon__bar" />
          </div>
        </div>
      </div>
      <div className="nb-palette">
        <div className="nb-palette__grades">
          { Array.from( Array( 12 ) ).map( ( undefined, index ) => {
            let content = '';
            let modifier = '';

            const selected = getComputedVariationFromParents( clientId ) - offset;
            const currentVariation = normalizeVariationValue( index + 1 - siteVariation + offset  + 1 );
            const actualSelectedIndex = ( ( useSourceColorAsReference ? selected + sourceIndex - 1 : selected - siteVariation ) + 12 ) % 12;

            console.log( actualSelectedIndex );

            const className = classnames(
              `nb-palette__grade`,
              `sm-palette-${ palette }`,
              `sm-variation-${ currentVariation }`,
              {
                'nb-palette__grade--selected': actualSelectedIndex === index,
                'nb-palette__grade--source': sourceIndex === index,
              }
            );

            if ( actualSelectedIndex === index ) {
              content = getIcon( 'tick' );
            }

            if ( sourceIndex === index ) {
              content = getIcon( 'star' );
            }

            return (
              <div className={ className } onClick={ () => {
                onChange( index + 1 );
              } }>
                <div className="nb-palette__grade-surface" />
                <div className="nb-palette__grade-icon" dangerouslySetInnerHTML={ { __html: content } } />
              </div>
            )
          } ) }
        </div>
        <div className="nb-palette__labels">
          <div className="nb-palette__label nb-palette__label--1">1</div>
          <div className="nb-palette__label nb-palette__label--low">Low</div>
          <div className="nb-palette__label nb-palette__label--medium">Medium</div>
          <div className="nb-palette__label nb-palette__label--high">High</div>
          <div className="nb-palette__label nb-palette__label--12">12</div>
        </div>
      </div>
    </div>
  );
}

export default ColorGradesControl;
