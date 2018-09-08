var  gulp = require("gulp"),
    tsc = require('gulp-typescript'),
    typescript  = require('typescript')


var tsProject = tsc.createProject({
    removeComments:false,
    noImplicitAny:false,
    target:'es5',
    declarationFiles:false,
    emitDecoratorMetadata:true,
    typescript:typescript
});


gulp.task('build-source',function () {
    return gulp.src(__dirname + '/file.ts')
        .pipe(tsc(tsProject))
        .js.pipe(gulp.dest(__dirname+'/'));
})