import {createHigherOrderComponent} from "@wordpress/compose";

const withEmphasisAreaEditCustomProps = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const {attributes} = props;

    const {emphasisArea} = attributes;

    const style = props.style ? props.style : {};

    let colorSignalProps = {'--nb-collection-emphasis-area': emphasisArea}

    Object.assign( style, colorSignalProps );

    return (
      <OriginalComponent {...props} style={style}/>
    )
  };
}, 'withEmphasisAreaEditCustomProps' )

export default withEmphasisAreaEditCustomProps;
