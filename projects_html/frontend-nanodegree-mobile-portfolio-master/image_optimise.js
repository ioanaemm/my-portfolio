var imagemin = require('lossy-imagemin');
var opt = {
  base: 'res',          // destPath retain src dir info
  jpgQuality: '70',     // max 100, default: 70
  cache: false          // use gulp cache [true]
};

var src = 'img_src/*';
var dest = 'views/images';

imagemin(src, dest, opt, function(err) {
  if (err) {
    console.error(err);
  }
});
