import { useEffect, useState } from "@wordpress/element";
import { getEditorScrollContainer } from "../../utils";

const useScrollContainer = () => {
  const [ scrollContainer, setScrollContainer ] = useState( null );

  useEffect( () => {
    setScrollContainer( getEditorScrollContainer() );
  }, [] );

  return scrollContainer;
}

export default useScrollContainer;
