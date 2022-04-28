import { TextPlaceholder } from "../../components";
import { useMemo } from "@wordpress/element";
import { getAlignFromMatrix } from "@novablocks/utils";

export const CardButton = ( { attributes, children } ) => {

  const style = useMemo( () => {
    const contentAlign = getAlignFromMatrix( attributes?.contentPosition );
    const style = { justifyContent: 'center' };

    if ( contentAlign[1] === 'left' ) {
      style.justifyContent = 'flex-start';
    }

    if ( contentAlign[1] === 'right' ) {
      style.justifyContent = 'flex-end';
    }

    return style;

  }, [ attributes ] );

  return (
    <div className="wp-block-buttons" style={ style }>
      <div
        className="wp-block-button sm-color-signal-1 is-style-text sm-palette-1 sm-palette--shifted sm-variation-1 sm-light"
        data-palette="1" data-palette-variation="1" data-color-signal="1" data-use-source-color-as-reference="true">
        <a className="wp-block-button__link">{ children }</a>
      </div>
    </div>
   )
};

const withVisibilityAndPlaceholder = ( WrappedComponent ) => {

  return ( props ) => {

    const { show, placeholder } = props;

    if ( ! show && ! placeholder ) {
      return null;
    }

    return <WrappedComponent { ...props } />
  }
};

export const CardTitle = withVisibilityAndPlaceholder( ( props ) => {

  const {
    attributes,
    placeholder,
    children,
  } = props;

  const TitleTagName = `h${ attributes?.cardTitleLevel }`;
  const titleClassName = `has-${ attributes?.cardTitleFontSize }-font-size`;

  return (

    <TitleTagName className={ `nb-card__title ${ titleClassName }` }>
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

