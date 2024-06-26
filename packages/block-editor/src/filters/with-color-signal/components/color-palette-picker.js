import classnames from "classnames";
import { getIcon } from "@novablocks/icons";

import { isFunctionalPalette } from "@novablocks/utils";

const ColorPalettePicker = ( props ) => {

  const {
    attributes,
    settings: {
      palettes,
    },
    showFunctionalColors,
    onChange,
  } = props;

  const {
    palette,
    paletteVariation,
    useSourceColorAsReference
  } = attributes;

  if( ! Array.isArray( palettes ) ) {
    return null;
  }

  const functionalColors = palettes.filter( palette => isFunctionalPalette( palette ) );
  const brandColors = palettes.filter( palette => ! isFunctionalPalette( palette ) );
  const visiblePalettes = showFunctionalColors ? functionalColors : brandColors;

  return (
    <div className="components-base-control color-palette-picker">
      <div className="color-palette-picker__palettes">
        { visiblePalettes.map( thisPalette => {
          const colors = thisPalette.source || [];
          const isSelected = palette === thisPalette.id;
          const isSourceSelected = ( isSelected && paletteVariation === 1 && useSourceColorAsReference );
          const icon = isSourceSelected ? 'star' : 'tick';
          const colorClassnames = classnames(
            "color-palette-picker__color",
            {
              "color-palette-picker__color--favorite": isSourceSelected
            }
          );

          return (
            <button key={ thisPalette.id } className={ colorClassnames } style={ { color: colors[0] } } onClick={ () => {
              onChange( thisPalette.id );
            } }>
              <svg className="color-palette-picker__color-svg" width="48" height="48" viewBox="0 0 48 48">
                <circle className="color-palette-picker__color-dash" stroke="none" fill="none" r="20" cx="24" cy="24" />
                <circle className="color-palette-picker__color-fill" fill="currentColor" r="17" cx="24" cy="24" />
              </svg>
              { isSelected && <div className="color-palette-picker__tick" dangerouslySetInnerHTML={ { __html: getIcon( icon ) } } /> }
            </button>
          )
        } ) }
      </div>
    </div>
  )
};

export default ColorPalettePicker;
