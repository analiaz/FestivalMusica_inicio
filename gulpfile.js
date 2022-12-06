const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
function css(done) {
    src('src/scss/app.scss') //identificar el archivo de SASS
        .pipe(sass())     //compilarlo
        .pipe(dest('build/css')); //almacenar en el disco duro

    done(); // Callback que avisa a gulp cuando llegamos al final
}

function dev(done) {
    watch("src/scss/app.scss", css)
    done();
}

exports.css = css;
exports.dev = dev;