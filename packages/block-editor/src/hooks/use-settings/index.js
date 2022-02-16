import { useSelect } from "@wordpress/data";

const useSettings = ( mapSelect = 'novablocks', deps = [] ) => {
  return useSelect( ( select ) => select( mapSelect ).getSettings(), deps );
};

export default useSettings;
