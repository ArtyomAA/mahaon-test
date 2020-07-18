var gulp = require('gulp'), // Подключаем Gulp
	sass = require('gulp-sass'), //Подключаем Sass пакет
	livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');


gulp.task('sass', function(){ // Создаем таск "sass"
	return gulp.src('app/sass/main.sass') // Берем источник
		.pipe(watch('app/sass/*.sass'))
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
		.pipe(livereload())
});

//gulp.task('default', function() {
//	livereload.listen();
//	gulp.watch('app/css/*.css', ['reload-css'])
//});
