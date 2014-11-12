var util = require('util');

/**
 * parseLicense() takes the license string from the package.json,
 * which the "license-checker" package delivers and returns a string.
 *
 *
 *
 * @param <string>licenseString - The string, that should be parsed. (Can also be an array)
 *
 * @param <string>packageName - Name of the package, from which we read the license.
 *
 * @param <object>grunt - The grunt context for log output.
 *
 * @return <string> - Can return 3 possible options:
 *
 * 1) A link to the wikipedia article of the license.
 *
 * 2) "UNKNOWN" for unknown or undefined licenses.
 *
 * 3) The whole String if none of the above is given.
 *
 */
function parseLicense (licenseString, packageName, grunt) {

    //If there is more than one license
    if(util.isArray(licenseString)) {
        var result = '';

        licenseString.forEach(function(license) {
            if (result) result += '<br/>';
            result += parseLicense(license, packageName, grunt);
        });

        return result;
    }

    if( licenseString === null || licenseString === undefined || licenseString.toLowerCase() === 'unknown' || licenseString.toLowerCase() === 'undefined') {
        grunt.log.warn('UNKNOWN LICENSE for ' + packageName);
        return 'UNKNOWN';
    }
    else {
        var parts = licenseString.match(/^([A-Za-z]+).*/);

        if (parts) {
            return '<a href="http://en.wikipedia.org/wiki/' + parts[1] + '_license" target="_blank">' + licenseString + '</a>';
        }
        else if(parts === null) {
            return licenseString;
        }

        return "Error";
    }
}

module.exports = parseLicense;
