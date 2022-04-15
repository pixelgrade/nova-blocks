import { useContext } from "@wordpress/element";

import context from '../../context';

const useScrollingEffect = () => {
  return useContext( context );
};

export default useScrollingEffect;
