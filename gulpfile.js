var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('zip', function () {
	return gulp.src([
		'*',
		'*/**',
		'!./{node_modules,node_modules/**/*}',
		'!./gulpfile.js',
		'!./package.json',
		'!./package-lock.json',
		'!./.gitignore',
		'!./webpack.config.js'
	])
	           .pipe(zip('Nova-Blocks.zip'))
	           .pipe(gulp.dest('./../'));
});
