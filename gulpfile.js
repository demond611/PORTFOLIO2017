var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvariables = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();



gulp.task('default', function(){

	console.log("DEFAULT TASK");

});

gulp.task('html', function(){

	console.log("LOGGING HTML CHANGES");

});

gulp.task('styles', function(){
	// add 'return' to async operations
	return gulp.src('./app/assets/styles/styles.css') // css source
		.pipe(postcss([cssImport, nested, cssvariables, autoprefixer])) // css manipuations
		.pipe(gulp.dest('./app/temp/styles')); // temp css save location

});

gulp.task('watch', function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});

});

gulp.task('cssInject', ['styles'], function(){
	// add 'return' to async operations
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());

});