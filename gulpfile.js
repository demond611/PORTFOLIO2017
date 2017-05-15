var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvariables = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');



gulp.task('default', function(){

	console.log("DEFAULT TASK");

});

gulp.task('html', function(){

	console.log("LOGGING HTML CHANGES");

});

gulp.task('styles', function(){
	
	return gulp.src('./app/assets/styles/styles.css') // css source
		.pipe(postcss([cssImport, nested, cssvariables, autoprefixer])) // css manipuations
		.pipe(gulp.dest('./app/temp/styles')); // temp css save location

});

gulp.task('watch', function(){

	watch('./app/index.html', function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});

});