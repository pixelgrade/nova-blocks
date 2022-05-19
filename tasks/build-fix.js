const gulp = require( 'gulp' ),
  cp = require( 'child_process' ),
  commandExistsSync = require('command-exists').sync,
  log = require('fancy-log'),
  plugins = require( 'gulp-load-plugins' )();

function maybeFixBuildDirPermissions( done ) {
  cp.execSync( 'find ./../build -type d -exec chmod 755 {} \\;' );
  return done();
}

maybeFixBuildDirPermissions.description = 'Make sure that all directories in the build directory have 755 permissions.';
gulp.task( 'build:fix:dir-permissions', maybeFixBuildDirPermissions );

function maybeFixBuildFilePermissions( done ) {
  cp.execSync( 'find ./../build -type f -exec chmod 644 {} \\;' );
  return done();
}

maybeFixBuildFilePermissions.description = 'Make sure that all files in the build directory have 644 permissions.';
gulp.task( 'build:fix:file-permissions', maybeFixBuildFilePermissions );

function maybeFixIncorrectLineEndings( done ) {
  if (!commandExistsSync('dos2unix')) {
    log.error('Could not ensure that line endings are correct on the build files since you are missing the "dos2unix" utility! You should install it.')
    log.error('However, this is not a very big deal. The build task will continue.')
  } else {
    cp.execSync('find ./../build -type f -print0 | xargs -0 -n 1 -P 4 dos2unix');
  }

  return done();
}

maybeFixIncorrectLineEndings.description = 'Make sure that all line endings in the files in the build directory are UNIX line endings.';
gulp.task( 'build:fix:line-endings', maybeFixIncorrectLineEndings );

gulp.task( 'build:fix', gulp.series(
  'build:fix:dir-permissions',
  'build:fix:file-permissions',
  'build:fix:line-endings',
) );
