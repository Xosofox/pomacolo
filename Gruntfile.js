module.exports = function (grunt) {

    // Project configuration.

    grunt.initConfig({
        uglify: {
            min: {
                files: {
                    "pomacolo.min.js": ['pomacolo.js']
                },
                options: {
                    sourceMap: true,
                    banner: '/*! pomacolo <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};
