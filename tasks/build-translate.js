const gulp = require('gulp'),
  fs = require( 'fs' ),
  cp = require( 'child_process' ),
  log = require('fancy-log'),
  plugins = require('gulp-load-plugins')()

const gulpconfig = require('./gulpconfig.json');
const {sync: commandExistsSync} = require('command-exists')

const slug = gulpconfig.slug,
  packageName = gulpconfig.packagename,
  textdomain = gulpconfig.textdomain,
  bugReport = gulpconfig.bugreport

// -----------------------------------------------------------------------------
// Replace the plugin's text domain with the actual text domain.
// -----------------------------------------------------------------------------
function pluginTextdomainReplace (done) {
  if (!fs.existsSync('../build/' + slug)) {
    log.error('The build folder (`'+'../build/' + slug+'`) is missing!')
    log.error('Aborting...')
    done(new Error('missing_build_folder'))
  }

  return gulp.src([
    '../build/' + slug + '/**/*.php',
    '../build/' + slug + '/**/*.js',
    '../build/' + slug + '/**/*.css',
    '../build/' + slug + '/**/*.pot'
  ])
    .pipe(plugins.replace(/__plugin_txtd/g, textdomain))
    .pipe(gulp.dest('../build/' + slug))
}

pluginTextdomainReplace.description = 'Replace the __plugin_txtd text-domain placeholder with the actual text-domain, in the build files.'
gulp.task('build:translate:replacetxtdomain', pluginTextdomainReplace)

function generatePotFile (done) {
  if (!fs.existsSync('../build/' + slug)) {
    log.error('The build folder (`'+'../build/' + slug+'`) is missing!')
    log.error('Aborting...')
    done(new Error('missing_build_folder'))
  }

  if (!commandExistsSync('wp')) {
    log.error('Could not generate the pot file since the wp command is missing. Please install the WP CLI!')
    log.error('The build task will continue.')
  } else {
    cp.execSync('wp i18n make-pot ../build/' + slug + '/ ../build/' + slug + '/languages/' + slug + '.pot',
      {
        stdio: 'inherit' // Use the same console as the io for the child process.
      }
    );
  }

  return done();
}

generatePotFile.description = 'Scan the build files and generate the .pot file.'
gulp.task('build:translate:generatepot', generatePotFile)

gulp.task('build:translate', gulp.series(
  'build:translate:replacetxtdomain',
  'build:translate:generatepot'
))
