var path = require('path');
var pkg = require('../package.json');
var parseArgs = require('minimist');

var knownOptions = {
  string: 'env',
  default: {env: process.env.NODE_ENV || 'development'}
};

var options = parseArgs(process.argv.slice(2), knownOptions);
module.exports = {
  options: options,
  env: options.env,
  //Files needed to build the demo
  demo: {
    pages: [
      'demo/tpls/demo.html',
      'demo/tpls/index.html',
      'demo/tpls/mobile.html'
    ],
    styles: [
      'bower_components/video.js/dist/video-js/video-js.css',
      'demo/styles/*.css'
    ],

    assets: [
      'demo/assets/*'
    ],

    fonts: [
      'bower_components/video.js/dist/video-js/font/*'
    ],

    scripts: [
      'bower_components/swfobject/swfobject/src/swfobject.js',
      'node_modules/es5-shim/es5-shim.js', //Required for the player to work on old browsers
      'bower_components/video.js/dist/video-js/video.dev.js'
    ]
  },

  //Vendor files
  vendor: {
    scripts: [
      'bower_components/VPAIDFLASHClient/bin/VPAIDFLASHClient.js',
      'bower_components/VPAIDHTML5Client/bin/VPAIDHTML5Client.js',
      //We are adding the ads plugin manually until this PR gets resolved https://github.com/videojs/videojs-contrib-ads/pull/92
      'libs/videojs-contrib-ads/videojs.ads.global.MODIFIED.js'
    ],
    sourcemaps: [
      'bower_components/VPAIDFLASHClient/bin/VPAIDFLASHClient.js.map'
    ],
    styles: [
      //Empty for the moment
    ],
    assets: [
      'bower_components/VPAIDFLASHClient/bin/VPAIDFlash.swf'
    ],
    fonts: [
      //Empty for the moment
    ]
  },

  plugin: {
    scripts: [
      'src/utils/pollyfill.js',
      'src/utils/utilityFunctions.js',
      'src/utils/**/*.js',
      'src/**/*.js'
    ],
    styles: [
      'src/**/*.css'
    ],
    tests: {
      unit: [
        'test/test-utils.css',
        'test/test-utils.js',
        'test/**/*.js'
      ]
    }
  },

  //App files for production
  prodfile: {
    scripts: pkg.name + '.js',
    styles: pkg.name + '.css'
  },

  //Dist folder
  DIST: path.normalize('__dirname/../bin'),
  DEV: path.normalize('__dirname/../dev')
};