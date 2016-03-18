var gulp    		= require('gulp');

gulp.task('html', function(){
  gulp.src('app/index.html')
  	.pipe(gulp.dest('./dist'));
});

gulp.task('images', function(){
  gulp.src('app/assets/images/*')
  	.pipe(gulp.dest('./dist/images'));
});

gulp.task('watch', function(){
  gulp.watch('app/*.html', ['html']);
});

gulp.task('default', ['html', 'images']);
