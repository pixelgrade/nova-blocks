import classnames from 'classnames';
import { useState } from '@wordpress/element';

const ImageSelectControl = props => {
  const [ active, setActive ] = useState( selected );
  const { options, selected } = props;
  const onChange = typeof props.onChange === "function" ? props.onChange : () => {};

  return (
    <div className="components-base-control components-image-select-control">
      { options.map( option => {
        return (
          <div
            key={ option.slug }
            role={ "button" }
            aria-label={ option.label }
            onClick={ () => {
              setActive( option.slug );
              onChange( option.slug );
            } }
            className={ classnames(
              'components-image-select-control__option',
              { 'components-image-select-control__option--selected': option.slug === selected }
            ) }>
            <div className="components-image-select-control__image">
              <img src={ option.src } alt={ option.label } />
            </div>
            <div className="components-image-select-control__label">{ option.label }</div>
          </div>
        )
      } ) }
    </div>
  )
}

export default ImageSelectControl;
