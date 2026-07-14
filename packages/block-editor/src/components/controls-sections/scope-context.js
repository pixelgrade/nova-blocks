import { createContext } from "@wordpress/element";

// Carries { placement, blockName } down to anything nested inside a section's
// content that needs to address the same drawer memory-state scope as the
// Drawers/ActiveSectionTabs instance it lives in (e.g. SectionLink deep-links).
const ControlsSectionsScopeContext = createContext( { placement: 'styles', blockName: '' } );

export default ControlsSectionsScopeContext;
