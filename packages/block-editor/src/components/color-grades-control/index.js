import classnames from 'classnames';
import { getIcon } from "@novablocks/icons";
import {
  getSiteColorVariation,
  normalizeVariationValue,
  getCurrentPaletteConfig
} from "@novablocks/utils";

const ColorGradesControl = ( props ) => {

  const {
    attributes,
    settings,
    label,
    value,
    signal,
  } = props;

  const onChange = props.onChange || (() => {});
  const siteVariation = getSiteColorVariation();

  const {
    palette,
    useSourceColorAsReference,
  } = attributes;

  const currentPalette = getCurrentPaletteConfig(props);
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

            const currentVariation = normalizeVariationValue( index + 1 - siteVariation + 1 );
            const actualSelectedIndex = ( ( useSourceColorAsReference ? value + sourceIndex - 1 : value - siteVariation ) + 12 ) % 12;

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
