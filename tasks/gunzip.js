/*
 * grunt-decompress
 *
 * Copyright (c) 2014 Konrad Podgórski http://konradpodgorski.com
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs'),
    zlib = require('zlib');

module.exports = function (grunt) {


    grunt.registerMultiTask('gunzip', 'Gunzip files.', function () {

        // required to make fs work, by default is running in sync mode
        this.async();

        this.files.forEach(function (filePair) {

            filePair.src.forEach(function (src) {

                grunt.log.writeln('Reading ' + src + ' now');

                var inp = fs.createReadStream(src, {highWaterMark: 1024});
                var out = fs.createWriteStream(filePair.dest);

                inp.pipe(zlib.createGunzip()).pipe(out);

            });
        });
    });
};
