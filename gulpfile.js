var gulp = require('gulp'),
    inject = require('gulp-inject'),
    webserver = require('gulp-webserver'),
    injectableFiles = [
        './app/**/*.js',
        './app/**/*.css'
    ];

gulp.task('index', function () {
    var target = gulp.src('./app/index.html'),
        sources = gulp.src(injectableFiles, { read: false });

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./app'));
});

gulp.task('wiredep', function() {
   var wiredep = require('wiredep').stream;

   gulp.src('app/*.html')
       .pipe(wiredep())
       .pipe(gulp.dest('app'));
});

gulp.task('webserver', function () {
   gulp.src('app')
       .pipe(webserver({
           livereload: true,
           directoryListing: true,
           open: true,
           port: 4567
       }));
});