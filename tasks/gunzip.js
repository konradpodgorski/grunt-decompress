/*
 * grunt-decompress
 *
 * Copyright (c) 2014 Konrad Podgórski http://konradpodgorski.com
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs'),
    zlib = require('zlib'),
    async = require('async');

module.exports = function (grunt) {

    grunt.registerMultiTask('gunzip', 'Gunzip files.', function () {

        // required to make fs work, by default is running in sync mode
        var done = this.async();

        async.eachSeries(this.files, function(filePair, callback) {
            filePair.src.forEach(function (src) {

                grunt.log.write('Decompressing ' + src + ' ...');

                var inp = fs.createReadStream(src, {highWaterMark: 1024});
                var out = fs.createWriteStream(filePair.dest);

                inp.on('error', callback)
                    .on('end', callback);

                inp.pipe(zlib.createGunzip()).pipe(out);
                grunt.log.ok();
            });
        }, done);
    });
};
