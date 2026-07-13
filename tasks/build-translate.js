const gulp = require('gulp'),
  fs = require( 'fs' ),
  path = require( 'path' ),
  cp = require( 'child_process' ),
  log = require('fancy-log'),
  plugins = require('gulp-load-plugins')()

const gulpconfig = require('./gulpconfig.json');
const slug = gulpconfig.slug,
  packageName = gulpconfig.packagename,
  textdomain = gulpconfig.textdomain,
  bugReport = gulpconfig.bugreport

function isExecutable (filePath) {
  if (!filePath) return false

  try {
    fs.accessSync(filePath, fs.constants.X_OK)
    return true
  } catch (error) {
    return false
  }
}

function findOnPath (command) {
  const directories = String(process.env.PATH || '').split(path.delimiter)

  return directories
    .map(directory => path.join(directory, command))
    .find(isExecutable) || ''
}

function resolvePhpBinary () {
  if (isExecutable(process.env.NB_PHP_CLI)) {
    return process.env.NB_PHP_CLI
  }

  const localServices = path.join(
    process.env.HOME || '',
    'Library/Application Support/Local/lightning-services'
  )

  if (fs.existsSync(localServices)) {
    const localPhp = fs.readdirSync(localServices)
      .filter(name => /^php-8\./.test(name))
      .sort((first, second) => second.localeCompare(first, undefined, {numeric: true}))
      .map(name => path.join(localServices, name, 'bin/darwin-arm64/bin/php'))
      .find(isExecutable)

    if (localPhp) return localPhp
  }

  const pathPhp = findOnPath('php')
  if (pathPhp) return pathPhp

  throw new Error('missing_php_cli')
}

function getExecutableSource (filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8').slice(0, 512)
  } catch (error) {
    return ''
  }
}

function resolveWpCliExecutable () {
  const candidates = [
    process.env.NB_WP_CLI,
    findOnPath('wp'),
    '/usr/local/bin/wp',
  ].filter(Boolean)

  for (const candidate of candidates) {
    if (!isExecutable(candidate)) continue

    const source = getExecutableSource(candidate)
    if (/^#!.*\bphp\b/m.test(source) || source.includes('<?php')) {
      return candidate
    }

    const wrapperTarget = source.match(/^exec\s+(["']?)(\/[^\s"']+)\1\s+"\$@"/m)
    if (wrapperTarget && isExecutable(wrapperTarget[2])) {
      const targetSource = getExecutableSource(wrapperTarget[2])
      if (/^#!.*\bphp\b/m.test(targetSource) || targetSource.includes('<?php')) {
        return wrapperTarget[2]
      }
    }
  }

  throw new Error('missing_wp_cli')
}

// -----------------------------------------------------------------------------
// Replace the plugin's text domain with the actual text domain.
// -----------------------------------------------------------------------------
function pluginTextdomainReplace (done) {
  if (!fs.existsSync('../build/' + slug)) {
    log.error('The build folder (`'+'../build/' + slug+'`) is missing!')
    log.error('Aborting...')
    return done(new Error('missing_build_folder'))
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
    return done(new Error('missing_build_folder'))
  }

  try {
    const phpBinary = resolvePhpBinary()
    const wpCli = resolveWpCliExecutable()

    cp.execFileSync(
      phpBinary,
      [
        wpCli,
        'i18n',
        'make-pot',
        '../build/' + slug + '/',
        '../build/' + slug + '/languages/' + slug + '.pot',
      ],
      {
        stdio: 'inherit' // Use the same console as the io for the child process.
      }
    )
  } catch (err) {
    log.error('Could not generate the pot file: the `wp i18n make-pot` command failed.')
    log.error(err && err.message ? err.message : String(err))
    return done(err instanceof Error ? err : new Error(String(err)))
  }

  return done();
}

generatePotFile.description = 'Scan the build files and generate the .pot file.'
gulp.task('build:translate:generatepot', generatePotFile)

gulp.task('build:translate', gulp.series(
  'build:translate:replacetxtdomain',
  'build:translate:generatepot'
))
