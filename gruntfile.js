module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    ['assets/src/js/*.js', 'assets/src/js/custom.js'],
                ],
                dest: 'assets/build/js/production.js',
            }
        },
        uglify: {
            build: {
                src: 'assets/build/js/production.js',
                dest: 'assets/build/js/production.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/src/img/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'assets/build/img/'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'assets/build/style/global.css': 'assets/src/style/global.scss'
                }
            } 
        },
        watch: {
            scripts: {
                files: ['assets/src/js/**/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['assets/src/style/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
            images: {
                files: ['assets/src/img/**/*.{png,jpg,gif,svg}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                }
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['assets/build/**/*', 'assets/src/style/*.scss', 'content/**/*'],
            }
        },

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass']);

};