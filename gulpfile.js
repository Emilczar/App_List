var gulp = require('gulp');
var ngHtml = require('gulp-ng-html2js');


gulp.task('html',()=>{
    gulp.src('views/*.html')
    .pipe(ngHtml(
        {
            moduleName: "myApp",
            prefix: "/"
        }
    ))
    .pipe(gulp.dest("./dist/"));
})


