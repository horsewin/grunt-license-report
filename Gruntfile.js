module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "grunt-License-Report": {
      output: {
        path: './report/licenses',
        format:'.html'
      }
    }
  });

  grunt.loadTasks('./tasks');
  grunt.registerTask('default', ['grunt-license-report']);

};

