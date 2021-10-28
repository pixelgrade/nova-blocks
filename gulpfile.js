var gulp = require( 'gulp' ),
  HubRegistry = require( 'gulp-hub' );

/* load some files into the registry */
var hub = new HubRegistry( [ 'gulp-tasks/*.js' ] );

/* tell gulp to use the tasks just loaded */
gulp.registry( hub );

function zipSequence( cb ) {
  return gulp.series( 'generate-pot', 'build', 'make-zip' )( cb );
}

zipSequence.description = 'Creates the zip file';
gulp.task( 'zip', zipSequence );
