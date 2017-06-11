var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
// critical = require('critical'),
browserSync = require('browser-sync').create();


gulp.task('previewDist', function(){
	browserSync.init({
		notify: false,
		server: {
			baseDir: "docs"
		}
	});
});


gulp.task('deleteDistFolder', ['icons'], function(){
	return del("./docs")
});

gulp.task('optimizeImages', ['deleteDistFolder'], function(){
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function(){
	gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'], function(){
	return gulp.src('./app/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()}, function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs'))
});

// Generate & Inline Critical-path CSS
// gulp.task('critical', ['useminTrigger'], function(cb){
// 	critical.generate({
//         inline: true,
//         base: './app',
//         src: 'index.html',
//         dest: 'index.html',
//         minify: true,
//         width: 320,
//         height: 480
//     });
// });

gulp.task('build', ['optimizeImages', 'deleteDistFolder', 'useminTrigger']);
// gulp.task('build', ['optimizeImages', 'deleteDistFolder', 'useminTrigger', 'critical']);