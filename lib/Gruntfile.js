module.exports = function(grunt) {
	var dir, file, drag = process.argv[3];
	var imgExt;
	if (drag) {
		drag = drag.substr(2, drag.length);
		dir = drag.substring(0, drag.lastIndexOf("\\"));
		file = drag.substring(drag.lastIndexOf("\\") + 1, drag.length);
		imgExt = drag.match(/jpg|png|gif/);
		imgExt && (imgExt = imgExt[0]);
	}
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		dir: dir,
		file: file,
		imgExt:imgExt,
		//压缩JS
		uglify: {
			uglifyFiles: {
				files: [{
					filter: function(filepath) {
						return filepath.indexOf(".js") > 0;
					},
					expand: true,
					cwd: '../source/src',
					src: ['*.js', '!*min.js'],
					dest: '../source/dist',
					ext: '-min.js'
				}]
			},
			dragFiles: {
				files: [{
					filter: function(filepath) {
						return filepath.indexOf(".js") > 0;
					},
					expand: true,
					cwd: '<%= dir%>',
					src: ['<%= file %>'],
					dest: '<%= dir%>',
					ext: '-min.js'
				}]
			}
		},
		//压缩CSS
		cssmin: {
			uglifyFiles: {
				files: [{
					filter: function(filepath) {
						return filepath.indexOf(".css") > 0;
					},
					expand: true,
					cwd: '../source/src',
					src: ['*.css', '!*min.css'],
					dest: '../source/dist',
					ext: '-min.css'
				}]
			},
			dragFiles: {
				files: [{
					filter: function(filepath) {
						return filepath.indexOf(".css") > 0;
					},
					expand: true,
					cwd: '<%= dir%>',
					src: ['<%= file %>'],
					dest: '<%= dir%>',
					ext: '-min.css'
				}]
			}
		},
		//压缩图片
		imagemin: {
			uglifyFiles: {
				options: {
					optimizationLevel: 3,
				},
				files: [{
					filter: function(filepath) {
						return filepath.indexOf(".png") > 0 || filepath.indexOf(".jpg") > 0 || filepath.indexOf(".gif") > 0;
					},
					expand: true,
					cwd: '../source/src',
					src: ['*.{png,jpg,gif}'],
					dest: '../source/dist'
				}]
			},
			dragFiles: {
				options: {
					optimizationLevel: 3,
				},
				files: [{
					filter: function(filepath) {
						return filepath.indexOf(".png") > 0 || filepath.indexOf(".jpg") > 0 || filepath.indexOf(".gif") > 0;
					},
					expand: true,
					cwd: '<%= dir%>',
					src: ['<%= file %>'],
					dest: '<%= dir%>',
					ext:'-mini.<%= imgExt%>'
				}]
			}
		}
	});
	// 任务加载
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	// 自定义任务
	grunt.registerTask('miniSource', ['uglify:uglifyFiles', 'cssmin:uglifyFiles', 'imagemin:uglifyFiles']);
	grunt.registerTask('dragFiles', ['uglify:dragFiles', 'cssmin:dragFiles', 'imagemin:dragFiles']);
};