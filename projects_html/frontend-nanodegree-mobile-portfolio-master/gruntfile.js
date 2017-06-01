//var mozjpeg = require('imagemin-mozjpeg');
var grunt = require('grunt');

module.exports = function() {
  grunt.initConfig({
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: '',
            src: ['*/**/*.{png, jpg, gif}'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: 'views/images/',
            ext: '.png'
          }
        ]
      }
      // ,
      // jpg: {
      //   options: {
      //     progressive: true
      //   },
      //   files: [
      //     {
      //       // Set to true to enable the following options…
      //       expand: true,
      //       // cwd is 'current working directory'
      //       cwd: '',
      //       src: ['*/**/*.jpg'],
      //       // Could also match cwd. i.e. project-directory/img/
      //       dest: 'views/images/',
      //       ext: '.jpg'
      //     }
      //   ]
      // }
    }
  });

};

grunt.loadNpmTasks('grunt-contrib-imagemin');
