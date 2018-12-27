module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "grunt-license-report": {
      output: {
        path: './report/licenses',
        format:'plist',
        font: true
      }
    }
  });

  grunt.loadTasks('./tasks');
  grunt.registerTask('default', ['grunt-license-report']);
};
