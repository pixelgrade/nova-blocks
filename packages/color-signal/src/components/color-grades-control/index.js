import classnames from "classnames";
import { getIcon } from "@novablocks/icons";

import {
  addSiteVariationOffset,
  getSignalRelativeToVariation,
  getSourceIndexFromPaletteId,
  normalizeVariationValue,
} from "../../utils";

import {
  getParentVariation,
} from "../../editor/utils";

const ColorGradesControl = ( props ) => {

  const {
    attributes,
    label,
    signal,
    clientId,
    value,
    useReference
  } = props;

  const onChange = props.onChange || (() => {});

  const {
    palette,
    useSourceColorAsReference,
  } = attributes;

  const sourceIndex = getSourceIndexFromPaletteId( palette );

  const iconClassName = classnames(
    `nb-signal-icon`,
    {
      [ `nb-signal-icon--none` ]: signal === 0,
      [ `nb-signal-icon--low` ]: signal === 1,
      [ `nb-signal-icon--medium` ]: signal === 2,
      [ `nb-signal-icon--high` ]: signal === 3,
    }
  );

  const parentVariation = getParentVariation( clientId );
  const variations = Array.from( Array( 12 ) ).map( ( undefined, index ) => index + 1 );
  const sourceOffset = useReference && useSourceColorAsReference ? sourceIndex : 0;
  const selectedVariation = normalizeVariationValue( value + sourceOffset );

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
            const isSource = sourceIndex + 1 === currentVariation;

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
        {
          props?.settings?.debug &&
          <div className={ "nb-palette__signal-previews" } style={ { display: "flex" } }>
            { variations.map( currentVariation => {
              const current = addSiteVariationOffset( currentVariation );
              const signal = getSignalRelativeToVariation( current, parentVariation );

              return (
                <div className="nb-palette__signal-preview-wrap">
                  <div className="nb-palette__signal-preview-wrap__above">{ current }</div>
                  <div className={ `nb-palette__signal-preview nb-palette__signal-preview--${ signal }` } />
                  <div className="nb-palette__signal-preview-wrap__below">{ parentVariation }</div>
                </div>
              )
            } ) }
          </div>
        }
      </div>
    </div>
  );
}

export default ColorGradesControl;
