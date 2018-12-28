module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "grunt-license-report": {
      output: {
        path: './ios/TmrApp/Settings.bundle/Acknowledgements',',
        format:'plist',
        font: true
      }
    }
  });

  grunt.loadTasks('./tasks');
  grunt.registerTask('default', ['grunt-license-report']);
};
