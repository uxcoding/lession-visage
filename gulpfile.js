// https://css-tricks.com/gulp-for-beginners/

// Import and initialize all modules

const {gulp, src, dest, series, parallel, watch} = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const replace = require("gulp-replace");
const typescript = require("gulp-typescript");

// Initialize the path

const filesPath = {
    scss: "work-dev/scss/**/**/*.scss",
    ts: "work-dev/js/**/**/*.ts",
    js: "work-dev/js/**/**/*.js"
}

// Initialize the function

function scssTask(){
    return src(filesPath.scss)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass())
    .pipe(postcss([cssnano(), autoprefixer()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("work-pro/css"));
}

function jsTask(){
    return src([filesPath.js])
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(concat("myscript.js"))
    .pipe(sourcemaps.write("."))
    .pipe(dest("work-pro/js"));
}

// function tsTask(){
//     return src([filesPath.ts])
//     .pipe(sourcemaps.init({loadMaps: true}))
//     .pipe(typescript())
//     .pipe(uglify())
//     .pipe(concat("myscript.js"))
//     .pipe(sourcemaps.write("."))
//     .pipe(dest("work-pro/js"));
// }

function cbTask(){
    const cbString = new Date().getTime();
    return src(["work-html/index.html"])
    .pipe(replace(/cb=\d+/g, "cb=" + cbString))
    .pipe(dest("work-html"));
}

function watchTask(){
    watch([filesPath.scss, filesPath.js],
            series(
                parallel(scssTask, jsTask),
                cbTask
            )
        );
}

exports.default = series(
    parallel(scssTask, jsTask),
            cbTask,
            watchTask
);

// End all task.


