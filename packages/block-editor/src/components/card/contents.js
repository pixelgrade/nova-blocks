import { TextPlaceholder } from "@novablocks/components";
import { RawHTML } from "@wordpress/element";

export const CardButton = ( props ) => {

  return (
    <div className="wp-block-button is-style-text">
      <div className="wp-block-button__link">
        <div className="novablocks-card__buttons-size-modifier">
          { props.children }
        </div>
      </div>
    </div>
   )
}

const withVisibilityAndPlaceholder = ( WrappedComponent ) => {

  return ( props ) => {

    const { show, placeholder } = props;

    if ( ! show && ! placeholder ) {
      return null;
    }

    return <WrappedComponent { ...props } />
  }
}

export const CardTitle = withVisibilityAndPlaceholder( ( props ) => {

  const {
    placeholder,
    children
  } = props;

  const TitleTagName = props.titleTagName || 'h3';

  return (
    <TitleTagName className={ 'wp-block novablocks-grid__item-title novablocks-card__title' }>
      <span className="novablocks-card__title-size-modifier">
        { ! placeholder ? children : <TextPlaceholder/> }
      </span>
    </TitleTagName>
  );
} );

export const CardMeta = withVisibilityAndPlaceholder( ( props ) => {

  const {
    placeholder,
    children,
  } = props;

  if ( ! placeholder && ! children ) {
    return null;
  }

  return (
    <div className="novablocks-grid__item-meta novablocks-card__meta is-style-meta">
      <div className="novablocks-card__meta-size-modifier">
        { ! placeholder ? children : <TextPlaceholder rows={ 1 } /> }
      </div>
    </div>
  )
} );

export const CardDescription = withVisibilityAndPlaceholder( ( props ) => {

  const {
    placeholder,
    children,
  } = props;

  const wrapperClassName = 'wp-block novablocks-grid__item-description novablocks-card__description';
  const fontSizeClassName = 'novablocks-card__description-size-modifier';

  return (
    <p className={ wrapperClassName }>
      <span className={ fontSizeClassName }>
        { ! placeholder ? children : <TextPlaceholder rows={ 3 } /> }
      </span>
    </p>
  );
} );

export const CardFooter = withVisibilityAndPlaceholder( ( props ) => {

  const {
    placeholder,
    children,
  } = props;

  return (
    <div className="wp-block novablocks-grid__item-buttons novablocks-card__buttons">
      <div className="novablocks-card__buttons-size-modifier">
        { ! placeholder ? children : <TextPlaceholder rows={ 1 } /> }
      </div>
    </div>
  );
} );

