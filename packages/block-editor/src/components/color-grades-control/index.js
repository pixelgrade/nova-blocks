import classnames from 'classnames';
import { getIcon } from "@novablocks/icons";

const ColorGradesControl = ( props ) => {

  const {
    attributes,
    settings,
    label,
    value,
  } = props;

  const onChange = props.onChange || (() => {});

  const {
    palette,
  } = attributes;

  const {
    palettes
  } = settings;

  const currentPalette = palettes.find( currentPalette => currentPalette.id === attributes.palette );
  const { sourceIndex } = currentPalette;

  return (
    <div className={ 'components-base-control components-nb-color-grades-control' }>
      <div className="components-base-control__field">
        <div className="components-base-control__label">{ label }</div>
      </div>
      <div className="nb-palette">
        <div className="nb-palette__grades">
          { Array.from( Array( 12 ) ).map( ( undefined, index ) => {
            let content = '';
            let modifier = '';

            const className = classnames(
              `nb-palette__grade`,
              `sm-palette-${ palette }`,
              `sm-variation-${ index + 1 }`,
              {
                'nb-palette__grade--selected': value === index + 1,
                'nb-palette__grade--source': sourceIndex === index,
              }
            );

            if ( value === index + 1 ) {
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
