module.exports = {
    gulp:       require('gulp'),
    GP :        require('gulp-load-plugins')(),
    bs:         require('browser-sync').create(),
    path: {     /* serverga qattan ishga tushirishi tayyor faylni */
        server :  './app/dist/',
        tasks :   require('./gulp'),
        src : { /* qatan olishi */
            html    : './app/src/*.{html,pug,jade}',
            css     : './app/src/style/*.scss' ,
            js      : './app/src/script/common.js',
            font    : './app/src/fonts/**/*.ttf',
            img     : './app/src/images/**/*.{gif,jpg,jpeg,png,webp,svg}'
        },
        dist : {    /* qatga solishi */
            html    : './app/dist/',
            css     : './app/dist/style/',
            js      : './app/dist/script/',
            font   :  './app/dist/fonts/',
            img     : './app/dist/images/'
        },
        watch : {   /* qatni kuzatish */
            html   : ['./app/src/*.{html,pug,jade}', './app/src/view/**/*.{html,pug,jade}'],
            css     : './app/src/style/**/*.scss',
            js      : './app/src/script/**/*.js',
            font   : './app/src/fonts/**/*.ttf',
            img     : './app/src/images/**/*.*'
        }
    },
    // tasks: {
    //     default: ['js', 'pug', 'css', 'img', 'font', 'watch']
    // }
    get Tasks() {
        const getKey = Object.keys(this.path.watch)
        return getKey
    },
    tasks: {
        get default() {
            return [...$.Tasks, 'server',  'watch']
        }
    },
    get build() {
        return $.Tasks
    }
}
