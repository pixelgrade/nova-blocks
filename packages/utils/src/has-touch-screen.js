export const hasTouchScreen = function() {
  var hasTouchScreen = false;

  if ( "maxTouchPoints" in navigator ) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  } else if ( "msMaxTouchPoints" in navigator ) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0;
  } else {
    var mQ = window.matchMedia && matchMedia( "(pointer:coarse)" );
    if ( mQ && mQ.media === "(pointer:coarse)" ) {
      hasTouchScreen = !!mQ.matches;
    } else if ( 'orientation' in window ) {
      hasTouchScreen = true;
    } else {
      var UA = navigator.userAgent;
      hasTouchScreen = (
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test( UA ) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test( UA )
      );
    }
  }

  return hasTouchScreen;
};
