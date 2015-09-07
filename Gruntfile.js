// JavaScript Document
module.exports = function(grunt){
	'use strict';
    grunt.initConfig({
		clean:{
			all:['dist/**/*']
			},
		less: {
            options: {                                       //配置
            },
            basic: {expand: true, cwd: 'less', src: ['*.less'], dest: 'dist/css',ext:'.css'}
        },
		sass: {
            options: {                                       //配置
            },
            basic: {expand: true, cwd: 'sass', src: ['*.scss'], dest: 'dist/css',ext:'.css'}
        }
    });
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['clean','less','sass']);
}