const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
function css() {
  return src("./src/css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./dist/assets/"));
}
exports.css = css;

const concat = require("gulp-concat");
function js() {
  return src("./src/js/*.js")
    .pipe(concat("script.js"))
    .pipe(dest("./dist/assets/"));
}
exports.js = js;

const pug = require("gulp-pug");
function html() {
  return src("./src/pug/views/*.pug")
    .pipe(pug({pretty: true,}))
    .pipe(dest("./dist"));
}
exports.html = html;

exports.watch = function () {
  watch("./src/css/*.scss", css);
  watch("./src/pug/**/*.pug", html);
  watch("./src/js/*.js", js);
};

