/*
 * grunt-decompress
 *
 * Copyright (c) 2014 Konrad Podgórski http://konradpodgorski.com
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        gunzip: {
            test: {
                files: [
                    {
                        src: 'test/fixtures/cupcakeipsum.txt.gz',
                        dest: 'cupcakeipsum.txt'
                    }
                ]
            }
        }
    });

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['gunzip']);
};
