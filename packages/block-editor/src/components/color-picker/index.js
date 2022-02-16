import classnames from "classnames";
import { v4 as uuidv4 } from 'uuid';

import { Fragment } from "@wordpress/element";

import { getIcon } from "@novablocks/icons";

const ColorPicker = ( props ) => {

  const {
    onChange,
    options,
    selected,
    favorite
  } = props;

  const icon = favorite ? 'star' : 'tick';

  return (
    <div className="components-base-control color-palette-picker">
      <div className="color-palette-picker__palettes">
        { options.map( option => {
          const { value, data, colors } = option;
          const gradientId = uuidv4();
          const isSelected = `${ selected }` === `${ value }`;
          const colorClassnames = classnames(
            "color-palette-picker__color",
            {
              "color-palette-picker__color--favorite": isSelected && favorite
            }
          );

          return (
            <button key={ value } className={ colorClassnames } style={ { color: colors[0] } } onClick={ () => {
              onChange( value );
            } }>
              <svg className="color-palette-picker__color-svg" width="48" height="48" viewBox="0 0 48 48">
                <defs>
                  <linearGradient id={ gradientId } x1="0%" y1="0%" x2="100%" y2="0%">
                    { colors.map( ( color, index, colors ) => {
                      const style = {
                        stopColor: color,
                        stopOpacity: 1
                      };

                      return (
                        <Fragment key={index}>
                          <stop offset={ `${ index * 100 / colors.length }%` } style={ style } />
                          <stop offset={ `${ ( index + 1 ) * 100 / colors.length }%` } style={ style } />
                        </Fragment>
                      );
                    } ) }
                  </linearGradient>
                </defs>
                <circle className="color-palette-picker__color-dash" stroke="none" fill="none" r="20" cx="24" cy="24" />
                <circle className="color-palette-picker__color-fill" fill={ `url(#${ gradientId })` } r="17" cx="24" cy="24" />
              </svg>
              { isSelected && <div className="color-palette-picker__tick" dangerouslySetInnerHTML={ { __html: getIcon( icon ) } } /> }
            </button>
          )
        } ) }
      </div>
    </div>
  )
};

export default ColorPicker;
