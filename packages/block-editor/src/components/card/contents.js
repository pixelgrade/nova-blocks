import { TextPlaceholder } from "@novablocks/components";

export const CardButton = ( props ) => {

  return (
    <div className="wp-block-button is-style-text">
      <div className="wp-block-button__link">
        { props.children }
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
    <TitleTagName className={ 'nb-card__title' }>
      { ! placeholder ? children : <TextPlaceholder/> }
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
    <div className="nb-card__meta is-style-meta">
      { ! placeholder ? children : <TextPlaceholder rows={ 1 } /> }
    </div>
  )
} );

export const CardDescription = withVisibilityAndPlaceholder( ( props ) => {

  const {
    placeholder,
    children,
  } = props;

  const wrapperClassName = 'nb-card__description';

  return (
    <p className={ wrapperClassName }>
      { ! placeholder ? children : <TextPlaceholder rows={ 3 } /> }
    </p>
  );
} );

export const CardFooter = withVisibilityAndPlaceholder( ( props ) => {

  const {
    placeholder,
    children,
  } = props;

  return (
    <div className="nb-card__buttons">
      { ! placeholder ? children : <TextPlaceholder rows={ 1 } /> }
    </div>
  );
} );

