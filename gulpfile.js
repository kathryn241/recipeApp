var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({ lazy: true });
var del = require('del');
var ngHtml2Js = require("gulp-ng-html2js");
var Server = require('karma').Server;
var gls = require('gulp-live-server');

var paths = {
    javascript: ['src/**/**.js', 'src/*.js'],
    styles: ['./src/*.scss', '!./bower_components/**'],
    index: 'src/index.html',
    partials: ['./src/**/**/**.html', '!app/index.html'],
    prodFolder: './dist/*'
};

/**
 * List the available gulp tasks
 */
gulp.task('help', plugins.taskListing);
gulp.task('default', ['help']);


/**
 * Delete contents of dist folder
 */
gulp.task('clean', function() {
    gulp.src(paths.prodFolder)
        .pipe(plugins.clean({force: true}));
});

/**
 * Use SASS to transform SCSS to CSS
 */
gulp.task('sass', function() {
    return gulp.src(paths.styles)
        .pipe(plugins.sass())   
        .pipe(plugins.minifyCss())
        .pipe(plugins.rename({extname: '.min.css'}))
        .pipe(gulp.dest('./dist/'))
});

/**
 * Take html partials and put them in a templatecache js file
 */
gulp.task('html-templates', function () {
gulp.src(paths.partials)
    .pipe(plugins.minifyHtml({
        empty: true,
        spare: true,
        quotes: true
    }))
    .pipe(ngHtml2Js({
        moduleName: "recipeApp.templates"
    }))
    .pipe(plugins.concat("partials.min.js"))
    .pipe(plugins.uglify())
    .pipe(gulp.dest("./dist/shared/assets/"));
});
/**
 * Bring all js together into 1 file
 */
gulp.task('js', function () {
    gulp.src(paths.javascript)
        .pipe(plugins.concat('app.js'))
        .pipe(plugins.ngAnnotate())
        .pipe(plugins.uglify())
        .pipe(plugins.rename({extname: '.min.js'}))
        .pipe(gulp.dest('./dist'))
});

/**
 * Build - move from src to dist
 */
gulp.task('build', ['js', 'html-templates', 'sass'], function () {
    gulp.src(['src/index.html', '*bower_components/**', 'src/bootstrap.min.css'])
        .pipe(gulp.dest('./dist'))
});

/**
 * Run Unit Tests
 */
gulp.task('test', ['build'], function (done) {
    new Server({
        configFile:  __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

/**
 * Run Integration Tests
 */
gulp.task('integration-tests', ['run'], function() {
    var protractor = 'protractor protractor.conf.js';
    return gulp.src('')
        .pipe(plugins.shell([protractor]))
        .pipe(gulp.dest('err'))
});

/**
 * Run on local server - app will be accessible here: http://localhost:8888
 */
gulp.task('run', ['build'], function() {
    var server = gls.static(['dist', 'bower_components'], 8888);
    server.start();
});