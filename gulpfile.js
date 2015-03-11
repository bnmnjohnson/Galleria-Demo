var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

//Compile SASS
gulp.task('build', function(){
	return gulp.src("src/scss/*.scss")
	.pipe(sass())
        .pipe(gulp.dest("./src/css/"))
        .pipe(reload({stream: true}));
})

//Serve to browser
gulp.task('serve', function(){
	browserSync({
	        server: {
	            baseDir: "./"
	        }
	    });
	gulp.watch("src/scss/*.scss", ['build']);
    gulp.watch("./*.html").on('change', reload);
})

//Start the server
gulp.task('default', ['serve'])