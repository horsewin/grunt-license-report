/*=======================================
 * Created by Atsushi Umakatsu on 27.12.2018.
 /=======================================*/

/*jslint node: true */
'use strict';

const grunt = require('grunt');
const checker = require('license-checker');
const output = require('./lib/output');

module.exports = function (grunt) {
    grunt.registerTask('grunt-license-report', [], function createLicenseReport() {

        // Tell grunt, that we want to do asynchronous tasks
        let done = this.async();

        // Start the license-checker, which gives back a .json file, with all found licenses
        checker.init({
            start: './',
            customPath: "./customFormat.json"
        }, function processLicenseJson(err, json) {

            let fileOutputPath = null;
            const fileOutputData = output.createHTML(json, grunt);

            if (grunt.config.data['grunt-license-report'].output.ios &&
            grunt.config.data['grunt-license-report'].output.format) {
                fileOutputPath = grunt.config.data['grunt-license-report'].output.ios + '.' + grunt.config.data['grunt-license-report'].output.format;
            } else if (grunt.config.data['grunt-license-report'].output.path &&
            grunt.config.data['grunt-license-report'].output.format) {
                fileOutputPath = grunt.config.data['grunt-license-report'].output.path + '.' + grunt.config.data['grunt-license-report'].output.format;
            } else {
              fileOutputPath = './report/licenses.plist';
            }

            grunt.file.write(fileOutputPath, fileOutputData);
            grunt.log.writeln('File ' + fileOutputPath + ' created.');

            // Tell grunt, that we are done with our asynchronous tasks
            done();
        });

    });
};
