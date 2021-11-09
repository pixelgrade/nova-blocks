// Helper function to check if two boxes
// are overlapping. This is different compared to wouldOverlap()
// because in this case height is not important.
export const doOverlap = ( el1, el2 ) => {

  const el1Box = el1.getBoundingClientRect();
  const el2Box = el2.getBoundingClientRect();

  const el1Style = getComputedStyle( el1 );
  const el2Style = getComputedStyle( el2 );

  const el1MarginBottom = Math.max( parseInt( el1Style.marginBottom ), parseInt( el2Style.marginTop ) );
  const el2MarginBottom = Math.max( parseInt( el2Style.marginBottom ), parseInt( el1Style.marginTop ) );
  const el1MarginRight = Math.max( parseInt( el1Style.marginRight ), parseInt( el2Style.marginLeft ) );
  const el2MarginRight = Math.max( parseInt( el2Style.marginRight ), parseInt( el1Style.marginLeft ) );

  return !( el2Box.bottom + el2MarginBottom <= el1Box.top ||
            el2Box.top >= el1Box.bottom + el1MarginBottom ||
            el2Box.right + el2MarginRight <= el1Box.left ||
            el2Box.left >= el1Box.right + el1MarginRight );

}
