import { TextPlaceholder } from "@novablocks/components";
import { RawHTML } from "@wordpress/element";

export const CardButton = ( props ) => {

  return (
    <div className="wp-block-button is-style-text">
      <div className="wp-block-button__link">
        <div className="novablocks-buttons-size-modifier">
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
      <div className="novablocks-card__title-size-modifier">
        { ! placeholder ? children : <TextPlaceholder/> }
      </div>
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
    <div className="wp-block novablocks-grid__item-meta">
      <div className="novablocks-card__meta is-style-meta">
        <div className="novablocks-card__meta-size-modifier">
          { ! placeholder ? children : <TextPlaceholder rows={ 1 } /> }
        </div>
      </div>
    </div>
  )
} );

export const CardDescription = withVisibilityAndPlaceholder( ( props ) => {

  const {
    placeholder,
    children,
  } = props;

  const wrapperClassName = 'wp-block novablocks-grid__item-content novablocks-card__content';
  const fontSizeClassName = 'novablocks-card__content-size-modifier';

  if ( placeholder ) {
    return (
      <div className={ wrapperClassName }>
        <div className={ fontSizeClassName }>
          <TextPlaceholder rows={ 3 } />
        </div>
      </div>
    );
  }

  return (
    <div className={ wrapperClassName }>
      <RawHTML className={ fontSizeClassName }>
        { children }
      </RawHTML>
    </div>
  );
} );

export const CardFooter = withVisibilityAndPlaceholder( ( props ) => {

  const {
    placeholder,
    children,
  } = props;

  return (
    <div className="wp-block novablocks-grid__item-buttons novablocks-card__buttons">
      { ! placeholder ? children : <TextPlaceholder rows={ 1 } /> }
    </div>
  );
} );

