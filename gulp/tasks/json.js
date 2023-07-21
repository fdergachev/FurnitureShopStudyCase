export const json = () => {
   return app.gulp.src(app.path.src.json, {})
      .pipe(app.plugins.gulpPlumber())
      .pipe(app.gulp.dest(app.path.build.json))
}