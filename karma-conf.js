'use strict';

module.exports = karmaConfig;

function karmaConfig(configuration) {
    configuration.set({
        browsers: ['Chrome'],
        preprocessors: { 'test/unit/**/*.js': ['webpack'] },
        files: [ 'test/unit/**/*.spec.js' ],
        frameworks: [ 'mocha', 'sinon-chai' ],
        reporters: ['progress']
    });
}