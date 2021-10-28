var fs = require( "fs" );
var gulp = require( "gulp" );
var plugin = 'nova-blocks';
var plugins = require( 'gulp-load-plugins' )();

// -----------------------------------------------------------------------------
// Create the plugin installer archive and delete the build folder
// -----------------------------------------------------------------------------
function makeZip() {
  var versionString = '';
  // get plugin version from the main plugin file
  var contents = fs.readFileSync("./" + plugin + ".php", "utf8");

  // split it by lines
  var lines = contents.split(/[\r\n]/);

  function checkIfVersionLine(value, index, ar) {
    var myRegEx = /^[\s\*]*[Vv]ersion:/;
    if (myRegEx.test(value)) {
      return true;
    }
    return false;
  }

  // apply the filter
  var versionLine = lines.filter(checkIfVersionLine);

  versionString = versionLine[0].replace(/^[\s\*]*[Vv]ersion:/, '').trim();
  versionString = '-' + versionString.replace(/\./g, '-');

  return gulp.src('./')
             .pipe( plugins.exec('cd ./../; rm -rf ' + plugin[0].toUpperCase() + plugin.slice(1) + '*.zip; cd ./build/; zip -r -X ./../' + plugin[0].toUpperCase() + plugin.slice(1) + versionString + '.zip ./; cd ./../; rm -rf build'));
}

makeZip.description = 'Create the plugin installer archive and delete the build folder';
gulp.task( 'make-zip', makeZip );
