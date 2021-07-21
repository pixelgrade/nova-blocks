import classnames from "classnames";
import { select } from "@wordpress/data";
import { getIcon } from "@novablocks/icons";
import {
  getComputedVariationFromParents,
  getSiteColorVariation,
  normalizeVariationValue,
  getPaletteConfig,
  arrayRotate, getSignalRelativeToVariation,
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
  const { getBlockParents } = select( 'core/block-editor' );
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

  const parents = getBlockParents( clientId );

  let parentVariation = 1;

  if ( Array.isArray( parents ) && parents.length ) {
    parentVariation = getComputedVariationFromParents( parents[ parents.length - 1 ] );
  }

  const anotherOffset = parentVariation - 1;
  const variations = Array.from( Array( 12 ) ).map( ( undefined, index ) => index + 1 );
  const selectedOffset = useSourceColorAsReference ? sourceIndex : 0;
  const selectedVariation = normalizeVariationValue( getComputedVariationFromParents( clientId ) + selectedOffset );

  arrayRotate( variations, anotherOffset );

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
          { variations.map( currentVariation => {
            let content = '';

            const isSelected = selectedVariation === currentVariation;
            const isSource = normalizeVariationValue( sourceIndex + 1 ) === currentVariation;

            const className = classnames(
              `nb-palette__grade`,
              `sm-palette-${ palette }`,
              `sm-variation-${ currentVariation }`,
              {
                'nb-palette__grade--selected': isSelected,
                'nb-palette__grade--source': isSource,
              }
            );

            if ( isSelected ) { content = getIcon( 'tick' ) }
            if ( isSource ) { content = getIcon( 'star' ) }

            return (
              <div className={ className } onClick={ () => { onChange( currentVariation ) } }>
                <div className="nb-palette__grade-surface" />
                <div className="nb-palette__grade-icon" dangerouslySetInnerHTML={ { __html: content } } />
              </div>
            )
          } ) }
        </div>
        <div className={ "nb-palette__signal-previews" } style={ { display: "flex" } }>
          { variations.map( currentVariation => {
            const signal = getSignalRelativeToVariation( currentVariation, parentVariation );

            return (
              <div className={ `nb-palette__signal-preview nb-palette__signal-preview--${ signal }` } />
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
