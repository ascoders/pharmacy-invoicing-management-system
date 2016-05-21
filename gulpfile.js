var gulp = require('gulp')
var babel = require('gulp-babel')
var nodemon = require('gulp-nodemon')
var gulpPrefixer = require('./scripts/gulp-plugins/gulp-prefixer')

var ignoreSuffix = `
require.extensions['.css'] = function (module, filename){}
require('require-sass')()
require('babel-polyfill')
`

gulp.task('client', function () {
    return gulp.src('./client/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/client'))
})

gulp.task('common', function () {
    return gulp.src('./common/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/common'))
})

gulp.task('common-scss', function () {
    return gulp.src('./common/**/*.scss')
        .pipe(gulp.dest('dist/common'))
})

gulp.task('server', function () {
    return gulp.src(['./server/**/*.js', '!./server/index.js'])
        .pipe(babel())
        .pipe(gulp.dest('dist/server'))
})

gulp.task('server-entry', function () {
    return gulp.src('./server/index.js')
        .pipe(babel())
        .pipe(gulpPrefixer(ignoreSuffix))
        .pipe(gulp.dest('dist/server'))
})

gulp.task('webpack-config', function () {
    return gulp.src('./webpack.config.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
})

gulp.task('nodemon', ['server-entry', 'server'], function (cb) {
    return nodemon({
        script: './dist/server/index.js',
        watch : 'server',
        tasks : ['server-entry', 'server'],
        env   : {'NODE_ENV': 'development'}
    })
})

gulp.task('production', ['server', 'server-entry', 'nodemon'])

gulp.task('default', ['client', 'common', 'common-scss', 'server', 'server-entry', 'webpack-config', 'nodemon'])