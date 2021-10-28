const gulp = require( 'gulp' );

const wpPot = require( 'gulp-wp-pot' );
const sort = require( 'gulp-sort' );
const notify = require( 'gulp-notify' );

const watchPhp = './**/*.php';
const textDomain = '__plugin_txtd';
const translationDestination = './languages/nova-blocks.pot';
const packageName = 'Nova Blocks';

// -----------------------------------------------------------------------------
// Generate POT file from the build folder.
// -----------------------------------------------------------------------------
function translate() {
  return gulp
  .src( watchPhp )
  .pipe( sort() )
  .pipe(
    wpPot( {
      domain: textDomain,
      package: packageName,
      headers: false
    } )
  )
  .pipe( gulp.dest( translationDestination ) )
  .pipe(
    notify( {
      message: '\n\n✅ generate-pot — completed!\n',
      onLast: true
    } )
  );
}

translate.description = 'Generate POT File and move it to languages folder';

gulp.task( 'generate-pot', translate );
