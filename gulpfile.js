const gulp = require( 'gulp' );

const HubRegistry = require( 'gulp-hub' );

/* load some files into the registry */
const hub = new HubRegistry( ['tasks/*.js'] );

/* tell gulp to use the tasks just loaded */
gulp.registry( hub );

gulp.task( 'build', gulp.series( 'build:folder', 'build:fix', 'build:translate' ) );
gulp.task( 'zip', gulp.series( 'build:folder', 'build:fix', 'build:translate', 'build:zip' ) );
