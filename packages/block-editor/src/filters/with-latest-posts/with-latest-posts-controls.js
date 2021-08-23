import { createHigherOrderComponent } from "@wordpress/compose";
import { useSupports } from "../../hooks";
import { Fragment } from "@wordpress/element";
import InspectorControls from "./inspector-controls";

const withLatestPostsControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.latestPosts ) {
      return (
        <OriginalComponent { ...props } />
      )
    }

    return (
      <Fragment>
        <OriginalComponent { ...props } />
        <InspectorControls { ...props } />
      </Fragment>
    )
  }
}, 'withLatestPostsControls' );

export default withLatestPostsControls;
