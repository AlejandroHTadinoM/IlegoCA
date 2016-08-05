var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass'),
    jade        = require('gulp-jade');


// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'jade'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("assets/css/**/*.scss", ['sass']);
    gulp.watch("jadefiles/**/*.jade", ['jade']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./assets/css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./assets/css"))
        .pipe(browserSync.stream());
});

// Compile jade templates to HTML
gulp.task('jade', function () {
  return gulp.src('./jadefiles/**/*.jade')
    .pipe(jade({
      pretty: false
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('default', ['serve']);
