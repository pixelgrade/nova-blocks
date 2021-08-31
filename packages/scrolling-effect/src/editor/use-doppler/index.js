import { useContext } from "@wordpress/element";

import context from '../../context';

const useDoppler = () => {
  return useContext( context );
}

export default useDoppler;
