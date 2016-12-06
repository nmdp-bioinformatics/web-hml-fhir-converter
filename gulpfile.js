var gulp = require('gulp'),
    inject = require('gulp-inject'),
    webserver = require('gulp-webserver'),
    runSequence = require('run-sequence'),
    injectableFiles = [
        './app/**/*.js',
        './app/**/*.css'
    ],
    directories = {

    };

// Populates app/index.html with application js/css references.
// DO NOT ADD THESE MANUALLY!!!!
gulp.task('index', function () {
    var target = gulp.src('./app/index.html'),
        sources = gulp.src(injectableFiles, { read: false });

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./app'));
});

// Populates app/index.html with bower / node(npm) dependencies.
// DO NOT ADD THESE MANUALLY!!!!
gulp.task('wiredep', function() {
   var wiredep = require('wiredep').stream;

   gulp.src('app/*.html')
       .pipe(wiredep())
       .pipe(gulp.dest('app'));
});

// Using port 4567, please feel fre to adjust to meet your
// system's available ports.
gulp.task('webserver', function () {
   gulp.src('app')
       .pipe(webserver({
           livereload: true,
           fallback: 'app/index.html',
           directoryListing: {
               enable: true,
               path: 'app'
           },
           open: true,
           port: 4567
       }));
});

// This will run the default build for the development environment
// and spin up a development server. See 'webserver' task for conifg.
gulp.task('defaultServe', function (cb) {
    runSequence(['index', 'wiredep', 'webserver'], cb)
});

// This will run the default build and output to either the production
// or development environment. Please see readme.md for conig.
gulp.task('default', function (cb) {
    runSequence(['index', 'wiredep'], cb);
});