import classnames from 'classnames';
import { addFilter } from "@wordpress/hooks";
import { useCallback, useContext, useEffect, useLayoutEffect, useState } from "@wordpress/element";
import { createHigherOrderComponent, useDebounce } from "@wordpress/compose";
import { BlockList } from "@wordpress/block-editor";
import { getElementBreakClasses } from "@novablocks/utils";

//const withCustomDefaultClassName = ( className, blockName ) => {
//  return `${ className } break-align-left break-align-right`;
//};

//addFilter( 'blocks.getBlockDefaultClassName', 'novablocks/default-block-break-align-classname', withCustomDefaultClassName );

const withBreakAlignClassname = createHigherOrderComponent( BlockListBlock => {

  return ( props ) => {
    const { attributes, clientId } = props;
    const { align } = props;
    const blockListElement = useContext( BlockList.__unstableElementContext );
    const id = `block-${ clientId }`;
    const [ breakClasses, setBreakClasses ] = useState( [] );

    const updateBreakClasses = useCallback( () => {
      const element = blockListElement.querySelector( `#${ id }` );

      if ( element ) {
        const newBreakClasses = getElementBreakClasses( element );
        setBreakClasses( newBreakClasses );
      }
    }, [] );

    const debouncedUpdate = useDebounce( updateBreakClasses, 100 );

    useEffect( () => {
      wp.data.subscribe( debouncedUpdate );
    }, [ debouncedUpdate ] );

    const newProps = {
      ...props,
      className: classnames(
        props.className,
        ...breakClasses
      )
    }

    return (
      <BlockListBlock { ...newProps } />
    )
  }
}, 'withBreakAlignClassname' );

addFilter( 'editor.BlockListBlock', 'novablocks/conditional-break-align-classname', withBreakAlignClassname );
