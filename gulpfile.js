var gulp = new require('gulp');
var spritesmith = new require('gulp.spritesmith');
var spritesmithTexturepacker = new require('spritesmith-texturepacker')

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