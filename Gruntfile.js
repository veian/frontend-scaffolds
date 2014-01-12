'use strict';

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt); // Load grunt tasks automatically
	require('time-grunt')(grunt); // Time how long tasks take. Can help when optimizing build times
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		watch: {
			statics: {
				files: ['css/{,*/}*.css', 'js/{,*/}*.js', 'images/{,*/}*.{gif,jpeg,jpg,png}'],
				tasks: ['copy']
			}
		},
		
		copy: {
			styles: {
				expand: true,
				dot: true,
				cwd: 'css/',
				src: '{,*/}*.css',
				dest: '_web/css/'
			},
			script: {
				expand: true,
				dot: true,
				cwd: 'js/',
				src: '{,*/}*.js',
				dest: '_web/js/'
			},
			lib: {
				expand: true,
				dot: true,
				cwd: 'lib/',
				src: '{,*/}*.min.js',
				dest: '_web/lib/'
			},
			images: {
				expand: true,
				dot: true,
				cwd: 'images/',
				src: '{,*/}*.{gif,jpeg,jpg,png}',
				dest: '_web/images/'
			}
		},
		
		 compress: {
			main: {
				options: {
					archive: '_release/<%= pkg.name %>-<%= grunt.template.today("yyyy-mm-dd-HHMMss") %>-' + 'release.zip'
				},
				files: [{
					expand: true,
					cwd: '_web',
					src: ['**/*']
				}]
			}
		}
		
		// grunt.registerTask('default', []);
	});
};