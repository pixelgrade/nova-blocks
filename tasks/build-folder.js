const gulp = require( 'gulp' ),
  plugins = require( 'gulp-load-plugins' )(),
  fs = require( 'fs' ),
  del = require( 'del' );

const gulpconfig = require('./gulpconfig.json');
const path = require( 'path' );

const slug = gulpconfig.slug;

// -----------------------------------------------------------------------------
// Copy plugin folder outside in a build folder.
// -----------------------------------------------------------------------------
function copyFolder() {
  const dir = process.cwd();
  return gulp.src( './*' )
             .pipe( plugins.exec( 'rm -Rf ./../build; mkdir -p ./../build/' + slug + ';', {
               silent: true,
               continueOnError: true // default: false
             } ) )
             .pipe( plugins.rsync( {
               root: dir,
               destination: '../build/' + slug + '/',
               // archive: true,
               progress: false,
               silent: true,
               compress: false,
               recursive: true,
               emptyDirectories: true,
               clean: true,
               exclude: ['node_modules', 'tests', 'tasks', 'node-tasks']
             } ) );
}

copyFolder.description = 'Copy plugin production files to a separate build folder';
gulp.task( 'build:copy-folder', copyFolder );

// -----------------------------------------------------------------------------
// Remove unneeded files and folders from the build folder.
// -----------------------------------------------------------------------------
async function removeUnneededFiles() {
  const files_to_remove = [];
  const contents = fs.readFileSync( '.zipignore', 'utf8' );

  // Files that should not be present in build
  contents.split( /[\r\n]/ ).forEach( function( path ) {
    path = path.trim();

    // We will skip line starting with # since those are comments (as per the .gitignore standard).
    if ( path && !path.startsWith('#') ) {
      files_to_remove.push( '../build/' + slug + '/' + path );
    }
  } );

  return del.sync( files_to_remove, {force: true} );
}

removeUnneededFiles.description = 'Remove unneeded files and folders from the build folder';
gulp.task( 'build:remove-unneeded-files', removeUnneededFiles );

function removeEmptyFolders(done) {
  function cleanEmptyFoldersRecursively(folder) {

    const isDir = fs.statSync(folder).isDirectory();
    if (!isDir) {
      return;
    }
    let files = fs.readdirSync(folder);
    if (files.length > 0) {
      files.forEach(function(file) {
        var fullPath = path.join(folder, file);
        cleanEmptyFoldersRecursively(fullPath);
      });

      // re-evaluate files; after deleting subfolder
      // we may have parent folder empty now
      files = fs.readdirSync(folder);
    }

    if (files.length == 0) {
      console.log("Removing empty folder: ", folder);
      fs.rmdirSync(folder);
      return;
    }
  }
  cleanEmptyFoldersRecursively('./../build/' + slug + '/');

  return done();
}
removeEmptyFolders.description = 'Remove empty folders from the build folder';
gulp.task( 'build:remove-empty-folders', removeEmptyFolders );

gulp.task( 'build:folder', gulp.series(
  'build:copy-folder',
  'build:remove-unneeded-files',
  'build:remove-empty-folders'
) );
