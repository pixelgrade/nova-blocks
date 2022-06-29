import { MenuItem } from '@wordpress/components';

const CustomMenuItem = ( props ) => {
  const { help, children, ...passedProps } = props;

  return (
    <MenuItem { ...passedProps }>
      <div className="novablocks-navigable-menu__item-wrap">
        <p className="novablocks-navigable-menu__item-label">{ children }</p>
        { help && <p className="novablocks-navigable-menu__item-help">{ help }</p> }
      </div>
    </MenuItem>
  )
}

export default CustomMenuItem;
