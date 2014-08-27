module.exports = function(grunt){
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      watch: {
        html: {
          files: ['./src/pages/**/*'],
          tasks: ['html']
        },
        js: {
          files: ['<%= jshint.files %>'],
          tasks: ['js']
        },
        less: {
          files: ['./src/styles/**/*.less'],
          tasks: ['style']
        },
        css: {
          files: ['./dist/css/*.css']
        },
        livereload: {
          files: ['./**/*'],
          options: { livereload: true }
        }
      },

      concat: {
        options: {
          // define a string to put between each file in the concatenated output
          separator: ';'
        },
        dist: {
          // the files to concatenate
          src: ['src/**/*.js'],
          // the location of the resulting JS file
          dest: './dist/js/<%= pkg.name %>.js'
        }
      },

      uglify: {
        options: {
          // the banner is inserted at the top of the output
          banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        dist: {
          files: {
            './dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
          }
        }
      },

      jshint: {
        // define the files to lint
        files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        // configure JSHint (documented at http://www.jshint.com/docs/)
        options: {
          // more options here if you want to override JSHint defaults
          globals: {
            jQuery: true,
            console: true,
            module: true
          }
        }
      },

      less: {
        dist: {
          options: {
            paths: ["src/styles"],
            cleancss: true
          },
          files: {
            "dist/css/home.css": "src/styles/home.less"
          }
        }
      },

      assemble: {
        options: {
          layout: './src/pages/layouts/default.hbs',
          partials: './src/pages/partials/**/*.hbs',
          flatten: true
        },
        home: {
          src: './src/pages/home.hbs',
          dest: './dist/index.html'
        }
      },

      htmlmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true,
            removeEmptyAttributes: true,
            removeCommentsFromCDATA: true,
            removeRedundantAttributes: true,
            collapseBooleanAttributes: true
          },
          files: {
            // Destination : Source
            './dist/index.html': './dist/index.html'
          }
        }
      },

      connect: {
        server: {
          options: {
            port: 4000,
            base: './dist/'
          }
        }
      },

      clean: {
        all: ['./dist/*.html']
      },

      'gh-pages': {
        options: {
          base: 'dist',
          branch: 'master',
          repo: 'git@github.com:ingameio/ingameio.github.io.git'
        },
        src: ['**']
      },

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('html', ['assemble']);

  grunt.registerTask('js', ['jshint', 'concat', 'uglify']);

  grunt.registerTask('style', ['less']);

  grunt.registerTask('serve', ['default', 'connect', 'watch']);

  grunt.registerTask('publish', ['default', 'gh-pages']);

  grunt.registerTask('default', ['js', 'style', 'clean', 'html']);

};