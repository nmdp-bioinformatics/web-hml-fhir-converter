var gulp = require('gulp'),
    inject = require('gulp-inject'),
    serve = require('gulp-serve'),
    wiredep = require('wiredep'),
    runSequence = require('run-sequence'),
    fileSort = require('gulp-angular-filesort'),
    browserSync = require('browser-sync'),
    browserSyncSpa = require('browser-sync-spa')
    injectableFiles = {
        js: 'src/app/**/*.js',
        css: 'src/app/**/*.css',
        html: 'src/**/*.html'
    };

// Populates app/index.html with application js/css references.
// DO NOT ADD THESE MANUALLY!!!!
gulp.task('inject', function () {
    var fileObjs = gulp.src([injectableFiles.js, injectableFiles.css])
        .pipe(fileSort());

    return gulp.src('src/*.html')
        .pipe(inject(fileObjs))
        .pipe(wiredep())
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
});

// Runs live server. Builds and reloads application on watched folder
// changes. Changing the gulp file will require server restart in order
// to take effect.
gulp.task('live', function () {
    browserSync.use(browserSyncSpa({
        selector: '[ng-app]'
    }));

    gulp.watch(injectableFiles.js, function (event) {
        if (event.type === 'changed') {
            gulp.start('inject');
        }
    });

    gulp.watch(injectableFiles.css, function (event) {
        browserSync.reload(event.path)
    });

    gulp.watch(injectableFiles.html, function (event) {
        browserSync.reload(event.path);
    });

    //gulp.watch(injectableFiles.html, 'bower.json', ['inject']);

    browserSync.init({
        server: {
            baseDir: ['build'],
            routes: {
                '/public/components': 'public/components',
                '/src': 'src'
            }
        },
        browser: 'src',
        startPath: '/'
    });
});


// Populates app/index.html with bower / node(npm) dependencies.
// DO NOT ADD THESE MANUALLY!!!!
gulp.task('wiredep', function() {
   var wiredep = require('wiredep').stream;

   return gulp.src('app/*.html')
       .pipe(wiredep(wireDepOptions))
       .pipe(gulp.dest('build'));
});

// Using port 4567, please feel fre to adjust to meet your
// system's available ports.
gulp.task('webserver', serve('build'));

// This will run the default build for the development environment
// and spin up a development server. See 'webserver' task for conifg.
gulp.task('defaultServe', function (cb) {
    runSequence(['inject', 'wiredep', 'webserver'], cb)
});

// This will run the default build and output to either the production
// or development environment. Please see readme.md for conig.
gulp.task('default', function (cb) {
    runSequence(['inject', 'wiredep'], cb);
});