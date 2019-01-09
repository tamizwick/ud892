const gulp = require("gulp");

gulp.task("default", function() {
  // code for your default task goes here
    gulp.watch("sass/**/*.scss", ["styles"]);
});

const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("styles", function() {
    gulp
        .src("sass/**/*.scss")
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(
            autoprefixer({
                browsers: ["last 2 versions"]
            })
        )
        .pipe(gulp.dest("./css"));
});