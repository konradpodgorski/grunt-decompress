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
                        src: 'test/fixtures/ipsum-bundle.tar.gz',
                        dest: 'tmp/ipsum-bundle.tar'
                    }
                ]
            }
        },
        untar: {
            test: {
                files: [
                    {
                        src: 'tmp/ipsum-bundle.tar',
                        dest: 'tmp/ipsum-bundle'
                    }
                ]
            }
        },
        clean: {
            tmp: ['tmp']
        }
    });

    grunt.file.mkdir('tmp');

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('test', ['gunzip:test', 'untar:test']);
    grunt.registerTask('cleanup', ['clean:tmp']); // name of task can't be the same as name of loaded npm task

    grunt.registerTask('default', ['test', 'cleanup']);



};
