import { progressBarInit } from "./progress-bar";
import { readingHeaderInit } from "./reading-header";
import { syncColorSignalClasses } from "../utils";

( function() {

  // Reading Progress Bar should
  // exist only on articles.
  if ( ! isArticle ) {
    return;
  }

  const $readingBar = $currentHeader.find( '.js-reading-bar' );
  const $firstRow = $currentHeader.find( '.novablocks-header-row' ).first();

  syncColorSignalClasses( $firstRow.get(0), $readingBar.get(0) );

  progressBarInit();
  readingHeaderInit();

} )();
