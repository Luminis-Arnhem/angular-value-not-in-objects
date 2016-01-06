var gulp = require('gulp')
var p = require('gulp-load-plugins')();

var src = 'src';
var appVersion = '0.6.0';
var output = 'dist';
var typesSrc = 'typings';
var tsScriptFiles = [typesSrc + '/**/*.ts', src + '/**/*.ts'];
var versionFiles = ['./bower.json', './package.json', './tsd.json'];

var tsProject = p.typescript.createProject({
    declarationFiles: false,
    noExternalResolve: true,
    module: "system",
    target: "ES5",
    sortOutput: true
});

var copy = function (source) {
    return gulp.src(source)
        .pipe(gulp.dest(output));
};

var compileTS = function () {
    var tsResult = gulp.src(tsScriptFiles)
        .pipe(p.typescript(tsProject))
        .pipe(p.ngAnnotate())
        .pipe(p.concat('angular-value-not-in-objects.js'))
        .pipe(gulp.dest(output));
}
gulp.task('compileTS', function () {
    return compileTS();
});
gulp.task('clean', function () {
    return gulp.src([output], { read: false })
		.pipe(p.clean());
});
gulp.task('setVersion', function () {
    gulp.src(versionFiles)
        .pipe(p.bump({ version: appVersion }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['clean', 'setVersion'], function () {
    return gulp.start('compileTS');
});