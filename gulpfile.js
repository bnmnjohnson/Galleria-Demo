//Dependancies for gulpfile
var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var browserSync = require('browser-sync');
var notify 		= require('gulp-notify');
var reload      = browserSync.reload;


//Compile and compress SASS, notify if there's an error
gulp.task('build', function(){
	return gulp.src("src/scss/*.scss")
	.pipe(sass({
		style: 'compressed',
		errLogToConsole: false,
		onError: function(err){
			return notify().write(err);
		}
	}))
    .pipe(gulp.dest("./src/css/"))
    .pipe(reload({stream: true}));
})


//Serve to browser
gulp.task('serve', function(){
	browserSync({
	        server: {
	            baseDir: "./"
	        },
	        open: false
	    });
	gulp.watch("src/scss/*.scss", ['build']);
    gulp.watch("./*.html").on('change', reload);
    gulp.watch("./bower_components/**/*").on('change', reload);
})

//Start the server using 'gulper gulp'
gulp.task('default', ['serve'])