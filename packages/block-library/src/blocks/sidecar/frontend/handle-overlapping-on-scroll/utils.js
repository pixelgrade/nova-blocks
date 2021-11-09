// Helper function to check if two boxes
// are overlapping. This is different compared to wouldOverlap()
// because in this case height is not important.
export const doBoxesOverlap = ( box1, box2 ) => {

  return !( box1.right < box2.left ||
            box1.left > box2.right ||
            box1.bottom < box2.top ||
            box1.top > box2.bottom );
}
