/*
 * grunt-decompress
 *
 * Copyright (c) 2014 Konrad Podgórski http://konradpodgorski.com
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs'),
    tar = require('tar'),
    async = require('async');

module.exports = function (grunt) {

    grunt.registerMultiTask('untar', 'Untaring files.', function () {

        // required to make fs work, by default is running in sync mode
        var done = this.async();

        async.each(this.files, function (filePair, callback) {

            filePair.src.forEach(function (src) {
                grunt.log.write('Untarring ' + src + ' ...');

                var inp = fs.createReadStream(src, {highWaterMark: 1024});

                inp.on('error', callback)
                    .on('end', callback);

                inp.pipe(tar.Extract({path: filePair.dest}));
                grunt.log.ok();
            });
        }, done);
    });
};
