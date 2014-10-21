module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			/*dist: {
				files: {
					'chembiohub/static/css/main.css' : 'chembiohub/templates/sass/main.scss'
				}
			}*/
		},
		watch: {
			//css: {
			//	files: '**/*.scss',
			//	tasks: ['sass']
			//}
		},
		cssmin: {
		  my_target: {
		   files: [{
		     expand: true,
		     cwd: 'assets/css/',
		     src: ['*.css', '!*.min.css'],
		     dest: 'assets/css/min/',
      	  	ext: '.min.css'
		   }]
		  }
		},
		uglify: {
			my_target: {
		      files: [{
		          expand: true,
		          cwd: 'assets/js/',
		          src: '**/*.js',
		          dest: 'assets/js/min/'
		      }]
		    }
		}
	});
	//grunt.loadNpmTasks('grunt-contrib-sass');
	//grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['cssmin','uglify']);
}