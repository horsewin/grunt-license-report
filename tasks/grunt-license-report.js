/*=======================================
 * Created by Atsushi Umakatsu on 27.12.2018.
 /=======================================*/

/*jslint node: true */
'use strict';

var grunt = require('grunt');
var checker = require('license-checker');
var output = require('./lib/output');

module.exports = function (grunt) {
    grunt.registerTask('grunt-license-report', [], function createLicenseReport() {

        // Tell grunt, that we want to do asynchronous tasks
        var done = this.async();

        // Start the license-checker, which gives back a .json file, with all found licenses
        checker.init({
            start: './',
            customPath: "./customFormat.json"
        }, function processLicenseJson(err, json) {

            let fileOutputPath = './report/licenses.plist';
            const fileOutputData = output.createHTML(json, grunt);

            if (grunt.config.data['grunt-license-report'].output.path &&
            grunt.config.data['grunt-license-report'].output.format) {
                fileOutputPath = grunt.config.data['grunt-license-report'].output.path + '.' + grunt.config.data['grunt-license-report'].output.format;
            }

            grunt.file.write(fileOutputPath, fileOutputData);
            grunt.log.writeln('File ' + fileOutputPath + ' created.');

            // Tell grunt, that we are done with our asynchronous tasks
            done();
        });

    });
};
