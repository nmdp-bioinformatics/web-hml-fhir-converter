var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    del = require('del'),
    es = require('event-stream'),
    bowerFiles = require('main-bower-files'),
    print = require('gulp-print'),
    server = require('gulp-develop-server'),
    bs = require('browser-sync'),
    q = require('q'),
    paths = {
        scripts: 'app/**/*.js',
        index: './app/index.html',
        views: [ '/app/**/*.html', '!app.index.html' ],
        distDev: './dist.dev',
        distProd: './dist.prod',
        distScriptsProd: './dist.prod/scripts',
        scriptsDevServer: 'devServer/**/*.js'
    },
    pipes = { };

pipes.orderedVendorScripts = function () {
    return plugins.order(['jquery.js', 'angular.js']);
};

pipes.orderedAppScripts = function () {
    return plugins.angularFilesort();
};

pipes.minifiedFileName = function () {
    return pulgins.rename(function (path) {
       path.extname = '.min' + path.extname;
    });
};

pipes.validatedAppScripts = function () {
    return gulp.src(paths.scripts)
       .pipe(plugins.jshint())
       .pipe(plugins.jshint.reporter('jshint-stylish'));
};

pipes.builtAppScriptsDev = function () {
    return pipes.validatedAppScripts()
       .pipe(gulp.dest(paths.distDev));
};

pipes.builtAppScriptsProd = function () {
    var scriptedViews = pipes.scriptedPartials(),
        validatedAppScripts = pipes.validatedAppScripts();

    return es.merge(scriptedViews, validatedAppScripts)
        .pipe(pipes.orderedAppScripts())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('app.min.js'))
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(paths.distScriptsProd));
};

pipes.builtVendorScriptsDev = function () {
    return gulp.src(bowerFiles())
        .pipe(gulp.dest('dist.dev/bower_components'));
};

