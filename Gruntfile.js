module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "grunt-license-report": {
      output: {
        path: './report/license',
        format:'plist',
        font: true,
        ios: './ios/TmrApp/Settings.bundle/licenses'
      }
    }
  });

  grunt.loadTasks('./tasks');
  grunt.registerTask('default', ['grunt-license-report']);
};
