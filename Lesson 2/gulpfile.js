const gulp = require("gulp");

gulp.task("default", ["copy-html", "copy-images", "styles"], function() {
  // code for your default task goes here
    gulp.watch("sass/**/*.scss", ["styles"]);
    gulp.watch("./index.html", ['copy-html']);
    gulp.watch("img/*"), ['copy-images'];
});

const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");

gulp.task("scripts", function() {
    gulp.src("js/**/*.js")
        .pipe(concat("all.js"))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("scripts-dist", function() {
    gulp.src("js/**/*.js")
        .pipe(concat("all.js"))
        .pipe(gulp.dest("dist/js"));
    
});

gulp.task('copy-html', function() {
    gulp.src("./index.html")
        .pipe(gulp.dest("./dist"));
});

gulp.task("copy-images", function() {
    gulp.src("img/*")
        .pipe(gulp.dest("dist/img"));
});

gulp.task("styles", function() {
    gulp
        .src("sass/**/*.scss")
        .pipe(sass({outputStyle: "compressed"}))
        .on("error", sass.logError)
        .pipe(
            autoprefixer({
                browsers: ["last 2 versions"]
            })
        )
        .pipe(gulp.dest("dist/css"));
});