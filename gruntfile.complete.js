 module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		imagemin: { 
			dynamic:{
				files: [{
					expand: true,
					cwd: 'img-sources/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'img/'
				}]
			}
		},
		watch:{
			scripts:{
				files: 'img-sources/*.{png,jpg,gif}',
				tasks: ['imagemin']
			},
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};
	