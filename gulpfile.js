var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("CREATED A GULP TASK");
});


gulp.task('html', function(){
	console.log("HTML CHANGES WERE MADE");
});

gulp.task('styles', function(){
	console.log("CSS PREPROCESSOR WOULD GO HERE");
});


gulp.task('watch', function(){

	watch('./app/index.html', function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});

});