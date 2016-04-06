﻿var gulp = require('gulp');
var args = require('yargs').argv;
var p = require('gulp-load-plugins')();
var fs = require('graceful-fs');

var config = require('./gulp.config')();

var tsProject = p.typescript.createProject({
    declaration: true,
    noExternalResolve: true,
    module: "system",
    target: "ES5",
    sortOutput: true
});

var copy = function (source) {
    return gulp.src(source)
        .pipe(gulp.dest(config.output));
};

var compileTS = function () {

    var tsFilter = p.filter('src/**/*.ts', { restore: true })

    var tsResult = gulp.src(config.tsScriptFiles)
        .pipe(p.replace(new RegExp('/// <reference path=".*" />', "g"), '//Type definition file removed'))
        .pipe(tsFilter)
        .pipe(p.license('MIT', { tiny: false, organization: 'Luminis' }))
        .pipe(gulp.dest('./dist/ts/'))
        .pipe(tsFilter.restore)
        .pipe(p.typescript(tsProject));
    tsResult.dts
        .pipe(gulp.dest(config.outputTypings));
    tsResult.js
        .pipe(p.ngAnnotate())
        .pipe(p.concat('angular-value-not-in-objects.js'))
        .pipe(gulp.dest(config.outputJs))
        .pipe(p.uglify({
            preserveComments: 'license'
        }))
        .pipe(p.rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest('./dist/js/'));
    gulp.start('bump');
}

gulp.task('compileTS', function () {
    return compileTS();
});

gulp.task('clean', function () {
    return gulp.src([config.output], { read: false })
		.pipe(p.clean());
});

/**
 * Bump the version
 * --type=pre will bump the prerelease version *.*.*-x
 * --type=patch or no flag will bump the patch version *.*.x
 * --type=minor will bump the minor version *.x.*
 * --type=major will bump the major version x.*.*
 * --appVersion=1.2.3 will bump to a specific version and ignore other flags
 */
gulp.task('bump', ['compileTS'], function () {
    var msg = 'Bumping versions';
    var type = args.type;
    var version = args.appVersion;
    var options = {};
    if (version || type) {
        if (version) {
            options.version = version;
            msg += ' to ' + version;
        } else {
            options.type = type;
            msg += ' for a ' + type;
        }
        p.util.log(p.util.colors.blue(msg));
        gulp
            .src(config.versionFiles)
            .pipe(p.bump(options))
            .pipe(gulp.dest('./'))
            .pipe(p.git.commit('bumps package version'))
            .pipe(p.filter('package.json'))
            // **tag it in the repository**
            .pipe(p.tagVersion());
    }
});

gulp.task('clean-example', function () {
    gulp.src('example/**/*.js')
        .pipe(p.clean());
});

gulp.task('compile-example', ['clean-example'], function () {
    var tsResult = gulp.src(['example/**/*.ts', 'typings/**/*.d.ts'])
        .pipe(p.typescript(tsProject));
        tsResult.js
        .pipe(p.ngAnnotate())
        .pipe(gulp.dest('example'));
});

gulp.task('default', ['clean'], function () {
    return gulp.start('compileTS');
});