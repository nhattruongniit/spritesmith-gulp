var gulp = new require('gulp');
var spritesmith = new require('gulp.spritesmith');
var spritesmithTexturepacker = new require('spritesmith-texturepacker');
var gulpif = new require("gulp-if");

var cardPath = './images/flip-card';
var stages = [
    'bg',
    'cards',
];

gulp.task('sprite', function() {
    stages.forEach(function(stage) {
        return gulp.src(cardPath + '/' + stage + '/*.png')
            .pipe(spritesmith({
                imgName: '/' + stage + '.png',
                cssName: '/' + stage + '.json',
                algorithm: 'binary-tree',
                cssTemplate: spritesmithTexturepacker
            }))
            .pipe(gulp.dest('./dist/' + cardPath + '/' + stage))
    })
});

gulp.task('spritesmith', function () {
   return  gulp.src('./images/flip-card/avatar/*.png')
        .pipe(spritesmith({
            imgName: 'sprites.png',
            padding: 2,
            cssName: 'spritesheet.scss',
            imgPath: '/dist/images/avatar/sprites.png',
            algorithm: 'binary-tree',
            cssTemplate: 'node_modules/gulp.spritesmith/docs/handlebarsInheritance.scss.handlebars'
        }))
        .pipe(gulpif('*.png', gulp.dest('./dist/images/avatar/')))
        .pipe(gulpif('*.scss', gulp.dest('./dist/sass/')))
});