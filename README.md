# grunt-license-report
[![NPM version](https://badge.fury.io/js/grunt-license-report.svg)](http://badge.fury.io/js/grunt-license-report)
[![dependencies](https://david-dm.org/fkscorpion/grunt-license-report.svg)](https://david-dm.org/fkscorpion/grunt-license-report)
[![devDependency Status](https://david-dm.org/fkscorpion/grunt-license-report/dev-status.svg?theme=shields.io)](https://david-dm.org/fkscorpion/grunt-license-report#info=devDependencies)

Discovers all licenses used in one package and generates a small HTML report.

This module uses the license-checker from davglass, to search for licenses.

## Usage

    npm install grunt-license-report --save-dev

## Configuration

### Load task

    grunt.loadNpmTasks('grunt-license-report');

### Set task options

- `target` (mandatory): relative path to the location, where the report file will be stored.

        // Plugin configuration(s).
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            "license-report": {
                target: './report/licenses.html'
            }
        });