pipes.builtVendorScriptsProd = function () {
    return gulp.src(bowerFiles())
        .pipe(pipes.orderVendorScripts())
        .pipe(plugins.concat('vendor.min.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(paths.distScriptsProd));
};

pipes.validatedDevServerScripts = function () {
    return gulp.src(paths.scriptsDevServer)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'));
};

pipes.validatedPartials = function () {
    return gulp.src(paths.views)
        .pipe(plugins.htmlhint({ 'doctype-first': false }))
        .pipe(plugins.htmlhint.reporter());
};

pipes.builtPartialsDev = function () {
    return pipes.validatedPartials()
        .pipe(gulp.dest(paths.distDev));
};

pipes.scriptedPartials = function () {
    return pipes.validatedPartials()
        .pipe(plugins.htmlhint.failReporter())
        .pipe(plugins.htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(plugins.ngHtml2js({ moduleName: "HmlFhirAngularClient"}));
};

pipes.validatedIndex = function () {
    return gulp.src(paths.index)
        .pipe(plugins.htmlhint())
        .pipe(plugins.htmlhint.reporter());
};

pipes.builtIndexDev = function () {
    var orderedVendorScripts = pipes.builtVendorScriptsDev()
                .pipe(pipes.orderedVendorScripts()),
        orderedAppScripts = pipes.builtAppScriptsDev()
                .pipe(pipes.orderedAppScripts());

    return pipes.validatedIndex()
        .pipe(gulp.dest(paths.distDev))
        .pipe(plugins.inject(orderedVendorScripts, { relative: true, name: 'bower' }))
        .pipe(plugins.inject(orderedAppScripts, { relative: true }))
        .pipe(gulp.dest(paths.distDev));
};

pipes.builtIndexProd = function () {
    var vendorScripts = pipes.builtVendorScriptsProd(),
        appScripts = pipes.builtAppScriptsProd(),
        appStyles = pipes.builtStylesProd();

    return pipes.validatedIndex()
        .pipe(gulp.dest(paths.distProd))
        .pipe(plugins.inject(vendorScripts, { relative: true, name: 'bower' }))
        .pipe(plugins.inject(appScripts, { relative: true }))
        .pipe(plugins.inject(appStyles, { relative: true }))
        .pipe(plugins.htmlmin( { collapseWhitespace: true, removeComments: true }))
        .pipe(gulp.dest(paths.distProd));
};

pipes.builtAppDev = function () {
    return es.merge(pipes.builtIndexDev(), pipes.builtPartialsDev());
};

pipes.builtAppProd = function () {
    return pipes.builtIndexProd();
};

gulp.task('clean-dev', function () {
    var deferred = q.defer();

    del(paths.distDev, function () {
        deferred.resolve();
    });

    return deferred.promise;
});

gulp.task('clean-prod', function () {
   var deferred = q.defer();

   del(paths.distProd, function () {
       deferred.resolve();
   });

   return deferred.promise;
});

gulp.task('validate-partials', pipes.validatedPartials);

gulp.task('validate-index', pipes.validatedIndex);

gulp.task('build-partials-dev', pipes.builtPartialsDev);

gulp.task('convert-partials-to-js', pipes.scriptedPartials);

gulp.task('validate-devserver-scripts', pipes.validatedAppScripts);

gulp.task('validate-app-scripts', pipes.validatedAppScripts);

gulp.task('build-app-scripts-dev', pipes.builtAppScriptsDev);

gulp.task('build-app-scripts-prod', pipes.builtAppScriptsProd);

gulp.task('build-vendor-scripts-dev', pipes.builtVendorScriptsDev);

gulp.task('build-vendor-scripts-prod', pipes.builtVendorScriptsProd);

gulp.task('build-index-dev', pipes.builtIndexDev);

gulp.task('build-index-prod', pipes.builtIndexProd);

gulp.task('build-app-dev', pipes.builtAppDev);

gulp.task('build-app-prod', pipes.builtAppProd);

gulp.task('clean-build-app-dev', ['clean-dev'], pipes.builtAppDev);

gulp.task('clean-build-app-prod', ['clean-prod'], pipes.builtAppProd);

gulp.task('default', ['clean-build-app-prod']);

gulp.task('sass', ['clean'], function() {
    return gulp.src(appDir + 'scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(webappDir + 'css/'));
});

gulp.task('watch-dev', ['clean-build-app-dev'], function () {
    plugins.nodemon({ script: 'server.js', ext: 'js', watch: ['devServer/'], env: { NODE_ENV: 'development' }})
        .on('change', ['validate-devserver-scripts'])
        .on('restart', function () {
            console.log('[nodemon] restarted dev server');
        });

    plugins.livereload.listen({ start: true });

    gulp.watch(paths.index, function () {
        return pipes.builtIndexDev()
            .pipe(plugins.livereload());
    });

    gulp.watch(paths.scripts, function () {
        return pipes.builtAppScriptsDev()
            .pipe(plugins.livereload());
    });

    gulp.watch(paths.views, function () {
        return pipes.builtPartialsDev()
            .pipe(plugins.livereload());
    });

    gulp.watch(paths.styles, function () {
        return pipes.builtStylesDev()
            .pipe(plugins.livereload());
    });
});

gulp.task('watch-prod', ['clean-build-app-prod', 'validate-devserver-scripts'], function () {
    plugins.nodemon({ scripts: 'server.js', ext: 'js', watch: ['devServer/'], env: { NODE_ENV: 'production' }})
        .on('change', ['validate-devserver-scripts'])
        .on('restart', function () {
            console.log('[nodemon] restarted dev server');
        });

    plugins.livereload.listen({ start: true });

    gulp.watch(paths.index, function () {
        return pipes.builtIndexProd()
            .pipe(plugins.livereload());
    });

    gulp.watch(paths.scripts, function () {
        return pipes.builtAppScriptsProd()
            .pipe(plugins.livereload());
    });

    gulp.watch(paths.views, function () {
        return pipes.builtAppScriptsProd()
            .pipe(plugins.livereload());
    });

    gulp.watch(paths.styles, function () {
        return pipes.builtStylesProd()
            .pipe(plugins.livereload());
    });
});

gulp.task('server:start', function () {
    var options = {
        server: {
            path: 'dist.dev/app.js'
        },
        bs: {
            proxy: 'http://localhost:3000'
        }
    };

    server.listen(options.server, function (error) {
        if (!error) {
            bs(options.bs);
        }
    });
});

gulp.task('server:restart', function () {
    gulp.watch(['./app.js'], server.restart);
});

gulp.task('default', ['clean-build-app-dev']);