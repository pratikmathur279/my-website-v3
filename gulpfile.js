import gulp from "gulp";
import imagemin from "gulp-imagemin";
import pngquant from "imagemin-pngquant";
import gulpSass from "gulp-sass";
import dartSass from "sass";
const sass = gulpSass(dartSass);

import browserSync from "browser-sync";
import sourcemaps from "gulp-sourcemaps";
import browserify from "browserify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";

var config = {
	sassPath: "./client/src/sass",
	jsPath: "./client/src",
	jsDist: "./client/public/javascript/",
	cssDist: "./client/public/css/",
};

gulp.task("imagemin", () => {
	return gulp
		.src("./client/src/images/*.png")
		.pipe(
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				use: [pngquant()],
			})
		)
		.pipe(gulp.dest("public/images/"));
});

gulp.task("connect", () => {
	browserSync({
		port: 3011,
		proxy: "pratikmathur.test",
	});
});

//import style sheet partials into app.scss.
gulp.task("mainStyles", () => {
	return gulp
		.src(config.sassPath + "/app.scss")
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.cssDist))
		.pipe(browserSync.reload({ stream: true }));
});

//watch sass files for changes
gulp.task("watch:sass", () => {
	gulp.watch(config.sassPath + "/*.scss", gulp.series("mainStyles"));
});

gulp.task("react", () => {
	browserify(config.marketingPath + "/main.js")
		.transform("babelify", { presets: ["es2015", "react"] })
		.bundle()
		.on("error", console.error.bind(console))
		.pipe(source("tmsapp.js"))
		.pipe(buffer())
		.pipe(gulp.dest(config.jsDist));
});

gulp.task("start", gulp.parallel("watch:sass", "connect"));
gulp.task("compileAll", gulp.parallel("mainStyles"));
