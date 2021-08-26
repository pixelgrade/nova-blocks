import context from '../../filters/with-doppler/context'
import { useContext } from "@wordpress/element";

const useDoppler = () => {
  return useContext( context );
}

export default useDoppler;
